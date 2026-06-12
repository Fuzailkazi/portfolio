"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

/**
 * ⌘K overlay — hint chip (fixed bottom-right) + placeholder modal.
 * ⌘K / Ctrl+K opens, Esc or backdrop click closes. The real chat UI
 * replaces the static input in a later phase.
 */
export function CommandK() {
  const [open, setOpen] = useState(false);

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

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed right-6 bottom-5 cursor-pointer rounded-[6px] border border-border px-[9px] py-[3px] font-mono text-[12px] text-text-3"
      >
        {site.commandK.hint}
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
            className="w-[480px] rounded-[14px] bg-bg p-5 shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
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
            <div className="mb-3 rounded-[10px] bg-gray-bg px-[14px] py-3 text-[13px]">
              {site.commandK.greeting}
            </div>
            <div className="mb-3 flex flex-wrap gap-2">
              {site.commandK.suggestions.map((chip) => (
                <span
                  key={chip}
                  className="cursor-pointer rounded-full border border-border px-3 py-[5px] text-[12px] text-text-2 transition-all duration-150 hover:border-accent hover:text-accent"
                >
                  {chip}
                </span>
              ))}
            </div>
            <div className="rounded-[10px] border border-border-2 px-[14px] py-[10px] text-[13px] text-text-3">
              {site.commandK.inputPlaceholder}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
