"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <nav className="order-3 md:order-2">
        <ul className="flex flex-col gap-1 items-end p-4 md:p-6 md:gap-4 md:flex-row md:items-center md:justify-center">
          <li
            className={`border-transparent border-b-2 ${
              pathname === "/about"
                ? "text-[2rem] leading-5 border-slate-500 border-b-8"
                : "text-gray-500 md:hover:border-gray-500 md:hover:leading-3"
            }`}
          >
            <Link href="/about">about</Link>
          </li>
          <li
            className={`border-transparent border-b-2 ${
              pathname === "/projects"
                ? "text-[2rem] leading-5 border-slate-500 border-b-8"
                : "text-gray-500 md:hover:border-gray-500 md:hover:leading-3"
            }`}
          >
            <Link href="/projects">projects</Link>
          </li>
          <li
            className={`border-transparent border-b-2 ${
              pathname.includes("/blog")
                ? "text-[2rem] leading-5 border-slate-500 border-b-8"
                : "text-gray-500 md:hover:border-gray-500 md:hover:leading-3"
            }`}
          >
            <Link href="/blog">blog</Link>
          </li>
          <li
            className={`border-transparent border-b-2 ${
              pathname === "/contact"
                ? "text-[2rem] leading-5 border-slate-500 border-b-8"
                : "text-gray-500 md:hover:border-gray-500 md:hover:leading-3"
            }`}
          >
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
