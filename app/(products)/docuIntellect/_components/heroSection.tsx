"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

type Props = {};

const words = [
  "enhance your documentation workflow.",
  "boost productivity with AI.",
  "maintain accuracy and consistency.",
  "streamline document management.",
  "achieve new levels of efficiency.",
];

const HeroDocuIntellect = (props: Props) => {
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
          With DocuIntellect, you can{" "}
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
          Leading the Way in IT and Software Solutions. We empower businesses
          with innovative and reliable solutions, ensuring success in a rapidly
          evolving digital landscape.
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

export default HeroDocuIntellect;
