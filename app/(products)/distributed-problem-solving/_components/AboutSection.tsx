"use client";

"use client";

import { Button } from "@/components/ui/button";
import { MediaQuery } from "@/lib/helpers/mediaQuery";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const AboutSection = (props: Props) => {
  const { isDesktopOrLaptop } = MediaQuery();
  const router = useRouter();

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
          Where Talent Meets Mentorship
        </h4>
        <h1 className="font-cabin text-[#1B1B1B] font-bold mt-5 text-3xl md:text-4xl lg:text-5xl ">
          Discover EduSkill Sourcing{" "}
          <span className="text-[#9a34b4]">(Talent & Mentor) </span>Software
          Solutions
        </h1>
        <h3 className="font-inter text-[#1C1C1C]/80 mt-5 text-sm md:text-base flex flex-col">
          <span>
            EduSkill connects talented individuals with experienced mentors. Our
            pyramid-based approach integrates talent development and expert
            service delivery seamlessly.
          </span>

          <span className="mt-2">
            At EduSkill, a tiered system ensures that budding talents receive
            mentorship from seasoned professionals. This collaborative learning
            environment nurtures skills and facilitates real-world application
            through micro-task engagements, enabling talents to gain hands-on
            experience and deliver high-quality results.
          </span>
        </h3>
      </div>
      {isDesktopOrLaptop && (
        <div className="flex-[0.5] bg-black bg-[url('/eduskill1.jpg')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
      )}
    </section>
  );
};

export default AboutSection;
