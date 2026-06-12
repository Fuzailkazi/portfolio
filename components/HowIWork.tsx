import { content } from "@/content";

export default function HowIWork() {
  const { howIWork } = content;
  return (
    <section id="how-i-work" className="py-20">
      <div>
        <h2>{howIWork.title}</h2>
        <ol>
          {howIWork.steps.map((step) => (
            <li key={step.id}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
