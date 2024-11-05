// "use client";

import React from "react";
import ServayTopbar from "./_components/servay_topbar";
import ServeyHero from "./_components/hero";
import GlanceFeatures from "./_components/glance_features";
import FeaturesSalient from "./_components/salient_features";
import UpcomingFetues from "./_components/upcoming_features";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shivanski: Survey Copilot",
  description: "The Survey Copilot , an omni-channel self-hosted tool designed with privacy-first principle offers survey lifecycle management ensuring the Flexibility, Data Privacy & Cost aspects. The enhanced AI capabilities assist in identifying the right audience and controls potential bias in responses ensuring quality insights decision making.",
  icons: {
    // icon: "/company-logo.png",
  },
};

type Props = {};

const servey = (props: Props) => {
  return (
    <>
      <ServayTopbar />
      <ServeyHero />
      <FeaturesSalient />
      <GlanceFeatures />
      <UpcomingFetues />
    </>
  );
};
export default servey;





