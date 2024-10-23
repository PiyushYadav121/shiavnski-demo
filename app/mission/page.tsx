"use client";

import React from "react";

import ExploreSection from "../about/_components/ExploreSection";
import MissionTop from "./_component/mission-top_sec";


type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div>
     
      <MissionTop/>
      <ExploreSection />
      {/* <ServiceSection /> */}
      {/* <TeamSection /> */}
    </div>
  );
};
export default AboutPage;