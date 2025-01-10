import React from "react";
import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuBriefcase, LuGraduationCap } from "react-icons/lu";
import Yoom from "@/public/Yoom.png";
import AdventureHub from "@/public/AdventureHub.png";
import corpComment from "@/public/corpComment.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Intern at CBE Bank",
    location: "Ethiopia",
    description:
      "Collaborated with IT teams to optimize internal processes and resolve technical issues during a 2-month internship from Jul 2023 to Sep 2023.",
    icon: React.createElement(LuBriefcase), // Changed to a work-related icon
    date: "Jul 2023 - Sep 2023",
  },
  {
    title: "Graduated from Front-End Developer Career Path (Scrimba)",
    location: "Online",
    description:
      "I graduated from the Front-End Developer Career Path at Scrimba after completing an intensive bootcamp. This experience gave me the foundational skills to pursue a career in front-end development.",
    icon: React.createElement(CgWorkAlt), // You can keep this or change it to another one like "LuGraduationCap"
    date: "2024",
  },
  {
    title: "Bachelor's Degree in Computer Science",
    location: "Arsi University, Ethiopia",
    description:
      "I completed my Bachelor's degree in Computer Science, where I gained a solid foundation in software engineering. This academic background has helped me apply advanced concepts in real-world projects.",
    icon: React.createElement(LuGraduationCap), // Ideal icon for education-related entries
    date: "2019 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "AdventureHub",
    description:
      "A tour booking system built with Next.js. I developed the full-stack features, including the booking process, user management, and payment integrations.",
    tags: ["Next.js", "React", "mongoose", "Tailwind", "MongoDB"],
    imageUrl: AdventureHub, // Replace with your project image
  },
  {
    title: "Zoom Clone",
    description:
      "A real-time video communication platform built using stream-io and React. I focused on front-end development with features like video calls, user authentication, and recording feature.",
    tags: ["React", "Next.js", "Tailwind", "stream-io", "clerk"],
    imageUrl: Yoom, // Replace with your project image
  },
  {
    title: "CorpComment",
    description:
      "Helped build a platform where users can share public feedback with companies. It's a simple way for people to give their thoughts and for businesses to listen and improve.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpComment, // Replace with your project image
  },
  ,
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Mongoose",
  "Redux",
  "Zustand",
  "Express",
  "PostgreSQL",
] as const;
