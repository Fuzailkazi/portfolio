import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { work } from "@/content/work";
import { getNoteSlugs } from "@/lib/notes";

// /coffee is intentionally excluded — it's unlisted (see app/coffee/page.tsx).
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ["", "/work", "/projects", "/notes", "/about", "/changelog"];
  const caseRoutes = work.filter((item) => item.hasCase).map((item) => `/work/${item.slug}`);
  const noteRoutes = (await getNoteSlugs()).map((slug) => `/notes/${slug}`);

  return [...staticRoutes, ...caseRoutes, ...noteRoutes].map((route) => ({
    url: `${site.url}${route}`,
  }));
}
