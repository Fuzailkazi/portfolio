import type { SiteContent } from "@/lib/types";

export const site: SiteContent = {
  name: "Fuzail Kazi",
  logo: "Fuzail",
  role: "AI PM / Chief of Staff at ArmorIQ.",
  positioning: "I build AI products and keep the company executing.",
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
    projects: "Projects",
    notes: "Notes",
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
    intro: "Occasional takes from my seat. No schedule promised.",
    backLabel: "← Notes",
  },
  commandK: {
    hint: "⌘K",
    title: "✦ Fuzail AI",
    close: "✕",
    greeting:
      "Hey — I'm the bot from Projects. Ask about his work, his tools, or how I'm built. I can also pass him a message.",
    suggestions: ["Coolest project?", "How are you built?", "Pass him a message"],
    inputPlaceholder: "Ask anything...",
    errorMessage: "Hm, that didn't go through. Give it another shot?",
    rateLimitMessage:
      "You've hit today's message limit — I'm popular but rationed. Come back tomorrow.",
  },
};
