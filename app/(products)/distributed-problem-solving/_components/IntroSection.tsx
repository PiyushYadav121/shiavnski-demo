"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const IntroSection = () => {
  const introduction = {
    videoUrl: "/amc.mp4",
    paragraph:
      "Explore our diverse range of innovative products designed to meet your needs. From cutting-edge technology to user-friendly solutions, we have something for everyone.",
  };

  return (
    <div className="bg-[#1E1E1E] relative">
      <div className="page_alignment">
        {/* Introduction Section */}
        <div className="flex flex-col md:flex-row items-center py-24">
          {/* Text Content */}
          <div className="md:w-1/2 md:pr-6 mt-6 md:mt-0">
            <div className="">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#E2E2E2] mb-4">
                Explore the Future with{" "}
                <span className="text-[#A727C6]">EduSkill!</span>
              </h2>
              <p className="text-[#E2E2E2]/80 mb-6">{introduction.paragraph}</p>

              <a href="/distributed-problem-solving#course-section">
                <Button variant="primary" size="sm">
                  Explore Now
                </Button>
              </a>
            </div>
          </div>
          {/* Video */}
          <div className="md:w-1/2 md:pl-6 mt-10 md:mt-0">
            <div className="aspect-video z-[999]">
              <video
                src={introduction.videoUrl}
                controls
                autoPlay
                className="w-full h-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <img
        src="/grid-6.svg"
        alt="grid"
        className="absolute left-0 top-2.5 w-full max-w-[775px] "
      />
    </div>
  );
};

export default IntroSection;
