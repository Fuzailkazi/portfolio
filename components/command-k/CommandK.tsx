"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import type { ChatMessage } from "@/lib/types";

function Dots() {
  return (
    <div className="mb-3 flex w-fit gap-[5px] rounded-[10px] bg-gray-bg px-[14px] py-[14px]">
      {[0, 0.2, 0.4].map((delay) => (
        <span
          key={delay}
          className="h-[6px] w-[6px] animate-pulse-dot rounded-full bg-text-3"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
    </div>
  );
}

/**
 * ⌘K — Fuzail AI. Hint chip + chat modal wired to /api/chat (streaming).
 * The greeting bubble is local-only (never sent to the API); conversation
 * state survives close/reopen within the session.
 */
export function CommandK() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: "end" });
  }, [messages, busy, error]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || busy) return;

    const outgoing: ChatMessage[] = [...messages, { role: "user", content }];
    setMessages(outgoing);
    setInput("");
    setBusy(true);
    setError(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: outgoing }),
      });

      if (!res.ok || !res.body) {
        setError(res.status === 429 ? site.commandK.rateLimitMessage : site.commandK.errorMessage);
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        const snapshot = acc;
        setMessages((prev) => [...prev.slice(0, -1), { role: "assistant", content: snapshot }]);
      }
    } catch {
      setError(site.commandK.errorMessage);
    } finally {
      setBusy(false);
    }
  }

  const awaitingFirstToken =
    busy && (messages.length === 0 || messages[messages.length - 1]?.role === "user");

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={site.commandK.title}
        className="fixed right-6 bottom-5 cursor-pointer rounded-[6px] border border-border px-[9px] py-[3px] font-mono text-[12px] text-text-3 max-[720px]:bottom-[84px] max-[720px]:flex max-[720px]:h-11 max-[720px]:w-11 max-[720px]:items-center max-[720px]:justify-center max-[720px]:rounded-full max-[720px]:border-border-2 max-[720px]:bg-bg max-[720px]:p-0 max-[720px]:text-[18px] max-[720px]:text-accent max-[720px]:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
      >
        <span className="max-[720px]:hidden">{site.commandK.hint}</span>
        <span aria-hidden className="hidden max-[720px]:inline">
          ✦
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center bg-black/35"
          onClick={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={site.commandK.title}
            className="w-[480px] rounded-[14px] bg-bg p-5 shadow-[0_20px_60px_rgba(0,0,0,0.15)] max-[720px]:w-[calc(100vw-32px)]"
          >
            <div className="mb-[14px] flex justify-between">
              <b className="text-[14px] font-semibold">{site.commandK.title}</b>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="cursor-pointer text-text-3"
              >
                {site.commandK.close}
              </button>
            </div>

            <div className="max-h-[50vh] overflow-y-auto">
              <div className="mb-3 rounded-[10px] bg-gray-bg px-[14px] py-3 text-[13px]">
                {site.commandK.greeting}
              </div>

              {messages.map((message, i) =>
                message.role === "user" ? (
                  <div
                    key={i}
                    className="mb-3 ml-auto w-fit max-w-[80%] rounded-[10px] bg-accent-bg px-[14px] py-3 text-[13px]"
                  >
                    {message.content}
                  </div>
                ) : (
                  message.content !== "" && (
                    <div
                      key={i}
                      className="mb-3 rounded-[10px] bg-gray-bg px-[14px] py-3 text-[13px] whitespace-pre-wrap"
                    >
                      {message.content}
                    </div>
                  )
                ),
              )}

              {awaitingFirstToken && <Dots />}

              {error && (
                <div className="mb-3 rounded-[10px] bg-gray-bg px-[14px] py-3 text-[13px] text-text-2">
                  {error}
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {messages.length === 0 && (
              <div className="mb-3 flex flex-wrap gap-2">
                {site.commandK.suggestions.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => send(chip)}
                    className="cursor-pointer rounded-full border border-border px-3 py-[5px] text-[12px] text-text-2 transition-all duration-150 hover:border-accent hover:text-accent"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={(event) => {
                event.preventDefault();
                void send(input);
              }}
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={site.commandK.inputPlaceholder}
                aria-label={site.commandK.inputPlaceholder}
                className="w-full rounded-[10px] border border-border-2 px-[14px] py-[10px] text-[13px] outline-none placeholder:text-text-3 focus:border-accent"
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
}
