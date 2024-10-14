"use client";

import React from "react";
import { featureData } from "@/lib/constants/features";
import { MediaQuery } from "@/lib/helpers/mediaQuery";
import FeatureCard from "./featureCard";
import { docuIntellectFeatures } from "@/lib/constants/docuintellectFeatures";

type Props = {};

const FeatureDocuIntellect = (props: Props) => {
  const { isDesktopOrLaptop } = MediaQuery();

  return (
    <section
      id="services"
      className="py-20 min-h-max lg:min-h-screen w-full overflow-hidden bg-[#0f0f0f]"
    >
      <div
        className={`${
          isDesktopOrLaptop
            ? "px-[10%] flex flex-col justify-center items-start"
            : "page_alignment"
        }`}
      >
        <h4 className="font-cabin text-[#e1e1e1] font-semibold text-lg lg:text-xl md:max-w-[60%]">
          Revolutionize Your Workflow with Innovative Features
        </h4>
        <h1 className="font-cabin text-[white] font-bold mt-5 text-3xl md:text-4xl lg:text-5xl md:max-w-[70%] ">
          Unlock the Power of{" "}
          <span className="text-[#D162ED]">Intelligent </span>Documentation
        </h1>
        <h3 className="font-inter text-[#e1e1e1]/80 mt-5 text-sm md:text-base md:max-w-[70%]">
          Discover DocuIntellect's advanced capabilities, from AI-powered
          content creation and seamless version control to robust integrations
          and insightful analytics. Experience smarter document management and
          enhanced productivity.
        </h3>
      </div>

      <div className="page_alignment grid grid-cols-1 md:grid-cols-2 text-[#D162ED] lg:grid-cols-3 xl:grid-cols-4 w-full mt-20">
        {docuIntellectFeatures.map((data) => (
          // this div
          <div
            className={`w-full border-[#575757]/10 border-b ${
              data.id === 6 && "border-b-transparent"
            } ${
              data.id === 5 && "md:border-b-transparent xl:border-l-transparent"
            } ${data.id % 2 === 0 && "md:border-l"} ${
              data.id === 4 &&
              "lg:border-transparent xl:border-l-[#575757]/10 xl:border-b-[#575757]/10"
            } ${(data.id === 3 || data.id === 5) && "lg:border-l"}`}
            key={data.id}
          >
            <FeatureCard
              lucidIcon={data.icon}
              featureLabel={data.featureLabel}
              description={data.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureDocuIntellect;
