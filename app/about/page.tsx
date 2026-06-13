import { SectionLabel } from "@/components/ui/SectionLabel";
import { about } from "@/content/about";
import { manual } from "@/content/manual";
import { site } from "@/content/site";
import { taste } from "@/content/taste";

export default function AboutPage() {
  const tasteTiles = [
    { label: about.tasteLabels.now, value: taste.now },
    { label: about.tasteLabels.stack, value: taste.stack.join(" · ") },
    { label: about.tasteLabels.reading, value: taste.reading },
    { label: about.tasteLabels.obsessedWith, value: taste.obsessedWith },
  ];

  return (
    <div className="h-full p-12 max-[720px]:px-5 max-[720px]:py-7">
      <h1 className="sr-only">{site.pages.about}</h1>
      <div className="mx-auto max-w-[640px]">
        <p className="mb-8 max-w-[540px] text-[15px] text-text-2">{about.bio}</p>

        <SectionLabel>{about.labels.trajectory}</SectionLabel>
        <div className="mb-8 border-l-2 border-border-2 pl-5">
          {about.trajectory.map((item) => (
            <div key={item.version} className="relative mb-[14px]">
              <span className="absolute top-[7px] -left-[25px] h-2 w-2 rounded-full bg-accent" />
              <span className="mr-2 font-mono text-[12px] text-accent">{item.version}</span>
              <b className="text-[14px] font-semibold">{item.role}</b>
              <span className="ml-2 text-[12px] text-text-3">{item.date}</span>
              <p className="mt-[2px] text-[13px] text-text-2">{item.line}</p>
            </div>
          ))}
        </div>

        <SectionLabel>{about.labels.whatIRun}</SectionLabel>
        {about.runs.map((run) => (
          <div key={run.name} className="mb-[10px] flex items-baseline gap-[14px]">
            <b className="min-w-[180px] text-[14px] font-semibold">{run.name}</b>
            <p className="text-[13px] text-text-2">{run.description}</p>
          </div>
        ))}
        <p className="mt-[14px] mb-8 font-mono text-[12px] text-text-3">{about.runScope}</p>

        <SectionLabel>{about.labels.operatingManual}</SectionLabel>
        <div className="mb-8 grid grid-cols-2 gap-x-6 gap-y-[10px] max-[720px]:grid-cols-1">
          {manual.map((item) => (
            <p key={item.claim} className="text-[13px] text-text-2">
              <b className="font-semibold text-text">{item.claim}</b> {item.explanation}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-[10px] max-[720px]:grid-cols-2">
          {tasteTiles.map((tile) => (
            <div key={tile.label} className="rounded-[8px] bg-gray-bg px-[14px] py-3">
              <span className="mb-[2px] block text-[11px] text-text-2">{tile.label}</span>
              <b className="text-[13px] font-semibold">{tile.value}</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
