import type { WorkItem, WorkPageContent } from "@/lib/types";

// Maps 1:1 to the `work` array + work/case views in portfolio-final-design.html.
export const workPage: WorkPageContent = {
  beforeLabel: "Before me",
  afterLabel: "After me",
  scope: "scope: product, the AI roadmap, GTM, and the operating cadence",
  beforeTag: "BEFORE",
  afterTag: "AFTER",
  tapHint: "tap to flip",
  callPrefix: "The call: ",
  caseLinkLabel: "full case study →",
  backLabel: "← Work",
  caseTitleSuffix: " · case study",
  rowLabels: {
    mess: "THE MESS",
    call: "THE CALL",
    system: "THE SYSTEM",
    result: "RESULT",
  },
  slots: ["Full deck", "Sanitized artifact"],
};

// CEO-safe: ArmorIQ (current) cards are qualitative — no confidential traction
// figures. AccelChain & DApp World (past roles) keep their real numbers.
export const work: WorkItem[] = [
  // ═══════════════ ArmorIQ — the flagship ═══════════════
  {
    slug: "ai-runtime-security",
    title: "0 → 1: AI runtime security",
    icon: "shield",
    before:
      "LLM agents were shipping to production with no runtime security, and the category to fix it didn't exist yet.",
    after:
      "Led 0 to 1 of an AI runtime security platform for LLM agents: blank page to enterprise design partners and early revenue.",
    call: "Defined product strategy for a category that didn't exist, then aligned every team behind one wedge.",
    scope: "defined product strategy + led 0→1 at ArmorIQ",
    hasCase: true,
    full: false,
    caseStudy: {
      scope: "scope: product strategy + 0→1 for an AI runtime security platform",
      mess: "LLM agents were going into production with nothing watching them at runtime. The category was so new there was no playbook. No clear buyer, no reference architecture, just a real and growing risk.",
      call: "Ran structured discovery interviews with AI engineering and security stakeholders, synthesized the signal into one sharp wedge, and committed. Pivoted the product three times to get there.",
      system:
        "discovery interviews → synthesis → design-partner program → build-measure loops → GTM",
      result:
        "Took the platform from a blank page to live: onboarded enterprise design partners, reached early revenue, grew SDK adoption to 15,000+ developers, and shipped safety systems that meaningfully cut unsafe agent executions.",
    },
  },

  // ═══════════════ ArmorIQ — Chief of Staff (leadership, surfaced early) ═══════════════
  {
    slug: "operating-cadence",
    title: "The operating cadence",
    icon: "map",
    before:
      "Strategy lived in founders' heads and scattered threads; teams optimized locally and priorities drifted by mid-quarter.",
    after:
      "Installed one operating rhythm: clear priorities, a weekly cadence, and decisions written down where the whole company could see them.",
    call: "Made every initiative name an owner and a kill condition up front.",
    scope: "built the operating cadence at ArmorIQ",
    hasCase: false,
    full: false,
  },
  {
    slug: "founder-leverage",
    title: "Founder force-multiplier",
    icon: "anchor",
    before:
      "Everything routed through the founders. Context trapped in their heads, decisions queued behind them.",
    after:
      "Became the connective tissue: turned intent into execution so the founders stayed on the few decisions only they could make.",
    call: "Took the hundred small calls so they could make the five big ones.",
    scope: "ran chief-of-staff support for the founders at ArmorIQ",
    hasCase: false,
    full: false,
  },

  // ═══════════════ ArmorIQ — more AI product depth ═══════════════
  {
    slug: "agent-safety",
    title: "Agent safety systems",
    icon: "gauge",
    before: "Agents could take unsafe actions in production with nothing standing in the way.",
    after:
      "Built safety systems that meaningfully reduced unsafe agent executions, with SDK adoption scaling to 15,000+ developers.",
    call: "Designed for the worst action an agent could take, not the happy-path demo.",
    scope: "owned agent safety + SDK at ArmorIQ",
    hasCase: false,
    full: false,
  },
  {
    slug: "discovery-pivots",
    title: "Discovery → 3 pivots",
    icon: "compass",
    before: "The roadmap was a guess. No real signal from the people who'd actually buy.",
    after:
      "Ran structured discovery with AI engineering and security leaders to shape the roadmap, and drove three major product pivots when the signal demanded it.",
    call: "Let the market kill my assumptions early. Pivoted three times before betting big.",
    scope: "owned product discovery + roadmap at ArmorIQ",
    hasCase: false,
    full: false,
  },
  {
    slug: "gtm-motion",
    title: "Early GTM & sales motion",
    icon: "target",
    before: "Strong tech, no motion. Design partners weren't converting into revenue.",
    after:
      "Owned early GTM and the sales motion: turned design partners into the first paying customers and defined pricing, packaging, and positioning.",
    call: "Sold it myself before handing anyone a playbook.",
    scope: "owned early GTM + pricing at ArmorIQ",
    hasCase: false,
    full: false,
  },

  // ═══════════════ AccelChain — Product Manager (2024–25) ═══════════════
  {
    slug: "zero-to-one",
    title: "Sole PM, 0 → scale",
    icon: "rocket",
    before: "A developer infra platform with 5,000+ daily developers, and no dedicated PM.",
    after:
      "Owned the full product lifecycle as sole PM for a platform serving 5,000+ daily active developers across AI and Web3.",
    call: "Owned discovery to launch to iteration with no one to hand off to, and built the data to prove it worked.",
    scope: "sole PM, end-to-end, at AccelChain",
    hasCase: true,
    full: false,
    caseStudy: {
      scope: "scope: sole product owner for a developer infrastructure platform (AI + Web3)",
      mess: "5,000+ daily active developers, one platform, and no dedicated product owner. Onboarding leaked users, the roadmap was reactive, and nobody had a clear read on activation.",
      call: "Owned the entire lifecycle. Diagnosed onboarding friction through 30+ user interviews and usage telemetry, then shipped targeted SDK and documentation fixes and redesigned onboarding around funnel drop-off data.",
      system:
        "user interviews + telemetry → funnel analysis → SDK/docs/onboarding fixes → KPI dashboards → iterate",
      result:
        "Integration failures down 30%, time-to-first-deploy down 35%. Launched the AccelChain Marketplace (+40% project visibility and the top sign-up driver within 2 months) and built KPI dashboards powering a scalability initiative that supported 2x platform growth.",
    },
  },

  // ═══════════════ DApp World — DevRel (2023) ═══════════════
  {
    slug: "dev-voice",
    title: "Voice of the developer",
    icon: "users",
    before: "1,200+ developers generating signal, and no system to turn it into action.",
    after:
      "Represented 1,200+ developers; turned 10+ workshops and hackathons into prioritized insights for founders. Support tickets down 20%, user growth 15% MoM.",
    call: "Turned community noise into a ranked fix list engineering could act on.",
    scope: "DevRel at DApp World",
    hasCase: false,
    full: false,
  },

  // ═══════════════ Leadership — full-width finale ═══════════════
  {
    slug: "built-the-team",
    title: "Built & ran the team",
    icon: "people",
    before:
      "An early-stage company with roles to fill, teams to coordinate, and company goals with no one driving them home.",
    after:
      "Hired the engineering, design, marketing, and DevRel team, then led them: turned company goals into owned work and made sure each one shipped.",
    call: "Hired for ownership, set the goal, cleared the blockers, and held the line on the outcome.",
    scope: "hired and led the cross-functional team at ArmorIQ",
    hasCase: false,
    full: true,
  },
];
