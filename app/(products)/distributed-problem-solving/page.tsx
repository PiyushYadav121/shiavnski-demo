"use client";
import React from "react";
import IntroSection from "./_components/IntroSection";
import CourseSection from "./_components/CourseSection";
import AboutSection from "./_components/AboutSection";

type Props = {};

const DistributedProblemSolvingSection = (props: Props) => {
  return (
    <>
      <IntroSection />
      <AboutSection />
      <CourseSection />
    </>
  );
};

export default DistributedProblemSolvingSection;
