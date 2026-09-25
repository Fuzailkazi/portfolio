/**
 * Re-mounts on every route change (Next template convention) → the CSS
 * `route-fade` animation replays per navigation. Using CSS rather than a
 * JS-gated opacity keeps the SSR'd content visible immediately (good LCP)
 * and degrades gracefully without JS.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="route-fade">{children}</div>;
}
