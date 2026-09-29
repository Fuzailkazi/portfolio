import type { WorkItem, WorkPageContent } from "@/lib/types";

export const workPage: WorkPageContent = {
  beforeLabel: "Before",
  afterLabel: "What I did",
  scope: "scope: AI product, developer experience, go-to-market, and product practice",
  beforeTag: "CONTEXT",
  afterTag: "MY WORK",
  tapHint: "tap to explore",
  callPrefix: "The approach: ",
  caseLinkLabel: "open case study →",
  backLabel: "← Work",
  caseTitleSuffix: " · case study",
  rowLabels: {
    mess: "CONTEXT",
    call: "DECISION",
    system: "APPROACH",
    result: "OUTCOME",
  },
  slots: [],
};

export const work: WorkItem[] = [
  {
    slug: "armoriq",
    title: "ArmorIQ",
    icon: "shield",
    before:
      "ArmorIQ began as an idea that needed product direction, customer learning, developer adoption, and company-wide execution to become real.",
    after:
      "I joined as the first hire and now serve as Chief of Staff, working with the founders across product, customers, developer relations, GTM, hiring, and operations.",
    call: "Connect product decisions to customer evidence, developer adoption, and the execution needed to move the company forward.",
    scope: "Chief of Staff · Founding Product Manager",
    category: "ArmorIQ · 2025–present",
    detailLinkText: "Read the full story →",
    detailTitleSuffix: " · full story",
    figures: [{ value: "20+", label: "events organized in one year" }],
    hasCase: true,
    full: false,
    caseStudy: {
      scope: "Chief of Staff · Founding Product Manager",
      intro:
        "I joined ArmorIQ as its **first hire and founding product manager**, building the product function for its agent runtime security SDK and platform. I owned product vision, strategy, and roadmap for AI engineers, security teams, and internal product teams. As **Chief of Staff**, I also work directly with the founders across hiring, India GTM, developer programs, and company operations.",
      chapters: [
        {
          title: "Chief of Staff",
          points: [
            "**Translate founder priorities into coordinated execution**, carrying work across product, customer experience, hiring, GTM, and operations and following through with the people involved.",
            "**Bring customer and developer insight into founder discussions**, connecting what teams need in practice with product plans and company priorities.",
            "**Coordinate hiring across engineering, marketing, design, and developer relations**, having joined as the company's first hire and remained involved as the team expanded.",
            "**Own onboarding for new teammates**, coordinating their transition into the company and their work with the team.",
            "**Coordinate launches across product, engineering, and GTM**, bringing together release readiness, documentation, demos, content, and developer outreach.",
            "**Independently owned US event logistics from India**, coordinating operational preparations and related dinners for ArmorIQ's event participation.",
          ],
        },
        {
          title: "Product strategy and building from zero",
          points: [
            "**Owned product vision, strategy, and roadmap** for ArmorIQ's agent runtime security SDK and platform, serving AI engineers, security teams, and internal product teams.",
            "**Built ArmorIQ's product function from zero**, defining the ideal customer profile, discovery loops, specifications, backlog rituals, and stakeholder alignment through **250+ conversations with AI engineers, security leads, and design partners**.",
            "**Prototyped product designs, user journeys, and onboarding experiences** using wireframes and working prototypes to explore how customers would discover, integrate, and use ArmorIQ.",
            "**Defined the shared API and SDK foundation every ArmorIQ product builds on**, including authentication, policy invocation, tool permissions, logging, failure states, usage metering, and integration semantics. This addressed manual integrations that had become an onboarding bottleneck.",
            "**Led market research, product planning, and GTM planning for Armor Tools**, an ArmorIQ product, including work around ArmorClaude, ArmorCodex, and ArmorClaw.",
            "**Shipped three security products from one integration pattern: ArmorClaude, ArmorCodex, and ArmorClaw.** ArmorGemini is in development.",
            "**Used research with 337 developers to inform Armor Tools' direction**, investigating coding-agent workflows and gaps in visibility, control, and trust.",
            "**Own product execution from requirements through release readiness**, writing specifications, coordinating backlog and sprint planning, testing product flows, and bringing customer feedback into subsequent iterations.",
          ],
        },
        {
          title: "Technical contributions and product quality",
          points: [
            "**Contribute directly to product development**, including Armor Tools, ArmorIQ platform frontend changes, and working prototypes that clarify product requirements.",
            "**Build demo agents and realistic SDK scenarios** to explore agent behavior, test integration workflows, and demonstrate customer use cases.",
            "**Partnered with engineering on AI agent interfaces and MCP-style tool approvals**, translating security and compliance needs into product requirements, API contracts, evaluations, and release plans.",
            "**Create tailored technical demos** for prospective customers and partners, adapting scenarios to their workflows and using their feedback to guide product improvements.",
            "**Define product success measures** across onboarding, adoption, and customer experience, including time to first successful integration, activation, customer satisfaction, and documentation satisfaction.",
            "**Owned evaluation strategy for prompt injection, tool misuse, over-permissioned actions, and unsafe agent behavior**, balancing runtime enforcement with developer ergonomics and latency budgets. Worked with engineering on false-positive and false-negative rates and the latency added by security checks.",
          ],
        },
        {
          title: "Customer experience and adoption",
          points: [
            "**Own customer satisfaction across ArmorIQ products**, connecting customer interviews, onboarding feedback, and product issues to improvement work with the team.",
            "**Lead product onboarding for customers and partners** introduced by the founding and business teams, demonstrating workflows, explaining product capabilities, and guiding teams through initial use.",
            "**Design the customer journey from first demo through onboarding and ongoing use**, identifying where teams need clearer guidance, better workflows, or additional product support.",
            "**Turn customer feedback into actionable product work**, identifying recurring friction and carrying findings into requirements, backlog discussions, and follow-up plans.",
            "**Own developer documentation and satisfaction with the docs**, revising guides and practical examples after developers struggled to understand and integrate the SDK.",
            "**Write and maintain cookbook examples and technical guidance**, connecting product behavior with practical implementation scenarios.",
          ],
        },
        {
          title: "Developer relations and go-to-market",
          points: [
            "**Started ArmorIQ's developer program**, connecting technical education, community engagement, onboarding, and product feedback.",
            "**Improved the SDK adoption journey** by instrumenting activation, diagnosing integration failures, and prioritizing documentation and developer experience.",
            "**Supported customer adoption at ArmorIQ**, building tailored demos, onboarding customers and partners, and translating their feedback into product improvements.",
            "**Organized 20+ events in one year**, including hackathons and technical programs that helped developers explore and build with ArmorIQ.",
            "**Run developer sessions on Twitter/X and Discord**, answer technical and product questions, and bring recurring feedback into product and documentation improvements.",
            "**Own launch planning and developer-facing content**, creating product demos, technical material, AI-assisted launch videos, and outreach around releases.",
            "**Lead India GTM and ecosystem engagement with founder input**, building relationships across universities, developer communities, events, and partners.",
          ],
        },
      ],
      resources: [],
    },
  },
  {
    slug: "accelchain-product",
    title: "Product management at AccelChain (Acqui-hired)",
    icon: "rocket",
    before:
      "AccelChain needed stronger developer activation, clearer onboarding, and ecosystem products that could turn grant-backed blockchain work into adoption.",
    after:
      "In my Product Manager role, I focused on product planning, developer onboarding, Marketplace, and developer education.",
    call: "Use developer feedback, partner requirements, and product data together to decide what to build next.",
    scope: "Product Manager · AccelChain (Acqui-hired) · 2024–2025",
    category: "Professional experience",
    detailLinkText: "Read the full story →",
    detailTitleSuffix: " · full story",
    hasCase: true,
    full: false,
    caseStudy: {
      scope: "Product Manager · Product management and developer relations",
      intro:
        "My role at AccelChain combined **product management and developer relations**. I talked to developers, used their feedback to prioritize improvements, and worked with engineering to bring those changes into the platform. I also helped developers get started through documentation, workshops, and the Build Program.",
      chapters: [
        {
          title: "Product discovery and priorities",
          points: [
            "**Managed product priorities and requirements** for a platform serving **5,000+ daily active developers**, bringing developer feedback into roadmap discussions and release planning.",
            "**Used interviews and support conversations to understand where developers got stuck**, then worked with engineering to scope improvements and review the experience before launch.",
          ],
        },
        {
          title: "Platform onboarding and activation",
          points: [
            "**Interviewed 30+ developers and helped improve the platform deployment flow**. The team’s changes reduced time-to-first-deploy by **35%**.",
            "**Worked on deployment guidance and feature sequencing**, helping developers understand the platform and reach their first deployment.",
          ],
        },
        {
          title: "Solana and Polkadot ecosystem work",
          points: [
            "**Contributed to platform integrations for Solana and Polkadot**, as part of the team's grant-supported work. I helped translate ecosystem requirements into product tasks and developer workflows.",
          ],
        },
        {
          title: "AI assistance for developer questions",
          points: [
            "**Helped shape a RAG assistant for deployment and blockchain questions**, using recurring support tickets to define the questions it should answer and assess the usefulness of its responses.",
          ],
        },
        {
          title: "Marketplace and ecosystem growth",
          points: [
            "**Led product planning and launch for AccelChain Marketplace**, defining how developers would discover projects built in the ecosystem and working with the team on the user flows.",
            "Marketplace became the platform's **largest acquisition channel within two months**.",
          ],
        },
        {
          title: "Developer relations and education",
          points: [
            "**Mentored developers through the AccelChain Build Program**, helping teams work through questions and bringing their feedback to the product team. The program supported **100+ developers** and **20+ production-ready projects**.",
            "**Wrote documentation and tutorials and ran workshops** to help developers get started and understand what they could build with AccelChain.",
          ],
        },
      ],
    },
  },
  {
    slug: "dapp-world-devrel",
    title: "Developer relations at DApp World",
    icon: "users",
    before:
      "A developer community was generating useful feedback that needed to reach the product team.",
    after:
      "As DApp World's first DevRel, I built developer programs and support processes, educated 1,200+ developers, and turned community feedback into product improvements.",
    call: "Pair developer education and community programs with a consistent feedback loop into product and engineering.",
    scope: "Developer Relations Intern · DApp World · 2023",
    category: "Professional experience",
    hasCase: false,
    full: false,
  },
];
