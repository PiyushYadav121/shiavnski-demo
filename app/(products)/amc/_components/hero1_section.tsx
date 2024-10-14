"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

type Props = {};

const words = [
  "Elevating Operational Excellence",
  "Through Comprehensive AMC Services",
];

const HeroAMCServices = (props: Props) => {
  const router = useRouter();

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #161616, #181818, #191919, #1a1a1a, #1c1c1c)",
      }}
      className="min-h-[80vh] py-20 w-full flex items-center justify-center relative overflow-hidden"
    >
      <div className="page_alignment flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-6xl lg:text-8xl md:max-w-[95%] font-extrabold mb-4 relative">
          <span style={{ color: "white" }}>
            <Typewriter
              words={words}
              typeSpeed={70}
              cursor
              loop
              cursorStyle="_"
              cursorColor="#A727CE"
            />
          </span>
        </h2>
        <p className="text-xl lg:text-2xl sm:max-w-[80%] text-[#E2E2E2]/80 font-nunito leading-tight mt-2 font-medium">
          A Partnership Built on Trust and Expertise
        </p>
        <Button
          onClick={() => router.push("/contact")}
          variant="primary"
          className="mt-10 w-[250px]"
        >
          Learn More
        </Button>
      </div>
      <img
        src="/grid-7.svg"
        alt="grid"
        className="absolute right-0 top-2.5 w-full max-w-[728px]"
      />
    </div>
  );
};

export default HeroAMCServices;
