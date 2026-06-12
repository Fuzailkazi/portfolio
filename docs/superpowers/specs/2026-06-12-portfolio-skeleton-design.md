# Portfolio Skeleton Design Specification

## Overview

This specification details the initial skeleton setup of a portfolio website built with Next.js (latest version), Tailwind CSS (v4), TypeScript, ESLint, and Prettier. The website is configured for a static export (`output: 'export'`) and is Vercel-ready. No visual styling or custom UI is implemented yet, awaiting visual design tokens.

## Directory Structure & Component Layout

The layout uses Next.js App Router with a root-level `components/` folder for modular sections.

- `app/`
  - `globals.css`: Tailwind imports and `@theme` CSS variable declarations.
  - `layout.tsx`: Root HTML layout importing font declarations.
  - `page.tsx`: Page structure assembling the components:
    1. `Hero` (ID: `#hero`)
    2. `About` (ID: `#about`)
    3. `SelectedWork` (ID: `#selected-work`)
    4. `HowIWork` (ID: `#how-i-work`)
    5. `Writing` (ID: `#writing`)
    6. `Contact` (ID: `#contact`)
- `components/`
  - `Hero.tsx`: Component fetching data from `content.ts`.
  - `About.tsx`: Component fetching data from `content.ts`.
  - `SelectedWork.tsx`: Component fetching data from `content.ts`.
  - `HowIWork.tsx`: Component fetching data from `content.ts`.
  - `Writing.tsx`: Component fetching data from `content.ts`.
  - `Contact.tsx`: Component fetching data from `content.ts`.
- `content.ts`: Single data file with typed placeholder content.

## Tailwind CSS Theme (CSS Variables)

Customization of Tailwind CSS v4 will be handled inside `app/globals.css` with CSS variables in `:root` and mapping inside `@theme`. This allows simple overrides of design tokens.

```css
@import "tailwindcss";

@theme {
  --color-background: var(--bg-color, #ffffff);
  --color-foreground: var(--fg-color, #0f172a);
  --color-primary: var(--primary-color, #3b82f6);
  --color-primary-hover: var(--primary-hover-color, #2563eb);
  --color-secondary: var(--secondary-color, #64748b);
  --color-muted: var(--muted-color, #f1f5f9);
  --color-border: var(--border-color, #e2e8f0);

  --font-sans: var(--font-sans-family, "Inter", sans-serif);
  --font-display: var(--font-display-family, "Outfit", var(--font-sans));
}
```

## Content Schema & Types (`content.ts`)

The `content.ts` file exports a typed `content` object containing data for all website sections:

```typescript
export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface Post {
  title: string;
  date: string;
  excerpt: string;
  link: string;
}

export interface PortfolioContent {
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
  };
  about: {
    title: string;
    bio: string;
  };
  selectedWork: {
    title: string;
    projects: Project[];
  };
  howIWork: {
    title: string;
    steps: { title: string; description: string }[];
  };
  writing: {
    title: string;
    posts: Post[];
  };
  contact: {
    title: string;
    email: string;
    github: string;
    linkedin: string;
  };
}
```

## Tooling & Static Export Configuration

1. **Static Export**: Done in `next.config.ts`:

   ```typescript
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     output: "export",
     images: {
       unoptimized: true,
     },
   };

   export default nextConfig;
   ```

2. **ESLint & Prettier**: Configured to run automatically, ensuring high code quality.
3. **Git**: Initialized with standard `.gitignore` for Next.js.
