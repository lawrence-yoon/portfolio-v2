import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    <article className="border rounded-lg flex flex-col p-4 gap-1 max-w-lg md:gap-2">
      {/* <Image src={imageSrc} alt={imageAlt} /> */}
      <h4 className="text-xl font-bold">{title}</h4>
      <h5 className="text-md">{tldr}</h5>
      <div className="flex flex-wrap gap-4 justify-center">
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
      <p>{description}</p>
      {/* <button
        className="border border-gray-400 text-gray-400 rounded-full w-fit self-center px-4 py-1 hover:border-white hover:text-white active:border-gray-400 active:text-gray-400"
        onClick={handleClick}
      >
        more details
      </button> */}
      <ul className="flex justify-end text-sm">
        <li>
          <Link title={githubLink} href={githubLink} target="_blank">
            github link
          </Link>
        </li>
        <span>|</span>
        <li>
          <Link title={liveLink} href={liveLink} target="_blank">
            live link
          </Link>
        </li>
      </ul>
    </article>
  );
}
