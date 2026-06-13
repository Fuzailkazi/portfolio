import { WorkCards } from "@/components/ui/WorkCards";
import { site } from "@/content/site";

export default function WorkPage() {
  return (
    <div className="h-full p-12">
      <h1 className="sr-only">{site.pages.work}</h1>
      <WorkCards />
    </div>
  );
}
