"use client";

"use client";

import { Button } from "@/components/ui/button";
import { MediaQuery } from "@/lib/helpers/mediaQuery";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const RNDAboutSection = (props: Props) => {
  const { isDesktopOrLaptop } = MediaQuery();
  const router = useRouter();

  return (
    <section
      id="about"
      className="min-h-max lg:min-h-[90vh] flex flex-row-reverse w-full overflow-hidden bg-[#E2E2E2]"
    >
      <div
        className={`${
          isDesktopOrLaptop
            ? "flex-[0.5] px-[10%] flex flex-col justify-center items-start"
            : "page_alignment"
        } py-20`}
      >
        <h4 className="font-cabin font-semibold text-lg lg:text-xl">
          Pioneering Innovation Through Collaboration and Excellence
        </h4>
        <h1 className="font-cabin text-[#1B1B1B] font-bold mt-5 text-3xl md:text-4xl lg:text-5xl ">
          About Our <span className="text-[#9a34b4]">R&D Initiatives</span>
        </h1>
        <h3 className="font-inter text-[#1C1C1C]/80 mt-5 text-sm md:text-base flex flex-col">
          <span>
            Our R&D efforts focus on innovation, collaboration, and continuous
            learning. Our Innovation Labs provide dedicated spaces for
            brainstorming, experimentation, and developing proof-of-concept
            solutions.
          </span>

          <span className="mt-2">
            Through Collaborative Projects, we partner with universities,
            research organizations, and technology companies to foster knowledge
            exchange and co-innovation.
          </span>

          <span className="mt-2">
            We prioritize Talent Development by investing in the continuous
            growth of our R&D team through training, workshops, and conferences.
          </span>
        </h3>
      </div>
      {isDesktopOrLaptop && (
        <div className="flex-[0.5] bg-black bg-[url('/rnd.jpg')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
      )}
    </section>
  );
};

export default RNDAboutSection;
