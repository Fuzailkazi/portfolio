import { caseStudies } from "@/content/case-studies";
import { site } from "@/content/site";

export default function CaseStudiesPage() {
  return (
    <div className="h-full overflow-y-auto p-12 max-[720px]:px-5 max-[720px]:py-7">
      <div className="mx-auto max-w-[760px]">
        <h1 className="mb-2 text-[24px] font-semibold tracking-[-0.02em]">{site.pages.caseStudies}</h1>
        <p className="mb-6 text-[14px] text-text-2">
          Product Manager Fellowship work and product exercises, separate from my professional experience and deployed builds.
        </p>
        <div className="grid grid-cols-2 gap-[14px] max-[720px]:grid-cols-1">
          {caseStudies.map((study) => (
            <a
              key={study.title}
              className="block overflow-hidden rounded border border-border text-text no-underline transition-colors duration-150 hover:border-border-2"
              href={study.href}
              target="_blank"
              rel="noreferrer"
            >
              {"thumbnail" in study && study.thumbnail ? (
                <div
                  aria-label={`${study.title} thumbnail`}
                  className="h-[132px] border-b border-border bg-[#F6F6F6] bg-cover bg-center max-[720px]:h-[160px]"
                  role="img"
                  style={{ backgroundImage: `url(${study.thumbnail})` }}
                />
              ) : null}
              <div className="p-4">
                <span className="font-mono text-[10px] tracking-[0.08em] text-accent">{study.format}</span>
                <h2 className="mt-2 text-[15px] font-semibold">{study.title}</h2>
                <p className="mt-1 text-[13px] text-text-2">{study.summary}</p>
                <span className="mt-3 inline-block text-[12px] text-accent">
                  {study.linkLabel} ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
