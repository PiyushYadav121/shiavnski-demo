// "use client";

// import React from "react";
// import ServayTopbar from "./_components/servay_topbar";
// import ServeyHero from "./_components/hero";
// import GlanceFeatures from "./_components/glance_features";
// import FeaturesSalient from "./_components/salient_features";
// import UpcomingFetues from "./_components/upcoming_features";
// import { Description } from "@radix-ui/react-dialog";

// type Props = {};

// const servey = (props: Props) => {
//   return (
//     <>
// <ServayTopbar/>
// <ServeyHero/>
// <FeaturesSalient/>
// <GlanceFeatures/>
// <UpcomingFetues/>


//     </>
//   );
// };
// export default servey;







"use client";

import React, { useEffect } from "react";
import ServayTopbar from "./_components/servay_topbar";
import ServeyHero from "./_components/hero";
import GlanceFeatures from "./_components/glance_features";
import FeaturesSalient from "./_components/salient_features";
import UpcomingFetues from "./_components/upcoming_features";

const setMetaTags = () => {
  document.title = "Survey Copilot";    // your page titile here

  const metaTags = [
                            //Your page description goes here.
    { name: "description", content: "The Survey Copilot , an omni-channel self-hosted tool designed with privacy-first principle offers survey lifecycle management ensuring the Flexibility, Data Privacy & Cost aspects. The enhanced AI capabilities assist in identifying the right audience and controls potential bias in responses ensuring quality insights decision making." },   
    { name: "keywords", content: "keyword1, keyword2, keyword3" },
  ];

  metaTags.forEach(({ name, content }) => {
    const meta = document.createElement("meta");
    meta.name = name;
    meta.content = content;
    document.head.appendChild(meta);
  });

  const link = document.createElement("link");
  link.rel = "canonical";
  link.href = "";
  document.head.appendChild(link);
};

const Servey: React.FC = () => {
  useEffect(() => {
    setMetaTags();

    return () => {
      // Cleanup function can be added if needed
      // Consider removing tags if the component unmounts
    };
  }, []);

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

export default Servey;









// "use client";

// import React, { useEffect } from "react";
// import ServayTopbar from "./_components/servay_topbar";
// import ServeyHero from "./_components/hero";
// import GlanceFeatures from "./_components/glance_features";
// import FeaturesSalient from "./_components/salient_features";
// import UpcomingFetues from "./_components/upcoming_features";

// type Props = {};

// const Servey = (props: Props) => {
//   useEffect(() => {
//     document.title = "Survey Copilot";
//     const metaDescription = document.querySelector("meta[name='description']");
//     if (metaDescription) {
//       metaDescription.content = "The Survey Copilot , an omni-channel self-hosted tool designed with  privacy-first principle offers survey lifecycle management ensuring the Flexibility, Data Privacy & Cost aspects. The enhanced AI capabilities assist in identifying the right audience and controls potential bias in responses ensuring quality insights decision making.";
//     } else {
//       const meta = document.createElement("meta");
//       meta.name = "description";
//       meta.content = "Your page description goes here.";
//       document.head.appendChild(meta);
//     }

//     // const metaKeywords = document.querySelector("meta[name='keywords']");
//     // if (metaKeywords) {
//     //   metaKeywords.content = "keyword1, keyword2, keyword3";
//     // } else {
//     //   const meta = document.createElement("meta");
//     //   meta.name = "keywords";
//     //   meta.content = "keyword1, keyword2, keyword3";
//     //   document.head.appendChild(meta);
//     // }

//     return () => {
//       // Cleanup if needed
//     };
//   }, []);

//   return (
//     <>
//       <ServayTopbar />
//       <ServeyHero />
//       <FeaturesSalient />
//       <GlanceFeatures />
//       <UpcomingFetues />
//     </>
//   );
// };

// export default Servey;




// "use client";

// import React from "react";
// import Head from "next/head";
// import ServayTopbar from "./_components/servay_topbar";
// import ServeyHero from "./_components/hero";
// import GlanceFeatures from "./_components/glance_features";
// import FeaturesSalient from "./_components/salient_features";
// import UpcomingFetues from "./_components/upcoming_features";

// type Props = {};

// const Servey: React.FC<Props> = (props) => {
//   return (
//     <>
//       <Head>
//         <title>Your Page Title</title>
//         <meta name="description" content="Your page description goes here." />
//         <meta name="keywords" content="keyword1, keyword2, keyword3" />
//         <link rel="canonical" href="https://yourwebsite.com/your-page" />
//       </Head>
//       <ServayTopbar />
//       <ServeyHero />
//       <FeaturesSalient />
//       <GlanceFeatures />
//       <UpcomingFetues />
//     </>
//   );
// };

// export default Servey;




// "use client";

// import React from "react";
// import { Helmet }  from "react-helmet";

// import ServayTopbar from "./_components/servay_topbar";
// import ServeyHero from "./_components/hero";
// import GlanceFeatures from "./_components/glance_features";
// import FeaturesSalient from "./_components/salient_features";
// import UpcomingFetues from "./_components/upcoming_features";

// type Props = {};

// const Servey: React.FC<Props> = () => {
//   return (
//     <>
//       <Helmet>
//         <title>Your Page Title</title>
//         <meta name="description" content="Your page description goes here." />
//         <meta name="keywords" content="keyword1, keyword2, keyword3" />
//         <link rel="canonical" href="https://yourwebsite.com/your-page" />
//       </Helmet>
//       <ServayTopbar />
//       <ServeyHero />
//       <FeaturesSalient />
//       <GlanceFeatures />
//       <UpcomingFetues />
//     </>
//   );
// };

// export default Servey;
