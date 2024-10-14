"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  FaAtom,
  FaFlask,
  FaCalculator,
  FaLaptopCode,
  FaBone,
} from "react-icons/fa";

const courses = [
  {
    icon: <FaAtom className="text-[#A727C6] w-10 h-10 mx-auto" />,
    title: "Physics Solutions Hub",
    url: "physics",
    description:
      "Engage with physicists globally to solve problems in quantum mechanics, thermodynamics, and applied physics. Whether it's theoretical exploration or practical application, crowdsourcing can accelerate your progress.",
  },
  {
    icon: <FaFlask className="text-[#A727C6] w-10 h-10 mx-auto" />,
    title: "Chemistry Co-creation",
    url: "chemistry",
    description:
      "Collaborate with chemists from around the world to tackle challenges in organic chemistry, inorganic chemistry, and chemical engineering. Find innovative solutions for your chemical research and development needs through crowdsourcing.",
  },
  {
    icon: <FaCalculator className="text-[#A727C6] w-10 h-10 mx-auto" />,
    title: "Mathematical Innovations",
    url: "maths",
    description:
      "Harness the collective expertise of mathematicians for both theoretical and practical applications. From data analysis to cryptography, crowdsource your mathematical challenges and drive scientific and technological advancements.",
  },
  {
    icon: <FaBone className="text-[#A727C6] w-10 h-10 mx-auto" />,
    title: "Life Sciences Collaboration",
    url: "biology",
    description:
      "Tap into a global network of experts in molecular biology, biotechnology, and more. Whether you're developing a new drug or deciphering complex biological processes, collaborate with top minds to achieve breakthroughs.",
  },
  {
    icon: <FaLaptopCode className="text-[#A727C6] w-10 h-10 mx-auto" />,
    title: "Computer Science Synergy",
    url: "computer-fundamentals",
    description:
      "Leverage the knowledge of computer science professionals to enhance your projects in algorithms, data structures, software development, and machine learning. Crowdsource your computing challenges and stay at the forefront of technology.",
  },
];

const CoursePage = () => {
  return (
    <div id="course-section" className="bg-[#1E1E1E] text-[#E2E2E2]">
      <div className="page_alignment py-24">
        <h1 className="text-5xl font-bold mb-12 text-center">
          Our <span className="text-[#A727C6]">Expertise</span>
        </h1>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="p-8 bg-[#2E2E2E] rounded-lg shadow-lg text-center"
            >
              <div className="mb-6">{course.icon}</div>
              <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
              <p className="text-[#E2E2E2]/80 mb-6">{course.description}</p>

              <a href={`/distributed-problem-solving/${course.url}`}>
                <Button variant="primary" size="sm">
                  Learn More
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
