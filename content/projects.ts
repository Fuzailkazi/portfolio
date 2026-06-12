import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "Placeholder live project",
    description: "A thing that is deployed and clickable.",
    type: "live",
    url: "https://example.com/live",
  },
  {
    title: "Placeholder linked project",
    description: "A thing that lives elsewhere — repo, write-up, demo.",
    type: "link",
    url: "https://github.com/placeholder/project",
  },
  {
    title: "Placeholder prompt project",
    description: "A prompt worth stealing. Click to copy.",
    type: "prompt",
    prompt: "You are a placeholder prompt. Replace me with something actually useful.",
  },
  {
    title: "Placeholder prompt project #2",
    description: "Another prompt, because one is never enough.",
    type: "prompt",
    prompt: "Placeholder system prompt — concise, opinionated, replace before launch.",
  },
  {
    title: "Placeholder cooking project",
    description: "Not shipped yet. Smells good though.",
    type: "cooking",
  },
  {
    title: "Placeholder cooking project #2",
    description: "In the oven. Do not open the door.",
    type: "cooking",
  },
];
