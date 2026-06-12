/**
 * Build-time embedding script.
 *
 * Reads knowledge/*.md (except rules.md — that's the system prompt, not
 * retrievable knowledge), chunks each file to ~300 tokens, embeds every chunk
 * with Gemini text-embedding-004, and writes embeddings.json at the project
 * root for lib/rag.ts to consume.
 *
 * Usage: GEMINI_API_KEY=... npm run embed
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { EMBEDDING_MODEL, embedText } from "../lib/rag";
import type { EmbeddedChunk, EmbeddingsFile } from "../lib/types";

const KNOWLEDGE_DIR = path.join(process.cwd(), "knowledge");
const OUTPUT_FILE = path.join(process.cwd(), "embeddings.json");
const EXCLUDED = new Set(["rules.md"]);

// ~300 tokens ≈ ~1200 characters of English prose.
const MAX_CHUNK_CHARS = 1200;

/** Split markdown into chunks of roughly MAX_CHUNK_CHARS, breaking on paragraph boundaries. */
function chunkMarkdown(text: string): string[] {
  const paragraphs = text
    .split(/\r?\n\r?\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  const chunks: string[] = [];
  let current = "";

  for (const paragraph of paragraphs) {
    if (current && current.length + paragraph.length + 2 > MAX_CHUNK_CHARS) {
      chunks.push(current);
      current = paragraph;
    } else {
      current = current ? `${current}\n\n${paragraph}` : paragraph;
    }
  }
  if (current) chunks.push(current);
  return chunks;
}

async function main(): Promise<void> {
  if (!process.env.GEMINI_API_KEY) {
    console.error("GEMINI_API_KEY is not set. Add it to .env or the environment and retry.");
    process.exit(1);
  }

  const files = (await readdir(KNOWLEDGE_DIR))
    .filter((f) => f.endsWith(".md") && !EXCLUDED.has(f))
    .sort();

  if (files.length === 0) {
    console.error(`No knowledge files found in ${KNOWLEDGE_DIR}`);
    process.exit(1);
  }

  const chunks: EmbeddedChunk[] = [];
  for (const file of files) {
    const raw = await readFile(path.join(KNOWLEDGE_DIR, file), "utf8");
    const pieces = chunkMarkdown(raw);
    console.log(`${file}: ${pieces.length} chunk(s)`);

    for (const [i, text] of pieces.entries()) {
      const embedding = await embedText(text, "RETRIEVAL_DOCUMENT");
      chunks.push({ source: file, text, embedding });
      console.log(`  embedded chunk ${i + 1}/${pieces.length} (${embedding.length} dims)`);
    }
  }

  const output: EmbeddingsFile = {
    model: EMBEDDING_MODEL,
    generatedAt: new Date().toISOString(),
    chunks,
  };

  await writeFile(OUTPUT_FILE, JSON.stringify(output), "utf8");
  console.log(`\nWrote ${chunks.length} chunks from ${files.length} files to embeddings.json`);
}

main().catch((err: unknown) => {
  console.error(err);
  process.exit(1);
});
