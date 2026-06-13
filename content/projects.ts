import type { Project, ProjectsPageContent } from "@/lib/types";

// Maps 1:1 to the projects view in portfolio-final-design.html.
export const projectsPage: ProjectsPageContent = {
  intro: "Things I built and actually use.",
  badgeLabel: "live on this site",
  visitLabel: "visit ↗",
  copyLabel: "⧉ copy",
  copiedLabel: "✓ copied",
};

export const projects: Project[] = [
  {
    title: "Fuzail AI",
    description: "RAG bot trained on my work — press ⌘K, it's right there.",
    type: "live",
  },
  {
    title: "Deployed project",
    description: "Live URL + screenshot thumbnail. Real and clickable.",
    type: "link",
    url: "https://example.com",
  },
  {
    title: "Exec summary generator",
    description: "Raw meeting notes → 5-line brief execs actually read.",
    type: "prompt",
    prompt:
      "Placeholder prompt — turn raw meeting notes into a 5-line brief executives actually read.",
  },
  {
    title: "Decision doc template",
    description: "Forces options + tradeoffs before any meeting happens.",
    type: "prompt",
    prompt: "Placeholder prompt — structure a decision doc with options and tradeoffs upfront.",
  },
  {
    title: "Weekly status autopilot",
    description: "Scattered updates → one stakeholder-ready note.",
    type: "prompt",
    prompt:
      "Placeholder prompt — compile scattered team updates into one stakeholder-ready status note.",
  },
  {
    title: "⚗ what's cooking — next build",
    description: "",
    type: "cooking",
  },
];
