"use client";

import React from "react";
import { motion } from "framer-motion";
import RNDCard from "./RNDCard";
import { BrainCircuit, Database, Languages } from "lucide-react";
import { SiSystem76 } from "react-icons/si";
import { MdArchitecture } from "react-icons/md";

type Props = {};

export const contactData = [
  {
    id: 1,
    label: `Artificial Intelligence and Machine Learning (AI/ML)`,
    icon: <BrainCircuit className="h-10 w-10 text-[#a727c6]" />,
    description: `Our AI/ML research is dedicated to exploring and developing advanced intelligent systems that can revolutionize industries and enhance everyday life.`,
    keypoints: [
      "Developing sophisticated neural networks.",
      "Exploring reward-based learning methods.",
      "Ensuring transparency, unbiased outcomes, and ethical AI models.",
    ],
  },
  {
    id: 2,
    label: `System Integration`,
    icon: <SiSystem76 className="h-10 w-10 text-[#a727c6]" />,
    description: `Our focus on system integration is aimed at creating cohesive and efficient systems by seamlessly combining various software and hardware components.`,
    keypoints: [
      "IoT Integration.",
      "Middleware Solutions.",
      "APIs and Microservices.",
    ],
  },
  {
    id: 3,
    label: `Data Engineering`,
    icon: <Database className="h-10 w-10 text-[#a727c6]" />,
    description: `Data engineering is the backbone of our R&D efforts, ensuring that data is effectively managed and leveraged to provide valuable insights.`,
    keypoints: [
      "Handling large volumes of data.",
      "Building efficient and scalable data warehouses.",
      "Implementing practices for data quality, security, and compliance.",
    ],
  },
  {
    id: 4,
    label: `Application Development`,
    icon: <MdArchitecture className="h-10 w-10 text-[#a727c6]" />,
    description: `Our application development research focuses on creating high-performance applications that cater to diverse user needs, emphasizing the entire development lifecycle.`,
  },
  {
    id: 5,
    label: `Natural Language Processing (NLP)`,
    icon: <Languages className="h-10 w-10 text-[#a727c6]" />,
    description: `Advancing capabilities in understanding and generating human language.`,
    keypoints: [
      "Handling large volumes of data.",
      "Building efficient and scalable data warehouses.",
      "Implementing practices for data quality, security, and compliance.",
    ],
  },
];

const RNDFeatures = (props: Props) => {
  return (
    <div className="py-20 flex flex-col items-center bg-[#161616] text-white">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-white mb-6"
      >
        Our <span style={{ color: "#A727CE" }}> R&D</span> Focus Areas
      </motion.h2>
      <motion.p
        className="text-lg font-inter text-[#e1e1e1]/80 w-[60%] leading-relaxed mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Exploring the Frontiers of Technology
      </motion.p>

      <div className="page_alignment grid grid-cols-1 md:grid-cols-2 text-[#D162ED] lg:grid-cols-3 xl:grid-cols-4 w-full mt-20">
        {contactData.map((data) => (
          // this div
          <div
            className={`w-full border-[#575757]/10 border-b ${
              data.id === 6 && "border-b-transparent"
            } ${
              data.id === 5 && "md:border-b-transparent xl:border-l-transparent"
            } ${data.id % 2 === 0 && "md:border-l"} ${
              data.id === 4 &&
              "lg:border-transparent xl:border-l-[#575757]/10 xl:border-b-[#575757]/10"
            } ${(data.id === 3 || data.id === 5) && "lg:border-l"}`}
            key={data.id}
          >
            <RNDCard
              key={data.id}
              icon={data.icon}
              label={data.label}
              desc={data.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RNDFeatures;
