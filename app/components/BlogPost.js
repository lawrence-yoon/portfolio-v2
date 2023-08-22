import Link from "next/link";

export default function BlogPost({ title, tldr, children }) {
  return (
    <div className="p-4 h-full flex flex-col max-w-xl min-w-[375px] gap-2 md:w-[768px]">
      <Link
        className="border border-gray-600 rounded-md py-1 px-2 order-5 self-end hover:border-white md:self-start md:order-1"
        href="/blog"
      >
        back
      </Link>
      <h3 className="text-xl order-2">{title}</h3>
      <p className="text-lg order-3">{tldr}</p>
      <div className="order-4">{children}</div>
    </div>
  );
}
