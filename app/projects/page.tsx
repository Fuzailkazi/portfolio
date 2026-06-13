import { CopyButton } from "@/components/ui/CopyButton";
import { projects, projectsPage } from "@/content/projects";
import { site } from "@/content/site";
import type { Project } from "@/lib/types";

function CardAction({ item }: { item: Project }) {
  switch (item.type) {
    case "live":
      return (
        <span className="rounded-full bg-accent-bg px-[9px] py-[2px] text-[11px] text-accent">
          {projectsPage.badgeLabel}
        </span>
      );
    case "link":
      return (
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer text-[12px] text-accent"
        >
          {projectsPage.visitLabel}
        </a>
      );
    case "prompt":
      return <CopyButton text={item.prompt ?? ""} />;
    default:
      return null;
  }
}

export default function ProjectsPage() {
  return (
    <div className="h-full p-12 max-[720px]:px-5 max-[720px]:py-7">
      <h1 className="sr-only">{site.pages.projects}</h1>
      <div className="mx-auto max-w-[980px]">
        <p className="mb-5 text-[14px] text-text-2">{projectsPage.intro}</p>
        <div className="grid grid-cols-3 gap-[14px] max-[720px]:grid-cols-1">
          {projects.map((item) =>
            item.type === "cooking" ? (
              <div
                key={item.title}
                className="flex items-center justify-center rounded border border-dashed border-border p-4 text-[13px] text-text-3 transition-all duration-200 hover:border-border-2 hover:bg-[#FCFCFC]"
              >
                {item.title}
              </div>
            ) : (
              <div
                key={item.title}
                className={`rounded p-4 transition-all duration-200 hover:bg-[#FCFCFC] ${
                  item.type === "live"
                    ? "border-2 border-accent"
                    : "border border-border hover:border-border-2"
                }`}
              >
                <div className="mb-2 flex items-center justify-between">
                  <b className="text-[14px] font-semibold">{item.title}</b>
                  <CardAction item={item} />
                </div>
                <p className="text-[13px] text-text-2">{item.description}</p>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
