"use client";
import BlogCard from "../components/BlogCard";

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-4 p-4 max-w-lg items-center mx-auto">
      <BlogCard
        title="handwired-corne-keyboard"
        tldr="If you are somewhat maker inclined, and not keen on spending hundreds of dollars on a typical mechanical keyboard, instead look to a diy solution. The materials cost for my split keyboard was roughly $40 dollars."
        body="body here. dynamic route it to blog/[id] or something. this will actually be under the dynamic route. hidden away until someone clicks read more. i want to avoid a modal popping up, and instead it navs to a page with a layout including a back button, back taking you back to the /blog root, essentially the table of contents."
        handleClick={() => alert("blog card clicked")}
      />
    </div>
  );
}
