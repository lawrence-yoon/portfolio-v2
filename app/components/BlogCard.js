export default function BlogCard({
  title,
  tldr,
  body,
  handleClick = () => {},
}) {
  return (
    <article className="border rounded-lg flex flex-col p-4 gap-1 max-w-lg md:gap-2">
      <h4>{title}</h4>
      <span>{tldr}</span>
      <p>{body}</p>
      <button
        className="border rounded-md py-1 px-2 self-end"
        onClick={handleClick}
      >
        read more...
      </button>
    </article>
  );
}
