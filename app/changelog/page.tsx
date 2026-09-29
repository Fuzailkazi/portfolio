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
        <SectionLabel>{changelogPage.label}</SectionLabel>
        <div className="mb-8 border-l-2 border-border-2 pl-5">
          {changelog.map((entry) => (
            <div key={entry.version} className="relative mb-[14px]">
              <span aria-hidden="true" className="absolute top-[7px] -left-[25px] h-2 w-2 rounded-full bg-accent" />
              <span className="mr-2 font-mono text-[12px] text-accent">{entry.version}</span>
              <span className="text-[12px] text-text-3">{entry.date}</span>
              <p className="mt-[2px] text-[13px] text-text-2">{entry.entry}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
