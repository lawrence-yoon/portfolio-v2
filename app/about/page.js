import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="flex flex-col p-4 max-w-lg h-full justify-between mx-auto">
      <p>
        I am a New York City based, self taught full stack developer. I have
        experience in developing web applications with the MERN (mongodb,
        expressjs, reactjs, nodejs) stack, nextjs, and vanilla javascript. I am
        currently learning typescript and c#.
      </p>
      <div className="flex flex-row gap-8 text-xl self-end">
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
