import "./globals.css";
import Navbar from "./components/Navbar";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Software Developer - Lawrence Yoon",
  description: "Lawrence Yoon is a self taught software developer from NYC.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={open_sans.className}>
      <body className="h-screen flex flex-col bg-gray-700 text-gray-300">
        <div className="order-1 flex flex-col items-center gap-1 py-4 justify-end md:flex-row md:justify-center md:gap-4 ">
          <h1 className="text-2xl">Lawrence Yoon</h1>
          <h2 className="text-sm">Full Stack Developer</h2>
        </div>
        <Navbar />
        <div className="grow order-2 overflow-scroll max-w-full md:order-3">
          {children}
        </div>
      </body>
    </html>
  );
}
