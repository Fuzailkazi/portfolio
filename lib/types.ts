/** Shared types for content, chat, and RAG plumbing. */

// ---------- Content ----------

export interface SiteContent {
  name: string;
  /** Header logo text (first name in the reference design). */
  logo: string;
  /** One-line role, e.g. "Product engineer at ArmorIQ". */
  role: string;
  /** One-line positioning statement. */
  positioning: string;
  /** Canonical production URL, used for metadata + sitemap. */
  url: string;
  social: {
    github: string;
    linkedin: string;
    x: string;
    email: string;
  };
  /** Page display names — placeholder pages render these. */
  pages: {
    home: string;
    work: string;
    caseStudies: string;
    projects: string;
    notes: string;
    about: string;
    changelog: string;
    coffee: string;
  };
  home: {
    /** Label of the link below the changelog tail, e.g. "full changelog →". */
    fullChangelogLabel: string;
  };
  /** Unlisted /coffee page. URLs come from env (CAL_URL, RESUME_URL); labels live here. */
  coffee: {
    title: string;
    note: string;
    calLabel: string;
    emailLabel: string;
    resumeLabel: string;
    unavailable: string;
  };
  notes: {
    intro: string;
    backLabel: string;
  };
  commandK: {
    /** The fixed bottom-right hint chip, e.g. "⌘K". */
    hint: string;
    title: string;
    close: string;
    greeting: string;
    suggestions: string[];
    inputPlaceholder: string;
    errorMessage: string;
    rateLimitMessage: string;
  };
}

export interface ChangelogEntry {
  version: string;
  date: string;
  entry: string;
}

export interface CaseStudy {
  scope: string;
  mess: string;
  call: string;
  system: string;
  result: string;
}

export interface WorkItem {
  slug: string;
  title: string;
  /** Icon identifier — resolved to a real icon when design lands. */
  icon: string;
  before: string;
  after: string;
  /** The judgment call that made the difference. */
  call: string;
  scope: string;
  /** Whether a full case study page exists at /work/[slug]. */
  hasCase: boolean;
  /** Card spans both grid columns. */
  full: boolean;
  /** Optional external case-study URL for fellowship or portfolio artifacts. */
  externalUrl?: string;
  /** Short context displayed with the work item. */
  category?: string;
  caseStudy?: CaseStudy;
}

/** Copy for the Work view chrome and case study pages. */
export interface WorkPageContent {
  beforeLabel: string;
  afterLabel: string;
  scope: string;
  beforeTag: string;
  afterTag: string;
  tapHint: string;
  callPrefix: string;
  caseLinkLabel: string;
  backLabel: string;
  caseTitleSuffix: string;
  rowLabels: {
    mess: string;
    call: string;
    system: string;
    result: string;
  };
  slots: string[];
}

export type ProjectType = "live" | "link" | "prompt" | "cooking";

export interface Project {
  title: string;
  description: string;
  type: ProjectType;
  url?: string;
  prompt?: string;
}

/** Copy for the Projects view chrome. */
export interface ProjectsPageContent {
  intro: string;
  badgeLabel: string;
  visitLabel: string;
  copyLabel: string;
  copiedLabel: string;
}

export interface TrajectoryItem {
  version: string;
  role: string;
  date: string;
  line: string;
}

export interface RunRow {
  name: string;
  description: string;
}

/** Copy for the About view. */
export interface AboutContent {
  bio: string;
  labels: {
    trajectory: string;
    whatIRun: string;
    operatingManual: string;
  };
  trajectory: TrajectoryItem[];
  runs: RunRow[];
  runScope: string;
  tasteLabels: {
    now: string;
    stack: string;
    reading: string;
    obsessedWith: string;
  };
}

/** Copy for the Changelog view chrome. */
export interface ChangelogPageContent {
  backLabel: string;
  label: string;
}

export interface ManualItem {
  claim: string;
  explanation: string;
}

export interface TasteContent {
  now: string;
  stack: string[];
  reading: string;
  obsessedWith: string;
}

export interface NoteFrontmatter {
  title: string;
  /** ISO date (yyyy-mm-dd) — sorted on, formatted for display. */
  date: string;
  readTime: string;
  excerpt: string;
}

export interface Note extends NoteFrontmatter {
  slug: string;
  body: string;
}

// ---------- Chat / RAG ----------

export type ChatRole = "user" | "assistant";

export interface ChatMessage {
  role: ChatRole;
  content: string;
}

export interface EmbeddedChunk {
  /** Source file inside knowledge/, e.g. "bio.md". */
  source: string;
  text: string;
  embedding: number[];
}

export interface EmbeddingsFile {
  model: string;
  generatedAt: string;
  chunks: EmbeddedChunk[];
}
