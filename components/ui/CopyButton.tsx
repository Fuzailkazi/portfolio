"use client";

import { useState } from "react";
import { projectsPage } from "@/content/projects";

/** Reference .pcopy — copies the prompt, shows "✓ copied" for 1.2s. */
export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="cursor-pointer text-[12px] text-text-3 transition-colors duration-150 hover:text-text"
    >
      {copied ? projectsPage.copiedLabel : projectsPage.copyLabel}
    </button>
  );
}
