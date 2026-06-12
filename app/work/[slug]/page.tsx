import { notFound } from "next/navigation";
import { work } from "@/content/work";

export function generateStaticParams() {
  return work.filter((item) => item.hasCase).map((item) => ({ slug: item.slug }));
}

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const item = work.find((w) => w.slug === slug && w.hasCase);
  if (!item) notFound();

  return (
    <div className="h-full p-12">
      <h1>{item.title}</h1>
    </div>
  );
}
