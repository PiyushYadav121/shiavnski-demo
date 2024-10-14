import {
  Database,
  Cloudy,
  Layers3,
  PanelsTopLeft,
  AudioLines,
  BrainCircuit,
  Container,
} from "lucide-react";

export const featureData = [
  {
    id: 1,
    icon: <Cloudy className="h-10 w-10 mb-5" />,
    description: `Dive into the world for Expert Services & Innovative Consulting.`,
    featureLabel: "Services & Consulting",
  },
  {
    id: 2,
    icon: <Database className="h-10 w-10 mb-5" />,
    description: `Explore our Data First Product & Solution offerings.`,
    featureLabel: "Product & Solutions",
  },
  {
    id: 3,
    icon: <Layers3 className="h-10 w-10 mb-5" />,
    description:
      "Navigate your Digital Journey with our Partner Services.",
    featureLabel: "Partner Services",
  },
  {
    id: 4,
    icon: <PanelsTopLeft className="h-10 w-10 mb-5" />,
    description:
      "World of Tutoring & MicroJobs to empower small communities.",
    featureLabel: "EduSkill & Microjobs",
  },
  // {
  //   id: 5,
  //   icon: <AudioLines className="h-10 w-10 mb-5" />,
  //   description:
  //     "Offering expert advice on the best technology strategies and innovations.",
  //   featureLabel: "Technology Consulting",
  // },
  // {
  //   id: 6,
  //   icon: <BrainCircuit className="h-10 w-10 mb-5" />,
  //   description:
  //     "Leveraging AI to create innovative applications and improve decision-making processes.",
  //   featureLabel: "Generative AI",
  // },
];
