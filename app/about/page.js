import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-4 p-4 max-w-lg items-center mx-auto">
      <p>
        New York City based, self taught full stack developer. I have experience
        in developing with the MERN (mongodb, expressjs, reactjs, nodejs) stack,
        Nextjs, and vanilla javascript. I am currently learning Typescript and
        C# for developing robust typesafe code. I prefer to use minimal external
        dependencies/libraries, but I am learning some libraries for
        accessibility purposes.
      </p>
      <p>
        Other than web development, my interests include computer hardware,
        mechanical keyboards, linux, 3D printing, cars, gaming, homesteading,
        etc.
      </p>
      <div className="text-sm self-end">
        <Link
          title="https://github.com/lawrence-yoon"
          href="https://github.com/lawrence-yoon"
          target="_blank"
        >
          github link
        </Link>
        <span>|</span>
        <Link
          title="https://www.frontendmentor.io/profile/lawrence-yoon"
          href="https://www.frontendmentor.io/profile/lawrence-yoon"
          target="_blank"
        >
          frontendmentor link
        </Link>
      </div>
    </div>
  );
}
