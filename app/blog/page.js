"use client";
import BlogCard from "../components/BlogCard";

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-4 p-4 max-w-lg items-center mx-auto">
      <BlogCard
        title="title here"
        tldr="tldr here"
        body="body here. dynamic route it to blog/[id] or something. essentially same layout as the projects page. but include the routing in the button press."
        handleClick={() => alert("blog card clicked")}
      />
    </div>
  );
}
