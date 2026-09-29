import type { ChangelogEntry, ChangelogPageContent } from "@/lib/types";

export const changelogPage: ChangelogPageContent = {
  backLabel: "← back",
  label: "Changelog",
};

// Newest first. The top entry's version is the chip next to "Fuzail" on home,
// and the top 3 are the changelog tail. Add a new line at the top each month.
export const changelog: ChangelogEntry[] = [
  { version: "v3.1", date: "Apr 2026", entry: "Stepped into Chief of Staff at ArmorIQ" },
  {
    version: "v3.0.1",
    date: "Dec 2025",
    entry: "Graduated the NextLeap PM fellowship as a Top Fellow",
  },
  { version: "v3.0", date: "Oct 2025", entry: "Joined ArmorIQ as AI PM" },
  {
    version: "v2.0",
    date: "2024–25",
    entry:
      "Product Manager at AccelChain (Acqui-hired), 18 months combining product ownership, coding, and developer relations",
  },
  { version: "v1.4", date: "2024", entry: "Graduated B.Tech, MIT ADT University" },
  { version: "v1.3", date: "2023", entry: "DevRel at DApp World, grew the developer community" },
  {
    version: "v1.2",
    date: "2022",
    entry: "Product Intern at Eastern Royal Company, working on Local Streets and VR experiences",
  },
  {
    version: "v1.1",
    date: "2022",
    entry: "Co-founded MIT Cybersecurity & Blockchain Club and led it for two years",
  },
  { version: "v1.0", date: "2020", entry: "Started at MIT ADT University" },
  { version: "v0.1", date: "——", entry: "Born. Mostly crying. No roadmap." },
];
