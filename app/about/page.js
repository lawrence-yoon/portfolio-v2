import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function AboutPage() {
  const aboutTags = ["handwired-corne-keyboard", "arch-linux-i3"];
  return (
    <div className="flex flex-col p-4 w-screen h-full mx-auto">
      <article className="flex flex-col max-w-lg mx-auto pb-4 gap-4">
        <p>
          I am a New York City based, self taught full stack developer. I have
          experience in developing web applications with the MERN (mongodb,
          expressjs, reactjs, nodejs) stack, nextjs, and vanilla javascript. I
          am currently learning typescript and c#.
        </p>
        <p>
          I have a background in mechanical engineering, and aside from web
          development, I like to dabble in 3d printing and electronics.
        </p>
        <div className="flex flex-row flex-wrap gap-4 justify-center">
          {aboutTags.map((elem, id) => {
            return (
              <Link
                className="px-2 text-sm border border-gray-600 rounded-full hover:border-white"
                key={id}
                href={`blog/${elem}`}
              >
                {elem}
              </Link>
            );
          })}
        </div>
        <p>
          I am currently working full time as a freelance full stack web
          developer, and am open to gig and contract jobs.
        </p>
        <p>Thank you for visiting my website.</p>
      </article>
      <div className="flex flex-row gap-8 text-xl self-end md:self-center">
        <Link
          title="https://github.com/lawrence-yoon"
          href="https://github.com/lawrence-yoon"
          target="_blank"
          className=""
        >
          <FaGithub />
        </Link>
        <Link
          title="https://linkedin.com/in/lawrence-yoon-3b8363253/"
          href="https://linkedin.com/in/lawrence-yoon-3b8363253/"
          target="_blank"
          className=""
        >
          <FaLinkedin />
        </Link>
        {/* <span>|</span>
        <Link
          title="https://www.frontendmentor.io/profile/lawrence-yoon"
          href="https://www.frontendmentor.io/profile/lawrence-yoon"
          target="_blank"
        >
          frontendmentor link
        </Link> */}
      </div>
    </div>
  );
}
