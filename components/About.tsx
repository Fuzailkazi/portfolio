import { content } from "@/content";

export default function About() {
  const { about } = content;
  return (
    <section id="about" className="py-20">
      <div>
        <h2>{about.title}</h2>
        {about.bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
