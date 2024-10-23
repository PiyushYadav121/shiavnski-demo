"use client";

import React from "react";

const services = [
    {
        title: "Accelerator Console",
        description1:"Responsive Web Interface with Role based access control for management interface.",
        description2:"Unified interface for Dashboard, Alerting & configuration.",
        description3:"",
        description4:"",
        
        image: "/full_stack_dev_new.jpg",
    },


    {
        title: "Data Acquisition",
        description1:"Serverless non-intrusive cloud statistics capture.",
        description2:"Faster Analytics with Real time usage data acquisition.",
        description3:"Seamless integration with popular cloud providers AWS, GCP & Azure.",
        description4:"",
        image: "/Cloud_Consulting.jpg",
    },
  
    {
        title: "Cloud Budgeting",
        description1:"Configurable usage & billing analysis at multiple levels across multiple parameters.",
        description2:"Configurable & customizable usage budget forecast.",
        description3:"AI driven recommendations for cloud usage and cost optimization.",
        description4:"",
        image: "/site_readability_new.jpg",
    },
    
    {
        title: "Monitoring, Reports & Alerts",
        description1:"Multi-parameter reports to track resource utilization at subscription, cloud provider & project (with tags) levels.",
        description2:"Configurable & customizable interface for business & project specific reporting.",
        description3:"Mail Reports to Inbox with schedule send for standard reports.",
        description4:"",
        image: "/data_analytic_new.jpg",
    },

    {
        title: "Integration & Customization",
        description1:"OpenAPI based standard integration interface for seamless integration with Enterprise applications & 3rd party services.",
        description2:"Data Acquisition and sharing with popular data storage and visualization services like S3 & PowerBI.",
        description3:"",
        description4:"",
        image: "/data_processing_new.jpg",
    },

    {
        title: "Data Security & Compliance",
        description1:"Roles based access control at module and screen level.",
        description2:"Data at-rest and in-transit follows standard encryption practices using externalised encryption keys.",
        description3:"Standard practices for acquisition, storage and processing of financial data.",
        description4:"",
        image: "/data_modeling_new.jpg",
    },

];

const   GlanceFeatures  = () => {
    return (
        <div id="course-section" className="bg-[#1c1c1c] text-[#E2E2E2]">
            <div className="page_alignment pb-24">
                <h1 className="text-5xl font-bold mb-12 text-center">
                Features at a<span className="text-[#A727C6]">  Glance </span>
                    
                </h1>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 md:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-8 bg-[#1e1e1e] rounded-lg text-center border-[1.5px] border-[#e2e2e2]/10 hover:border-[#e2e2e2]/40 transition-all ease-linear duration-300 "
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
