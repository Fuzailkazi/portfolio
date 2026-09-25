import type { MetadataRoute } from "next";
import { projectStories } from "@/content/project-stories";
import { site } from "@/content/site";
import { work } from "@/content/work";
import { getNoteSlugs } from "@/lib/notes";

// /coffee is intentionally excluded — it's unlisted (see app/coffee/page.tsx).
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/work",
    "/case-studies",
    "/projects",
    "/notes",
    "/about",
    "/changelog",
  ];
  const caseRoutes = work.filter((item) => item.hasCase).map((item) => `/work/${item.slug}`);
  const projectRoutes = projectStories.map((item) => `/projects/${item.slug}`);
  const noteRoutes = (await getNoteSlugs()).map((slug) => `/notes/${slug}`);

  return [...staticRoutes, ...caseRoutes, ...projectRoutes, ...noteRoutes].map((route) => ({
    url: `${site.url}${route}`,
  }));
}
