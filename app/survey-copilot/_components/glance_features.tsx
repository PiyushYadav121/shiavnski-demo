"use client";

import React from "react";

const Glance = [
    {
        title: "Survey Designer",
        description1:"WYSIWYG Designer with configurable business flows & rules for Survey.",
        description2:"Domain-specific pre-built templates with customization capabilities.",
        description3:"",
        description4:"",
        
        image: "/full_stack_dev_new.jpg",
    },
    {
        title: "Survey Interface",
        description1:"Web (responsive) based Survey interface.",
        description2:"Messaging driven Surveys using SMS, Email, Whatsapp.",
        description3:"AI (NLP) driven Interactive Surveys with chabots & apps.",
        description4:"",
        image: "/Cloud_Consulting.jpg",
    },
    {
        title: "Survey Publishing",
        description1:"Seamless integration to popular communication modes with tracking.",
        description2:"Tracking, reminder and alerts for pending Survey actions and feedback.",
        description3:"",
        description4:"",
        image: "/site_readability_new.jpg",
    },
    {
        title: "Survey Insights & Reports",
        description1:"Configurable visualisation of Survey status and outcome.",
        description2:"Multi-level and multi-parameter filters for reports with visualisations.",
        description3:"Real time insights generation with AI driven bias detection.",
        description4:"Sentiment analytics for Survey outcome with AI/ML techniques.",
        image: "/data_analytic_new.jpg",
    },
    {
        title: "Integration & Customization",
        description1:"OpenAPI based standard integration interface for seamless integration with Enterprise applications & 3rd party services.",
        description2:"",
        description3:"",
        description4:"",
        image: "/data_processing_new.jpg",
    },
    {
        title: "Data Security & Compliance",
        description1:"Roles based access control at module, Survey and screen level.",
        description2:"Data Anonymization for Respondent’s privacy and regulatory standards.",
        description3:"Data at-rest and in-transit follows standard encryption practices using externalised encryption keys.",
        description4:"Compliance ready design for GDPR & HIPAA.",
        image: "/data_modeling_new.jpg",
    },
];

const   GlanceFeatures  = () => {
    return (
        <div id="course-section" className="bg-[#1c1c1c] text-[#E2E2E2]">
            <div className="page_alignment pb-24 ">
                <h1 className="text-5xl font-bold mb-12 text-center">
                Features at a<span className="text-[#A727C6]">  Glance </span>
                    
                </h1>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
                    {Glance.map((service, index) => (
                        <div
                            key={index}
                            className="p-8 bg-[#312e2e] rounded-lg text-center border-[1.5px] border-[#e2e2e2]/10 hover:border-[#e2e2e2]/40 transition-all ease-linear duration-300 "
                        >
                            <div className="mb-6">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    // className="mx-auto mb-4 rounded-lg  shadow-lg min-h-max lg:min-h-[250px] w-full"
                                    className="mx-auto mb-4 rounded-lg shadow-lg w-full h-[250px] object-cover"
                                />

                            </div>
                            <h2 className="text-2xl font-bold mb-4">{service.title}</h2>

                            <div className="text-left" > 
                            <p  className="text-[#E2E2E2]/80 mb-3 leading-normal ">
                                {service.description1}                       
                            </p>
                            <p className="text-[#E2E2E2]/80 mb-3 leading-normal">
                                {service.description2}                       
                            </p>
                            <p className="text-[#E2E2E2]/80 mb-3 leading-normal">
                                {service.description3}                       
                            </p>
                            <p className="text-[#E2E2E2]/80 mb-3 leading-normal">
                                {service.description4}                       
                            </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GlanceFeatures;
