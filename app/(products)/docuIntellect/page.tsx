"use client";

import React from "react";
import HeroDocuIntellect from "./_components/heroSection";
import AboutDocuIntellect from "./_components/aboutSection";
import FeatureDocuIntellect from "./_components/featureSection";

type Props = {};

const DocuIntellectPage = (props: Props) => {
  return (
    <>
      <HeroDocuIntellect />
      <AboutDocuIntellect />
      <FeatureDocuIntellect />
    </>
  );
};

export default DocuIntellectPage;
