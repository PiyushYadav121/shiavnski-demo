"use client";

import { Button } from "@/components/ui/button";
import { MediaQuery } from "@/lib/helpers/mediaQuery";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const AboutSection = (props: Props) => {
  const { isDesktopOrLaptop } = MediaQuery();
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <section
      id="about"
      className="min-h-max lg:min-h-screen flex flex-row-reverse w-full overflow-hidden bg-[#E2E2E2]"
    >
      <div
        className={`${
          isDesktopOrLaptop
            ? "flex-[0.5] px-[10%] flex flex-col justify-center items-start"
            : "page_alignment"
        } py-20`}
      >
        <h4 className="font-cabin font-semibold text-lg lg:text-xl">
          Fostering Talent Growth
        </h4>
        <h1 className="font-cabin text-[#1B1B1B] font-bold mt-5 text-3xl md:text-4xl lg:text-5xl ">
          <span className="text-[#9a34b4]">Explore Innovative </span>
          Software Solutions
        </h1>
        <p className="font-inter text-[#1C1C1C]/80 mt-5 text-sm md:text-base">
          At <span className="text-[#9a34b4]">Shiavnski Technologies</span>, We
          offer comprehensive technology consulting services designed to empower
          businesses by harnessing the latest advancements and driving
          transformative growth. With expertise spanning DevOps, cloud
          infrastructure, application development, data engineering, AI, IoT,
          and security, we provide strategic guidance and practical solutions
          customized to align with your specific goals. Our commitment extends
          beyond problem-solving to fostering innovation and ensuring
          sustainable business success through proactive, client-focused
          strategies.Our dedicated team of experts collaborates closely with
          clients to implement cutting-edge solutions that optimize operational
          efficiency and enhance competitive advantage. Whether you're scaling
          infrastructure, implementing AI solutions, or securing your digital
          assets, we are committed to delivering measurable results and driving
          continuous innovation in technology.
        </p>

        <Button onClick={handleClick} className="mt-6">
          Contact Us
        </Button>
      </div>
      {isDesktopOrLaptop && (
        <div className="flex-[0.5] bg-black bg-[url('/consulting.gif')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
      )}
    </section>
  );
};

export default AboutSection;
