interface ProjectStorySection {
  title: string;
  body?: string[];
  bullets?: string[];
  examplesTitle?: string;
  examples?: string[];
}

interface ProjectStory {
  slug: string;
  title: string;
  subtitle: string;
  actions: Array<{ label: string; href: string }>;
  intro: string[];
  principle: string;
  sections: ProjectStorySection[];
}

export const projectStoryPage = {
  backLabel: "Back to Building",
};

export const projectStories: ProjectStory[] = [
  {
    slug: "flowtrace",
    title: "FlowTrace",
    subtitle: "A memory system for the work I do on my Mac",
    actions: [
      {
        label: "View FlowTrace",
        href: "https://github.com/Fuzailkazi/flowtrace/releases/tag/v0.1.0",
      },
      {
        label: "View source code",
        href: "https://github.com/Fuzailkazi/flowtrace",
      },
    ],
    intro: [
      "I built FlowTrace because I kept losing track of useful things while working.",
      "I would find a helpful article, solve part of a problem, write down an idea, or make progress in a coding session. A few days later, I would remember that the information existed, but not where I had seen it.",
      "Was it in a browser tab? A terminal window? An AI coding session? A GitHub issue? A different project?",
      "That was the problem I wanted to solve.",
      "FlowTrace is a native macOS app that helps people remember what they were doing and find that context again later. It can connect notes with screenshots, browser pages, repositories, terminal sessions, projects, and coding-agent sessions.",
    ],
    principle: "You shouldn't have to remember where you saw something in order to find it again.",
    sections: [
      {
        title: "How it works",
        body: [
          "FlowTrace has three main parts:",
        ],
        bullets: [
          "Quick Capture lets you save a thought or moment without leaving the app you are currently using.",
          "Now shows what is happening across your projects, coding sessions, local servers, and open pages.",
          "Memories lets you search for something later using the words you actually remember.",
        ],
        examplesTitle: "For example, instead of searching for an exact filename or URL, you can search for:",
        examples: [
          "that Stripe pricing page",
          "the error I saw yesterday",
          "the portfolio idea",
          "what was I doing in the terminal?",
        ],
      },
      {
        title: "Why I made it local-first",
        body: [
          "FlowTrace can handle sensitive information: code, browsing context, unfinished ideas, and private work. I did not want the product to depend on sending that information to a cloud service.",
          "Privacy was not an extra feature added at the end. It shaped how I designed the product from the beginning.",
        ],
        bullets: [
          "Data is stored in a local SQLite database.",
          "Search happens on the device.",
          "Sources are opt-in.",
          "Sensitive values are redacted before being saved where possible.",
          "No account or cloud backend is required.",
        ],
      },
      {
        title: "Product decisions",
        body: [
          "One decision I cared about was separating \"Remember this\" from \"Take a note.\" Sometimes I want to save something visually, like a design or a useful webpage. Other times I just want to write down a thought. Those are different intentions, so FlowTrace treats them differently instead of turning every capture into a screenshot.",
          "I also wanted retrieval to feel human. Most people do not remember exact titles, URLs, or folder names. They remember fragments: what they were trying to do, what the page was about, or how the idea felt. FlowTrace is designed around those imperfect memories.",
        ],
      },
      {
        title: "What I built",
        body: [
          "I worked on FlowTrace across both product and engineering:",
        ],
        bullets: [
          "Defined the problem and product direction",
          "Designed the capture, memory, and retrieval experience",
          "Built the native macOS app with SwiftUI",
          "Implemented local storage and full-text search",
          "Added context from browsers, repositories, terminals, and coding agents",
          "Designed onboarding, consent, and privacy controls",
          "Built the command-line interface",
          "Added optional browser extension support",
          "Created the light and dark themes",
          "Added automated tests",
          "Packaged and released the app for macOS",
        ],
      },
      {
        title: "What I learned",
        body: [
          "The biggest thing I learned is that context is often more valuable than the original piece of information.",
          "A note saying \"fix authentication\" is not very helpful on its own. That same note becomes much more useful when it is connected to the project, repository, browser page, agent session, and time when it was written.",
          "I also learned that building a product around personal data requires a lot of trust. Every permission, setting, label, and storage decision affects whether the product feels helpful or invasive.",
        ],
      },
      {
        title: "Current status",
        body: [
          "FlowTrace has a downloadable macOS release with:",
        ],
        bullets: [
          "Quick Capture",
          "Now, Timeline, and Memories views",
          "Local search",
          "Project and coding-agent context",
          "Browser context",
          "CLI tools",
          "Optional browser extension support",
          "Light, dark, and system themes",
          "Privacy and consent controls",
        ],
      },
    ],
  },
  {
    slug: "redagent",
    title: "RedAgent",
    subtitle: "Automated red-teaming for AI agents",
    actions: [
      {
        label: "View RedAgent",
        href: "https://redagent-web.vercel.app/",
      },
    ],
    intro: [
      "I built RedAgent because AI agents stopped being chatbots and nobody had a simple way to test them.",
      "Teams now give agents real power. An agent can issue refunds, change user roles, run shell commands, call internal APIs, and remember things across conversations. But when I asked how teams knew an agent would not do something harmful when someone tried to trick it, the honest answer was usually that they had tried a few prompts by hand.",
      "That testing is ad hoc. Nobody writes it down, nobody repeats it, and you cannot compare one version of the agent to the next. Normal security scanners do not help because they were not built for systems that can be talked into doing things.",
      "That was the problem I wanted to solve.",
      "RedAgent sends a library of adversarial attacks to any AI agent reachable over HTTP. It scores how the agent holds up against the OWASP Top 10 for Agentic Applications and returns a scorecard with remediation steps.",
    ],
    principle: "You shouldn't need a security team to find out whether your agent can be talked into dropping your database.",
    sections: [
      {
        title: "How it works",
        body: [
          "RedAgent has three main parts:",
        ],
        bullets: [
          "Scan lets you paste an agent URL. RedAgent works out how to talk to it, sends attacks, and streams results live as each one comes back.",
          "Scorecard shows Resilience and Weighted Risk. Resilience is the share of attacks the agent resisted, while Weighted Risk reflects how severe the failures were.",
          "Fix turns each failure into a remediation playbook: why the agent gave in, a system prompt fix, and design changes that prevent the failure more properly.",
        ],
      },
      {
        title: "Why I made scoring strict",
        body: [
          "A red-teaming tool is only useful if you can trust its numbers. A tool that makes a weak agent look safe does more harm than having no tool.",
        ],
        bullets: [
          "FAIL means the agent complied with the attack. I kept this convention strict so the score could not accidentally reward unsafe behavior.",
          "Unclear never counts as a pass. The score only rises when the agent actually resisted.",
          "Severity matters. Leaking a system prompt and running a dangerous command should not count the same.",
          "Reports are reproducible. Every report records the attack library, engine, and judge model so results can be compared over time.",
        ],
      },
      {
        title: "Product decisions",
        body: [
          "The hardest product cut was collapsing the architecture. The original plan was a full platform with an API server, job queue, Redis, Postgres, worker, and dashboard. I realized users should not have to start five services just to scan one agent, so I collapsed the product into one Next.js app that can run scans in-process and deploy to Vercel.",
          "I also decided not to require users to bring their own agent before seeing value. RedAgent includes vulnerable and hardened demo agents, so someone can click a button and watch a real scan run in seconds with no setup and no API keys.",
          "Agents do not share one API format, so I designed the scan flow around paste a URL and go. RedAgent sends a small message first and infers how to talk to the endpoint instead of forcing configuration up front.",
          "I kept attacks as data, not code. Each attack is tagged with OWASP category and severity, so the library can grow without changing the engine.",
          "I used two tiers of judging: fast rule-based detectors score most responses, while unclear cases go to an LLM judge and are cached.",
        ],
      },
      {
        title: "Building it safely",
        body: [
          "A tool that attacks agents has to be careful about whose agents it attacks.",
        ],
        bullets: [
          "Scanning an agent marked as production requires explicit authorization enforced by the server.",
          "The attacks describe harmful intent but do not actually damage the target.",
          "If a user cancels a scan or closes the tab, remaining attacks stop immediately.",
          "Secrets are passed by reference and are not written into reports.",
        ],
      },
      {
        title: "What I built",
        body: [
          "I worked on RedAgent across both product and engineering:",
        ],
        bullets: [
          "Defined the problem, users, scope, and non-goals",
          "Designed the scoring convention and the two headline metrics",
          "Wrote the attack library covering all 10 OWASP agentic categories",
          "Built the scan engine with endpoint auto-detection, HTTP adapters, streaming adapters, detectors, a concurrent runner, and scorer",
          "Added an LLM judge for unclear results",
          "Built the web dashboard with live streaming progress and cancellation",
          "Wrote remediation playbooks for every category",
          "Built the CLI and GitHub Actions security gate",
          "Built vulnerable and hardened demo agents",
          "Wrote 128 automated tests",
          "Wrote a developer tutorial on red-teaming an agent",
        ],
      },
      {
        title: "What I learned",
        body: [
          "The biggest thing I learned is that people will not try a security product if they have to connect something sensitive before seeing value. The demo agents mattered more than almost any feature because they let someone understand the product before pointing it at their own work.",
          "I also learned that the hard part of a security product is being honest about what it cannot do. Some OWASP categories, like inter-agent communication and cascading failures, can only be approximated when you are sending prompts to an HTTP endpoint. Labeling those probes as approximations builds more trust than pretending the tool has full coverage.",
          "Finally, in security, a clear number beats a clever one. The strict scoring convention was the least exciting decision I made, and probably the most important.",
        ],
      },
      {
        title: "Current status",
        body: [
          "RedAgent currently has:",
        ],
        bullets: [
          "A web dashboard with live streaming scans",
          "An attack library covering OWASP ASI01-ASI10",
          "Resilience and Weighted Risk scoring",
          "Remediation playbooks",
          "Built-in vulnerable and hardened demo agents",
          "An LLM judge for unclear results",
          "A CLI with JSON and Markdown reports",
          "A GitHub Actions security gate",
        ],
      },
      {
        title: "Next up",
        body: [
          "The next areas I want to explore are multi-turn attacks, attack variations, and tracking results across scans so teams can see when an agent gets worse.",
        ],
      },
    ],
  },
  {
    slug: "orbbit",
    title: "Orbbit",
    subtitle: "A statistical decision engine for choosing production AI models",
    actions: [
      {
        label: "View live app",
        href: "https://orbbit-ai.vercel.app/",
      },
      {
        label: "View source code",
        href: "https://github.com/Fuzailkazi/orbbitAI",
      },
    ],
    intro: [
      "I built Orbbit because choosing an AI model for production has degraded into marketing hype, screenshots, and misleading leaderboards.",
      "Every week, a new model drops and claims to be state of the art. But when engineering and product teams ask which model they should actually deploy for their workload and budget, the existing tools do not give them enough context.",
      "Public leaderboards often crown a winner based on small percentage differences while ignoring whether those differences are statistically meaningful. They also rarely account for production trade-offs like latency, cost, reliability, and failure rate.",
      "That was the problem I wanted to solve.",
      "Orbbit is an independent evaluation platform that replaces benchmark hype with statistical rigor. It evaluates models across accuracy, latency, and cost, shows a 95% confidence interval on every score, and lets teams inspect the exact evidence down to the prompt.",
    ],
    principle: "You shouldn't have to guess or gamble when picking the AI model that powers your product.",
    sections: [
      {
        title: "How it works",
        body: [
          "Orbbit is structured around four core pillars:",
        ],
        bullets: [
          "The Value Score Leaderboard lets teams adjust Quality, Speed, and Cost sliders so the ranking reflects their actual production priorities.",
          "Side-by-Side Model Comparison compares finalist models across shared benchmarks and shows when confidence intervals overlap.",
          "Prompt-Level Traceability lets users inspect every evaluated prompt, raw model response, ground truth answer, scorer reasoning, latency, and token count.",
          "The Live Streaming Evaluation Runner lets users trigger benchmark runs from the browser and watch progress stream question by question.",
        ],
      },
      {
        title: "Why I insisted on confidence intervals",
        body: [
          "Most AI platforms display a bare percentage, like 84.2%. That number looks precise, but it is misleading without sample size context.",
          "If a model gets 25 out of 30 questions right, the score is 83.3%. But with a small sample, the confidence range is wide enough that another model scoring 80% may be practically the same.",
          "I made a strict product rule: never show a naked percentage. Every accuracy number in Orbbit includes a Wilson 95% confidence interval. If two models' intervals overlap, Orbbit refuses to declare an artificial winner.",
        ],
      },
      {
        title: "Key product decisions",
        bullets: [
          "Failure rate is a feature, not an error to hide. If a provider times out, rate-limits, or returns malformed text, Orbbit records that behavior instead of hiding it behind retries.",
          "Code execution beats string matching. For coding benchmarks, Orbbit executes generated JavaScript in a sandboxed worker thread against real unit tests with memory isolation and timeouts.",
          "Score normalization has to respect reality. Model prices and latencies vary across huge ranges, so Orbbit uses logarithmic and square-root normalization to keep comparisons meaningful.",
          "The demo had to be frictionless. I built a 1-click guest demo so reviewers can understand the product without creating an account, verifying email, or configuring API keys.",
        ],
      },
      {
        title: "What I built",
        body: [
          "I led and implemented Orbbit across product definition, system design, and full-stack engineering:",
        ],
        bullets: [
          "Framed the problem statement and product strategy",
          "Designed the multi-objective Value Score formula",
          "Built the leaderboard, comparison, drilldown, and decision memo experiences",
          "Built the frontend with Next.js, React, Tailwind CSS, Lucide icons, and Recharts",
          "Implemented the live streaming evaluation engine with Server-Sent Events",
          "Built exact-match, math parser, sandboxed code execution, and rubric-based scoring methods",
          "Created dataset ingestion from canonical benchmarks with fixed random seeds",
          "Designed Bring Your Own Benchmark ingestion for CSV and JSON datasets",
          "Built executive decision memos with 1M-request cost modeling",
          "Configured Supabase PostgreSQL with Row-Level Security",
          "Built signed guest demo sessions and rate limiting",
          "Added 191 automated unit tests covering scorers, statistics, and sandboxing",
        ],
      },
      {
        title: "What I learned",
        body: [
          "Accuracy without sample size is an illusion. Showing confidence intervals changes the conversation from which model is number one to whether the models are actually distinguishable.",
          "Production decisions require balancing trade-offs. The highest-performing model is rarely the best model to deploy when cost, latency, and failure rate are visible.",
          "Developer trust is won through transparency. Summary cards are not enough. Engineers trust the system more when they can click into the exact prompt, response, and scoring logic behind a result.",
        ],
      },
      {
        title: "Current status",
        body: [
          "Orbbit is live and functional with:",
        ],
        bullets: [
          "Live streaming evaluation runner",
          "Interactive leaderboard with Quality, Speed, and Cost sliders",
          "Prompt-level drilldowns",
          "Side-by-side model comparison with confidence interval overlap bands",
          "Executive decision memos with cost modeling",
          "Evaluation spaces for domain-level benchmark groupings",
          "Bring Your Own Benchmark support for CSV and JSON datasets",
          "Live OpenRouter catalog sync covering 500+ models",
          "1-click guest demo mode",
          "191 passing unit tests",
        ],
      },
    ],
  },
  {
    slug: "causely",
    title: "Causely",
    subtitle: "A decision and impact simulator that refuses to lie about your roadmap",
    actions: [
      {
        label: "View Causely",
        href: "https://causely-liard.vercel.app/",
      },
      {
        label: "View source code",
        href: "https://github.com/fuzailkazi/Causely",
      },
    ],
    intro: [
      "I built Causely because every sprint, as a product manager, I had to make bets: this feature over that one, and defend those bets to stakeholders who reasonably wanted to know why.",
      "For most of my career, the honest answer was some version of because I think so. The decision was real, but the analysis behind it was often gut feel dressed up in slides the night before a roadmap review.",
      "When LLMs arrived, I got curious. The first time I asked one to forecast a feature's impact, it gave me a polished deck with confident numbers and a fake case study. It looked useful, but the evidence was fabricated.",
      "That was the moment the project got interesting: the easy version of an AI decision tool is a machine for manufacturing false confidence.",
      "Causely is an AI-assisted feature impact simulator that turns a one-paragraph feature description into a structured, PM-ready analysis in seconds, while being candid about how much it actually knows.",
    ],
    principle: "You shouldn't have to choose between a gut feeling and false precision.",
    sections: [
      {
        title: "How it works",
        body: [
          "Causely has three main parts:",
        ],
        bullets: [
          "Describe and Simulate lets you enter a feature idea in plain English, optionally adding product stage, audience, and baseline metrics.",
          "The Assumption Engine lets you interrogate the bet by turning assumptions into interactive toggles that recalculate impact and confidence in real time.",
          "Decision and Alignment translates predictions into a Ship, Test, or Drop verdict, a pre-mortem, launch checklist, and stakeholder soundbites.",
        ],
        examplesTitle: "For example, instead of arguing over invented numbers in a roadmap meeting, you can stress-test questions like:",
        examples: [
          "What happens to our retention forecast if user setup friction is higher than expected?",
          "How should we prioritize an onboarding checklist against an automated weekly digest?",
          "What unstated technical or UX risks are we taking on with this workflow?",
          "How do I explain the tradeoffs of this feature to an engineering lead concerned about tech debt?",
        ],
      },
      {
        title: "Why I built it as a trust layer",
        body: [
          "An AI impact tool should not launder an educated guess into a fake forecast. Trust and intellectual honesty shaped the product architecture from day one.",
        ],
        bullets: [
          "Predictions are expressed as calibrated low-high ranges with explicit confidence bands, never invented decimals.",
          "Anything that can be computed is computed in code, including net tradeoffs, RICE scores, and data-quality ratings.",
          "AI-suggested analogies are labeled as illustrative patterns, not disguised as verifiable historical case studies.",
          "Disclaimers sit beside every score and export into documentation.",
          "Analyses persist in the browser with no database, accounts, or tracking.",
        ],
      },
      {
        title: "Product decisions",
        body: [
          "I made assumptions interactive instead of static because most feature bets fail when an unstated assumption turns out to be false. Causely encourages PMs to probe the fragile parts of a plan before committing engineering resources.",
          "I also designed Causely to speak in three stakeholder languages. A CEO cares about growth and business risk, an engineering lead cares about complexity and maintenance cost, and a designer cares about cognitive friction.",
          "Roadmap prioritization is rarely just whether a feature is good. It is usually whether Feature A is more worth building than Feature B, so Causely includes a head-to-head comparison mode.",
        ],
      },
      {
        title: "What I built",
        body: [
          "I worked on Causely across both product management and engineering:",
        ],
        bullets: [
          "Defined the problem space, target personas, and PRD",
          "Built the web application with Next.js, React, Tailwind CSS, and shadcn/ui",
          "Integrated Gemini 2.5 Flash-Lite with structured JSON outputs",
          "Created a swappable AI provider abstraction layer",
          "Built the interactive Assumption Engine with dynamic client-side recalculation",
          "Created the Tradeoff Visualizer and deterministic Net Impact calculator",
          "Built A/B Feature Comparison for roadmap prioritization",
          "Designed the Ship, Test, or Drop decision engine",
          "Built the pre-mortem generator, RICE scoring, and stakeholder soundbites",
          "Implemented validation layers to catch hallucinations, unsourced claims, and false precision",
          "Built one-click Markdown export and browser-based persistence",
          "Configured automated deployment and CI/CD on Vercel",
        ],
      },
      {
        title: "What I learned",
        body: [
          "The hardest challenge with AI tooling is not generating answers. It is stopping the model from over-claiming.",
          "A fluent LLM can dress up a guess as an authoritative forecast. Intellectual honesty cannot be left to prompt vibes alone; it has to be enforced through deterministic bounds, auditable math, and contract assertions.",
          "I also learned that the true value of an impact simulator is not handing you a magic number. It is giving you a structured sparring partner that surfaces blind spots, tradeoffs, and assumptions.",
        ],
      },
      {
        title: "Current status",
        body: [
          "Causely is live on Vercel with:",
        ],
        bullets: [
          "Plain-language feature simulation",
          "Four-metric calibrated predictions for Activation, Retention, Revenue, and NPS",
          "Interactive Assumption Engine with live stress-testing",
          "Tradeoff Visualizer and deterministic Net Impact ledger",
          "Head-to-head A/B comparison view",
          "Pre-mortem failure analysis and RICE scoring",
          "Stakeholder soundbites for CEO, Engineering, and Design",
          "Ship, Test, or Drop decision engine and launch checklist",
          "Markdown export for Notion, Confluence, and PRDs",
          "Browser-local persistence with zero account overhead",
        ],
      },
    ],
  },
];
