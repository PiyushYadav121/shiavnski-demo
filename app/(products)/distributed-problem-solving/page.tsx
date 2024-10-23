"use client";
import React from "react";
import IntroSection from "./_components/IntroSection";
import CourseSection from "./_components/CourseSection";
import AboutSection from "./_components/AboutSection";
import Eduskill from "./_components/Eduskill_micro";
import EduskillToppart from "./_components/Eduskill_toppart";

type Props = {};

const DistributedProblemSolvingSection = (props: Props) => {
  return (
    <>
      {/* <IntroSection /> */}
      {/* <AboutSection /> */}
      {/* <CourseSection /> */}
      <EduskillToppart/>
      <Eduskill/>

    </>
  );
};

export default DistributedProblemSolvingSection;
