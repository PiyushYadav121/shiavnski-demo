"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
type Props = {};

const ConsultSection = () => {
  return (

  

    <section className="relative flex items-center justify-start h-screen bg-[#1e1e1e]  px-4">

      <div className="z-10 page_alignment">
        <div className="max-w-[60%]">
          <h1 className="text-5xl md:text-5xl font-bold mb-4 text-[#e2e2e2]">
            <span className="text-[#a727c6]">Empower Your Business</span> with
            Cutting-Edge Technology
          </h1>
          <p className="text-lg md:text-xl mb-8 text-[#e2e2e2]/80 leading-tight">
            At <span className="text-[#a727c6]">Shiavnski Technologies</span> ,
            we offer comprehensive technology consulting services that empower
            businesses to leverage the latest advancements and drive
            transformative growth.
          </p>
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <Input
              placeholder="Search for consulting..."
              type="text"
              className="bg-[#e2e2e2] text-[#1e1e1e] placeholder:text-[#1e1e1e]/70 w-full md:w-1/2 rounded-md"
            />
            <Button variant={"primary"}> Consult Now </Button>
          </div>
        </div>
      </div>

      <img
        src="/grid-6.svg"
        alt="grid"
        className="absolute right-0 top-2.5 w-full max-w-[775px]"
      />
      <img
        src="/grid-7.svg"
        alt="grid"
        className="absolute right-0 top-2.5 w-full max-w-[728px]"
      />
    </section>
  );

  {/* <section id="clients" className="py-20 bg-[#161616]">
        <div
          className={`${
            isDesktopOrLaptop
              ? "flex-[0.5] px-[10%] mb-10 flex flex-col justify-center items-center"
              : "page_alignment mb-6"
          }`}
        >
          <h4 className="font-inter text-[#e1e1e1] font-normal text-lg lg:text-xl">
            Join a Network of Leading Organizations
          </h4>
          <h1 className="font-cabin text-[whitesmoke] font-semibold mt-5 text-3xl md:text-5xl lg:text-6xl lg:max-w-[70%] ">
            Our <span className="text-[#D162ED]"> Collaborative</span> Partners
          </h1>
          <h3 className="font-inter text-[#e1e1e1]/80 mt-2 mb-5 text-sm md:text-base ">
            Collaboration is key to our success, and our partners are integral
            to the innovative solutions we provide
          </h3>
        </div>

        <div className="min-h-max py-5 relative">
          <Clients align="start" speed={0.5} direction="forward" />
          <div
            style={{
              backgroundImage:
                "linear-gradient(to right, #161616, #1d1d1e00, #24242600, #2a2b2f00, #31333800, #31333800, #31333800, #31333800, #2a2b2f00, #24242600, #1d1d1e00, #161616)",
            }}
            className="absolute inset-0"
          />
        </div>
      </section> */}

};

export default ConsultSection;
