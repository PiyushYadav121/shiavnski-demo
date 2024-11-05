"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight} from "lucide-react";
import Link from 'next/link';
import EventTopbar from './_components/EventTopbar';


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
   
    return (
        <div id="course-section" className="bg-[#1c1c1c] text-[#E2E2E2]">

                       <EventTopbar/>
     
            <div className="page_alignment py-24">

                <div className="flex flex-col-reverse md:flex-row  items-stretch justify-center min-h-screen gap-8" >
                   
                <div className="md:w-1/2 w-full  justify-center h-[400px] md:h-[600px] lg:h-[650px]  overflow-y-scroll scrollbar px-2    " style={{"direction": "rtl"}}>
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
                    <div className="md:w-1/2 w-ful">
                        <img
                            src="/events.jpg"
                            alt="event image "
                            className="w-full object-cover rounded-lg h-[300px] md:h-[600px] lg:h-[650px] "
                        />
                    </div>                 
                </div>
            </div>
        </div>
    );
};


export default EventSection;


