"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import {
    
    ArrowBigRightIcon,
    ArrowBigRightDash,
    ArrowRightCircleIcon,
    ArrowRightFromLine,
    ArrowRight,
   
  } from "lucide-react";
import Link from 'next/link';
// import { MediaQuery } from "@/lib/helpers/mediaQuery";
import { MediaQuery } from '@/lib/helpers/mediaQuery';


export const eventdetails = [
    {   
        id: 1,  
        text: "Microsoft Expand Strategic Collaboration to Accelerate Customer Adoption of The Microsoft Cloud and Generative AI",
        link: "https://example.com/innovation",
    },
    {
        id: 2,
        text: "Microsoft Expand Strategic Collaboration to Accelerate Customer Adoption of The Microsoft Cloud and Generative AI",
        link: "https://example.com/empowerment",
    },
    {
        id: 3,
        text: "Microsoft Expand Strategic Collaboration to Accelerate Customer Adoption of The Microsoft Cloud and Generative AI",
        link: "https://example.com/growth",
    },
    {
        id: 4,
        text: "Microsoft Expand Strategic Collaboration to Accelerate Customer Adoption of The Microsoft Cloud and Generative AI",
        link: "https://example.com/community",
    },
    {
        id: 5,
        text: "Microsoft Expand Strategic Collaboration to Accelerate Customer Adoption of The Microsoft Cloud and Generative AI",
        link: "https://example.com/community",
    },
    {
        id: 6,
        text: "Microsoft Expand Strategic Collaboration to Accelerate Customer Adoption of The Microsoft Cloud and Generative AI",
        link: "https://example.com/community",
    },
];

const EventSection = () => {
    const { isDesktopOrLaptop, isTabletOrMobile } = MediaQuery();
    return (
        <div id="course-section" className="bg-[#1E1E1E] text-[#E2E2E2]">
            <div className="page_alignment py-24">
                <h1 className="text-5xl font-bold mb-12 text-center">
                     <span className="text-[#A727C6]">Events</span>
                </h1>

                <div className="flex flex-col-reverse md:flex-row  items-stretch justify-center min-h-screen gap-8" >
                   
                <div className="md:w-1/2 w-full  justify-center h-[600px] overflow-y-scroll scrollbar px-2    " style={{"direction": "rtl"}}>
                        {eventdetails.map((event) => (
                            <div key={event.id}   style={{"direction": "ltr"}} className="  flex  min-h-[200px] items-center bg-[#1f1f1f] p-6 rounded-lg shadow-md shadow-black/10 mb-8 border-[1.5px] border-[#e2e2e2]/5 hover:border-[#e2e2e2]/10 transition-all ease-linear duration-300 ">
                                <div className="w-full p-4 ">
                                    <h3 className="text-base  text-[#ececec]/80 font-normal mb-4">{event.text}</h3>
                                    <Button
                                        variant="primary"
                                        className="mt-4 gap-x-2 w-2  "
                                    >
                                        <Link
                                            href={event.link}
                                            target="_blank"
                                            // rel=""
                                          
                                        >
                                            {/* Read More */}
                                            <ArrowRight className="h-auto w-10 items-center justify-center " />
                                        </Link>
                                    </Button>

                                </div>
                            </div>
                        ))}
                    </div>

                   
                    <div className="md:w-1/2 w-ful h-auto ">
                        <img
                            src="/events.jpg"
                            alt="event image "
                            className="w-full h-full object-cover rounded-lg "
                        />
                    </div>

                  
                </div>
            </div>
        </div>
    );
};


export default EventSection


