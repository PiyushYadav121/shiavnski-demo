"use client";

import { MediaQuery } from "@/lib/helpers/mediaQuery";
import Image from "next/image";
import React from "react";

type Props = {
  imageUrl: string;
  spanLabel: string;
  label: string;
  description: string;
};

const CourseHero = ({ imageUrl, spanLabel, label, description }: Props) => {
  const { isDesktopOrLaptop } = MediaQuery();

  return (
    <div className="py-32 md:py-0 md:h-[80vh] flex">
      <div className="flex-1 md:flex-[0.5] flex flex-col items-center justify-center text-center px-10">
        <h2 className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-[#212121] mb-4">
          <span style={{ color: "#A727CE" }}>{spanLabel} </span>
          {label}
        </h2>

        <p className="text-xl lg:text-2xl sm:max-w-[80%] text-[#212121]/80 font-nunito leading-tight mt-2 font-medium">
          {description}
        </p>
      </div>
      {isDesktopOrLaptop && (
        <div className="flex-[0.5] md:relative">
          <Image
            fill
            alt="hero-image"
            src={imageUrl}
            className="object-center object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default CourseHero;
