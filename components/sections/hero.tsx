"use client";

import React from "react";
import { motion } from "framer-motion";
import CursorTrailCanvas from "@/components/helpers/cursor-trail-animation";

const hero = () => {
  return (
    <>
      {/* <CursorTrailCanvas
        color="hsl(217.08, 89%, 60.78%)"
        className="pointer-events-none absolute z-10 overflow-hidden"
      /> */}
      <div className="px-8 py-12">
        <motion.span
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: 0.2, duration: 0.2 },
            y: { delay: 0.2, duration: 0.2 },
          }}
          className="text-gray-500  font-mono"
        >
          Hi, my name is
        </motion.span>
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: {
              delay: 0.3,
              duration: 0.2,
            },
            y: {
              delay: 0.3,
              duration: 0.2,
            },
          }}
          className="text-blueGrey dark:text-gray-300 font-sans font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
        >
          Gowthamaan @ GV.
        </motion.h1>
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: 0.4, duration: 0.2 },
            y: { delay: 0.4, duration: 0.2 },
          }}
          className="text-gray-400 font-sans font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
        >
          I make ideas & things alive.
        </motion.h2>
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: 0.5, duration: 0.2 },
            y: { delay: 0.5, duration: 0.2 },
          }}
          className="text-gray-500 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider text-justify"
        >
          I&apos;m a <span className="text-brand">software engineer</span>, I
          possess strong problem-solving skills and specialize in crafting
          exceptional digital experiences. My current area of focus is in the{" "}
          <span className="text-brand">
            Machine learning and Computer vision
          </span>
          , where I actively engage in developing and designing{" "}
          <span className="text-brand">Generative AI and ML solutions</span> for
          healthcare applications.
        </motion.h3>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: 0.6, duration: 0.2 },
            y: { delay: 0.6, duration: 0.2 },
          }}
          className="mt-12"
        >
          <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
            <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-brand">
              Check out my resume!
            </button>
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default hero;
