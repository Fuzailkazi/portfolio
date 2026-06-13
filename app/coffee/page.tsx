import type { Metadata } from "next";
import { site } from "@/content/site";

// Render at request time so CAL_URL / RESUME_URL are read live (not baked in at build).
export const dynamic = "force-dynamic";

// Unlisted page: noindex + excluded from app/sitemap.ts.
export const metadata: Metadata = {
  title: site.pages.coffee,
  robots: {
    index: false,
    follow: false,
  },
};

const linkClass =
  "block rounded border border-border px-4 py-3 text-[14px] text-text transition-all duration-150 hover:border-accent hover:text-accent";

export default function CoffeePage() {
  // Server-only env; values must be present at build time to appear in the static page.
  const calUrl = process.env.CAL_URL;
  const resumeUrl = process.env.RESUME_URL;
  const { coffee } = site;

  return (
    <div className="flex h-full items-center justify-center p-12 max-[720px]:px-5 max-[720px]:py-7">
      <div className="w-full max-w-[360px] rounded-[14px] border border-border p-6 text-center">
        <h1 className="text-[20px] font-semibold tracking-[-0.01em]">{coffee.title}</h1>
        <p className="mt-2 mb-5 text-[13px] text-text-2">{coffee.note}</p>
        <div className="space-y-2 text-left">
          {calUrl && (
            <a href={calUrl} target="_blank" rel="noreferrer" className={linkClass}>
              {coffee.calLabel}
            </a>
          )}
          <a href={`mailto:${site.social.email}`} className={linkClass}>
            {coffee.emailLabel} · {site.social.email}
          </a>
          {resumeUrl && (
            <a href={resumeUrl} target="_blank" rel="noreferrer" className={linkClass}>
              {coffee.resumeLabel}
            </a>
          )}
          {!calUrl && !resumeUrl && <p className="text-[12px] text-text-3">{coffee.unavailable}</p>}
        </div>
      </div>
    </div>
  );
}
