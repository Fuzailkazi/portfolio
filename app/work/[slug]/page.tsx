import { caseLabels, productCases } from "@/content/pm-portfolio";
import Link from "next/link";
import { notFound } from "next/navigation";
import { work, workPage } from "@/content/work";

function renderEmphasis(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index} className="font-semibold text-text">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    ),
  );
}

export function generateStaticParams() {
  return work.filter((item) => item.hasCase).map((item) => ({ slug: item.slug }));
}

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const item = work.find((w) => w.slug === slug && w.hasCase);
  if (!item?.caseStudy) notFound();
  const cs = item.caseStudy;
  const productCase = productCases.find((entry) => entry.slug === slug);
  const titleSuffix = item.detailTitleSuffix ?? workPage.caseTitleSuffix;

  const rows = [
    { label: workPage.rowLabels.mess, text: cs.mess, color: "text-red" },
    { label: workPage.rowLabels.call, text: cs.call, color: "text-accent" },
    { label: workPage.rowLabels.system, text: cs.system, color: "text-text-3" },
    { label: workPage.rowLabels.result, text: cs.result, color: "text-green" },
  ].filter((row): row is typeof row & { text: string } => Boolean(row.text));

  return (
    <div className="shell collection-page">
      <div className="mx-auto max-w-[640px]">
        <Link
          href="/work"
          className="mb-7 inline-block text-[13px] text-text-2 transition-colors duration-150 hover:text-text"
        >
          {workPage.backLabel}
        </Link>
        <h1 className="text-[24px] font-semibold tracking-[-0.01em]">
          {productCase ? productCase.title : `${item.title}${titleSuffix}`}
        </h1>
        <p className="mt-[6px] mb-[10px] font-mono text-[12px] text-text-3">{productCase ? `${productCase.company} · ${productCase.focus}` : cs.scope}</p>
        {productCase && (
          <div className="product-story">
            <p className="story-role">
              <strong>{caseLabels.scope}: </strong>
              {productCase.role}
            </p>
            {productCase.evidence.length > 0 && (
              <dl className="outcome-grid story-evidence">
                {productCase.evidence.map((figure) => (
                  <div key={figure.label}>
                    <dt>{figure.label}</dt>
                    <dd>{figure.value}</dd>
                  </div>
                ))}
              </dl>
            )}
            {[
              { label: caseLabels.context, text: productCase.context },
              { label: caseLabels.decision, text: productCase.decision },
              { label: caseLabels.approach, text: productCase.approach },
              { label: caseLabels.outcome, text: productCase.outcomeDetail },
            ].map((section) => (
              <section key={section.label}>
                <h2>{section.label}</h2>
                <p>{section.text}</p>
              </section>
            ))}
          </div>
        )}
        <details className="role-details" open={productCase ? undefined : true}>
          <summary>{caseLabels.more}</summary>
          {cs.intro && (
            <p className="mt-5 text-[15px] leading-7 text-text-2">{renderEmphasis(cs.intro)}</p>
          )}
          {cs.figures && cs.figures.length > 0 && (
            <dl className="mt-6 grid grid-cols-2 gap-3 max-[520px]:grid-cols-1">
              {cs.figures.map((figure) => (
                <div key={figure.label} className="flex flex-col rounded border border-border p-4">
                  <dt className="order-2 mt-1 text-[13px] leading-5 text-text-2">{figure.label}</dt>
                  <dd className="order-1 text-[28px] font-semibold tracking-[-0.02em] text-text">
                    {figure.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}
          {cs.chapters && cs.chapters.length > 0
            ? cs.chapters.map((chapter) => (
                <section key={chapter.title} className="mt-9">
                  <h2 className="text-[18px] font-semibold">{chapter.title}</h2>
                  <ul className="mt-4 space-y-3 pl-5 text-[14px] leading-6 text-text-2 marker:text-accent">
                    {chapter.points.map((point) => (
                      <li key={point}>{renderEmphasis(point)}</li>
                    ))}
                  </ul>
                </section>
              ))
            : rows.map((row) => (
                <div
                  key={row.label}
                  className="mt-6 flex gap-4 max-[720px]:flex-col max-[720px]:gap-2"
                >
                  <span
                    className={`min-w-[92px] pt-[3px] font-mono text-[11px] tracking-[0.08em] ${row.color}`}
                  >
                    {row.label}
                  </span>
                  <p className="text-[14px] text-text-2">{renderEmphasis(row.text)}</p>
                </div>
              ))}
          {cs.resources && cs.resources.length > 0 && (
            <section className="mt-10 border-t border-border pt-6">
              <h2 className="text-[18px] font-semibold">Supporting work</h2>
              <ul className="mt-3 space-y-2">
                {cs.resources.map((resource) => (
                  <li key={resource.href}>
                    <Link
                      className="text-link"
                      href={resource.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {resource.label}
                      {resource.kind ? ` · ${resource.kind}` : ""} →
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </details>
        {workPage.slots.length > 0 && (
          <div className="mt-7 flex gap-3">
            {workPage.slots.map((slot) => (
              <div
                key={slot}
                className="flex-1 rounded border border-dashed border-border-2 p-5 text-center text-[12px] text-text-3"
              >
                {slot}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
