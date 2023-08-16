import React from "react";
import Image from "next/image";

export default function ProjectsCard({
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
    <article className="border rounded-lg flex flex-col p-2 max-w-lg">
      <Image src={imageSrc} alt={imageAlt} />
      <h4 className="text-xl font-bold">{title}</h4>
      <h5 className="text-md">{tldr}</h5>
      <div className="flex flex-wrap justify-around">
        {tagsArray
          ? tagsArray.map((chip, index) => (
              <span
                className="text-xs border border-transparent bg-slate-600 rounded-md px-2 py-1"
                key={index}
              >
                {chip}
              </span>
            ))
          : null}
      </div>
      <ul className="flex justify-center">
        <li>
          <a href={githubLink}>github link</a>
        </li>
        <span>|</span>
        <li>
          <a href={liveLink}>live link</a>
        </li>
      </ul>
      <p>{description}</p>
      <button
        className="border border-gray-400 text-gray-400 rounded-full w-fit self-center px-4 py-1 hover:border-white hover:text-white active:border-gray-400 active:text-gray-400"
        onClick={handleClick}
      >
        more details
      </button>
    </article>
  );
}
