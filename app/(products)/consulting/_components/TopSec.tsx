"use client";

import { motion } from "framer-motion";
import React from "react";


type Props = {};

const TopSec = (props: Props) => {
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
      className="h-[50vh] w-full flex items-center justify-center relative overflow-hidden"
    >
    
      {/* Content Container */}
      <motion.div
        variants={HeadingVars}  
        initial="initial"
        animate="open"
        className="page_alignment flex flex-col items-center justify-center text-center relative z-10"
      >
        <h2 className="text-2xl md:text-4xl lg:text-7xl font-extrabold text-white mb-4">
        Expert <span style={{ color: "#A727CE" }}> Services</span> & Innovative <span style={{ color: "#A727CE" }}>  Consulting</span>
        </h2>     

         <p className="text-base lg:text-xl sm:max-w-[80%] text-center text-[#E2E2E2]/80 font-nunito leading-tight mt-2 font-medium">
         At Shiavnski, we offer comprehensive technology consulting services that empower businesses to leverage the latest advancements and drive transformative growth.
          Lead the Data & AI driven Digital Revolution with our Expert Services and Innovative Consultation.
        </p>

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

export default TopSec;
