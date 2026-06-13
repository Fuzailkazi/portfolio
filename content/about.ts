import type { AboutContent } from "@/lib/types";

// Maps 1:1 to the about view in portfolio-final-design.html.
export const about: AboutContent = {
  bio: "I'm Fuzail. I run product and operations at ArmorIQ — the connective tissue between what we decide and what we ship. On the side I build AI tools, including the one answering questions on this site.",
  labels: {
    trajectory: "Trajectory",
    whatIRun: "What I run",
    operatingManual: "Operating manual",
  },
  trajectory: [
    {
      version: "v2.x",
      role: "ArmorIQ — AI PM / Chief of Staff",
      date: "2026–now",
      line: "Launch ops, exec rhythm, internal AI tooling.",
    },
    {
      version: "v1.x",
      role: "Previous role",
      date: "2023–2025",
      line: "One line on what changed because I was there.",
    },
    {
      version: "v1.0",
      role: "Graduated",
      date: "2023",
      line: "Entered the arena.",
    },
  ],
  runs: [
    {
      name: "Launch process",
      description: "async updates → living doc + weekly sync → one roadmap",
    },
    {
      name: "Exec reporting rhythm",
      description: "raw data → automated pipeline → Friday exec brief",
    },
    {
      name: "Planning cadence",
      description: "quarterly bets → weekly priorities → daily unblocking",
    },
  ],
  runScope: "“first reader on everything leaving the CEO's desk”",
  tasteLabels: {
    now: "Now",
    stack: "Stack",
    reading: "Reading",
    obsessedWith: "Obsessed with",
  },
};
