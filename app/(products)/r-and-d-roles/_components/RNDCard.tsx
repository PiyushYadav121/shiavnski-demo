"use client";

import React from "react";
import { Dot, Menu } from "lucide-react";

type Props = {
  icon: React.ReactNode;
  label: string;
  desc: string;
};

const RNDCard = ({ icon, label, desc }: Props) => {
  return (
    <div className="min-h-[150px] px-[20px] py-10">
      {icon}
      <h4 className="font-poppins text-[16px] mt-3 font-medium text-[white] max-w-[90%]">
        {label}
      </h4>
      <p className="font-inter text-[14px] font-thin leading-5 mt-1 text-[#e1e1e1]/80">
        {desc}
      </p>
    </div>
  );
};

export default RNDCard;
