import { content } from "@/content";

export default function Hero() {
  const { hero } = content;
  return (
    <section id="hero" className="py-20">
      <div>
        <h1>{hero.title}</h1>
        <p>{hero.subtitle}</p>
        <button type="button">{hero.ctaText}</button>
      </div>
    </section>
  );
}
