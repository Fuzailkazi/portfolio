import Link from "next/link";
import { ChangelogTail } from "@/components/ui/ChangelogTail";
import { changelog } from "@/content/changelog";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <div className="mx-auto flex h-full w-full max-w-[720px] flex-col justify-center p-12 max-[720px]:px-5 max-[720px]:py-7">
      <h1 className="text-[44px] font-semibold tracking-[-0.02em] max-[720px]:text-[34px]">
        {site.logo}
        <Link
          href="/changelog"
          className="ml-[6px] cursor-pointer border-b border-dotted border-border-2 font-mono text-[14px] font-normal text-text-3"
        >
          {changelog[0].version}
        </Link>
      </h1>
      <p className="mt-2 text-[17px] text-text-2">{site.role}</p>
      <p className="mt-[2px] text-[14px] text-text-2">{site.positioning}</p>
      <ChangelogTail />
    </div>
  );
}
