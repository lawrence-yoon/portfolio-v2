import Link from "next/link";

export default function BlogPost({ title, tldr, children }) {
  return (
    <div className="h-full flex flex-col min-w-[375px] gap-2 md:w-screen">
      <Link
        className="border border-gray-600 rounded-md py-1 px-2 self-end order-2 hover:border-white md:self-start md:order-1 md:ml-4"
        href="/blog"
      >
        back to blog
      </Link>
      <article className="flex flex-col p-4 overflow-scroll order-1 gap-4 mx-auto max-w-[768px] md:order-2">
        <h3 className="text-xl order-2">{title}</h3>
        <p className="order-3 md:order-4">tldr: {tldr}</p>
        <div className="order-4 flex flex-col gap-4 md:order-3">{children}</div>
      </article>
    </div>
  );
}
