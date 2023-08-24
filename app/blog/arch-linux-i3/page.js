import Image from "next/image";
import BlogPost from "@/app/components/BlogPost";

export default function page() {
  return (
    <BlogPost
      title="arch-linux-i3"
      tldr="The minimalist diy programmer's best friend. Rice it out or leave it bare. With wonderful official documentation and unofficial forum documentation, arch linux is a hobbyist's and power user's dream come true."
    >
      <p>
        Are the cool kids flexing their arch or gentoo neofetch outputs,
        stunting on your plug-and-play linux distro (I daily drive ubuntu)? Have
        you dipped your toes in GNU/Linux open source operating systems such as
        ubuntu, mint, pop!_OS? Do you want more control over your machine? Do
        you want to grow out your neckbeard, and assert dominance the next time
        you share your screen at the next show and tell?
      </p>
      <p>
        You can finally utter those four sacred words: &quot;I use arch
        btw&quot;.
      </p>
      <p>
        There are many different arch or gentoo installs on the internet. It is
        a meme for a reason. Follow some guide, install it on an old Thinkpad.
      </p>
      <p>
        From my experiences, you should connect your machine to the internet
        with the jack, as an internet connection over wifi during the install
        will just further complicate an already complicated process.
      </p>
      <p>
        This project is great because you can become closer to your machine.
        After the main install, you do not even have a desktop environment until
        you install one. After installing xorg and i3wm, proceed to rice out
        your machine, or just leave it barebones with just a background using
        feh. Write your startup scripts that run after logging in from the tty,
        decide what apps to launch when starting up and in which workspace, etc.
      </p>
      <p>
        Do you have any questions? If so, please direct yourself to this{" "}
        <a
          className="underline text-blue-400 visited:text-purple-400"
          title="https://wiki.archlinux.org/"
          href="https://wiki.archlinux.org/"
        >
          link
        </a>{" "}
        here.
      </p>
      <label htmlFor="lessons">Lessons Learned:</label>
      <ul id="lessons" name="lessons" className="pl-4 list-disc">
        <li>
          During installation, have a wired ethernet internet connection for
          easy installation.
        </li>
        <li>
          Using a separate dedicated drive for the operating system is
          recommended for ease of formatting and installion.
        </li>
        <li>
          A lot of the newer thinkpads, and other newer laptops have something
          called HiDPI, which will cause some issues with screen resolutions and
          text sizes. Several solutions already exist for this well known issue.
        </li>
        <li>
          I had some issues with biometrics and fingerprint readers. If that is
          something you need, it could be possible but it was not a straight
          forward thing last time I checked.
        </li>
      </ul>
      <div className="relative w-full h-[375px]">
        <Image
          className="object-contain"
          src="/images/blog/arch-linux-i3.jpg"
          alt="image of keyboard wiring"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </BlogPost>
  );
}
