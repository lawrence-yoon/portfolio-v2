import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Full Stack Developer - Lawrence Yoon",
  description: "Lawrence Yoon is a self taught full stack developer from NYC.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col bg-gray-700 text-gray-300 p-4 md:p-8">
        <div className="order-1 flex flex-col items-center gap-1 justify-end md:flex-row md:justify-center md:gap-4 ">
          <h1 className="text-2xl">Lawrence Yoon</h1>
          <h2 className="text-sm">Full Stack Developer</h2>
        </div>
        <nav className="order-3 md:order-2">
          <ul className="flex flex-col gap-1 items-end md:gap-4 md:flex-row md:items-center md:justify-center">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/about">about</Link>
            </li>
            <li>
              <Link href="/projects">projects</Link>
            </li>
            <li>
              <Link href="/blog">blog</Link>
            </li>
            <li>
              <Link href="/contact">contact</Link>
            </li>
          </ul>
        </nav>
        <div className="grow order-2 overflow-scroll my-4 max-w-xs mx-auto md:order-3">
          {children}
        </div>
      </body>
    </html>
  );
}
