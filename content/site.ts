import type { SiteContent } from "@/lib/types";

export const site: SiteContent = {
  name: "Fuzail Kazi",
  logo: "Fuzail",
  role: "Product Manager · Product Strategy & Delivery",
  positioning:
    "Product Manager experienced in customer discovery, product strategy, prioritization, and taking products from idea through launch.",
  url: process.env.NEXT_PUBLIC_SITE_URL,
  social: {
    github: "https://github.com/Fuzailkazi",
    linkedin: "https://www.linkedin.com/in/fuzail-kazi/",
    x: "https://x.com/fuzailkazi_",
    email: "fuzailnazimkazi@gmail.com",
  },
  pages: {
    home: "Home",
    work: "Work",
    caseStudies: "Case Studies",
    projects: "Builds",
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
    intro: "Writing on AI product craft, agent reliability, developer experience, and what it takes to get technical products adopted.",
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
