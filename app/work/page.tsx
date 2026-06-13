import { WorkCards } from "@/components/ui/WorkCards";
import { site } from "@/content/site";

export default function WorkPage() {
  return (
    <div className="h-full p-12 max-[720px]:px-5 max-[720px]:py-7">
      <h1 className="sr-only">{site.pages.work}</h1>
      <WorkCards />
    </div>
  );
}
