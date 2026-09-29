import Link from "next/link";
import { site } from "@/content/site";
import { getAllNotes } from "@/lib/notes";

export default async function NotesPage() {
  const notes = await getAllNotes();

  return (
    <div className="shell collection-page">
      <div className="mx-auto max-w-[780px]">
        <header className="page-intro">
          <h1>{site.pages.notes}</h1>
          <p>{site.notes.intro}</p>
        </header>
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
          </Link>
        ))}
      </div>
    </div>
  );
}
