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
            className={`${
              pathname === "/about"
                ? "text-2xl underline underline-offset-8 decoration-4"
                : "hover:underline hover:decoration-gray-400 hover:decoration-2 hover:underline-offset-4"
            }`}
          >
            <Link href="/about">about</Link>
          </li>
          <li
            className={`${
              pathname === "/projects"
                ? "text-2xl underline underline-offset-8 decoration-4"
                : "hover:underline hover:decoration-gray-400 hover:decoration-2 hover:underline-offset-4"
            }`}
          >
            <Link href="/projects">projects</Link>
          </li>
          <li
            className={`${
              pathname === "/blog"
                ? "text-2xl underline underline-offset-8 decoration-4"
                : "hover:underline hover:decoration-gray-400 hover:decoration-2 hover:underline-offset-4"
            }`}
          >
            <Link href="/blog">blog</Link>
          </li>
          <li
            className={`${
              pathname === "/contact"
                ? "text-2xl underline underline-offset-8 decoration-4"
                : "hover:underline hover:decoration-gray-400 hover:decoration-2 hover:underline-offset-4"
            }`}
          >
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
