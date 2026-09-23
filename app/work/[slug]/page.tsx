import Link from "next/link";
import { notFound } from "next/navigation";
import { work, workPage } from "@/content/work";

export function generateStaticParams() {
  return work.filter((item) => item.hasCase).map((item) => ({ slug: item.slug }));
}

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const item = work.find((w) => w.slug === slug && w.hasCase);
  if (!item?.caseStudy) notFound();
  const cs = item.caseStudy;

  const rows = [
    { label: workPage.rowLabels.mess, text: cs.mess, color: "text-red" },
    { label: workPage.rowLabels.call, text: cs.call, color: "text-accent" },
    { label: workPage.rowLabels.system, text: cs.system, color: "text-text-3" },
    { label: workPage.rowLabels.result, text: cs.result, color: "text-green" },
  ];

  return (
    <div className="h-full p-12 max-[720px]:px-5 max-[720px]:py-7">
      <div className="mx-auto max-w-[640px]">
        <Link
          href="/work"
          className="mb-7 inline-block text-[13px] text-text-2 transition-colors duration-150 hover:text-text"
        >
          {workPage.backLabel}
        </Link>
        <h1 className="text-[24px] font-semibold tracking-[-0.01em]">
          {item.title}
          {workPage.caseTitleSuffix}
        </h1>
        <p className="mt-[6px] mb-[10px] font-mono text-[12px] text-text-3">{cs.scope}</p>
        {rows.map((row) => (
          <div key={row.label} className="mt-4 flex gap-4">
            <span
              className={`min-w-[92px] pt-[3px] font-mono text-[11px] tracking-[0.08em] ${row.color}`}
            >
              {row.label}
            </span>
            <p className="text-[14px] text-text-2">{row.text}</p>
          </div>
        ))}
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
