import "./globals.css";
import Navbar from "./components/Navbar";

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
        <Navbar />
        <div className="grow order-2 overflow-scroll my-4 max-w-xs mx-auto md:order-3 md:mt-8 md:max-w-md">
          {children}
        </div>
      </body>
    </html>
  );
}
