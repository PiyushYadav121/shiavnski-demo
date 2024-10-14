import React from "react";
import {
  IoIosCash,
  IoMdAnalytics,
  IoMdShare,
  IoMdLock,
  IoMdPeople,
} from "react-icons/io";

const ServicesSection = () => {
  const features = [
    {
      icon: IoIosCash,
      title: "Customizable Surveys",
      subtitle:
        "Create surveys that meet your unique needs using various templates and question types.",
      description:
        "Design surveys tailored to your specific requirements with a range of templates and question types.",
      color: "#a727c6", // Purple color
    },
    {
      icon: IoMdAnalytics,
      title: "Real-time Analytics",
      subtitle:
        "Track responses instantly and uncover valuable insights using advanced analytics tools.",
      description:
        "Monitor responses in real-time and gain insights with powerful analytics tools.",
      color: "#1e1e1e", // Dark grey color
    },
    {
      icon: IoMdShare,
      title: "Effortless Distribution",
      subtitle:
        "Share surveys seamlessly through email, social media, or embedded links.",
      description:
        "Share your surveys effortlessly via email, social media, or embedded links.",
      color: "#e2e2e2", // Light grey color
    },
    {
      icon: IoMdLock,
      title: "Secure Data Management",
      subtitle:
        "Protect your data with robust security measures, ensuring privacy and compliance.",
      description:
        "Ensure the security and privacy of your data with our robust data protection measures.",
      color: "#1e1e1e", // Dark grey color
    },
    {
      icon: IoIosCash,
      title: "Scalable Solutions",
      subtitle:
        "Scale survey operations effortlessly as organizational needs grow.",
      description:
        "By focusing on these aspects, a survey application can effectively scale alongside organizational growth.",
      color: "#e2e2e2", // Light grey color
    },
    {
      icon: IoMdPeople,
      title: "Real-time Collaboration",
      subtitle:
        "Enable real-time collaboration for teams, facilitating seamless editing and feedback.",
      description:
        "By incorporating these features into the survey application, teams can collaborate effectively in real-time.",
      color: "#a727c6", // Purple color
    },
  ];

  return (
    <section className="our_service_section flex flex-col items-center bg-cover bg-left-top bg-no-repeat min-h-screen text-white relative py-24 bg-[#e2e2e2]">
      <header className="text-center font-bold text-[#1e1e1e] text-6xl my-8">
        Key <span style={{ color: "#a727c6" }}>Features</span>
      </header>
      <p className="text-xl lg:text-2xl sm:max-w-[80%] text-center text-[#1e1e1e]/80 font-nunito leading-tight mt-2 font-medium">
        Our survey application offers a user-friendly interface designed for
        ease of use by individuals of all technical levels, allowing for
        seamless survey creation, distribution, and response collection
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16 page_alignment">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`max-w-md bg-[#1e1e1e] p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform  hover:scale-[1.01]`}
          >
            <div className="flex items-center mb-6">
              <div
                className={`bg-white bg-opacity-10 p-4 rounded-full text-[#1e1e1e]`}
              >
                {typeof feature.icon === "function" && (
                  <feature.icon className="text-5xl text-[#a727c6]" />
                )}
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-white">
                  {feature.title}
                </h4>
                <h6 className="text-base mt-1 leading-tight text-[#e2e2e2]/80">
                  {feature.subtitle}
                </h6>
              </div>
            </div>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
