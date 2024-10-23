"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for the app directory
import { motion } from "framer-motion";
// import ProductTopbar from "./_component/Product-Solu-Topbar";


interface Service {
    title: string;
    link: string;
    image: string;
}




const services: Service[] = [
    {
        title: "Survey Copilot",
        link: "/survey_copilot", 
        image: "/full_stack_dev_new.jpg",
    },
    {
        title: "Cloud Billing Accelerator",
        link: "/cloud_billing", 
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

const ServicePage: React.FC = () => {

    
    const router = useRouter();

    const handleClick = (link: string) => {
        router.push(link);
    };

    return (
        <div id="course-section" className="bg-[#1E1E1E] text-[#E2E2E2]">

           {/* <ProductTopbar/> */}

            <div className="page_alignment py-24">
                <h1 className="text-6xl font-bold mb-12 text-center">
                    <span className="text-[#A727C6]">Products </span> &
                    <span className="text-[#A727C6]"> Solutions</span>
                </h1>

                {/* <div className="items-center text-lg sm:text-xl md:text-2xl w-32 font-extrabold border-b-4 rounded-sm flex flex-wrap  border-gray-300 pb-2 mb-4">
                    
                </div> */}

                <p className="text-[#e2e2e2]/80 text-xl mb-8 text-center leading-tight">
                    The age of Information caters great opportunities for businesses to
                    grow by landscaping data to generate actionable insights.
                </p>

                <p className="text-[#e2e2e2]/80 text-xl mb-12 text-center leading-tight">
                    Our Data-First Products & Solutions cater to every stage of data landscaping from Data Acquisition, Data Processing & Insights Generation with our Automation & AI capabilities empowering transformation of decisions to actions.
                </p>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 md:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-6 bg-[#1e1e1e] rounded-lg text-center border-[0.5px] border-[#A727CE]/10 hover:border-[#e2e2e2]/30 transition-all ease-linear duration-200 cursor-pointer       flex flex-col !scale-[0.99] hover:!scale-[1] shadow-lg shadow-[#A727C6]/5 !text-[#A727CE] "
                            onClick={() => handleClick(service.link)}
                        >

                            {/* <motion.div

                                className="p-6 bg-[#191919] !text-[#A727CE] opacity-20 rounded-lg shadow-lg shadow-[#A727C6]/5 border-[0.5px] border-[#A727C6]/30 flex flex-col items-start justify-start !scale-[0.99] hover:!scale-[1] transition-all ease-linear duration-200"
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7, delay: 0.5 }}

                            //   whileHover={{ scale: 1.05 }}
                            > */}


                            <div className="mb-6">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="mx-auto mb-4 rounded-lg shadow-lg w-full h-[250px] object-cover"
                                />
                            </div>
                            <h2 className="text-2xl font-bold mb-4">{service.title}</h2>



                            {/* </motion.div> */}

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicePage;
