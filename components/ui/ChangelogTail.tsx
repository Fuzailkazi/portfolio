"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { changelog } from "@/content/changelog";
import { site } from "@/content/site";

// Reference rows fade to 100% / 70% / 45% top-down.
const ROW_OPACITY = [1, 0.7, 0.45];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const row = (targetOpacity: number) => ({
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: targetOpacity, y: 0, transition: { duration: 0.3 } },
});

/**
 * Tail display form, as in the reference: entry up to the em-dash,
 * first letter lowercased, month-only lowercase date.
 * "Shipped exec reporting automation — deck-building down 60%" + "Jun 2026"
 * → "shipped exec reporting automation · jun"
 */
function tailText(entry: string, date: string): string {
  const short = entry.split("—")[0].trim();
  const lowered = short.charAt(0).toLowerCase() + short.slice(1);
  const month = date.split(" ")[0].toLowerCase();
  return `${lowered} · ${month}`;
}

export function ChangelogTail() {
  const latest = changelog.slice(0, 3);

  return (
    <motion.div
      className="my-9 font-mono text-[13px]"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {latest.map((entry, i) => (
        <motion.div
          key={entry.version}
          variants={row(ROW_OPACITY[i])}
          className="mb-[7px] flex items-center gap-2"
        >
          {i === 0 && <span className="h-[7px] w-[7px] animate-pulse-dot rounded-full bg-green" />}
          <span className="text-accent">{entry.version}</span>
          <span>{tailText(entry.entry, entry.date)}</span>
        </motion.div>
      ))}
      <motion.div variants={row(1)}>
        <Link
          href="/changelog"
          className="cursor-pointer border-b border-dotted border-border-2 text-[12px] text-text-2"
        >
          {site.home.fullChangelogLabel}
        </Link>
      </motion.div>
    </motion.div>
  );
}
