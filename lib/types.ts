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
  commandK: {
    /** The fixed bottom-right hint chip, e.g. "⌘K". */
    hint: string;
    title: string;
    close: string;
    greeting: string;
    suggestions: string[];
    inputPlaceholder: string;
  };
}

export interface ChangelogEntry {
  version: string;
  date: string;
  entry: string;
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
}

export type ProjectType = "live" | "link" | "prompt" | "cooking";

export interface Project {
  title: string;
  description: string;
  type: ProjectType;
  url?: string;
  prompt?: string;
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
  date: string;
  readTime: string;
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
