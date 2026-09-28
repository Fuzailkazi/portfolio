import Link from "next/link";
import Image from "next/image";
import { ChangelogTail } from "@/components/ui/ChangelogTail";
import { ContactLinks } from "@/components/ui/Header";
import { site } from "@/content/site";
import { experience } from "@/content/experience";
import { projects } from "@/content/projects";
import { projectStories } from "@/content/project-stories";
import { caseStudies } from "@/content/case-studies";
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
        <p className="profile-role">AI product · Product engineering · DevRel · GTM</p>
        <ContactLinks />
        <p>
          I’m a product manager and builder at ArmorIQ. I work on AI products, developer relations,
          and go-to-market, and lead our India operations.
        </p>
        <p>
          I also build my own tools, prototype agents, and write about what I learn along the way.
        </p>
        <div className="profile-links">
          <Link href="/about">More about me →</Link>
          {process.env.RESUME_URL && (
            <a href={process.env.RESUME_URL} target="_blank" rel="noreferrer">
              Resume ↗
            </a>
          )}
        </div>
      </section>

      <section className="portfolio-section">
        <div className="section-heading">
          <h2>Work</h2>
          <Link className="text-link" href="/work">
            View all →
          </Link>
        </div>
        {experience.map((item) => (
          <article className="profile-experience" key={item.company}>
            <div className="experience-title">
              <Link href={`/work#${item.company.toLowerCase().replaceAll(" ", "-")}`}>
                <h3>{item.company}</h3>
              </Link>
              <span>{item.period}</span>
            </div>
            <p className="profile-role">{item.role}</p>
            <p>{renderEmphasis(item.summary)}</p>
          </article>
        ))}
      </section>

      <section className="portfolio-section" id="case-studies">
        <div className="section-heading">
          <h2>Case studies</h2>
          <Link className="text-link" href="/case-studies">
            View all →
          </Link>
        </div>
        <p className="section-intro">
          Product research, UX audits, and independent product exercises.
        </p>
        <div className="study-grid">
          {caseStudies.slice(0, 2).map((study) => (
            <a
              className="study-preview"
              key={study.title}
              href={study.href}
              target="_blank"
              rel="noreferrer"
            >
              {study.thumbnail && (
                <div
                  className="study-cover"
                  role="img"
                  aria-label={`${study.title} cover`}
                  style={{ backgroundImage: `url(${study.thumbnail})` }}
                />
              )}
              <div className="study-copy">
                <span className="small-label">{study.format}</span>
                <h3>{study.title}</h3>
                <p>{study.summary}</p>
                <span className="text-link">View ↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="portfolio-section">
        <div className="section-heading">
          <h2>Things I’m building</h2>
          <Link className="text-link" href="/projects">
            View all →
          </Link>
        </div>
        {projects.map((project) => {
          const story = projectStories.find((item) => project.url === `/projects/${item.slug}`);
          return (
            <article className="profile-project" key={project.title}>
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
            <span className="small-label">{note.readTime} ↗</span>
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
