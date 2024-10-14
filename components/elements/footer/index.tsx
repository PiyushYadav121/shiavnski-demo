"use client";

import { Button } from "@/components/ui/button";
import { FooterLinks } from "@/lib/constants/footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icon from "./icon";

type Props = {};

const Footer = (props: Props) => {
  return (
    <section
      id="footer"
      className="bg-[#9934b3] py-20 relative overflow-hidden"
    >
      <div className="page_alignment bg-[#E2E2E2] p-10 rounded-xl shadow-xl shadow-black/20">
        <div className="flex flex-col md:flex-row">
          <div className="h-[40px] w-[142px] relative">
            <Image fill alt="logo" src={"/logo-dark.svg"} />
          </div>

          <div className="mt-3 md:ms-10 flex-grow flex items-start justify-start lg:justify-end gap-y-3 flex-wrap gap-x-32 z-10">


          < Icon/>


            {FooterLinks.map((data) => (
              <div key={data.id}>
                <h5 className="font-poppins font-semibold text-[#9934b3] mb-3">
                  {data.label}
                </h5>
                {data.options.map((ll) => (
                  <p
                    key={ll.id}
                    className="text-sm font-inter mb-2 font-medium cursor-pointer hover:text-[#9934b3]"
                  >
                    <Link target="_blank" href={ll.url}>
                      {ll.label}
                    </Link>
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 md:mt-10">
          <p className="text-sm font-cabin font-semibold tracking-wide text-[#280b31]">
            © 2024 Shiavnski Technologies Inc.
          </p>
        </div>
      </div>

      <img
        src="/grid-foot.svg"
        className="absolute inset-0 w-full object-center object-fill opacity-65"
        alt=""
      />
    </section>
  );
};

export default Footer;
