"use client";

import React from "react";
import {
  FaTools, // For 24/7 Technical Support
  FaWrench, // For Preventive Maintenance
  FaAmbulance, // For Emergency Repairs
  FaArrowAltCircleRight, // For Software Updates and Patches
  FaCogs, // For Performance Optimization
  FaChartLine, // For Comprehensive Reporting
} from "react-icons/fa";

const services = [
  {
    title: "24/7 Technical Support",
    description:
      "Provides round-the-clock assistance to address any equipment or software issues promptly.",
    icon: <FaTools className="text-[#A727C6] w-10 h-10 mx-auto mb-4" />,
  },
  {
    title: "Preventive Maintenance",
    description:
      "Regular inspections and maintenance to prevent potential issues and ensure equipment operates smoothly.",
    icon: <FaWrench className="text-[#A727C6] w-10 h-10 mx-auto mb-4" />,
  },
  {
    title: "Emergency Repairs",
    description:
      "Quick response to urgent repair needs to minimize downtime and keep operations running.",
    icon: <FaAmbulance className="text-[#A727C6] w-10 h-10 mx-auto mb-4" />,
  },
  {
    title: "Software Updates and Patches",
    description:
      "Ensures that all software is up-to-date with the latest features and security patches.",
    icon: (
      <FaArrowAltCircleRight className="text-[#A727C6] w-10 h-10 mx-auto mb-4" />
    ),
  },
  {
    title: "Performance Optimization",
    description:
      "Fine-tuning equipment and software to enhance performance and efficiency.",
    icon: <FaCogs className="text-[#A727C6] w-10 h-10 mx-auto mb-4" />,
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Detailed reports on maintenance activities, system performance, and recommendations for improvements.",
    icon: <FaChartLine className="text-[#A727C6] w-10 h-10 mx-auto mb-4" />,
  },
];

const ServicePage = () => {
  return (
    <div id="service-section" className="bg-[#1E1E1E] text-[#E2E2E2]">
      <div className="page_alignment py-24">
        <h1 className="text-5xl font-bold mb-12 text-center">
          Our <span className="text-[#A727C6]">Services</span>
        </h1>
        <p className="text-[#e2e2e2]/80 text-xl mb-12 text-center leading-tight">
          We provide comprehensive maintenance solutions tailored to meet your
          operational needs.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-[#1e1e1e] rounded-lg text-center border-[1.5px] border-[#e2e2e2]/10 hover:border-[#e2e2e2]/40 transition-all ease-linear duration-300"
            >
              <div className="mb-6">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-[#E2E2E2]/80 mb-4 leading-normal">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
