"use client";
import Link from "next/link";
import ProjectsCard from "../components/ProjectsCard";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-2 p-4 w-screen items-center md:gap-4">
      <ProjectsCard
        imageSrc=""
        imageAlt=""
        tagsArray={["reactjs", "nextjs"]}
        title="Where in the world?"
        tldr="Front end web application for "
        description="This web application utilizes REST countries api data from https://restcountries.com/. Features include search and filter fields, dark mode, dynamic routes, responsive media breakouts.  "
        liveLink=""
        githubLink=""
        handleClick={() => alert("clicked world")}
      />
      <ProjectsCard
        imageSrc=""
        imageAlt=""
        tagsArray={["reactjs", "nextjs", "css-modules"]}
        title="Space Tourism"
        tldr="Nextjs web application developed from designer's Figma design file"
        description="descriptions here"
        liveLink=""
        githubLink=""
        handleClick={() => alert("clicked space")}
      />
      <ProjectsCard
        imageSrc=""
        imageAlt=""
        tagsArray={["reactjs", "nextjs"]}
        title="Taskboard"
        tldr="Fullstack MERN Kanban Application"
        description="first big project. made from scratch, aside from react router and icons."
        liveLink=""
        githubLink=""
        handleClick={() => alert("clicked taskboard")}
      />
      <Link href="/blog">misc projects</Link>
    </div>
  );
}
