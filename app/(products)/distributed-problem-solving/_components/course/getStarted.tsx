"use client";

import { Button } from "@/components/ui/button";
import { MediaQuery } from "@/lib/helpers/mediaQuery";
import React from "react";
import TeacherForm from "../TeacherForm";
import StudentForm from "../StudentForm";

type Props = {};

const GetStarted = (props: Props) => {
  const { isDesktopOrLaptop } = MediaQuery();

  const handleClick = () => {
    alert("forms will be added soon..");
  };
  return (
    <div className="py-20 bg-gradient-to-b from-[#161616] to-[#101010]">
      <div
        className={`${
          isDesktopOrLaptop
            ? "flex-[0.5] px-[10%] mb-10 flex flex-col justify-center items-center"
            : "page_alignment mb-6"
        }`}
      >
        <h4 className="font-inter text-[#e1e1e1] font-normal text-center text-lg lg:text-xl">
          Join a Prestigious Network of Pioneering Organizations
        </h4>
        <h1 className="font-cabin text-[whitesmoke] font-semibold text-center mt-5 text-3xl md:text-5xl lg:text-6xl lg:max-w-[70%] ">
          Be a Part of Our <span className="text-[#D162ED]">Collaborative</span>{" "}
          Innovation Network
        </h1>
        <h3 className="font-inter text-[#e1e1e1]/80 text-center mt-2 mb-5 text-sm md:text-base max-w-[80%]">
          Collaborate with top experts, contribute to groundbreaking projects,
          and gain unparalleled insights as you help shape the future through
          innovation and shared knowledge.
        </h3>

        <div className="flex items-center mt-5 gap-x-5">
          <StudentForm />
          <TeacherForm />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
