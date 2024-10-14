import { Button } from "@/components/ui/button";
import { MediaQuery } from "@/lib/helpers/mediaQuery";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {};

const HeroSection = (props: Props) => {
  const router = useRouter();

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
    <section
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #161616, #181818, #191919, #1a1a1a, #1c1c1c)",
      }}
      className="h-screen w-full overflow-hidden relative"
    >
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(22, 22, 22), rgba(24, 24, 24, 0.7), rgba(25, 25, 25, 0.5), rgba(26, 26, 26, 0.4), rgba(28, 28, 28, 0.5))`,
        }}
        className="h-full w-full absolute left-0 top-0 z-20"
      >
        <motion.div
          variants={HeadingVars}
          initial="initial"
          animate="open"
          className="page_alignment h-full flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl md:text-5xl !leading-snug lg:text-6xl xl:text-7xl text-center text-white font-poppins font-medium">
          Empower with  <span className="text-[#D162ED]">Cutting-Edge</span>{" "}
             Technology Solutions
          </h1>
          <p className="text-xl lg:text-2xl sm:max-w-[80%] text-center text-[#cfcfcf] font-nunito leading-tight mt-2 font-medium">
            {/* From Cloud Solutions to Generative AI, Shivanski Technology Inc.
            Delivers Innovative Services Tailored to Your Needs. */}
            Lead the Digital Revolution with Shiavnski
          </p>
        </motion.div>
      </div>

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
    </section>
  );
};

export default HeroSection;
