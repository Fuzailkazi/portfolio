import type { ChangelogEntry } from "@/lib/types";

// Maps 1:1 to the `logs` array in portfolio-final-design.html.
export const changelog: ChangelogEntry[] = [
  {
    version: "v2.6",
    date: "Jun 2026",
    entry: "Shipped exec reporting automation — deck-building down 60%",
  },
  { version: "v2.5", date: "May 2026", entry: "Ran ArmorIQ launch end-to-end, 5 weeks" },
  {
    version: "v2.4",
    date: "Apr 2026",
    entry: "Built internal AI assistant for first-pass analysis",
  },
  { version: "v2.3", date: "Mar 2026", entry: "Restructured hiring loop — close rate up" },
  { version: "v2.2", date: "Feb 2026", entry: "Killed status meetings — one living doc" },
  { version: "v2.1", date: "Jan 2026", entry: "Joined ArmorIQ as AI PM / Chief of Staff" },
  { version: "v1.4", date: "2025", entry: "Previous role — your story here" },
  { version: "v1.2", date: "2024", entry: "First product shipped end-to-end" },
  { version: "v1.0", date: "2023", entry: "Graduated, entered the arena" },
  { version: "v0.1", date: "——", entry: "Born. Mostly crying. No roadmap." },
];
