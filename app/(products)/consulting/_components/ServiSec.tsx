"use client";

import React from "react";

const services = [
    {
        title: "Full Stack Development",
        description:
            "Drive end to end development of solutions with our Full Stack Development Experts across modern software development technology & stacks like MERN, MEAN, Dot Net, Java, Python, Document and Relational Databases.",
        // image: "/service_full_stick_devlopmen.avif",
        image: "/full_stack_dev_new.jpg",
    },
    {
        title: "DevSecOps & Cloud Consulting",
        description:
            "Accelerate growth in the fast-paced Digital First world by adapting faster time to market strategy with our DevSecOps, & Cloud consulting experts ensuring scale at pace with compliance.",
        // image: "/service_service_third.avif",
        image: "/Cloud_Consulting.jpg",
    },
    {
        title: "Site Reliability Engineering",
        description:
            "Achieve agility & operational excellence with our Site Reliability Engineering expertise & streamline operations with automation and industry recognized software engineering practices.",
        // image: "/service_second.avif",
        image: "/site_readability_new.jpg",
    },
    {
        title: "Data Analytics",
        description:
            "Apply our Data Analytics expertise & gain competitive advantage in the market with efficient Data Acquisition and Analytics and establish a Data Driven Strategy for resilience.",
        // image: "/service_data_analytic.avif",
        image: "/data_analytic_new.jpg",
    },
    {
        title: "Data Processing",
        description:
            "Effective data management and analysis are critical to making informed business decisions. Our data engineering consulting services help you harness the power of your data.",
        // image: "/service_data_processing.avif",
        image: "/data_processing_new.jpg",
    },
    {
        title: "Data Model",
        description:
            "Do more with data and define strategic roadmap for digital services & solution with our Data Modeling services and ensure long term growth and lead the Digital First revolution.",
        // image: "/service_data_modling.avif",
        image: "/data_modeling_new.jpg",
    },
];

const   ServicePage = () => {
    return (
        <div id="course-section" className="bg-[#1E1E1E] text-[#E2E2E2]">
            <div className="page_alignment py-24">
                <h1 className="text-5xl font-bold mb-12 text-center">
                    Expert <span className="text-[#A727C6]"> Services</span> & Innovative{" "}
                    <span className="text-[#A727C6]">Consulting</span>
                </h1>
                <p className="text-[#e2e2e2]/80 text-xl mb-12 text-center leading-tight">
                    At Shiavnski, we offer comprehensive technology consulting services
                    that empower businesses to leverage the latest advancements and drive
                    transformative growth. Lead the Data & AI driven Digital Revolution
                    with our Expert Services and Innovative Consultation.
                </p>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-8 bg-[#1e1e1e] rounded-lg text-center border-[1.5px] border-[#e2e2e2]/10 hover:border-[#e2e2e2]/40 transition-all ease-linear duration-300 "
                        >
                            <div className="mb-6">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    // className="mx-auto mb-4 rounded-lg  shadow-lg min-h-max lg:min-h-[250px] w-full"
                                    className="mx-auto mb-4 rounded-lg shadow-lg w-full h-[250px] object-cover"
                                />

                            </div>
                            <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                            <p className="text-[#E2E2E2]/80 mb-4 leading-normal">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicePage;




// old data part are com...








// "use client";

// import React from "react";
// import {
//   FaTools,
//   FaCloud,
//   FaCode,
//   FaDatabase,
//   FaRobot,
//   FaShieldAlt,
// } from "react-icons/fa";

// const services = [
//   {
//     title: "DevOps",
//     description:
//       "In today’s fast-paced digital landscape, the ability to rapidly develop, test, and deploy applications is crucial. Our DevOps consulting services help you streamline your development processes, improve collaboration, and accelerate time-to-market.",
//     details: [
//       "Continuous Integration and Continuous Deployment (CI/CD): Implementing robust CI/CD pipelines to automate and optimize the software delivery process.",
//       "Infrastructure as Code (IaC): Utilizing tools like Terraform and Ansible to manage and provision infrastructure through code.",
//       "Monitoring and Logging: Setting up comprehensive monitoring and logging solutions to ensure system reliability and performance.",
//     ],
//     icon: <FaTools className="text-[#A727C6] w-10 h-10 mx-auto mb-4" />,
//   },
//   {
//     title: "Cloud Infrastructure",
//     description:
//       "Cloud technology is at the heart of modern IT strategies. We provide expert consulting to help you design, deploy, and manage scalable, secure, and cost-effective cloud solutions.",
//     details: [
//       "Cloud Strategy and Migration: Developing a customized cloud strategy and guiding you through the migration process.",
//       "Multi-Cloud and Hybrid Cloud Solutions: Designing architectures that leverage multiple cloud providers or integrate on-premises and cloud environments.",
//       "Cloud Optimization: Ensuring optimal performance and cost-efficiency of your cloud infrastructure.",
//     ],
//     icon: <FaCloud className="text-[#A727C6] w-10 h-10 mx-auto mb-4" />,
//   },
//   {
//     title: "Application Development",
//     description:
//       "Our application development consulting services cover the entire software development lifecycle, from initial concept to final deployment. We build robust, scalable, and user-centric applications that drive business value.",
//     details: [
//       "Custom Software Development: Creating bespoke applications tailored to your specific business needs.",
//       "Mobile and Web Development: Developing responsive and high-performance mobile and web applications.",
//       "Agile Development: Adopting agile methodologies to ensure flexibility, collaboration, and rapid delivery.",
//     ],
//     icon: <FaCode className="text-[#A727C6] w-10 h-10 mx-auto mb-4" />,
//   },
//   {
//     title: "Data Engineering",
//     description:
//       "Effective data management and analysis are critical to making informed business decisions. Our data engineering consulting services help you harness the power of your data.",
//     details: [
//       "Big Data Solutions: Implementing scalable big data architectures using technologies like Hadoop, Spark, and Kafka.",
//       "Data Warehousing and ETL: Designing and building data warehouses and ETL processes for efficient data storage and retrieval.",
//       "Data Analytics: Developing advanced analytics solutions to extract actionable insights from your data.",
//     ],
//     icon: <FaDatabase className="text-[#A727C6] w-10 h-10 mx-auto mb-4" />,
//   },
//   {
//     title: "Artificial Intelligence and IoT",
//     description:
//       "AI and IoT are transforming industries by enabling smarter, more connected systems. Our consulting services help you leverage these technologies to innovate and stay ahead of the competition.",
//     details: [
//       "AI Strategy and Implementation: Crafting AI strategies and implementing solutions such as machine learning models, natural language processing, and computer vision.",
//       "IoT Solutions: Designing and deploying IoT architectures that connect devices and systems for real-time data collection and analysis.",
//       "Edge Computing: Implementing edge computing solutions to process data closer to the source, reducing latency and improving performance.",
//     ],
//     icon: <FaRobot className="text-[#A727C6] w-10 h-10 mx-auto mb-4" />,
//   },
//   {
//     title: "Security",
//     description:
//       "In an era of increasing cyber threats, robust security measures are essential. Our security consulting services provide comprehensive protection for your digital assets.",
//     details: [
//       "Security Assessments and Audits: Conducting thorough assessments and audits to identify vulnerabilities and ensure compliance with industry standards.",
//       "Cybersecurity Strategy: Developing and implementing strategies to safeguard your infrastructure, applications, and data.",
//       "Incident Response and Recovery: Establishing protocols for responding to security incidents and ensuring quick recovery and minimal impact.",
//     ],
//     icon: <FaShieldAlt className="text-[#A727C6] w-10 h-10 mx-auto mb-4" />,
//   },
// ];




// editing new contaion start



// const services = [
//   {
//     title: "Full Stack Development",
//     description:
//       "Drive end to end development of solutions with our Full Stack Development Experts across modern software development technology & stacks like MERN, MEAN, Dot Net, Java, Python, Document and Relational Databases.",
//     // details: [
//     //   "Continuous Integration and Continuous Deployment (CI/CD): Implementing robust CI/CD pipelines to automate and optimize the software delivery process.",
//     //   "Infrastructure as Code (IaC): Utilizing tools like Terraform and Ansible to manage and provision infrastructure through code.",
//     //   "Monitoring and Logging: Setting up comprehensive monitoring and logging solutions to ensure system reliability and performance.",
//     // ],
//     icon: <FaTools className="text-[#A727C6] w-10 h-10 mx-auto mb-4" />,
//   },
  
//   {
//     title: "DevSecOps & Cloud Consulting",
//     description:
//       "Accelerate growth in the fast-paced Digital First world by adapting faster time to market strategy with our DevSecOps, & Cloud consulting experts ensuring scale at pace with compliance.",
//     // details: [
//     //   "Cloud Strategy and Migration: Developing a customized cloud strategy and guiding you through the migration process.",
//     //   "Multi-Cloud and Hybrid Cloud Solutions: Designing architectures that leverage multiple cloud providers or integrate on-premises and cloud environments.",
//     //   "Cloud Optimization: Ensuring optimal performance and cost-efficiency of your cloud infrastructure.",
//     // ],
//     icon: <FaCloud className="text-[#A727C6] w-10 h-10 mx-auto mb-4" />,
//   },
//   {
//     title: "Site Reliability Engineering",
//     description:
//       "Achieve agility & operational excellence with our Site Reliability Engineering expertise & streamline operations with automation and industry recognized software engineering practices.",
//     // details: [
//     //   "Custom Software Development: Creating bespoke applications tailored to your specific business needs.",
//     //   "Mobile and Web Development: Developing responsive and high-performance mobile and web applications.",
//     //   "Agile Development: Adopting agile methodologies to ensure flexibility, collaboration, and rapid delivery.",
//     // ],
//     icon: <FaCode className="text-[#A727C6] w-10 h-10 mx-auto mb-4" />,
//   },
//   {
//     title: "Data Analytics",
//     description:
//       "Apply our Data Analytics expertise & gain competitive advantage in the market with efficient Data Acquisition and Analytics and establish a Data Driven Strategy for resilience.",
//     // details: [
//     //   "Big Data Solutions: Implementing scalable big data architectures using technologies like Hadoop, Spark, and Kafka.",
//     //   "Data Warehousing and ETL: Designing and building data warehouses and ETL processes for efficient data storage and retrieval.",
//     //   "Data Analytics: Developing advanced analytics solutions to extract actionable insights from your data.",
//     // ],
//     icon: <FaDatabase className="text-[#A727C6] w-10 h-10 mx-auto mb-4" />,
//   },
//   {
//     title: "Data Processing",
//     description:
//       "Effective data management and analysis are critical to making informed business decisions. Our data engineering consulting services help you harness the power of your data.",
//     // details: [
//     //   "AI Strategy and Implementation: Crafting AI strategies and implementing solutions such as machine learning models, natural language processing, and computer vision.",
//     //   "IoT Solutions: Designing and deploying IoT architectures that connect devices and systems for real-time data collection and analysis.",
//     //   "Edge Computing: Implementing edge computing solutions to process data closer to the source, reducing latency and improving performance.",
//     // ],
//     icon: <FaRobot className="text-[#A727C6] w-10 h-10 mx-auto mb-4" />,
//   },
//   {
//     title: "Data Model",
//     description:
//       "Do more with data and define strategic roadmap for digital services & solution with our Data Modeling services and ensure  long term growth and lead the Digital First revolution.",
//     // details: [
//     //   "Security Assessments and Audits: Conducting thorough assessments and audits to identify vulnerabilities and ensure compliance with industry standards.",
//     //   "Cybersecurity Strategy: Developing and implementing strategies to safeguard your infrastructure, applications, and data.",
//     //   "Incident Response and Recovery: Establishing protocols for responding to security incidents and ensuring quick recovery and minimal impact.",
//     // ],
//     icon: <FaShieldAlt className="text-[#A727C6] w-10 h-10 mx-auto mb-4" />,
//   },
// ];




// const ServicePage = () => {
//   const getIcon = (title: any) => {
//     switch (title) {
//       case "DevOps":
//         return <FaTools className="text-[#A727C6] w-10 h-10 mx-auto mb-4" />;
//       case "Cloud Infrastructure":
//         return <FaCloud className="text-[#A727C6] w-10 h-10 mx-auto mb-4" />;
//       case "Application Development":
//         return <FaCode className="text-[#A727C6] w-10 h-10 mx-auto mb-4" />;
//       case "Data Engineering":
//         return <FaDatabase className="text-[#A727C6] w-10 h-10 mx-auto mb-4" />;
//       case "Artificial Intelligence and IoT":
//         return <FaRobot className="text-[#A727C6] w-10 h-10 mx-auto mb-4" />;
//       case "Security":
//         return (
//           <FaShieldAlt className="text-[#A727C6] w-10 h-10 mx-auto mb-4" />
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div id="course-section" className="bg-[#1E1E1E] text-[#E2E2E2]">
//       <div className="page_alignment py-24">
//         <h1 className="text-5xl font-bold mb-12 text-center">
//         Expert  <span className="text-[#A727C6]"> Services</span> &  Innovative <span className="text-[#A727C6]">Consulting</span>
//         </h1>
//         <p className="text-[#e2e2e2]/80 text-xl mb-12 text-center leading-tight">
//         At Shiavnski, we offer comprehensive technology consulting services that empower businesses to leverage the latest advancements and drive transformative growth. 
//         Lead the Data & AI driven Digital Revolution with our Expert Services and Innovative Consultation.
//         </p>

//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="p-8 bg-[#1e1e1e] rounded-lg text-center border-[1.5px] border-[#e2e2e2]/10 hover:border-[#e2e2e2]/40 transition-all ease-linear duration-300 "
//             >
//               <div className="mb-6">{getIcon(service.title)}</div>
//               <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
//               <p className="text-[#E2E2E2]/80 mb-4 leading-normal">
//                 {service.description}
//               </p>
//               {/* <div className="overflow-hidden h-0 opacity-0">
//                 <ul className="text-left list-disc list-inside mb-6">
//                   {service.details.map((detail, index) => (
//                     <li key={index} className="mb-2 text-[#E2E2E2]/80">
//                       {detail}
//                     </li>
//                   ))}
//                 </ul>
//               </div> */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicePage;
