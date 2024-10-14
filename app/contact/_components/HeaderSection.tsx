"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {};

const HeaderSection = (props: Props) => {
  return (
    <div className="py-20 bg-[#E2E2E2] shadow-[#A727C6]/50 shadow-lg z-50">
      {/* inner layer */}
      <div className="page_alignment">
        {/* contact us label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#D162ED] p-2 px-4 font-cabin text-white w-max tracking-wide uppercase text-xs md:text-sm lg:text-base"
        >
          contact us
        </motion.div>

        {/* heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-poppins uppercase mt-5 text-5xl md:text-7xl lg:text-9xl font-extrabold md:font-black text-[#1C1C1C]"
        >
          let's <span className="text-[#A727C6]">talk</span>
        </motion.h1>

        {/* sub heading */}
        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[#333333]/80 font-cabin font-semibold text-xl md:text-3xl w-[80%]"
        >
          Got a question? Want to learn more about us? Get in touch.
        </motion.h4>
      </div>
    </div>
  );
};

export default HeaderSection;
