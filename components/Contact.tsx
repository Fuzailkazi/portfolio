import { content } from "@/content";

export default function Contact() {
  const { contact } = content;
  return (
    <section id="contact" className="py-20">
      <div>
        <h2>{contact.title}</h2>
        <p>
          Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
        <div>
          <a href={contact.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {" | "}
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
