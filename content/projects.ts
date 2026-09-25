import type { Project, ProjectsPageContent } from "@/lib/types";

// Maps 1:1 to the projects view in portfolio-final-design.html.
export const projectsPage: ProjectsPageContent = {
  intro: "Agent and AI product experiments: built to test ideas, understand the technology, and learn what makes useful products work.",
  badgeLabel: "built for this portfolio",
  visitLabel: "visit ↗",
  copyLabel: "⧉ copy",
  copiedLabel: "✓ copied",
};

export const projects: Project[] = [
  {
    title: "Flow Trace",
    description: "A local-first macOS memory system for capturing work context, finding it later, and connecting notes with projects, pages, terminals, and coding sessions.",
    type: "link",
    url: "/projects/flowtrace",
    actionLabel: "read story →",
  },
  {
    title: "AI RedTeaming agent",
    description: "A personal agent security testing tool I built to explore how AI agents can be probed, evaluated, and hardened.",
    type: "link",
    url: "/projects/redagent",
    actionLabel: "read story →",
  },
  {
    title: "Orbbit AI",
    description: "A personal AI product build for exploring agentic workflows and productized AI experiences.",
    type: "link",
    url: "/projects/orbbit",
    actionLabel: "read story →",
  },
  {
    title: "Causely Feature Impact Simulator",
    description: "A personal product experiment for exploring how a feature idea could affect activation, retention, revenue, and NPS.",
    type: "link",
    url: "/projects/causely",
    actionLabel: "read story →",
  },
];
