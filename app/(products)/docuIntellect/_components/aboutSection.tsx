"use client";

import { Button } from "@/components/ui/button";
import { MediaQuery } from "@/lib/helpers/mediaQuery";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const AboutDocuIntellect = (props: Props) => {
  const { isDesktopOrLaptop } = MediaQuery();
  const router = useRouter();

  return (
    <section
      id="about"
      className="min-h-max lg:min-h-screen flex w-full overflow-hidden bg-[#E2E2E2]"
    >
      <div
        className={`${
          isDesktopOrLaptop
            ? "flex-[0.5] px-[10%] flex flex-col justify-center items-start"
            : "page_alignment"
        } py-20`}
      >
        <h4 className="font-cabin font-semibold text-lg lg:text-xl">
          Why Choose Documentation AI?
        </h4>
        <h1 className="font-cabin text-[#1B1B1B] font-bold mt-5 text-3xl md:text-4xl lg:text-5xl ">
          Ultimate Solution for{" "}
          <span className="text-[#9a34b4]">Streamlined Documentation</span>
        </h1>
        <h3 className="font-inter text-[#1C1C1C]/80 mt-5 text-sm md:text-base ">
          Experience efficiency redefined with our AI-driven platform that
          automates content creation and updates, ensuring accuracy and
          consistency. Collaboration is made easy with seamless teamwork through
          real-time editing and feedback features, enabling your team to work
          together effortlessly, no matter where they are. Enjoy an intuitive
          interface designed for smooth navigation and enhanced productivity,
          allowing users of all skill levels to quickly adapt and excel. Our
          scalable solutions grow with your documentation needs, providing
          robust performance without complexity, and ensuring that your
          processes remain streamlined as your organization evolves. With
          advanced analytics and insights, you can continuously improve your
          documentation strategy and achieve unparalleled efficiency.
        </h3>
      </div>
      {isDesktopOrLaptop && (
        <div className="flex-[0.5] bg-black bg-[url('/docuintellect.jpg')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
      )}
    </section>
  );
};

export default AboutDocuIntellect;
