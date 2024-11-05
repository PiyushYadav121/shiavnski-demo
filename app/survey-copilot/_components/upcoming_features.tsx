import { Description } from "@radix-ui/react-dialog";
import React from "react";


const upcoming = [
    {
        id: 1,
        description1: "Audio & Video interface for Surveys",
        description2: "Award (Remuneration) Model for Respondents",
        description3: "GenerativeAI powered Survey interface",
        description4: "GenerativeAI based textual Survey outcome analysis",
        description5: "Advanced analytics to track ROI on Survey outcome",
        description6: "AI based Similar Survey Analysis",
        description7: "Automated audits & governance for compliances",

    },


];


const UpcomingFetures = () => {
    return (
        <>
           
            <div id="course-section" className="bg-[#1c1c1c]  text-[#E2E2E2]  ">

                <div className="flex flex-col md:flex-row ">

                    <div className="flex justify-center w-full md:w-3/5">
                        <img
                            src="/upcoming-features.jpg"
                            alt="Foundation"
                            className="w-full h-auto lg:h-[450px] object-cover"
                        />
                    </div>

                    <div className="p-6 md:p-8 lg:p-10 bg-[#e2e2e2] lg:h-[450px] w-full md:w-2/5">
                        <div>
                            {upcoming.map((service, index) => (
                                <div key={index}>


                                    <h1 className="text-5xl font-bold mb-6 text-center text-[#1c1c1c]/70 ">
                                        <span className="text-[#A727C6]">Upcoming</span> Features
                                    </h1>
                                    <div className="text-left">
                                        <ol className="list-disc text-bold list-inside space-y-2 text-[#1c1c1c]/70 py-8 leading-normal">
                                            <li>{service.description1}</li>
                                            <li>{service.description2}</li>
                                            <li>{service.description3}</li>
                                            <li>{service.description4}</li>
                                            <li>{service.description5}</li>
                                            <li>{service.description6}</li>
                                            <li>{service.description7}</li>
                                        </ol>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>


        </>
    )

}
export default UpcomingFetures;