import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import NewsTopbar from './_components/topbar';

export const newsdetails = [
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

const NewsSection = () => {
    return (
        <div id="course-section" className="bg-[#1c1c1c] text-[#E2E2E2]">

                   {/* news Topbar is added */}
                           <NewsTopbar/>


            <div className="page_alignment py-24">
              
                <div className="flex flex-col md:flex-row items-stretch justify-center min-h-screen gap-8">      
                    <div className="md:w-1/2 w-full">
                        <img
                            src="/newsroom.jpg"
                            alt="Placeholder Image"
                            className="w-full object-cover rounded-lg h-[300px] md:h-[600px] lg:h-[650px]"
                        />
                    </div>

                    <div className="md:w-1/2 w-full  justify-center h-[400px] md:h-[600px] lg:h-[650px]  overflow-y-scroll scrollbar px-2    ">
                        {newsdetails.map((news) => (
                            <div key={news.id} className=" flex  min-h-[200px] items-center bg-[#1f1f1f] p-6 rounded-lg shadow-md shadow-black/10 mb-8 border-[1.5px] border-[#e2e2e2]/5 hover:border-[#e2e2e2]/10 transition-all ease-linear duration-300 ">
                                <div className="w-full p-4 ">
                                    <h3 className="text-base  text-[#ececec]/80 font-normal mb-4">{news.text}</h3>
                                    <Button
                                        variant="primary"
                                        className="mt-4 gap-x-2 w-4  "
                                    >
                                        <Link
                                            href={news.link}
                                            target="_blank"
                                            // rel=""
                                        >
                                            Read More
                                        </Link>
                                    </Button>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default NewsSection


