import { notFound } from "next/navigation";
import { getNote, getNoteSlugs } from "@/lib/notes";

export async function generateStaticParams() {
  const slugs = await getNoteSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function NotePage(props: PageProps<"/notes/[slug]">) {
  const { slug } = await props.params;
  const note = await getNote(slug);
  if (!note) notFound();

  return (
    <div className="h-full p-12">
      <h1>{note.title}</h1>
    </div>
  );
}
