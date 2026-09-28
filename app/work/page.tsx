import Link from "next/link";
import { experience } from "@/content/experience";

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

export default function WorkPage() {
  return (
    <div className="shell collection-page">
      <header className="page-intro">
        <h1>Experience</h1>
        <p>
          Product decisions, developer experience, launches, and the day-to-day work of getting a
          team moving in the same direction.
        </p>
      </header>
      {experience.map((item) => (
        <article
          className="experience-detail"
          id={item.company.toLowerCase().replaceAll(" ", "-")}
          key={item.company}
        >
          <div>
            <span className="small-label">{item.period}</span>
            <h2>{item.company}</h2>
            <p className="item-role">{item.role}</p>
          </div>
          <div>
            <p className="experience-summary">{renderEmphasis(item.summary)}</p>
            <ul className="contribution-list">
              {item.contributions.map((line) => (
                <li key={line}>{renderEmphasis(line)}</li>
              ))}
            </ul>
            {item.href && (
              <Link className="text-link" href={item.href}>
                {item.linkLabel ?? "Read the product case study →"}
              </Link>
            )}
          </div>
        </article>
      ))}
      <aside className="related-panel">
        <h2>More product thinking</h2>
        <p>
          Explore my fellowship case studies and independent exercises, from activation strategy to
          UX audits.
        </p>
        <Link className="text-link" href="/case-studies">
          Explore product case studies →
        </Link>
      </aside>
    </div>
  );
}
