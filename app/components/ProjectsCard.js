import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsCard({
  imageSrc,
  imageAlt,
  imageSrcM,
  imageAltM,
  tagsArray,
  title,
  tldr,
  description,
  liveLink,
  githubLink,
  handleClick = () => {},
}) {
  return (
    <article className="border border-gray-600 rounded-lg flex flex-col p-4 gap-2 max-w-2xl md:gap-4">
      <h4 className="text-xl font-bold">{title}</h4>
      <h5 className="text-md">{tldr}</h5>
      <div className="flex flex-wrap gap-4 justify-start">
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
      <div className="flex flex-row h-52 md:h-[20rem]">
        <div className="relative w-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain"
          />
        </div>
        {imageSrcM && (
          <div className="relative w-full">
            <Image
              src={imageSrcM}
              alt={imageAltM}
              fill
              className="object-contain"
            />
          </div>
        )}
      </div>
      <p>{description}</p>
      {/* <button
        className="border border-gray-400 text-gray-400 rounded-full w-fit self-center px-4 py-1 hover:border-white hover:text-white active:border-gray-400 active:text-gray-400"
        onClick={handleClick}
      >
        more details
      </button> */}
      <ul className="flex justify-end text-sm">
        <li className="text-blue-300">
          <Link title={githubLink} href={githubLink} target="_blank">
            github link
          </Link>
        </li>
        <span>|</span>
        <li className="text-blue-300">
          <Link title={liveLink} href={liveLink} target="_blank">
            live link
          </Link>
        </li>
      </ul>
    </article>
  );
}
