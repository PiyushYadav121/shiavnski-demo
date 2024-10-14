"use client";

import React from "react";
import HeroAMCServices from "./_components/hero1_section";
import AboutSection from "./_components/about1_section";
import ServicePage from "./_components/service1_section";

type Props = {};

const Amc = (props: Props) => {
  return (
    <>
      <HeroAMCServices />
      <AboutSection />
      <ServicePage />
    </>
  );
};

export default Amc;
