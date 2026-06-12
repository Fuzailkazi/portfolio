import { content } from "@/content";

export default function SelectedWork() {
  const { selectedWork } = content;
  return (
    <section id="selected-work" className="py-20">
      <div>
        <h2>{selectedWork.title}</h2>
        <div>
          {selectedWork.projects.map((project) => (
            <article key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
