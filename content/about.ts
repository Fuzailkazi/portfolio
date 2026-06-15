import type { AboutContent } from "@/lib/types";

export const about: AboutContent = {
  bio: "I'm Fuzail. I'm an AI PM and Chief of Staff at ArmorIQ, where I build the AI product and run the team that ships it. Before that I was the sole PM at AccelChain, scaling a developer platform across AI and Web3, after starting out in developer relations and blockchain communities. I turn fuzzy strategy into shipped product, and when waiting isn't an option I build the tools myself, including the AI answering questions on this site.",
  labels: {
    trajectory: "Trajectory",
    whatIRun: "What I run",
    operatingManual: "Operating manual",
  },
  trajectory: [
    {
      version: "v3.1",
      role: "ArmorIQ · Chief of Staff",
      date: "Apr 2026–now",
      line: "Stepped into Chief of Staff: run the team and the operating cadence, and drive company goals home.",
    },
    {
      version: "v3.0.1",
      role: "NextLeap · PM fellowship",
      date: "Dec 2025",
      line: "Graduated as a Top Fellow.",
    },
    {
      version: "v3.0",
      role: "ArmorIQ · AI PM",
      date: "Oct 2025",
      line: "Joined to build the AI product 0 → 1: strategy, roadmap, and GTM for a brand-new category.",
    },
    {
      version: "v2.0",
      role: "AccelChain · Product Manager",
      date: "2024–25",
      line: "Sole PM for a developer platform serving 5,000+ daily developers across AI and Web3.",
    },
    {
      version: "v1.3",
      role: "DApp World · Developer Relations",
      date: "2023",
      line: "Voice of 1,200+ developers; turned community signal into product.",
    },
    {
      version: "v1.0",
      role: "MIT ADT University · B.Tech",
      date: "2020–24",
      line: "Where it started. Founded and led the Cybersecurity & Blockchain Club for two years.",
    },
  ],
  runs: [
    { name: "The team", description: "hired and lead engineering, design, marketing, and DevRel" },
    {
      name: "The operating cadence",
      description: "priorities → weekly rhythm → decisions on record",
    },
    { name: "Company goals", description: "company targets → owned work → shipped outcomes" },
    { name: "The AI roadmap", description: "discovery → eval-gated builds → GTM" },
  ],
  runScope: "“where founder intent turns into shipped work”",
  tasteLabels: { now: "Building", stack: "Stack", reading: "Rabbit hole", obsessedWith: "Hot take" },
};
