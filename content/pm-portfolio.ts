export const pmPortfolio = {
  intro: "I’m a Product Manager who turns customer needs into clear priorities and products that ship.",
  bio: "I’ve taken products from early discovery through launch: interviewing customers, shaping the roadmap, working with engineering, and improving adoption. My experience includes founding product work at ArmorIQ and platform product management at AccelChain.",
  supporting:
    "Previously at AccelChain (Acqui-hired), I combined product management and developer relations to improve platform onboarding and launch Marketplace.",
  actions: {
    work: "Explore my product work",
    email: "Email me",
    resume: "Résumé PDF ↗",
    requestResume: "Request résumé by email",
    resumeSubject: "Résumé request",
    about: "More about me →",
  },
  evidenceLabel: "Platform onboarding at AccelChain (Acqui-hired)",
  evidence: [
    { value: "35%", label: "less time to first deploy" },
    { value: "30+", label: "developers interviewed" },
  ],
  evidenceLink: "How we improved onboarding →",
  experienceTitle: "Experience",
  exercisesTitle: "Independent product exercises",
  exercisesIntro:
    "Fellowship work and independent explorations of activation, onboarding, and user experience.",
  footer: "Let’s talk product",
  footerDescription:
    "Get in touch about product roles, teams, or something I’m building.",
  workIntro:
    "My roles across product discovery, developer experience, and launches. Start with the selected stories for the decisions behind the work.",
};

export const productCases = [
  {
    slug: "accelchain-product",
    company: "AccelChain (Acqui-hired)",
    title: "Helping developers reach their first deployment",
    summary:
      "Used developer interviews to shape improvements to the platform deployment flow. The team’s changes reduced time-to-first-deploy by 35%.",
    focus: "Discovery · Onboarding · Activation",
    outcome: "35% less time to first deploy",
    role: "Product Manager, working across product management and developer relations",
    context:
      "Developers were getting stuck before their first deployment on AccelChain. I interviewed 30+ developers and used interviews and support conversations to understand the friction, then worked with engineering on changes to the platform deployment flow.",
    decision:
      "Focus on helping developers complete the path to a first deployment on the platform. I worked on deployment guidance and feature sequencing, translating developer feedback into scoped improvements with engineering.",
    approach:
      "I helped improve the platform deployment flow, reviewed the experience before launch, and supported developers with documentation, tutorials, and workshops.",
    outcomeDetail:
      "The deployment flow changes reduced time-to-first-deploy by 35%. This was a team outcome; my contribution covered developer research, product scoping, deployment guidance, and collaboration with engineering.",
    evidence: [{ value: "35%", label: "less time to first deploy" }],
  },
  {
    slug: "armoriq",
    company: "ArmorIQ",
    title: "A shared foundation for agent security products",
    summary:
      "Defined the API and SDK foundation for agent security, connecting customer discovery, integration requirements, and product launches.",
    focus: "AI product · Platform strategy · Developer experience",
    outcome: "ArmorClaude, ArmorCodex, and ArmorClaw shipped",
    role: "First hire and Founding Product Manager; now also Chief of Staff",
    context:
      "Manual integrations had become an onboarding bottleneck. AI engineers and security teams needed a clearer way to integrate runtime security into agent workflows.",
    decision:
      "Define a shared API and SDK foundation across products. I specified authentication, policy invocation, tool permissions, logging, failure states, usage metering, and integration behavior so the products could build on one integration pattern.",
    approach:
      "I owned product direction and requirements, prototyped user journeys, and partnered with engineering on API contracts and release readiness. Security evaluation work considered prompt injection, tool misuse, excessive permissions, and the balance between enforcement, developer experience, and latency.",
    outcomeDetail:
      "ArmorClaude, ArmorCodex, and ArmorClaw shipped using one integration pattern. My responsibilities spanned discovery, product definition, prototyping, and launch coordination; engineering delivery was a team effort.",
    evidence: [],
  },
];

export const caseLabels = {
  context: "The problem",
  decision: "The product decision",
  approach: "What I did",
  outcome: "What changed",
  scope: "My role",
  more: "More about the role",
  read: "Read product story →",
};
