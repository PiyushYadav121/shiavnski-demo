import { Description } from "@radix-ui/react-dialog";
import React from "react";


const services = [
    {
        id: 1,
        description1: "AI powered Decisions to Automate Cloud Resource Management.",
        description2: "ROI Adapters for Private Cloud & On-premise Infrastructure.",
        description3: "Mobile & Wearable Apps for monitoring on-the-go .",
        description4: "AI assisted Audits & Governance for Cloud compliance.",
        description5: "",
        description6:  "",
        description7 :  "",
    },


];


const UpcomingFetues = () => {
    return (
        <>
            <div id="course-section" className="bg-[#1E1E1E] text-[#E2E2E2]">
                <div className="page_alignment pb-24">

                    <h1 className="text-5xl font-bold mb-12 text-center">
                        <span className="text-[#A727C6]">  Upcoming </span>Features

                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8  sm:px-6 py-4 ">
                        <div className="flex justify-center">
                            <img
                                src="/foundation3.jpg"
                                alt="Foundation"
                                className="w-full h-auto rounded-lg object-cover shadow-lg"
                            />
                        </div>

                        <div className="p-6 md:p-8 lg:p-10 bg-[#2e31359a] rounded-lg shadow-lg min-h-[300px] ">

                            <div>
                                {services.map((service, index) => (
                                    <div
                                        key={index}

                                    >



                                        <div className="text-left">
                                            <ol className="list-disc text-bold list-inside space-y-2 text-[#E2E2E2]/80 mb-4 leading-normal">
                                                <li>{service.description1}</li>
                                                <li>{service.description2}</li>
                                                <li>{service.description3}</li>
                                                <li>{service.description4}</li>
                                                {/* <li>{service.description5}</li> */}
                                                {/* <li>{service.description6}</li> */}
                                                {/* <li>{service.description7}</li> */}
                                            </ol>
                                        </div>

                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}
export default UpcomingFetues;