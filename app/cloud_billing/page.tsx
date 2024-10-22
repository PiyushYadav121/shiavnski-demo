"use client";

import React from "react";
import ServeyHero from "./_components/hero";
import GlanceFeatures from "./_components/glance_features";
import FeaturesSalient from "./_components/salient_features";
import UpcomingFetues from "./_components/upcoming_features";

type Props = {};

const servey = (props: Props) => {
  return (
    <>
     
<ServeyHero/>
<FeaturesSalient/>
<GlanceFeatures/>
<UpcomingFetues/>


    </>
  );
};

export default servey;
