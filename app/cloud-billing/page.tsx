"use client";

import React, {useEffect} from "react";
import CloudTopbar from "./_components/cloud_bill_topbar";
import ServeyHero from "./_components/hero";
import GlanceFeatures from "./_components/glance_features";
import FeaturesSalient from "./_components/salient_features";
import UpcomingFetues from "./_components/upcoming_features";

// type Props = {};


const setMetaTags = () => {
  document.title = "Cloud Billing Accelerator";    // your page titile here

  const metaTags = [
                            //Your page description goes here.
    { name: "description", content: "The Cloud Billing Accelerator, a cloud agnostic tool offering one-stop solution to trace the cloud usage in a non-intrusive manner with a centralised business-user friendly user interface. The underlying technology runs as a serverless cloud function controls maintenance overheads. The centralised view (based on licence) offers monitoring, analytics & forecasting cloud usage patterns and also offers AI driven assistance to optimise cloud strategy." },   
    { name: "keywords", content: "keyword1, keyword2, keyword3" },
  ];

  metaTags.forEach(({ name, content }) => {
    const meta = document.createElement("meta");
    meta.name = name;
    meta.content = content;
    document.head.appendChild(meta);
  });

  const link = document.createElement("link");
  link.rel = "";
  link.href = "/cloud-billing";
  document.head.appendChild(link);
};



const CloudBilling: React.FC = () => {
  useEffect(() => {
    setMetaTags();

    return () => {
      // Cleanup function can be added if needed
      // Consider removing tags if the component unmounts
    };
  }, []);
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
