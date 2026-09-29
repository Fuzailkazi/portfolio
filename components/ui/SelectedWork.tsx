import Link from "next/link";
import { caseLabels, productCases } from "@/content/pm-portfolio";

export function SelectedWork() {
  return (
    <div className="selected-work-grid">
      {productCases.map((item) => (
        <Link className="product-case-card" href={`/work/${item.slug}`} key={item.slug}>
          <span className="small-label">
            {item.company} · {item.focus}
          </span>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          <p className="case-outcome">{item.outcome}</p>
          <span className="text-link">{caseLabels.read}</span>
        </Link>
      ))}
    </div>
  );
}
