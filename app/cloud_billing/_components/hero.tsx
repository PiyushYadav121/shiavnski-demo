import React from 'react'

const ServeyHero = () => {
    return (
        <div id="course-section" className="bg-[#1E1E1E] text-[#E2E2E2]">
            <div className="page_alignment py-24">
                <h1 className="text-6xl font-bold mb-12 text-center">
                    <span className="text-[#A727C6]">Cloud Billing Accelerator</span>

                </h1>
                   <div style={{"direction":"ltr"}} > 
                <p className="text-[#e2e2e2]/80 text-xl mb-12  leading-tight">
                The cloud computing studies have shown a significant rise of cloud adoption over the past few years and at the same time the complex nature of cloud billing where a good chunk of organisations have observed challenges in tracing the cloud usage across the business lines. The cloud usage traceability problem further scales as the majority of organisations use multiple public or private clouds for their operations. The standard methods for tracking the cloud usage and budgeting the future demands leads to another complexity due to the post-facto nature of the analytics from the standard consoles of the cloud providers.
                </p>

                
                <p className="text-[#e2e2e2]/80 text-xl mb-12  leading-tight">
                 The <span className=' font-bold'>Cloud Billing Accelerator </span> , a cloud agnostic tool offering one-stop solution to trace the cloud usage in a non-intrusive manner with a centralised business-user friendly user interface. The underlying technology runs as a serverless cloud function controls maintenance overheads. The centralised view (based on licence) offers monitoring, analytics & forecasting cloud usage patterns and also offers AI driven assistance to optimise cloud strategy.
                 </p>
                 </div>
            </div>
        </div>
    )
}
export default ServeyHero;
