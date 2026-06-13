"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActive, navItems } from "@/lib/nav";

/** Mobile-only fixed bottom nav bar (<720px). Hidden on desktop. */
export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-20 hidden items-center justify-around border-t border-border bg-bg py-3 max-[720px]:flex"
    >
      {navItems.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`text-[13px] ${active ? "font-medium text-text" : "text-text-2"}`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
