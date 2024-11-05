// "use client";

import React, {useEffect} from "react";
import CloudTopbar from "./_components/cloud_bill_topbar";
import ServeyHero from "./_components/hero";
import GlanceFeatures from "./_components/glance_features";
import FeaturesSalient from "./_components/salient_features";
import UpcomingFetues from "./_components/upcoming_features";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shivanski: Cloud Billing Accelerator",
  description: "The Cloud Billing Accelerator, a cloud agnostic tool offering one-stop solution to trace the cloud usage in a non-intrusive manner with a centralised business-user friendly user interface. The underlying technology runs as a serverless cloud function controls maintenance overheads. The centralised view (based on licence) offers monitoring, analytics & forecasting cloud usage patterns and also offers AI driven assistance to optimise cloud strategy.",
  icons: {
    // icon: "/company-logo.png",
  },
};

type Props = {};

const CloudBilling = (props: Props) => {

  return (
    <>
<CloudTopbar/>
<ServeyHero/>
<FeaturesSalient/>
<GlanceFeatures/>
<UpcomingFetues/>


    </>
  );
};

export default CloudBilling;
