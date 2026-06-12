@AGENTS.md

# CLAUDE.md — Fuzail's portfolio

## What this is
Minimal one-viewport portfolio for Fuzail (AI PM / Chief of Staff @ ArmorIQ). No-scroll app-style site: Home, Work (before/after flip cards), Projects, Notes, About, Changelog, plus a ⌘K RAG chatbot ("Fuzail AI") and a hidden gated layer.

## Source of truth
- **Design: `portfolio-final-design.html` (repo root).** A fully working reference implementation — exact tokens in its `:root`, all 7 views, working interactions (flip cards, master toggle, ⌘K). When unsure about ANY visual value, open it and copy. Never invent design.
- Content shapes: `content/*.ts`. Bot brain: `knowledge/*.md`. Setup: `README.md`.

## Design tokens (locked — do not deviate)
bg #FFFFFF · text #333336 · text-2 #6E6E73 · text-3 #9B9BA0 · accent #3B6FD4 · accent-bg #EBF1FB · border #E8E8EA · border-2 #D9D9DC · red #C84B43 / bg #FBEFEE / text #A0392F · green #2E8B57 / bg #EDF6F0 / text #1F6B45 · gray-bg #F6F6F7 · radius 12px · sans = Montserrat via next/font (Proxima Nova stand-in) · mono = JetBrains Mono. Section labels: 11px mono uppercase, 0.12em tracking.

## Hard rules
1. **CEO-safe (critical):** NOTHING publicly visible may suggest job-seeking — no "open to work", resume buttons, calendar links, recruiter language. Exceptions ONLY: `/coffee` (noindexed, unlisted) and the bot's gated direct-ask responses (resume/cal from env vars, never volunteered).
2. All copy flows through `content/*.ts` and `content/notes/*.md` — zero hardcoded strings in components.
3. No new dependencies. Installed: framer-motion, react-markdown, resend. That's it.
4. One-viewport shell: 100vh flex column, header + main, no page scroll on desktop. Mobile (<720px): bottom nav bar, single columns, internal scroll allowed inside card grids only.
5. TypeScript strict, no `any`. Small components in `components/ui/`.
6. Work in phases; after each phase stop, say what to verify in the browser, and wait for confirmation. Never "clean up while in there" — refactors are their own task.

## Architecture map
- `app/` — routes: `/` `/work` `/work/[slug]` `/projects` `/notes` `/notes/[slug]` `/about` `/changelog` `/coffee` (noindex, off sitemap) + `app/api/chat/route.ts`
- `components/command-k/` — ⌘K overlay (Ctrl+K too, Esc closes; hardcoded greeting, no API call on open)
- `lib/rag.ts` — cosine retrieval over `embeddings.json`; `lib/rate-limit.ts` — ~15 msgs/IP/day
- `scripts/embed.ts` — chunks `knowledge/*.md` (NOT rules.md — that's the system prompt) → Gemini text-embedding-004 → `embeddings.json`. Run `npm run embed` after editing knowledge files.
- Chat flow: validate → rate-limit → embed query → top-4 chunks + rules.md system prompt → Groq llama-3.3-70b-versatile → stream.

## Bot behavior (lives in knowledge/rules.md — keep intact)
- Speaks as "Fuzail's AI": playful, direct, knows it's a demo of his craft
- "Is he looking for work?" → "He's happily building at ArmorIQ" + redirect to projects
- Resume/calendar (RESUME_URL / CAL_URL env) shared ONLY on a direct concrete ask
- "Pass him a message" → collect message + contact, forward via Resend
- Off-topic → deflect with personality, no freelance opinions

## Commands
`npm run dev` · `npm run build` · `npm run embed` · env: GROQ_API_KEY, GEMINI_API_KEY, RESEND_API_KEY, RESUME_URL, CAL_URL (see .env.example)

## Definition of done (per phase)
Matches the reference pixel-for-pixel → content from files → builds clean → keyboard accessible → no console errors → CEO test passes (crawl output for hiring signals).
