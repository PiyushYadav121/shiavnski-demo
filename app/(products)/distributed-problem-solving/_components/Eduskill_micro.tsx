"use client";

import { title } from "process";
import React from "react";
type Props = {};


const services = [
    {
        title1: "EduSkill",
        title2: "Where Talent Meets Mentor",
        description1:
            "EduSkill connects talented individuals with experienced mentors. Our pyramid-based approach integrates talent development and expert service delivery seamlessly.",
        description2: " EduSkill connects talented individuals with experienced mentors. Our pyramid-based approach integrates talent development and expert service delivery seamlessly. At EduSkill, a tiered system ensures that budding talents receive mentorship from seasoned professionals. This collaborative learning environment nurtures skills and facilitates real-world application through micro-task engagements, enabling talents to gain hands-on experience and deliver high-quality results.",
        image: "/eduskill_new.jpg",
    },
    {
        title1: "Micro Jobs Community",
        title2: "Where Skill Meets Work",
        description1:
            "We operate as a community on a 'Skill meets Work' model empowering individuals from various backgrounds offering skills in different Indian & International Languages and Subject Matters for an extra income by remotely collaborating on Cutting Edge AI projects.",
        description2: "Our unique  working model empowers individuals from different backgrounds and skill expertise with Entrepreneurship interests set foot into the coming age industry with opportunity to collaborate on cutting edge AI projects.",
        image: "/microjobs_new.jpg",
    },
    // {
    //     title: "Site Reliability Engineering",
    //     description:
    //         "Achieve agility & operational excellence with our Site Reliability Engineering expertise & streamline operations with automation and industry recognized software engineering practices.",
    //     image: "/service_second.avif",
    // },
    // {
    //     title: "Data Analytics",
    //     description:
    //         "Apply our Data Analytics expertise & gain competitive advantage in the market with efficient Data Acquisition and Analytics and establish a Data Driven Strategy for resilience.",
    //     image: "/service_data_analytic.avif",
    // },

];





const Eduskill = () => {
    return (

        <div id="course-section" className="bg-[#1c1c1c] text-[#E2E2E2]">
            <div className="page_alignment py-24">
                {/* <h1 className="text-5xl font-bold mb-12 text-center">
                <span className="text-[#A727C6]"> EduSkill</span> &  <span className="text-[#A727C6]"> MicroJobs</span> 
                   
                </h1> */}
                {/* <p className="text-[#e2e2e2]/80 text-xl mb-12 text-center leading-tight">
            At Shiavnski, we offer comprehensive technology consulting services
            that empower businesses to leverage the latest advancements and drive
            transformative growth. Lead the Data & AI driven Digital Revolution
            with our Expert Services and Innovative Consultation.
        </p> */}

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 md:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-8 bg-[#1e1e1e] rounded-lg text-center border-[1.5px] border-[#e2e2e2]/10 hover:border-[#e2e2e2]/40 transition-all ease-linear duration-300 "
                        >
                            <div className="mb-6">
                                <img
                                    src={service.image}

                                    // className="mx-auto mb-4 rounded-lg  shadow-lg min-h-max lg:min-h-[250px] w-full"
                                    className="mx-auto mb-4 rounded-lg shadow-lg w-full  h-[250px] object-cover"
                                />

                            </div>
                            <h1 className="text-4xl font-bold mb-4 text-[#A727C6]">{service.title1}</h1>
                            <h3 className="text-1xl font-bold mb-4">{service.title2}</h3>
                            <p className="text-[#E2E2E2]/80 mb-4 leading-normal">
                                {service.description1}
                            </p>
                            <p className="text-[#E2E2E2]/80 mb-4 leading-normal">
                                {service.description2}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
export default Eduskill;
