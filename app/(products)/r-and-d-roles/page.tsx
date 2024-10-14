"use client";

import React from "react";
import RNDHero from "./_components/RNDHero";
import RNDAboutSection from "./_components/RNDabout";
import RNDFeatures from "./_components/RNDFeatures";

type Props = {};

const R_DRolesPage = (props: Props) => {
  return (
    <>
      <RNDHero />
      <RNDAboutSection />
      <RNDFeatures />
    </>
  );
};

export default R_DRolesPage;
