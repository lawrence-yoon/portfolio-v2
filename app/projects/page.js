"use client";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div>
      <h3>projects</h3>
      <ProjectsCard
        imageSrc=""
        imageAlt=""
        tagsArray={["nextjs", "reactjs"]}
        title="Where in the world?"
        tldr="Nextjs web application utilizing REST countries api"
        description="descriptions here"
        liveLink=""
        githubLink=""
        handleClick={() => alert("clicked")}
      />
      <ProjectsCard
        imageSrc=""
        imageAlt=""
        tagsArray={["nextjs", "css-modules"]}
        title="Space Tourism"
        tldr="Nextjs web application created with Figma design file"
        description="descriptions here"
        liveLink=""
        githubLink=""
        handleClick={() => alert("clicked")}
      />
      <ProjectsCard
        imageSrc=""
        imageAlt=""
        tagsArray={["nextjs", "reactjs"]}
        title="Taskboard"
        tldr="Fullstack MERN Application"
        description="first big project. made from scratch, aside from react router and icons."
        liveLink=""
        githubLink=""
        handleClick={() => alert("clicked")}
      />
      <Link href="/blog">misc projects</Link>
    </div>
  );
}

export function ProjectsCard({
  imageSrc,
  imageAlt,
  tagsArray,
  title,
  tldr,
  description,
  liveLink,
  githubLink,
  handleClick = () => {},
}) {
  return (
    <article className="border" onClick={handleClick}>
      <Image src={imageSrc} alt={imageAlt} />
      <h4>{title}</h4>
      <h5>{tldr}</h5>
      <div>
        {tagsArray
          ? tagsArray.map((chip, index) => <span key={index}>{chip} </span>)
          : null}
      </div>
      <ul>
        <li>
          <a href={githubLink}>github link</a>
        </li>
        <li>
          <a href={liveLink}>live link</a>
        </li>
      </ul>
      <p>{description}</p>
    </article>
  );
}
