"use client";

import { Description } from "@radix-ui/react-dialog";
import React from "react";

const services = [
    {
        id: 1,
        description1:"Business-first User Experience",
        description2:"Role based Access & Enterprise Controls (AD)",
        description3:"Configurable Dashboards & Data Acquisition",
        description4:"Seamless Integration across AWS, GCP & Azure",
        description5:" Configurable Notifications & Alerts",
        
       
       
    },
    {
        id: 2,
        description1:"Data Compliance for PII & Financial Information",
        description2:"Non-intrusive Data Acquisition & Processing",
        description3:"Analysis, Forecasting & Planning Cloud Adaption",
        description4:"Usage driven Analysis & Prediction",
        description5:"Actionable insights for Cloud Optimization"
        
     

    },
   
];

const   FeaturesSalient  = () => {
    return (
        <div id="course-section" className="bg-[#1c1c1c] text-[#E2E2E2]">
            <div className="page_alignment pb-24">
                <h1 className="text-5xl font-bold mb-12 text-center">
               <span className="text-[#A727C6]">  Salient  </span> Features
                    
                </h1>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 md:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-8 bg-[#312e2e]  rounded-lg text-center border-[1.5px] border-[#e2e2e2]/10 hover:border-[#e2e2e2]/40 transition-all ease-linear duration-300 "
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
