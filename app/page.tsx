import Link from "next/link";
import Image from "next/image";
import { ChangelogTail } from "@/components/ui/ChangelogTail";
import { site } from "@/content/site";
import { experience } from "@/content/experience";
import { projects } from "@/content/projects";
import { projectStories } from "@/content/project-stories";
import { pmPortfolio } from "@/content/pm-portfolio";
import { getAllNotes } from "@/lib/notes";

function renderEmphasis(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index} className="font-semibold text-text">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    ),
  );
}

export default async function HomePage() {
  const notes = (await getAllNotes()).slice(0, 3);
  return (
    <div className="shell home-page">
      <section className="profile-intro">
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 16 }}>
          <Image
            style={{
              width: 80,
              height: 80,
              flexShrink: 0,
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "50% 8%",
            }}
            src="/fuzail-kazi.jpeg"
            alt="Fuzail Kazi"
            width={80}
            height={80}
            preload
          />
          <h1>{site.name}</h1>
        </div>
        <p className="profile-role">{site.role}</p>
        <h2 className="profile-positioning">{pmPortfolio.intro}</h2>
        <p>{pmPortfolio.bio}</p>
        <div className="profile-links">
          <Link className="primary-action" href="/work">
            {pmPortfolio.actions.work} →
          </Link>
          <Link href="/about">{pmPortfolio.actions.about}</Link>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="section-heading">
          <h2>{pmPortfolio.experienceTitle}</h2>
          <Link className="text-link" href="/work">
            View all →
          </Link>
        </div>
        {experience.map((item) => (
          <article className="profile-experience" key={item.company}>
            <div className="experience-title">
              <Link href={`/work#${item.company.toLowerCase().replaceAll(" ", "-")}`}>
                <h3>{item.displayCompany ?? item.company}</h3>
              </Link>
              <span>{item.period}</span>
            </div>
            <p className="profile-role">{item.role}</p>
            <p>{renderEmphasis(item.summary)}</p>
          </article>
        ))}
      </section>

      <section className="portfolio-section">
        <div className="section-heading">
          <h2>Builds</h2>
          <Link className="text-link" href="/projects">
            View all →
          </Link>
        </div>
        {projects.map((project) => {
          const story = projectStories.find((item) => project.url === `/projects/${item.slug}`);
          return (
            <article className="profile-project" key={project.title}>
              {project.statusLabel && (
                <p className="mb-2 flex items-center gap-2 text-[12px] text-text-2">
                  <span aria-hidden="true" className="h-[7px] w-[7px] animate-pulse-dot rounded-full bg-black" />
                  {project.statusLabel}
                </p>
              )}
              <Link href={project.url ?? "/projects"}>
                <h3>{story?.title ?? project.title}</h3>
              </Link>
              <p>{story?.subtitle ?? project.description}</p>
              <div className="profile-links">
                <Link href={project.url ?? "/projects"}>Read story →</Link>
                {story?.actions[0] && (
                  <a href={story.actions[0].href} target="_blank" rel="noreferrer">
                    {story.actions[0].label} ↗
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </section>

      <section className="portfolio-section">
        <div className="section-heading">
          <h2>Writing</h2>
          <Link className="text-link" href="/notes">
            View all →
          </Link>
        </div>
        {notes.map((note) => (
          <Link className="writing-row" key={note.slug} href={`/notes/${note.slug}`}>
            <div>
              <h3>{note.title}</h3>
              <p>{note.excerpt}</p>
            </div>
          </Link>
        ))}
      </section>
      <section className="portfolio-section">
        <h2>Recently</h2>
        <ChangelogTail />
      </section>
    </div>
  );
}
