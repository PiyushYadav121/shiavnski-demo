"use client";
import React from "react";
import { motion } from "framer-motion";
import AboutExploreCard from "@/components/layouts/aboutCardSection";
import { exploreCards } from "@/lib/constants/aboutData";

const ExploreSection = () => {
  return (
    <div className="py-24 pb-44 bg-[#1c1c1c]">
      <div className="page_alignment mt-10 flex flex-col items-center justify-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extra font-bold text-white mb-6"
        >
          Our <span style={{ color: "#A727CE" }}> Mission</span>
        </motion.h2>  
        <motion.p
          className="text-lg font-inter text-[#e1e1e1]/80 w-[80%] leading-relaxed mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Empowering businesses with cutting-edge technology solutions to
          achieve their strategic goals and thrive in the digital era, driving
          innovation and excellence.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-20">
          {exploreCards.map((data) => (
            <AboutExploreCard
              key={data.id}
              label={data.label}
              desc={data.description}
              icon={data.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
