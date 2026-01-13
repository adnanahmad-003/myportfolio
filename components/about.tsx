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
      {/* <p className="mb-3">
      I am a passionate Application Developer currently pursuing my studies at {" "}
        <span className="font-medium">IIIT Dharwad</span>, With a strong foundation in {" "}
        <span className="font-medium">React Native and MERN stack technologies</span>.{" "}
        <span className="italic"> I have developed and contributed to various mobile apps and web projects.</span>
      </p>

      <p>
        <span className="italic">My experience spans from</span>, designing user-friendly interfaces to implementing complex backend solutions.{" "}
        <span className="font-medium">I enjoy solving challenges and continuously expanding my skill set, </span>. whether it's through tackling new programming{" "}
        <span className="font-medium">languages, exploring advanced tools, or diving into real-world projects.</span>.
      </p> */}
      <p className="mb-3">
        With a solid grounding in{" "}
        <span className="font-medium">Computer Science fundamentals</span>, my
        primary motivation is building software that genuinely solves real user
        problems. I have{" "}
        <span className="font-medium">
          over 1 year of professional experience
        </span>{" "}
        working across mobile and full stack systems, with hands on exposure to
        production environments.
      </p>

      <p>
        I have successfully deployed{" "}
        <span className="font-medium">5+ applications</span> to the App Store
        and Play Store, while also contributing to backend driven features,
        system architecture, and performance optimization. My approach
        emphasizes{" "}
        <span className="font-medium">
          scalability, maintainability, and user centric design
        </span>
        , and I enjoy working across different layers of the stack rather than
        being limited to a single domain.
      </p>
    </motion.section>
  );
}
