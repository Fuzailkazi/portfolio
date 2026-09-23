import { site } from "@/content/site";

/** Single source for the primary nav — shared by the header and the mobile bottom bar. */
export const navItems = [
  { href: "/work", label: site.pages.work },
  { href: "/case-studies", label: site.pages.caseStudies },
  { href: "/projects", label: site.pages.projects },
  { href: "/notes", label: site.pages.notes },
  { href: "/about", label: site.pages.about },
] as const;

export function isActive(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}
