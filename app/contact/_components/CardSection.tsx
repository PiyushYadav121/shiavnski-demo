"use client";

import ContactCard from "@/components/layouts/contactCard";
import { contactData } from "@/lib/constants/contactData";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const CardSection = (props: Props) => {
  return (
    <div className="py-20 flex flex-col items-center bg-[#161616] text-white">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-white mb-6"
      >
        Unmatched <span style={{ color: "#A727CE" }}>Support</span> Services
      </motion.h2>
      <motion.p
        className="text-lg font-inter text-[#e1e1e1]/80 w-[60%] leading-relaxed mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Data-Driven Strategies for Market Visibility and Engagement
      </motion.p>
      {/* First Card */}
      <div className="page_alignment grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-20">
        {contactData.map((data) => (
          <ContactCard
            key={data.id}
            label={data.label}
            desc={data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
