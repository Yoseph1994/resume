"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>, I embraced my
        passion for building innovative solutions through programming. I have
        honed my skills by working on diverse projects and learning{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">What excites me most about coding</span> is
        turning complex ideas into functional, user-friendly applications. I{" "}
        <span className="underline">thrive</span>
        on the challenge of solving real-world problems through technology. My
        core stack includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and Express.js
        </span>
        , and I am also proficient in TypeScript and MongoDB. I am passionate
        about continuous learning and exploring new technologies. Currently, I
        am seeking a <span className="font-medium">full-time role</span> where I
        can contribute to impactful projects as a software developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        football games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
