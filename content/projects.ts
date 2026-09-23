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
    title: "AI RedTeaming agent",
    description: "A deployed agent security testing tool built as part of my work at ArmorIQ.",
    type: "link",
    url: "https://redagent-web.vercel.app/",
  },
  {
    title: "Causely Feature Impact Simulator",
    description: "A personal product experiment for exploring how a feature idea could affect activation, retention, revenue, and NPS.",
    type: "link",
    url: "https://causely-liard.vercel.app/",
  },
  {
    title: "Flow Trace",
    description: "A side project I am currently working on.",
    type: "cooking",
  },
];
