// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import AboutExploreCard from "@/components/layouts/aboutCardSection";
// import { exploreCards } from "@/lib/constants/aboutData";

// const ExploreSection = () => {
//   return (
//     <div className="py-24 pb-44 bg-[#1c1c1c]">
//       <div className="page_alignment mt-10 flex flex-col items-center justify-center">
//         <motion.h2
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           className="text-3xl md:text-4xl lg:text-5xl font-extra font-bold text-white mb-6"
//         >
//           Our <span style={{ color: "#A727CE" }}> Mission</span>
//         </motion.h2>  
//         <motion.p
//           className="text-lg font-inter text-[#e1e1e1]/80 w-[80%] leading-relaxed mb-8 text-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           Empowering businesses with cutting-edge technology solutions to
//           achieve their strategic goals and thrive in the digital era, driving
//           innovation and excellence.
//         </motion.p>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-20">
//           {exploreCards.map((data) => (
//             <AboutExploreCard
//               key={data.id}
//               label={data.label}
//               desc={data.description}
//               icon={data.icon}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExploreSection;





"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Cable,
  GitGraph,
  Group,
  Map,
  MessageSquareHeart,
  Loader,
  EyeIcon,
  Rocket,
  ArrowUpLeftFromCircleIcon,
  LucideHandHeart,
  HandHeart,
  Flag,
  StarIcon,
  FileUp,
  FocusIcon,
  Users,
} from "lucide-react";

export const exploreCards = [
  {
    id: 1,
    label: "Innovation",
    description:
      "We embrace cutting-edge technology to deliver innovative solutions for businesses.",
    icon: <Loader className="h-7 w-7" />,
  },
  {
    id: 2,
    label: "Empowerment",
    description:
      "We are committed to empower our customers and smaller communities in the digital era.",
    icon: <StarIcon className="h-7 w-7" />,
  },
  {
    id: 3,
    label: "Growth",
    description:
      "We focus on creating growth opportunities for business & communities in the digital era.",
    icon: <ArrowUpLeftFromCircleIcon className="h-7 w-7" />,
  },
  {
    id: 4,
    label: "Community",
    description:
      "We believe in the power of smaller communities and strive to support their development.",
    icon: <Users  className="h-7 w-7" />,
  },
];

const ExploreSection = () => {
  return (
    <div className="py-24 pb-44 bg-[#1c1c1c]">


      <div className="page_alignment mt-10 flex flex-col items-center justify-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extra font-bold text-white mb-6"
        >
          Vision, Mission & <span style={{ color: "#A727CE" }}>  Values</span>
        </motion.h2>
        {/* <motion.p
          className="text-lg font-inter text-[#e1e1e1]/80 w-[80%] leading-relaxed mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Empowering businesses with cutting-edge technology solutions to
          achieve their strategic goals and thrive in the digital era, driving
          innovation and excellence.
        </motion.p> */}


      </div>



      <div className="page_alignment mt-10 flex flex-col items-center justify-center">



        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 mt-20 mb-20">


          <motion.div

            className="p-6 bg-[#191919] !text-[#A727CE] opacity-20 rounded-lg shadow-lg shadow-[#A727C6]/5 border-[0.5px] border-[#A727C6]/30 flex flex-col items-start justify-start !scale-[0.99] hover:!scale-[1] transition-all ease-linear duration-200"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}

          //   whileHover={{ scale: 1.05 }}
          >
            {/* <div className="flex items-center mb-4 gap-5"> */}
            <EyeIcon className="h-[2.5rem] md:h-[3rem] lg:h-[3.75rem] w-[2.5rem] md:w-[3rem] lg:w-[3.75rem] mb-4" />
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extra font-bold !text-[#A727CE] mb-6">Vision</h3>
            {/* </div> */}
            <p className=" text-[#c3c3c3]/80 text-left text-sm font-inter leading-snug font-normal">To be the leading force in empowering smaller communities through cutting-edge technology, fostering growth and innovation in the digital era.</p>
          </motion.div>


          <motion.div

            className="p-6 bg-[#191919] !text-[#A727CE] opacity-20 rounded-lg shadow-lg shadow-[#A727C6]/5 border-[0.5px] border-[#A727C6]/30 flex flex-col items-start justify-start !scale-[0.99] hover:!scale-[1] transition-all ease-linear duration-200"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}

          //   whileHover={{ scale: 1.05 }}
          >
            {/* <div className="flex items-center mb-4 gap-5"> */}
            <FileUp className="h-[2.5rem] md:h-[3rem] lg:h-[3.75rem] w-[2.5rem] md:w-[3rem] lg:w-[3.75rem] mb-4" />
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extra font-bold !text-[#A727CE] mb-6">Mission</h3>
            {/* </div> */}
            <p className=" text-[#c3c3c3]/80 text-left text-sm font-inter leading-snug font-normal">To empower businesses with state-of-the-art technologies for growth opportunities & drive digital transformation for smaller communities.</p>
          </motion.div>

        </div>


        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extra font-bold !text-[#A727CE] mt-10 flex items-center gap-5"
        >
          <HandHeart className="h-[2.5rem] md:h-[3rem] lg:h-[3.75rem] w-[2.5rem] md:w-[3rem] lg:w-[3.75rem]" />
          {/* <span style={{ color: "#A727CE" }}>Values</span> */}
          <span className="">Values</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 mt-20">



          {exploreCards.map((card) => (
            <motion.div
              key={card.id}
              className="p-6 bg-[#191919] !text-[#A727CE] opacity-20 rounded-lg shadow-lg shadow-[#A727C6]/5 border-[0.5px] border-[#A727C6]/30 flex flex-col items-start justify-start !scale-[0.99] hover:!scale-[1] transition-all ease-linear duration-200"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}

            //   whileHover={{ scale: 1.05 }}
            >
              {/* <div className="flex items-center mb-4 gap-3"> */}
              {card.icon}
              <h3 className="text-lg mt-2 font-poppins font-medium capitalize text-white mb-2">{card.label}</h3>
              {/* </div> */}
              <p className=" text-[#c3c3c3]/80 text-left text-sm font-inter leading-snug font-normal">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
