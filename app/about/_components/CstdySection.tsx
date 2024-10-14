"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const caseStudies = [
  {
    title:
      "IoT-Based Data Lake on AWS for Manufacturing with SAP Hana and Salesforce",
    description:
      "Detailing the development of a comprehensive data lake solution that integrates IoT device data with SAP Hana and Salesforce for enhanced manufacturing insights.",
    image: "/images/data-lake.jpg", // Replace with your image path
  },
  {
    title: "Data Migration Using Azure Data Factory",
    description:
      "Showcasing a successful data migration project for a large enterprise, leveraging Azure Data Factory for seamless integration and minimal downtime.",
    image: "/images/data-factory.jpg", // Replace with your image path
  },
  {
    title: "Creating a Survey App Based on Generative AI",
    description:
      "Exploring the development of a dynamic survey application that utilizes generative AI to adapt questions based on user responses in real-time.",
    image: "/images/survey-app.jpg", // Replace with your image path
  },
  {
    title: "Code Generator Using Generative AI",
    description:
      "Demonstrating how generative AI can automate code generation, reducing development time and increasing efficiency.",
    image: "/images/code-generator.jpg", // Replace with your image path
  },
  {
    title: "Digital Onboarding Solution for Banks",
    description:
      "Highlighting the creation of a digital solution that simplifies the onboarding process for banks, enhancing customer experience and operational efficiency.",
    image: "/images/digital-onboarding.jpg", // Replace with your image path
  },
];

const CaseStudies = () => {
  return (
    <div className="container mx-auto px-4 py-20 bg-[#E2E2E2]">
      <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
        Case<span style={{ color: "#A727CE" }}> Studies</span>
      </h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        pagination={{ clickable: true }}
      >
        {caseStudies.map((caseStudy, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{ height: "500px" }} // Set a fixed height for the card
            >
              <div className="relative" style={{ height: "200px" }}>
                {" "}
             
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="object-cover w-full h-full" // Adjusted to fill the container
                />
                <div className="absolute inset-0"></div>
              </div>
              <div
                className="p-6"
                style={{ height: "300px", overflow: "hidden" }}
              >
                {" "}
            
                <h3 className="text-2xl font-semibold text-[#1e1e1e] mb-4">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {caseStudy.description}
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-purple-700 font-semibold hover:text-purple-900 transition duration-300"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CaseStudies;
