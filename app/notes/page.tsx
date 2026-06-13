import Link from "next/link";
import { site } from "@/content/site";
import { formatNoteDate, getAllNotes } from "@/lib/notes";

export default async function NotesPage() {
  const notes = await getAllNotes();

  return (
    <div className="h-full p-12">
      <h1 className="sr-only">{site.pages.notes}</h1>
      <div className="mx-auto max-w-[560px]">
        <p className="mb-2 text-[14px] text-text-2">{site.notes.intro}</p>
        {notes.map((note) => (
          <Link
            key={note.slug}
            href={`/notes/${note.slug}`}
            className="group block cursor-pointer border-b border-border py-[18px]"
          >
            <b className="text-[16px] font-semibold transition-colors duration-150 group-hover:text-accent">
              {note.title}
            </b>
            <p className="mt-1 text-[13px] text-text-2">{note.excerpt}</p>
            <span className="mt-[6px] block text-[12px] text-text-3">
              {note.readTime} · {formatNoteDate(note.date)}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
