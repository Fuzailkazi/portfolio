"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";

const navItems = [
  { href: "/work", label: site.pages.work },
  { href: "/projects", label: site.pages.projects },
  { href: "/notes", label: site.pages.notes },
  { href: "/about", label: site.pages.about },
] as const;

// Inline SVGs copied from portfolio-final-design.html.
const socials = [
  {
    href: site.social.linkedin,
    label: "LinkedIn",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="block h-4 w-4">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    href: site.social.x,
    label: "X",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="block h-4 w-4">
        <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.49h2.04L6.49 3.24H4.3l13.31 17.4Z" />
      </svg>
    ),
  },
  {
    href: `mailto:${site.social.email}`,
    label: "Email",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="block h-4 w-4"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 5L2 7" />
      </svg>
    ),
  },
] as const;

export function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between border-b border-border px-12 py-[18px]">
      <Link href="/" className="cursor-pointer text-[15px] font-semibold tracking-[-0.01em]">
        {site.logo}
      </Link>
      <nav className="flex gap-7">
        {navItems.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                active
                  ? "border-b-[1.5px] border-text pb-[3px] text-[14px] font-medium text-text"
                  : "pb-[3px] text-[14px] text-text-2 transition-colors duration-150 hover:text-text"
              }
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="flex gap-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            className="text-text-3 transition-colors duration-150 hover:text-text"
          >
            {s.svg}
          </a>
        ))}
      </div>
    </header>
  );
}
