import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { site } from "@/content/site";
import { formatNoteDate, getNote, getNoteSlugs } from "@/lib/notes";

export async function generateStaticParams() {
  const slugs = await getNoteSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function NotePage(props: PageProps<"/notes/[slug]">) {
  const { slug } = await props.params;
  const note = await getNote(slug);
  if (!note) notFound();

  return (
    <div className="shell collection-page">
      <div className="mx-auto max-w-[560px]">
        <Link
          href="/notes"
          className="mb-7 inline-block text-[13px] text-text-2 transition-colors duration-150 hover:text-text"
        >
          {site.notes.backLabel}
        </Link>
        <h1 className="text-[24px] font-semibold tracking-[-0.01em]">{note.title}</h1>
        <p className="mt-[6px] mb-6 text-[12px] text-text-3">
          {note.readTime} · {formatNoteDate(note.date)}
        </p>
        <div className="space-y-4 text-[16px] text-text-2">
          <ReactMarkdown>{note.body}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
