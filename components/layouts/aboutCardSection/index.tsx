"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
  label: string;
  desc: string;
  icon: any;
};

const AboutExploreCard = ({ label, desc, icon }: Props) => {
  return (
    <motion.div
      className="p-6 bg-[#191919] !text-[#A727CE] opacity-20 rounded-lg shadow-lg shadow-[#A727C6]/5 border-[0.5px] border-[#A727C6]/30 flex flex-col items-start justify-start !scale-[0.99] hover:!scale-[1] transition-all ease-linear duration-200"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.5 }}
    >
      {icon}
      <h3 className="text-lg mt-2 font-poppins font-medium capitalize text-white mb-2">
        {label}
      </h3>
      <p className="text-[#c3c3c3]/80 text-left text-sm font-inter leading-snug font-normal">
        {desc}
      </p>
    </motion.div>
  );
};

export default AboutExploreCard;
