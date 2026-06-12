import { content } from "@/content";

export default function Writing() {
  const { writing } = content;
  return (
    <section id="writing" className="py-20">
      <div>
        <h2>{writing.title}</h2>
        <div>
          {writing.posts.map((post) => (
            <article key={post.id}>
              <span>{post.date}</span>
              <h3>
                <a href={post.link}>{post.title}</a>
              </h3>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
