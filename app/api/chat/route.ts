import { readFile } from "node:fs/promises";
import path from "node:path";
import { checkRateLimit } from "@/lib/rate-limit";
import { retrieve } from "@/lib/rag";
import type { ChatMessage } from "@/lib/types";

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = "llama-3.3-70b-versatile";
const MAX_MESSAGES = 30;
const MAX_MESSAGE_CHARS = 2000;

let cachedRules: string | null = null;

async function getRules(): Promise<string> {
  if (cachedRules === null) {
    cachedRules = await readFile(path.join(process.cwd(), "knowledge", "rules.md"), "utf8");
  }
  return cachedRules;
}

function isChatMessage(value: unknown): value is ChatMessage {
  if (typeof value !== "object" || value === null) return false;
  const msg = value as Record<string, unknown>;
  return (
    (msg.role === "user" || msg.role === "assistant") &&
    typeof msg.content === "string" &&
    msg.content.length > 0 &&
    msg.content.length <= MAX_MESSAGE_CHARS
  );
}

async function buildSystemPrompt(query: string): Promise<string> {
  const [rules, chunks] = await Promise.all([getRules(), retrieve(query, 4)]);

  const context = chunks
    .map((chunk) => `[source: ${chunk.source}]\n${chunk.text}`)
    .join("\n\n---\n\n");

  const links = [
    process.env.RESUME_URL
      ? `Resume link: ${process.env.RESUME_URL}`
      : "Resume link: not configured.",
    process.env.CAL_URL
      ? `Calendar link: ${process.env.CAL_URL}`
      : "Calendar link: not configured.",
  ].join("\n");

  return `${rules}\n\n## Links (share only per the rules above)\n\n${links}\n\n## Context\n\n${context}`;
}

/** Convert Groq's OpenAI-style SSE stream into a plain text stream of tokens. */
function groqSseToTextStream(body: ReadableStream<Uint8Array>): ReadableStream<Uint8Array> {
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  let buffer = "";

  return body.pipeThrough(
    new TransformStream<Uint8Array, Uint8Array>({
      transform(chunk, controller) {
        buffer += decoder.decode(chunk, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith("data:")) continue;
          const payload = trimmed.slice(5).trim();
          if (payload === "[DONE]") continue;
          try {
            const parsed = JSON.parse(payload) as {
              choices?: { delta?: { content?: string } }[];
            };
            const token = parsed.choices?.[0]?.delta?.content;
            if (token) controller.enqueue(encoder.encode(token));
          } catch {
            // Ignore malformed SSE lines.
          }
        }
      },
    }),
  );
}

export async function POST(request: Request): Promise<Response> {
  if (!process.env.GROQ_API_KEY || !process.env.GEMINI_API_KEY) {
    return Response.json(
      { error: "Chat is not configured — missing GROQ_API_KEY or GEMINI_API_KEY." },
      { status: 503 },
    );
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const limit = checkRateLimit(ip);
  if (!limit.allowed) {
    return Response.json(
      { error: "Rate limit reached — try again tomorrow." },
      {
        status: 429,
        headers: { "Retry-After": String(Math.ceil((limit.resetAt - Date.now()) / 1000)) },
      },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const messages = (body as { messages?: unknown })?.messages;
  if (
    !Array.isArray(messages) ||
    messages.length === 0 ||
    messages.length > MAX_MESSAGES ||
    !messages.every(isChatMessage)
  ) {
    return Response.json(
      { error: "Body must be { messages: { role: 'user' | 'assistant', content: string }[] }." },
      { status: 400 },
    );
  }

  const lastUserMessage = [...messages].reverse().find((m) => m.role === "user");
  if (!lastUserMessage) {
    return Response.json({ error: "At least one user message is required." }, { status: 400 });
  }

  let systemPrompt: string;
  try {
    systemPrompt = await buildSystemPrompt(lastUserMessage.content);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Retrieval failed.";
    return Response.json({ error: message }, { status: 500 });
  }

  const groqRes = await fetch(GROQ_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      stream: true,
      messages: [{ role: "system", content: systemPrompt }, ...messages],
    }),
  });

  if (!groqRes.ok || !groqRes.body) {
    const detail = await groqRes.text().catch(() => "");
    return Response.json(
      { error: `Groq request failed (${groqRes.status}): ${detail.slice(0, 500)}` },
      { status: 502 },
    );
  }

  return new Response(groqSseToTextStream(groqRes.body), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-RateLimit-Remaining": String(limit.remaining),
    },
  });
}
