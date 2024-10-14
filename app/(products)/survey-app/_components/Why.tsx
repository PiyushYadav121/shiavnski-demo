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
    <section className="min-h-max relative lg:min-h-screen flex w-full overflow-hidden bg-[#1e1e1e]">
      <div
        className={`${
          isDesktopOrLaptop
            ? "flex-[0.5] px-[10%] flex flex-col justify-center items-start"
            : "page_alignment"
        } py-20`}
      >
        <h4 className="font-cabin font-semibold text-lg lg:text-xl text-[#e2e2e2]">
          Why Choose Our Survey Application?
        </h4>
        <h1 className="font-cabin text-[#e2e2e2] font-bold mt-5 text-3xl md:text-4xl lg:text-5xl ">
          Unmatched Versatility in{" "}
          <span className="text-[#9a34b4]">Survey Creation</span>
        </h1>
        <h3 className="font-inter text-[#e2e2e2]/80 mt-5 text-sm md:text-base ">
          Craft surveys tailored precisely to your requirements using a
          versatile platform offering a wide array of templates and question
          types. Whether you need to gather customer feedback, conduct market
          research, or assess employee satisfaction, our intuitive tools ensure
          you create surveys that deliver actionable insights.Gain instant
          access to real-time analytics that provide valuable insights into
          respondent behavior and survey effectiveness. Track responses as they
          come in and make informed decisions swiftly, enhancing your
          decision-making process with comprehensive data analysis tools. Scale
          your survey operations effortlessly as your organization expands. Our
          solutions are designed to grow with you, offering robust performance
          and reliability that adapts to your evolving requirements while
          maintaining simplicity and ease of use.
        </h3>
      </div>
      {isDesktopOrLaptop && (
        <div className="flex-[0.5] bg-black bg-[url('/why.jpeg')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
      )}

      <img
        src="/grid-6.svg"
        alt="grid"
        className="absolute left-0 top-2.5 w-full max-w-[775px] "
      />
    </section>
  );
};

export default AboutDocuIntellect;
