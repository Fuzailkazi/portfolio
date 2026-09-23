import type { SiteContent } from "@/lib/types";

export const site: SiteContent = {
  name: "Fuzail Kazi",
  logo: "Fuzail",
  role: "AI product, developer relations, and GTM at ArmorIQ.",
  positioning:
    "I work across product, developer relations, documentation, and India GTM to help technical AI products reach the people who need them.",
  url: "https://example.com",
  social: {
    github: "https://github.com/Fuzailkazi",
    linkedin: "https://www.linkedin.com/in/fuzail-kazi/",
    x: "https://x.com/fuzailkazi_",
    email: "fuzailnazimkazi@gmail.com",
  },
  pages: {
    home: "Home",
    work: "Work",
    projects: "Building",
    notes: "Writing",
    about: "About",
    changelog: "Changelog",
    coffee: "Coffee",
  },
  home: {
    fullChangelogLabel: "full changelog →",
  },
  coffee: {
    title: "Grab coffee?",
    note: "Unlisted on purpose. If you have this link, you already know me — pick whatever's easiest.",
    calLabel: "Book a time →",
    emailLabel: "Email me",
    resumeLabel: "Resume (PDF) →",
    unavailable: "Not set up right now.",
  },
  notes: {
    intro: "Writing on AI products, developer experience, product work, and building.",
    backLabel: "← Writing",
  },
  commandK: {
    hint: "⌘K",
    title: "Fuzail AI",
    close: "✕",
    greeting:
      "Ask me about Fuzail's work, AI projects, or writing.",
    suggestions: ["Coolest project?", "How are you built?", "Pass him a message"],
    inputPlaceholder: "Ask anything...",
    errorMessage: "Hm, that didn't go through. Give it another shot?",
    rateLimitMessage:
      "You've hit today's message limit — I'm popular but rationed. Come back tomorrow.",
  },
};
