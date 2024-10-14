"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

type Props = {};

const words = [
  "innovation meets excellence.",
  "we push the boundaries of technology.",
  "cutting-edge research drives progress.",
  "intelligent systems become a reality.",
  "data transforms into actionable insights.",
  "applications meet user needs.",
  "collaboration fuels creativity.",
  "future technologies are born.",
  "your ideas come to life.",
];

const RNDHero = (props: Props) => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #161616, #181818, #191919, #1a1a1a, #1c1c1c)",
      }}
      className="min-h-[80vh] py-20 w-full flex items-center justify-center relative overflow-hidden"
    >
      {" "}
      <div className="page_alignment flex flex-col">
        <h2 className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-white mb-4">
          Welcome to Our R&D Hub, where{" "}
          <span style={{ color: "#A727CE" }}>
            <Typewriter
              words={words}
              typeSpeed={70}
              cursor
              loop
              cursorStyle="_"
              cursorColor="white"
            />
          </span>{" "}
        </h2>

        <p className="text-xl lg:text-2xl sm:max-w-[80%] text-[#E2E2E2]/80 font-nunito leading-tight mt-2 font-medium">
          Our dedicated team is at the forefront of technology, constantly
          pushing the boundaries to deliver cutting-edge solutions across
          various domains.
        </p>
        <Button variant="primary" className="mt-10 w-[250px]">
          Know More
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

export default RNDHero;
