"use client";

export default function BlogPage() {
  return (
    <div>
      <h3>blog page</h3>
      <BlogCard
        title="title here"
        tldr="tldr here"
        body="body here"
        handleClick={() => alert("blog card clicked")}
      />
    </div>
  );
}

export function BlogCard({ title, tldr, body, handleClick = () => {} }) {
  return (
    <article className="border" onClick={handleClick}>
      <h4>{title}</h4>
      <span>{tldr}</span>
      <p>{body}</p>
    </article>
  );
}
