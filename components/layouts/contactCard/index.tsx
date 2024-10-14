"use client";

import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  label: string;
  desc: string;
};

const ContactCard = ({ label, desc }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact#contacts");
  };

  return (
    <div className="bg-[#1C1C1C] min-h-[300px] max-w-full  mt-4 border border-[#9C9B9B]/15 rounded-[19px] custom-shadow px-5 py-4 flex flex-col">
      <div className="flex-1">
        <h6 className="font-medium text-xl text-[#ffffff]">{label}</h6>
        <p className="font-regular text-sm font-thin text-[#e3e3e3] font-inter leading-[21px] mt-3">
          {desc}
        </p>
      </div>
      <div
        onClick={handleClick}
        className="bg-[#111111]/50 uppercase flex items-center justify-center gap-x-2 p-3 rounded-sm mt-3 cursor-pointer"
      >
        <Check className="h-5 w-5" />
        <span className="text-sm font-inter font-bold m-0 p-0 leading-none">
          Get in touch
        </span>
      </div>
    </div>
  );
};

export default ContactCard;
