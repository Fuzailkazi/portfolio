import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import type { Note, NoteFrontmatter } from "@/lib/types";

const NOTES_DIR = path.join(process.cwd(), "content", "notes");

/** Minimal frontmatter parser — enough for title/date/readTime. Swap for a real one if notes grow richer. */
function parseFrontmatter(raw: string): { frontmatter: NoteFrontmatter; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  const fields: Record<string, string> = {};
  let body = raw;

  if (match) {
    body = raw.slice(match[0].length);
    for (const line of match[1].split(/\r?\n/)) {
      const idx = line.indexOf(":");
      if (idx === -1) continue;
      const key = line.slice(0, idx).trim();
      const value = line
        .slice(idx + 1)
        .trim()
        .replace(/^["']|["']$/g, "");
      fields[key] = value;
    }
  }

  return {
    frontmatter: {
      title: fields.title ?? "Untitled",
      date: fields.date ?? "",
      readTime: fields.readTime ?? "",
    },
    body: body.trim(),
  };
}

export async function getNoteSlugs(): Promise<string[]> {
  const files = await readdir(NOTES_DIR);
  return files.filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""));
}

export async function getNote(slug: string): Promise<Note | null> {
  // Guard against path traversal via the slug param.
  if (!/^[a-z0-9-]+$/i.test(slug)) return null;
  try {
    const raw = await readFile(path.join(NOTES_DIR, `${slug}.md`), "utf8");
    const { frontmatter, body } = parseFrontmatter(raw);
    return { slug, ...frontmatter, body };
  } catch {
    return null;
  }
}

export async function getAllNotes(): Promise<Note[]> {
  const slugs = await getNoteSlugs();
  const notes = await Promise.all(slugs.map((slug) => getNote(slug)));
  return notes.filter((n): n is Note => n !== null).sort((a, b) => b.date.localeCompare(a.date));
}
