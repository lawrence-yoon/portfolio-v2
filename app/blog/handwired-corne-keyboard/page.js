import Image from "next/image";
import BlogPost from "@/app/components/BlogPost";

export default function page() {
  return (
    <BlogPost
      title="handwired-corne"
      tldr="If you are somewhat maker inclined, and not keen on spending hundreds of dollars on a typical mechanical keyboard, instead look to a diy solution. The materials cost for my split keyboard was roughly $40 dollars."
    >
      <p>
        Do you need a new keyboard? Has the algorithm sent you down a mechanical
        keyboard rabbit hole? Perhaps you are already familiar with the
        mechanical keyboard niche terms, such as cherry, gateron, kailh choc,
        holy pandas, and are itching for your next mechanical keyboard? Has the
        machine god beckoned, demanding you to interface with your tech using
        only the finest devices? If you&apos;ve answered yes to any of the
        above, you&apos;ve come to the right place.
      </p>
      <p>
        Choose what keyboard you want to make. There are many different flavors
        of keyboards, and for me, I wanted to go with something ergonomic and
        customizable. There are a lot of resources on the internet about
        different keyboards, and how to solder key switches to a keyboard. I
        decided to go with the corne keyboard, for its split ortholinear layout.
        There are options to make it wireless, have rgb leds, etc, but I wanted
        a basic wired split keyboard.
      </p>
      <p>
        Whether you use a pcb of an open source keyboard, design and create your
        own pcb, or just handwire the keyboard, you will need key switches,
        diodes, and a micro controller, and if you are going split you want some
        TRS/TRRS jacks. Pick your favorite key switches, buy some TRS/TRRS
        jacks, buy some diodes (I am not an electrical engineer, but I read that
        we use 1N4148 diodes because they are the cheapest) and
        microcontroller(s) (pro micro / teensy / pi pico).
      </p>
      <p>
        Do your own research on how the keyboard ties software and hardware
        together. You will be connecting the key switches to a microcontroller,
        and most likely will need to use a key switch matrix. Make sure of the
        diode direction, and make sure both halves of the keyboard are
        consistent in layout, specifically if diodes are going row to column, or
        vice versa. If you go with a different layout compared to the defaults
        provided in qmk, but are consistent, you would be able to salvage the
        project if you write your own mappings, and specify which switch matrix
        you are going with.
      </p>
      <p>
        Print or buy your keyboard case. There are 3d printing services on the
        internet, as well as specialty mechanical keyboard websites that sell
        cases. Also, I highly recommend buying the pcb of the keyboard you want
        instead of handwiring the keyboard like I did. You could order a kit,
        that only requires you to solder on diodes, switches, and jacks. It
        would save you a lot of time and headache.
      </p>
      <p>
        If you choose to handwire your keyboard, make sure to check the software
        you will flash it with. If you do not want to write your own keymaps,
        you should check which pins are used in the default firmware, and solder
        the wires to the proper pins. You need to keep track of the rows,
        columns, and split pin.
      </p>
      <p>
        As for the wires, I have seen many different gauges and insultation
        methods used. If you check qmk documentations, there are several
        examples of each. I have decided to go with Joe Scotto&apos;s method of
        using higher gauge wires and insulating only where the row and column
        wires overlap. I suggest looking into this man&apos;s work.
      </p>
      <p>
        To keep costs down, I salvaged some wire I had lying around. For the key
        switch matrix, I used 18AWG doorbell wire, and for jumper wires I cut up
        an old cat5/ethernet wire. In the future, if I were to remake this, I
        would buy some proper jumper wires. The 3d print that I had chosen was
        designed specifically for dupont jumper cables/connectors. Having the
        cables stuck together in a band would have been extremely helpful.
      </p>
      <p>
        If you have experience and own a soldering iron, this will be a
        cakewalk. If not, you need to watch some videos of proper soldering
        techniques. I&apos;ve started with using solder with lead in it, but I
        think that in general, you should use lead-free solder. If you want to
        get into soldering as a side hustle, I believe that some countries have
        restrictions and require lead-free solder.
      </p>
      <p>
        Get a temperature-control soldering iron. These can get pricey, and
        after some research, I found that the pinecil served my needs perfectly.
        It can be powered with a dc jack, or usb-c, and if you have a laptop
        charger brick with the usbc, it is perfect. The pinecil costed me $40 on
        amazon.
      </p>
      <p>
        Double check that you have prepared everything, and you are ready to
        solder the joints. Make sure the diodes are going the proper way. Once
        everything is nice and soldered, flashing with qmk should be easy.
        Follow the directions, many instructions on the internet. Basically,
        have your keymap file nice and compiled into the hex file, then fire up
        the app, connect your microcontroller, prepare the mcu for the flashing,
        flash, then you are done.
      </p>
      <p>
        I know I am glossing over a lot of the details, but it really is a
        straight forward process. If there is a lot of interest, I will
        elaborate on the process. However, there are a lot of resources out
        there already. I would say the biggest blunders come from improperly
        soldered joints and shorts that can arise from that or from improper
        insulation.
      </p>
      <label htmlFor="lessons">Lessons Learned:</label>
      <ul id="lessons" name="lessons" className="pl-4 list-disc">
        <li>Use a proper soldering iron with temperature control.</li>
        <li>Take your time to avoid shorts.</li>
        <li>
          Make all preparations before iron is hot. e.g. bend all wires, apply
          insulation to necessary areas.
        </li>
        <li>
          Buy and use jumper wires with same amount of wires as pins in the
          microcontroller.
        </li>
        <li>
          Look into socketed microcontroller solutions. This could enable you to
          remove and replace the microcontroller for whatever reason.
        </li>
      </ul>
      <div className="relative w-full h-[375px]">
        <Image
          className="object-contain"
          src="/images/blog/handwired-keyboard-wires.jpg"
          alt="image of keyboard wiring"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="relative w-full h-[375px]">
        <Image
          className="object-contain"
          src="/images/blog/handwired-keyboard-assembled.jpg"
          alt="image of final product"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </BlogPost>
  );
}
