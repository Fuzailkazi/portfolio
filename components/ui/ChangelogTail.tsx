import Link from "next/link";
import { changelog } from "@/content/changelog";
import { site } from "@/content/site";

// Reference rows fade to 100% / 70% / 45% top-down.
const ROW_OPACITY = [1, 0.7, 0.45];
const STAGGER_MS = 120;

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

/** CSS custom props for the per-row fade (see .tail-row-in in globals.css). */
function rowStyle(index: number, opacity: number): React.CSSProperties {
  return { "--d": `${index * STAGGER_MS}ms`, "--o": opacity } as React.CSSProperties;
}

export function ChangelogTail() {
  const latest = changelog.slice(0, 3);

  return (
    <div className="my-9 font-mono text-[13px]">
      {latest.map((entry, i) => (
        <div
          key={entry.version}
          style={rowStyle(i, ROW_OPACITY[i])}
          className="tail-row-in mb-[7px] flex items-center gap-2"
        >
          {i === 0 && <span className="h-[7px] w-[7px] animate-pulse-dot rounded-full bg-green" />}
          <span className="text-accent">{entry.version}</span>
          <span>{tailText(entry.entry, entry.date)}</span>
        </div>
      ))}
      <div style={rowStyle(latest.length, 1)} className="tail-row-in">
        <Link
          href="/changelog"
          className="cursor-pointer border-b border-dotted border-border-2 text-[12px] text-text-2"
        >
          {site.home.fullChangelogLabel}
        </Link>
      </div>
    </div>
  );
}
