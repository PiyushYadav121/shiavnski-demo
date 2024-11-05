"use client";

import { motion } from "framer-motion";
import React from "react";


type Props = {};

const MissionTop = (props: Props) => {
  const HeadingVars = {
    initial: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "linear",
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "linear",
      },
    },
  };
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #161616, #181818, #191919, #1a1a1a, #1c1c1c)",
      }}
      className="h-[40vh] w-full flex items-center justify-center relative overflow-hidden"
    >
    
      {/* Content Container */}
      <motion.div
        variants={HeadingVars}
        initial="initial"
        animate="open"
        className="page_alignment flex flex-col  justify-center text-center relative z-10"
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mt-4 mb-4">
        Vision, Mission & <span style={{ color: "#A727CE" }}>Values</span> 
        </h2>
      </motion.div>

      <img
        src="/grid-6.svg"
        alt="grid"
        className="absolute left-0 top-2.5 w-full max-w-[775px] "
      />

      <img
        src="/grid-7.svg"
        alt="grid"
        className="absolute right-0 top-2.5 w-full max-w-[728px]"
      />
    </div>
  );
};

export default MissionTop;
