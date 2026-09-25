import Link from "next/link";
import { notFound } from "next/navigation";
import { projectStories, projectStoryPage } from "@/content/project-stories";

export function generateStaticParams() {
  return projectStories.map((story) => ({ slug: story.slug }));
}

export default async function ProjectStoryPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const story = projectStories.find((item) => item.slug === slug);
  if (!story) notFound();

  return (
    <div className="shell collection-page">
      <article className="mx-auto max-w-[680px]">
        <Link
          href="/projects"
          className="mb-7 inline-block text-[13px] text-text-2 transition-colors duration-150 hover:text-text"
        >
          {projectStoryPage.backLabel}
        </Link>

        <header>
          <h1 className="text-[28px] font-semibold tracking-[-0.01em]">{story.title}</h1>
          <p className="mt-1 text-[15px] text-text-2">{story.subtitle}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {story.actions.map((action) => (
              <a
                key={action.href}
                href={action.href}
                target="_blank"
                rel="noreferrer"
                className="rounded border border-border px-3 py-1.5 text-[12px] text-accent transition-colors duration-150 hover:border-border-2"
              >
                {action.label} ↗
              </a>
            ))}
          </div>
        </header>

        <div className="mt-8 space-y-4 text-[16px] text-text-2">
          {story.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <blockquote className="mt-6 border-l-2 border-accent pl-4 text-[15px] font-medium text-text">
          {story.principle}
        </blockquote>

        <div className="mt-9 space-y-9">
          {story.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-[18px] font-semibold tracking-[-0.01em]">{section.title}</h2>
              {section.body ? (
                <div className="mt-3 space-y-3 text-[16px] text-text-2">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : null}
              {section.bullets ? (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[16px] text-text-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
              {section.examplesTitle ? (
                <p className="mt-4 text-[16px] text-text-2">{section.examplesTitle}</p>
              ) : null}
              {section.examples ? (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[16px] text-text-2">
                  {section.examples.map((example) => (
                    <li key={example}>&ldquo;{example}&rdquo;</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
