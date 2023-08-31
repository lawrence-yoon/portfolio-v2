import "./globals.css";
import Navbar from "./components/Navbar";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Lawrence Yoon - Software Developer",
  description: "Lawrence Yoon is a software developer from NYC.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={open_sans.className}>
      <body className="h-screen flex flex-col bg-gradient-to-tl from-black to-slate-900 text-gray-300 md:bg-gradient-to-br">
        <div className="order-1 flex flex-col items-center gap-1 pt-4 justify-end">
          <h1 className="text-2xl">Lawrence Yoon</h1>
          <h2 className="text-sm">Software Developer</h2>
        </div>
        <Navbar />
        <div className="grow order-2 overflow-auto mx-auto max-w-full md:order-3">
          {children}
        </div>
      </body>
    </html>
  );
}
