"use client";

import React from "react";
import BannerSection from "./_components/BannerSection";
import TeamSection from "./_components/TeamSection";
import ExploreSection from "./_components/ExploreSection";
import ServiceSection from "./_components/ServiceSection";
import Timeline from "./_components/Timeline";
import Ourstory from "./_components/OurStory";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div>
      <BannerSection />
      {/* <Timeline /> */}
      <Ourstory/>
      {/* <ExploreSection /> */}
      {/* <ServiceSection /> */}
      {/* <TeamSection /> */}
    </div>
  );
};
export default AboutPage;
