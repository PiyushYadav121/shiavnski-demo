"use client";

import React from "react";
import {} from "lucide-react";

type Props = {
  lucidIcon: React.ReactNode;
  featureLabel: string;
  description: string;
};

const CourseCard = ({ lucidIcon, featureLabel, description }: Props) => {
  return (
    <div className="min-h-[150px] px-[20px] py-10">
      {lucidIcon}
      <h4 className="font-poppins text-[16px] font-medium text-[white] max-w-[90%]">
        {featureLabel}
      </h4>
      <p className="font-inter text-[14px] font-thin leading-5 mt-1 text-[#e1e1e1]/80">
        {description}
      </p>
    </div>
  );
};

export default CourseCard;
