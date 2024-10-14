import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import {
  Sprout,
  BrickWall,
  LineChart,
  Lightbulb,
  Telescope,
  Flag,
} from "lucide-react";

const timelineData = [
  {
    id: 1,
    title: "Foundation Year",
    description: "In 2010, we embarked on a journey to build our company from the ground up. The initial years were marked by a slow and steady pace, as we navigated the challenges of establishing our presence in the market. Despite these hurdles, our determination and perseverance paid off when we converted our first client, marking a significant milestone in our growth.",
    icon: <Sprout className="h-5 w-5 text-[#A727CE]" />,
    // date: "Jun'2010",
  },
  {
    id: 2,
    // title: "Initial Struggles and Milestones",
    title: "Industry Recognition",
    description: "With each passing year, we set ambitious targets and developed a strategic roadmap, reviewing and refining our plans every five years. This structured approach enabled us to gradually expand our operations and strengthen our foothold in the industry.",
    icon: <BrickWall className="h-5 w-5 text-[#A727CE]" />,
    // date: "First Few Years (2010-2012)",
  },
  {
    id: 3,
    title: "Empowering Community",
    description: "As we look towards the future, our focus for the period from 2025 to 2030 is clear: we are committed to supporting female entrepreneurs and creating job opportunities in small towns. This year, we have dedicated ourselves to empowering women by providing them with the resources and support they need to succeed in their ventures, while also fostering economic growth in smaller communities.",
    icon: <LineChart className="h-5 w-5 text-[#A727CE]" />,
    // date: "2015",
  },
  {
    id: 4,
    title: "Path to Success",
    description: "Our journey is a testament to the power of resilience, strategic planning, and a commitment to making a positive impact. We are excited about the future and remain dedicated to our mission of driving innovation and supporting the next generation of entrepreneurs.",
    icon: <Lightbulb className="h-5 w-5 text-[#A727CE]" />,
    // date: "Apr'2020",
  },
  // {
  //   id: 5,
  //   title: "Empowering Women and Small Towns",
  //   description: "Focused on supporting female entrepreneurs and creating job opportunities in small towns, with a commitment to economic growth and innovation.",
  //   icon: <Flag className="h-5 w-5 text-[#A727CE]" />,
  //   date: "2025-2030",
  // },
];

const Timeline = () => {
  return (
    <div className="py-20 bg-[#E2E2E2] text-black flex flex-col items-center">
      <div className="page_alignment flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extra font-bold text-[#1E1E1E] mb-6 text-center"
        >
          Our Journey:
          <span style={{ color: "#A727CE" }}> Milestones and Achievements</span>
        </motion.h2>
        <motion.p
          className="text-lg font-inter text-[#1E1E1E]/80 w-[80%] leading-relaxed mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          A Timeline of Innovation, Growth, and Success at Shiavnksi
          Technologies
        </motion.p>
      </div>

      <div className="mt-12 max-w-4xl w-full">
        <VerticalTimeline>
          {timelineData.map((timeline) => {
            return (
              <VerticalTimelineElement
                visible={true}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "whitesmoke",
                  color: "#fff",
                  borderBottom: "2px",
                  borderStyle: "solid",
                  borderBottomColor: "#A727CE",
                  boxShadow: "none",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #A727CE",
                }}
                date={timeline.date}
                dateClassName="text-[#2c2c2c] !text-xl font-poppins"
                iconStyle={{ background: "#f4e1fa" }}
                icon={timeline.icon}
              >
                <h4 className="text-[#A727CE] font-cabin !leading-none !text-2xl font-semibold">
                  {timeline.title}
                </h4>

                <p className="text-[#2c2c2c]/80 font-inter !leading-snug text-base">
                  {timeline.description}
                </p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Timeline;
