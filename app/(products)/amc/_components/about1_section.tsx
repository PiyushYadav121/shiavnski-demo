"use client";

import { Button } from "@/components/ui/button";
import { MediaQuery } from "@/lib/helpers/mediaQuery";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const AboutSection = (props: Props) => {
  const { isDesktopOrLaptop } = MediaQuery();
  const router = useRouter();

  return (
    <section
      id="about"
      className="min-h-max lg:min-h-screen flex flex-col lg:flex-row-reverse w-full overflow-hidden bg-[#E2E2E2]"
    >
      <div
        className={`${
          isDesktopOrLaptop
            ? "flex-[0.5] px-[10%] flex flex-col justify-center items-start"
            : "page_alignment"
        } py-20`}
      >
        <h2 className="text-4xl font-semibold text-[#1B1B1B] mb-10">
          Achieving Peak Performance Through Our{" "}
          <span className="text-[#A727C6]">AMC Services</span>
        </h2>

        <h3 className="text-2xl font-semibold text-[#1B1B1B] mb-4">
          Transformative Outcomes
        </h3>
        <p className="text-base text-[#1C1C1C] mb-6">
          The impact of Afreen's AMC services was immediate and profound. Within
          the first year of engagement, the client reported a significant
          reduction in system downtime, leading to increased productivity and
          cost savings. The proactive maintenance schedule ensured that
          potential issues were identified and resolved before they escalated,
          thereby preventing costly repairs and operational delays.
        </p>
        <h3 className="text-2xl font-semibold text-[#1B1B1B] mb-4">
          A Testament to Excellence
        </h3>
        <p className="text-base text-[#1C1C1C]">
          The success story of Afreen's engagement with the manufacturing firm
          serves as a testament to the transformative power of AMC services. By
          prioritizing the client's operational efficiency and productivity,
          Afreen was able to deliver tangible benefits that extended beyond mere
          maintenance services.
        </p>
      </div>
      {isDesktopOrLaptop && (
        <div className="flex-[0.5] bg-black bg-[url('/amc.jpeg')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
      )}
    </section>
  );
};

export default AboutSection;
