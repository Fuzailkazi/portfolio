# Portfolio

Fuzail Kazi's portfolio site. **Currently scaffold-only** — structure, plumbing, and
placeholders. The visual design (from Claude Design / Google Stitch) comes next; design
components will land in `components/ui/`.

Stack: Next.js 16 (App Router) · TypeScript (strict) · Tailwind CSS v4 · Framer Motion
(installed, unused for now) · deployed on Vercel.

## Setup

```bash
npm install
cp .env.example .env   # fill in keys
npm run dev            # http://localhost:3000
```

## Environment variables

| Variable         | Used by                                            |
| ---------------- | -------------------------------------------------- |
| `GROQ_API_KEY`   | `/api/chat` — chat completions (llama-3.3-70b)     |
| `GEMINI_API_KEY` | `npm run embed` + `/api/chat` — text-embedding-004 |
| `RESEND_API_KEY` | Transactional email (not wired yet)                |
| `RESUME_URL`     | Chat bot, shared only on a direct ask              |
| `CAL_URL`        | Chat bot, shared only on a direct ask              |

Never commit `.env` (gitignored; `.env.example` is the template).

## Where content lives

All site copy flows from these files — components contain no hardcoded strings:

- `content/site.ts` — name, role, positioning, social URLs, page names
- `content/work.ts`, `content/projects.ts`, `content/changelog.ts`, `content/manual.ts`, `content/taste.ts` — typed arrays/objects per section
- `content/notes/*.md` — notes with frontmatter (`title`, `date`, `readTime`)
- `knowledge/*.md` — the chat bot's RAG knowledge base; `knowledge/rules.md` is its system prompt (voice + hard rules), not embedded

## Chat bot (RAG)

1. Fill in `knowledge/*.md`.
2. `npm run embed` — chunks the knowledge files (~300 tokens), embeds each chunk with Gemini
   `text-embedding-004`, writes `embeddings.json` at the project root. Re-run whenever
   knowledge changes. The script reads `.env` automatically.
3. `POST /api/chat` with `{ "messages": [{ "role": "user", "content": "..." }] }` —
   rate-limits per IP (15/day, in-memory), embeds the question, retrieves the top-4 chunks by
   cosine similarity (`lib/rag.ts`), and streams a Groq `llama-3.3-70b-versatile` answer as
   plain text.

Smoke test:

```bash
npm run embed
npm run dev
curl -N localhost:3000/api/chat \
  -H 'Content-Type: application/json' \
  -d '{"messages":[{"role":"user","content":"What is Fuzail working on?"}]}'
```

`embeddings.json` is generated but committed deliberately, so Vercel deploys don't need
`GEMINI_API_KEY` at build time. Alternative: gitignore it and set Vercel's build command to
`npm run embed && next build`.

## Routes

`/` `/work` `/work/[slug]` `/projects` `/notes` `/notes/[slug]` `/about` `/changelog` — all
placeholder pages rendering their name from `content/site.ts`.

`/coffee` — unlisted: `noindex` robots meta, excluded from `app/sitemap.ts`. The rest of the
site never references resumes, hiring, availability, or calendars.

`⌘K / Ctrl+K` toggles the command palette stub (`components/command-k/CommandK.tsx`); Esc closes.

## Next up

Design implementation: drop design components into `components/ui/`, wire theme tokens through
`components/theme-provider.tsx` and `app/globals.css`, replace placeholder pages with real
layouts. Framer Motion is already installed for it.
