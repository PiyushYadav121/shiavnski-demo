"use client";

import { Description } from "@radix-ui/react-dialog";
import React from "react";

const salient = [
    {
        id: 1,
        description1: "Business-first User Experience",
        description2: "Privacy-first design for regulations",
        description3: "Role based Access & Enterprise Controls (AD)",
        description4: "Containerized deployment for scaling",
        description5: "Flexible Survey Design with WYSIWYG Editor",
    },
    {
        id: 2,
        description1: "Omni-channel Survey interface",
        description2: "AI (NLP) driven Interactive Surveys",
        description3: "AI assisted audience identification & bias control",
        description4: "AI/ML based Analytics, Insights & Monitoring",
        description5: "Configurable Dashboard & Reporting"

    },

];

const FeaturesSalient = () => {
    return (
        <div id="course-section" className="bg-[#1c1c1c] text-[#E2E2E2]">
            <div className="page_alignment pb-24">
                <h1 className="text-5xl font-bold mb-12 text-center">
                    <span className="text-[#A727C6]">  Salient  </span> Features

                </h1>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 md:gap-8">
                    {salient.map((service, index) => (
                        <div
                            key={index}
                            className="p-8 bg-[#312e2e] rounded-lg text-center border-[1.5px] border-[#e2e2e2]/10 hover:border-[#e2e2e2]/40 transition-all ease-linear duration-300 "
                        >

                            {/* <div className="text-left " > 
                            <p  className="text-[#E2E2E2]/80 mb-2 leading-normal ">
                                {service.description1}                       
                            </p>
                            <p className="text-[#E2E2E2]/80 mb-2 leading-normal">
                                {service.description2}                       
                            </p>
                            <p className="text-[#E2E2E2]/80 mb-2 leading-normal">
                                {service.description3}                       
                            </p>
                            <p className="text-[#E2E2E2]/80 mb-2 leading-normal">
                                {service.description4}                       
                            </p>
                            <p className="text-[#E2E2E2]/80 mb-2 leading-normal">
                                {service.description5}                       
                            </p>
                            </div> */}


                            <div className="text-left">
                                <ol className="list-disc list-inside space-y-2 text-[#E2E2E2]/80 mb-2 leading-normal">
                                    <li>{service.description1}</li>
                                    <li>{service.description2}</li>
                                    <li>{service.description3}</li>
                                    <li>{service.description4}</li>
                                    <li>{service.description5}</li>
                                </ol>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesSalient;
