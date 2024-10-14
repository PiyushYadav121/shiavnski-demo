"use client";

import React from "react";
import HeaderSection from "./_components/HeaderSection";
import CardSection from "./_components/CardSection";
import Image from "next/image";
import { MediaQuery } from "@/lib/helpers/mediaQuery";
import ContactSection from "@/components/elements/contact";

type Props = {};

const ContactPage = (props: Props) => {
  const { isDesktopOrLaptop, isTabletOrMobile } = MediaQuery();
  return (
    <div>
      {/* header section */}
      <HeaderSection />

      {/* {isDesktopOrLaptop && (
        <div className="relative h-[70vh] object-cover object-center">
          <div
            style={{
              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.65) 100%)",
            }}
            className="absolute left-0 top-0 h-full w-full"
          />
          <Image
            fill
            src="/contact-pc.jpg"
            alt="contact image"
            className="-z-10"
          />
        </div>
      )} */}

      {isTabletOrMobile && (
        <div className="relative h-[50vh] object-cover object-center">
          <div
            style={{
              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.65) 100%)",
            }}
            className="absolute left-0 top-0 h-full w-full"
          />
          <Image
            fill
            src="/contact-mobile.jpg"
            alt="contact image"
            className="-z-10"
          />
        </div>
      )}

      {/* cards section */}
      {/* <CardSection /> */}

      {/* Form section */}
      <ContactSection />
    </div>
  );
};

export default ContactPage;
