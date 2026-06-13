import { WorkCards } from "@/components/ui/WorkCards";
import { site } from "@/content/site";

export default function WorkPage() {
  return (
    // Scroll region: centers the cards when they fit, scrolls with even
    // top/bottom padding when they don't (9 cards overflow one viewport).
    <div className="h-full overflow-y-auto max-[720px]:overflow-visible">
      <div className="flex min-h-full w-full flex-col justify-center px-12 py-12 max-[720px]:px-5 max-[720px]:py-7">
        <h1 className="sr-only">{site.pages.work}</h1>
        <WorkCards />
      </div>
    </div>
  );
}
