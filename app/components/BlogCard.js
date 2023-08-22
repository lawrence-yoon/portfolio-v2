import Link from "next/link";

export default function BlogCard({ title, tldr, body, url }) {
  return (
    <article className="border border-gray-600 rounded-lg flex flex-col p-4 gap-1 max-w-lg md:gap-2">
      <h4>{title}</h4>
      <span>{tldr}</span>
      <p>{body}</p>
      <Link
        className="border border-gray-600 rounded-md py-1 px-2 self-end hover:border-white"
        href={`${url}`}
      >
        read more...
      </Link>
    </article>
  );
}
