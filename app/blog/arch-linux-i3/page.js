import React from "react";
import BlogPost from "@/app/components/BlogPost";

export default function page() {
  return (
    <div>
      <BlogPost
        title="arch-linux-i3"
        tldr="The minimalist diy programmer's best friend. Rice it out or leave it bare. With wonderful official documentation and unofficial forum documentation, arch linux is a hobbyist's and power user's dream come true."
      >
        <p>why</p>
        <p>how</p>
        <p>after</p>
        <p>pics</p>
      </BlogPost>
    </div>
  );
}
