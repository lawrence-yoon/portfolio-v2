import Image from "next/image";
import BlogPost from "@/app/components/BlogPost";

export default function page() {
  return (
    <BlogPost
      title="handwired-corne"
      tldr="If you are somewhat maker inclined, and not keen on spending hundreds of dollars on a typical mechanical keyboard, instead look to a diy solution. The materials cost for my split keyboard was roughly $40 dollars."
    >
      <p>
        Do you need a new keyboard? Has the so called algorithm sent you down a
        mechanical keyboard rabbit hole? Perhaps you are already familiar with
        the mechanical keyboard niche terms, such as cherry, gaterons, kailh
        chocs, holy pandas, and are itching for your next mechanical keyboard?
        Has the machine god beckoned, demanding you to interface with your tech
        using only the finest devices? If you&apos;ve answered yes to any of the
        above, you&apos;ve come to the right place.
      </p>
      <p>I took this model off of thingiverse, printed.</p>
      <p>Watched a bunch of videos on keyboards, and handwiring.</p>
      <p>bought final parts and finally put it together.</p>
      <ul>
        Lessons learned:
        <li>Use a proper soldering iron with temperature control.</li>
        <li>
          Make all preparations before iron is hot. e.g. bend all wires, apply
          insulation to necessary areas.
        </li>
      </ul>
      {/* <Image src="" alt="image of keyboard wiring"></Image>
      <Image src="" alt="image of final product"></Image> */}
    </BlogPost>
  );
}
