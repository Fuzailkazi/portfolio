"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { work, workPage } from "@/content/work";
import type { WorkItem } from "@/lib/types";

function Card({ item, flipped, onFlip }: { item: WorkItem; flipped: boolean; onFlip: () => void }) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      onClick={onFlip}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onFlip();
        }
      }}
      className={`cursor-pointer rounded p-4 transition-all duration-[250ms] hover:-translate-y-px hover:brightness-[0.985] ${
        flipped ? "bg-green-bg" : "bg-red-bg"
      } ${item.full ? "col-span-2" : ""}`}
    >
      <motion.div
        key={String(flipped)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        <div className="mb-[6px] flex items-center justify-between">
          <b className="text-[14px] font-semibold">{item.title}</b>
          <span
            className={`font-mono text-[10px] tracking-[0.08em] ${flipped ? "text-green" : "text-red"}`}
          >
            {flipped ? workPage.afterTag : workPage.beforeTag}
          </span>
        </div>
        <p className={`text-[13px] ${flipped ? "text-green-text" : "text-red-text"}`}>
          {flipped ? item.after : item.before}
        </p>
        {flipped ? (
          <>
            <div className="mt-2 text-[12px] text-text-2">
              {workPage.callPrefix}
              {item.call}
            </div>
            {item.hasCase && (
              <Link
                href={`/work/${item.slug}`}
                onClick={(event) => event.stopPropagation()}
                className="mt-[6px] inline-block text-[12px] font-medium text-accent"
              >
                {workPage.caseLinkLabel}
              </Link>
            )}
          </>
        ) : (
          <div className="mt-2 text-[11px] text-text-3">{workPage.tapHint}</div>
        )}
      </motion.div>
    </div>
  );
}

export function WorkCards() {
  const [flips, setFlips] = useState<boolean[]>(() => work.map(() => false));
  const allAfter = flips.every(Boolean);

  function flipOne(index: number) {
    setFlips((prev) => prev.map((f, i) => (i === index ? !f : f)));
  }

  function flipAll() {
    const target = !allAfter;
    setFlips(work.map(() => target));
  }

  return (
    <>
      <div className="mb-2 flex items-center justify-center gap-3">
        <span className={`text-[13px] ${allAfter ? "text-text-3" : "font-medium text-red"}`}>
          {workPage.beforeLabel}
        </span>
        <button
          type="button"
          onClick={flipAll}
          aria-pressed={allAfter}
          aria-label={`${workPage.beforeLabel} / ${workPage.afterLabel}`}
          className="relative h-[25px] w-[46px] cursor-pointer rounded-full border border-border-2 bg-gray-bg"
        >
          <i
            className={`absolute top-[2.5px] h-[18px] w-[18px] rounded-full transition-all duration-[250ms] ${
              allAfter ? "left-[24px] bg-green" : "left-[3px] bg-text-2"
            }`}
          />
        </button>
        <span className={`text-[13px] ${allAfter ? "font-medium text-green" : "text-text-3"}`}>
          {workPage.afterLabel}
        </span>
      </div>
      <p className="mb-7 text-center font-mono text-[12px] text-text-3">{workPage.scope}</p>
      <div className="mx-auto grid max-w-[880px] grid-cols-2 gap-[14px]">
        {work.map((item, i) => (
          <Card key={item.slug} item={item} flipped={flips[i]} onFlip={() => flipOne(i)} />
        ))}
      </div>
    </>
  );
}
