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
    router.push("/about");
  };

  return (
    <section
      id="about"
      className="min-h-max lg:min-h-screen flex w-full overflow-hidden bg-[#57464d]"
    >
      <div
        className={`${isDesktopOrLaptop
            ? "flex-[0.5] px-[10%] flex flex-col justify-center items-start"
            : "page_alignment"
          } py-20`}
      >
        <h4 className="font-cabin font-semibold text-lg lg:text-xl">
          {/* Who we are? */}
        </h4>
        <h1 className="font-cabin text-[#1B1B1B] font-bold mt-5 text-3xl md:text-4xl lg:text-5xl ">
          {/* Discover Our Story: Leading the Way in IT and{" "} */}
          <span className="text-[#9a34b4]"> Discover Our Story </span>
        </h1>
        <h3 className="font-inter text-[#F2F2F2]/80 mt-5 text-sm md:text-base ">
          Dive into our Journey of Learning, Collaboration, Trust & Commitment as we focus 
          to achieve our goal to empower business with cutting edge technologies and create
           growth opportunities for small communities.
        </h3>
        <Button
          onClick={handleClick}
          variant="primary"
          className="mt-6 gap-x-2 w-full mb-10 sm:max-w-min px-10"
        >
          Know More
        </Button>
      </div>
      {isDesktopOrLaptop && (
        <div className="flex-[0.5] bg-black bg-[url('/about.jpg')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
      )}
    </section>
  );
};

export default AboutSection;
