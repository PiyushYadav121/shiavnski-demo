import React from "react";

const Ourstory = () => {
return (
<> 

<section className="page_alignment ">
  {/* <div className="flex items-center justify-center py-5 bg-[#161616] text-white ">
    <h2 className=" md:text-3xl lg:text-5xl font-extrabold mb-4">
      Our Journey
    </h2> 
  </div> */}

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 sm:px-6 py-4">
    <div className="flex justify-center">
      <img
        src="/foundation3.jpg"
        alt="Foundation"
        className="w-full h-auto rounded-lg object-cover shadow-lg"
      />
    </div>
    <div className="p-6 md:p-8 lg:p-10 bg-[#BEF542] rounded-lg shadow-lg min-h-[300px] ">
      <h2 className="text-3xl md:text-4xl mb-4 font-extrabold  text-[#004318]">
        Foundation
      </h2>
      <p className="text-base mb-4 text-[#004318]/80 font-inter leading-snug">
      In 2010, we embarked on a journey to build our company from the ground up. The initial years were marked by a slow and steady pace, as we navigated the challenges of establishing our presence in the market. Despite these hurdles, our determination and perseverance paid off when we converted our first client, marking a significant milestone in our growth.
      </p>
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:px-6 py-4">
    <div className="p-6 md:p-8 lg:p-10 bg-[#0c0c0c] rounded-lg shadow-lg min-h-[300px]">
      <h2 className="text-3xl md:text-4xl mb-4 font-extrabold text-[#ffffff]">
        Industry Recognition
      </h2>
      <p className="text-base mb-4  text-[#ffffff]/80 font-inter leading-snug ">
      With each passing year, we set ambitious targets and developed a strategic roadmap, reviewing and refining our plans every five years. This structured approach enabled us to gradually expand our operations and strengthen our foothold in the industry.
      </p>
    </div>
    <div className="flex justify-center">
      <img
        src="/Foundation_new.jpg"
        alt="Industry Recognition"
        className="w-full h-auto rounded-lg object-cover shadow-lg min-h-[200px]"
      />
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:px-6 py-4">
    <div className="flex justify-center">
      <img
        src="/Empowering_Community_new.jpg"
        alt="Empowering Community"
        className="w-full h-auto rounded-lg object-cover shadow-lg"
      />
    </div>
    <div className="p-6 md:p-8 lg:p-10  bg-[#e471b0] rounded-lg shadow-lg min-h-[300px]">
      <h2 className="text-3xl md:text-4xl mb-4 font-extrabold  text-[#771e25]">
        Empowering Community
      </h2>
      <p className="text-base mb-4  text-[#771e25]/80 font-inter leading-snug">
      As we look towards the future, our focus for the period from 2025 to 2030 is clear: we are committed to supporting female entrepreneurs and creating job opportunities in small towns. This year, we have dedicated ourselves to empowering women by providing them with the resources and support they need to succeed in their ventures, while also fostering economic growth in smaller communities.
      </p>
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:px-6 py-4 mb-4">   
    <div className="p-6 md:p-8 lg:p-10  bg-[#2d1258] rounded-lg shadow-lg min-h-[300px]">
      <h2 className="text-3xl md:text-4xl mb-4 font-extrabold text-[#b1eaf8]">
        Path to Success
      </h2>
      <p className="text-base mb-4  text-[#b1eaf8]/80 font-inter leading-snug">
      Our journey is a testament to the power of resilience, strategic planning, and a commitment to making a positive impact. We are excited about the future and remain dedicated to our mission of driving innovation and supporting the next generation of entrepreneurs.
      </p>
    </div>
    <div className="flex justify-center">
      <img
        src="/Path_to_success_new.jpg"
        alt="Path to Success"
        className="w-full h-auto rounded-lg object-cover shadow-lg"
      />
    </div>
  </div>
</section>
</>
)

}
export default Ourstory;