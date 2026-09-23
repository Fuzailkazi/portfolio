import type { AboutContent } from "@/lib/types";

export const about: AboutContent = {
  bio: "I'm Fuzail Kazi, an AI product manager and builder working across agent development, developer relations, and go-to-market. At ArmorIQ, I help shape and ship AI products, bring developer and customer feedback into product decisions, and work on the docs, content, and launch efforts that help people understand and adopt them. I also build and test agent prototypes myself, so I can get close to the technology, spot rough edges, and collaborate effectively with engineering. Before ArmorIQ, I was the sole PM at AccelChain and started my career in developer relations. I like taking a problem from first conversation through product decisions, a working build, and adoption.",
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
      line: "Joined when it was just an idea and helped take the AI product from 0 → 1: shaping the strategy, roadmap, and go-to-market.",
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
    { name: "AI product", description: "discovery, product direction, agent workflows, testing, and launch" },
    { name: "Developer adoption", description: "developer feedback, docs, technical content, and community" },
    { name: "India leadership", description: "local team ownership, office operations, coordination, and India GTM" },
    { name: "Hands-on building", description: "prototype agents, understand the code, and test the experience" },
  ],
  runScope: "product thinking + technical fluency + developer trust + market execution",
  tasteLabels: { now: "Building", stack: "Stack", reading: "Rabbit hole", obsessedWith: "Hot take" },
};
