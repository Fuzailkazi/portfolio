import type { Metadata } from "next";
import { site } from "@/content/site";

// Unlisted page: noindex + excluded from app/sitemap.ts.
export const metadata: Metadata = {
  title: site.pages.coffee,
  robots: {
    index: false,
    follow: false,
  },
};

export default function CoffeePage() {
  return (
    <div className="h-full p-12">
      <h1>{site.pages.coffee}</h1>
    </div>
  );
}
