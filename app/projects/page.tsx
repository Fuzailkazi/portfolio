import Link from "next/link";
import { projects } from "@/content/projects";
import { projectStories } from "@/content/project-stories";

export default function ProjectsPage() {
  return (
    <div className="shell collection-page">
      <header className="page-intro">
        <h1>Things I’m building</h1>
        <p>
          Personal projects across work context, agent security, AI model selection, and product
          decisions. Each story covers the problem, the decisions, and what I learned by building.
        </p>
      </header>
      {projects.map((project, index) => {
        const story = projectStories.find((item) => project.url === `/projects/${item.slug}`);
        return (
          <article className="experience-detail" key={project.title}>
            <div>
              <span className="small-label">0{index + 1} / Personal project</span>
              <h2>{story?.title ?? project.title}</h2>
            </div>
            <div>
              <p className="experience-summary">{story?.subtitle ?? project.description}</p>
              <p className="mt-4 text-text-2">{story?.intro[0] ?? project.description}</p>
              <div className="action-row">
                <Link className="text-link" href={project.url ?? "/projects"}>
                  Read story →
                </Link>
                {story?.actions.map((action) => (
                  <a
                    className="text-link"
                    key={action.href}
                    href={action.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {action.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
