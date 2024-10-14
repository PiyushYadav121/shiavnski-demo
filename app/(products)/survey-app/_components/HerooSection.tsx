import { Button } from "@/components/ui/button";
import React from "react";
import { FaChartBar } from "react-icons/fa"; // Example icon

const HeroSection = () => {
  return (
    <section className="relative bg-[#1e1e1e] text-[#e2e2e2] py-40">
      <div className="container text-center mx-auto px-6 flex flex-col items-center justify-center">
        <div className="flex justify-center items-center mb-4">
          <FaChartBar className="h-10 w-10 text-[#a727c6] mr-2" />
          <h1 className="text-7xl font-extrabold">
            Innovative{" "}
            <span style={{ color: "#A727CE" }}> Survey Solutions</span>
          </h1>
        </div>
        <p className="text-xl lg:text-2xl max-w-3xl text-[#e2e2e2]/80 leading-relaxed mt-4 font-medium">
          Our Survey Application is designed to meet all your data collection
          and analysis needs. With user-friendly interfaces and advanced
          analytics, creating and distributing surveys has never been easier.
        </p>
        <div className="flex justify-center space-x-4 mt-6">
          <a href="#">
            <Button size={"sm"} variant={"primary"}>
              Get Started
            </Button>
          </a>
          <a
            href="#"
            className="px-6 py-1 border-2 border-[#a727c6] text-[#a727c6] font-semibold  hover:text-[#e2e2e2] transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      <img
        src="/grid-6.svg"
        alt="grid"
        className="absolute left-0 top-2.5 w-full max-w-[775px] "
      />
      <img
        src="/grid-7.svg"
        alt="grid"
        className="absolute right-0 top-2.5 w-full max-w-[728px]"
      />
    </section>
  );
};

export default HeroSection;
