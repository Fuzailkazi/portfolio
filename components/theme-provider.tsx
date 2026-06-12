"use client";

/**
 * Theme provider stub. When the design lands, this will own theme state
 * (light/dark, design tokens) and expose it via context. For now it just
 * renders children so the layout shape is final.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
