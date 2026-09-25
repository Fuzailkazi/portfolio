import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { changelog, changelogPage } from "@/content/changelog";
import { site } from "@/content/site";

export default function ChangelogPage() {
  return (
    <div className="shell collection-page">
      <div className="mx-auto max-w-[640px]">
        <header className="page-intro">
          <h1>{site.pages.changelog}</h1>
        </header>
        <Link
          href="/"
          className="mb-7 inline-block text-[13px] text-text-2 transition-colors duration-150 hover:text-text"
        >
          {changelogPage.backLabel}
        </Link>
        <SectionLabel>{changelogPage.label}</SectionLabel>
        {changelog.map((entry) => (
          <div
            key={entry.version}
            className="flex items-baseline gap-[18px] border-b border-border py-[10px] max-[720px]:flex-wrap"
          >
            <span className="min-w-[44px] font-mono text-[13px] text-accent">{entry.version}</span>
            <span className="min-w-[76px] font-mono text-[12px] text-text-3">{entry.date}</span>
            <p className="text-[14px]">{entry.entry}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
