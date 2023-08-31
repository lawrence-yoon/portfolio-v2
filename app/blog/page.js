"use client";
import BlogCard from "../components/BlogCard";

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-4 p-4 w-screen items-center mx-auto">
      {/* <h3>my blogs</h3> */}
      <BlogCard
        title="handwired-corne-keyboard"
        tldr="If you are somewhat maker inclined, and not keen on spending hundreds of dollars on a typical mechanical keyboard, instead look to a diy solution. The materials cost for my split keyboard was roughly $40 dollars."
        url="/blog/handwired-corne-keyboard"
      />
      <BlogCard
        title="arch-linux-i3"
        tldr="The minimalist diy programmer's best friend. Rice it out or leave it bare. With wonderful documentation, arch linux is a hobbyist's dream come true."
        url="/blog/arch-linux-i3"
      />
    </div>
  );
}
