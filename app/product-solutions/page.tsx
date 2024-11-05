"use client";

import React from "react";
import { useRouter } from "next/navigation"; 
import { motion } from "framer-motion";

interface Service {
    title: string;
    link: string;
    image: string;
}


const services: Service[] = [
    {
        title: "Survey Copilot",
        link: "/survey-copilot",
        image: "/full_stack_dev_new.jpg",
    },
    {
        title: "Cloud Billing Accelerator",
        link: "/cloud-billing",
        image: "/Cloud_Consulting.jpg",
    },
    // {
    //     title: "Web Crawl",
    //     link: "/web-crawl", 
    //     image: "/site_readability_new.jpg",

    // },
    // {
    //     title: "DocuIntellect",
    //     link: "/docu-intellect",
    //     image: "/company-logo.png",
    // },
];
type Props = {};

const ProductSolution: React.FC = (props: Props) => {

    const HeadingVars = {
        initial: {
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: "linear",
            },
        },
        open: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "linear",
            },
        },
    };
    const router = useRouter();

    const handleClick = (link: string) => {
        router.push(link);
    };

    return (
        <div id="course-section" className="bg-[#1c1c1c] text-[#E2E2E2]">
            <div
                style={{
                    backgroundImage:
                        "linear-gradient(to bottom, #161616, #181818, #191919, #1a1a1a, #1c1c1c)",
                }}
                className="h-[50vh] w-full flex items-center justify-center relative overflow-hidden"
            >
                {/* Content Container */}
                <motion.div
                    variants={HeadingVars}
                    initial="initial"
                    animate="open"
                    className="page_alignment flex flex-col items-center justify-center text-center relative z-10"
                >
                    <h2 className="text-2xl md:text-4xl lg:text-7xl font-extrabold text-white mb-4">
                        <span style={{ color: "#A727CE" }}>  Products </span> & <span style={{ color: "#A727CE" }}> Solutions</span>
                    </h2>

                    <p className="text-base lg:text-xl sm:max-w-[80%] text-center text-[#E2E2E2]/80 font-nunito leading-tight mt-2 font-medium">
                        The age of Information caters great opportunities for businesses to grow by landscaping data to generate actionable insights.
                    </p>
                    <p className="text-base lg:text-xl sm:max-w-[80%] text-center text-[#E2E2E2]/80 font-nunito leading-tight mt-2 font-medium">
                        Our Data-First Products & Solutions cater to every stage of data landscaping from Data Acquisition, Data Processing & Insights Generation
                        with our Automation & AI capabilities empowering transformation of decisions to actions.
                    </p>
                </motion.div>

                <img
                    src="/grid-6.svg"
                    alt="grid"
                    className="absolute left-0 top-2.5 w-full max-w-[775px] "
                />

                <img
                    src="/grid-7.svg"
                    alt="grid"
                    className="absolute right-0 top-2.5 w-full max-w-[728px]"
                />
            </div>

            <div className="page_alignment py-24">
                
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 md:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-6 bg-[#1c1c1c] rounded-lg text-center border-[0.5px] border-[#A727CE]/10 hover:border-[#e2e2e2]/30 transition-all ease-linear duration-200 cursor-pointer       flex flex-col !scale-[0.99] hover:!scale-[1] shadow-lg shadow-[#A727C6]/5 !text-[#A727CE] "
                            onClick={() => handleClick(service.link)}
                        >
                            <div className="mb-6">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="mx-auto mb-4 rounded-lg shadow-lg w-full h-[250px] object-cover"
                                />
                            </div>

                            <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                           

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductSolution;
