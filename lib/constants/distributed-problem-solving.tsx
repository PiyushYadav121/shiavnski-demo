import { FaAtom, FaArrowDown } from "react-icons/fa";
import {
  SiAnswer,
  SiBmcsoftware,
  SiMoleculer,
  SiCyberdefenders,
} from "react-icons/si";
import { HiChartPie, HiOutlineBeaker } from "react-icons/hi2";
import {
  MdHardware,
  MdOutlineOutbond,
  MdOutlinePsychology,
} from "react-icons/md";
import { BsAlphabet } from "react-icons/bs";
import { TbCell, TbGeometry, TbNumbers, TbTower } from "react-icons/tb";
import { GiTreeGrowth, GiEcology } from "react-icons/gi";

import {
  Earth,
  Sun,
  ThermometerSun,
  AlignVerticalSpaceAround,
  Beaker,
  TestTubes,
  TableProperties,
  Calculator,
  Dna,
  Microscope,
  Code,
  Network,
} from "lucide-react";

export const distributeProblemSolvingData = [
  {
    courseId: "physics",
    courseName: "Physics",
    hero: {
      imgUrl: "/crowdsource/physics-hero.jpg",
      "span-label": "Unlocking",
      label: "the Secrets of the Universe",
      description:
        "Dive deep into the fascinating world of physics. From the tiniest particles to the vastness of the cosmos, discover the principles that govern our universe and unravel the mysteries of reality.",
    },
    coursecoverings: {
      subTitle: "Explore the Core Concepts",
      Title: "Physics Crowdsourcing Hub",
      description:
        "Unlock a world of collaborative opportunities in our physics crowdsourcing hub, where collective expertise drives pioneering solutions in quantum mechanics, thermodynamics, and applied physics.",
      points: [
        {
          pointId: 1,
          icon: <FaAtom className="h-10 w-10 mb-5" />,
          label: "Quantum Mechanics",
          description:
            "Understand the strange and intriguing world of particles and waves.",
        },
        {
          pointId: 2,
          icon: <Earth className="h-10 w-10 mb-5" />,
          label: "Astrophysics",
          description:
            "Explore the vast universe, from black holes to the Big Bang.",
        },
        {
          pointId: 3,
          icon: <FaArrowDown className="h-10 w-10 mb-5" />,
          label: "Classical Mechanics",
          description:
            "Learn the laws of motion and the forces that shape our world.",
        },
        {
          pointId: 4,
          icon: <AlignVerticalSpaceAround className="h-10 w-10 mb-5" />,
          label: "Nuclear Physics",
          description:
            "Dive into the core of matter and the forces holding it together.",
        },
        {
          pointId: 5,
          icon: <Sun className="h-10 w-10 mb-5" />,
          label: "Optics",
          description:
            "Discover the nature of light and its interactions with matter.",
        },
        {
          pointId: 6,
          icon: <ThermometerSun className="h-10 w-10 mb-5" />,
          label: "Thermodynamics",
          description:
            "Understand the principles governing heat, energy, and work.",
        },
      ],
      timelineImage: "/crowdsource/physics-timeline.svg",
      benefits: [
        {
          title: "Understand Fundamental Principles",
          subtitle: "Grasp Core Concepts",
          description:
            "Gain a deep understanding of the fundamental principles that govern the physical universe, from classical mechanics to quantum theory.",
        },
        {
          title: "Develop Problem-Solving Skills",
          subtitle: "Sharpen Analytical Abilities",
          description:
            "Enhance your problem-solving and analytical skills by tackling challenging physics problems and experiments.",
        },
        {
          title: "Explore the Universe",
          subtitle: "Discover Cosmic Phenomena",
          description:
            "Dive into the study of astrophysics and cosmology to understand the origins and structure of the universe.",
        },
        {
          title: "Hands-On Experiments",
          subtitle: "Practical Learning",
          description:
            "Engage in hands-on experiments that illustrate key physics concepts and provide practical learning experiences.",
        },
        {
          title: "Innovative Technologies",
          subtitle: "Learn Cutting-Edge Science",
          description:
            "Discover the technologies and innovations driven by physics, from renewable energy solutions to medical imaging techniques.",
        },
        {
          title: "Career Opportunities",
          subtitle: "Expand Your Horizons",
          description:
            "Prepare for diverse career opportunities in fields such as engineering, research, and technology by mastering physics.",
        },
      ],
    },
  },
  {
    courseId: "chemistry",
    courseName: "Chemistry",
    hero: {
      imgUrl: "/crowdsource/chemistry-hero.jpg",
      "span-label": "The Science",
      label: "of Transformation",
      description:
        "Explore the magical world of chemistry, where you learn how substances interact and transform. Understand the molecular basis of matter and the incredible reactions that shape our world.",
    },
    coursecoverings: {
      subTitle: "Master the Building Blocks",
      Title: "Chemistry Innovation Network",
      description:
        "Explore our chemistry innovation network, where global collaboration drives advancements in organic chemistry, inorganic chemistry, and chemical engineering.",
      points: [
        {
          pointId: 1,
          icon: <SiMoleculer className="h-10 w-10 mb-5" />,
          label: "Organic Chemistry",
          description:
            "Study the structure, properties, and reactions of organic compounds.",
        },
        {
          pointId: 2,
          icon: <HiOutlineBeaker className="h-10 w-10 mb-5" />,
          label: "Inorganic Chemistry",
          description:
            "Explore the properties and behavior of inorganic substances.",
        },
        {
          pointId: 3,
          icon: <Beaker className="h-10 w-10 mb-5" />,
          label: "Chemical Reactions",
          description: "Understand the processes that transform substances.",
        },
        {
          pointId: 4,
          icon: <TestTubes className="h-10 w-10 mb-5" />,
          label: "Analytical Chemistry",
          description:
            "Learn techniques to analyze and identify chemical substances.",
        },
        {
          pointId: 5,
          icon: <MdOutlineOutbond className="h-10 w-10 mb-5" />,
          label: "Physical Chemistry",
          description:
            "Study the physical properties of molecules and their behavior.",
        },
        {
          pointId: 6,
          icon: <TableProperties className="h-10 w-10 mb-5" />,
          label: "Chemical Bonding",
          description: "Explore how atoms combine to form compounds.",
        },
      ],
      timelineImage: "/crowdsource/chemistry-timeline.svg",
      benefits: [
        {
          title: "Master Chemical Reactions",
          subtitle: "Understand Matter Interactions",
          description:
            "Learn about the interactions between different substances and master the concepts of chemical reactions and equations.",
        },
        {
          title: "Practical Laboratory Skills",
          subtitle: "Hands-On Chemistry",
          description:
            "Develop practical laboratory skills through hands-on experiments that bring theoretical chemistry to life.",
        },
        {
          title: "Environmental Chemistry",
          subtitle: "Protect the Planet",
          description:
            "Explore the role of chemistry in addressing environmental challenges and promoting sustainability.",
        },
        {
          title: "Chemical Innovations",
          subtitle: "Drive Scientific Progress",
          description:
            "Discover how chemical innovations are driving progress in various fields, from pharmaceuticals to materials science.",
        },
        {
          title: "Analytical Techniques",
          subtitle: "Precision and Accuracy",
          description:
            "Learn advanced analytical techniques to accurately measure and analyze chemical compositions and properties.",
        },
        {
          title: "Career Advancement",
          subtitle: "Opportunities in Chemistry",
          description:
            "Prepare for a successful career in chemistry or related fields, equipped with the knowledge and skills to excel.",
        },
      ],
    },
  },
  {
    courseId: "maths",
    courseName: "Maths",
    hero: {
      imgUrl: "/crowdsource/maths-hero.jpg",
      "span-label": "The Key",
      label: "to Infinite Possibilities",
      description:
        "Unlock the power of mathematics, the language of the universe. From solving everyday problems to understanding complex theories, embark on a journey through numbers, shapes, and patterns.",
    },
    coursecoverings: {
      subTitle: "Delve into Numbers and Patterns",
      Title: "Mathematics Collective Solutions",
      description:
        "Explore our mathematics collective solutions platform, where global experts collaborate to innovate in data analysis, cryptography, and beyond.",
      points: [
        {
          pointId: 1,
          icon: <Calculator className="h-10 w-10 mb-5" />,
          label: "Calculus",
          description: "Study the mathematics of change and motion.",
        },
        {
          pointId: 2,
          icon: <BsAlphabet className="h-10 w-10 mb-5" />,
          label: "Algebra",
          description:
            "Understand the rules and operations governing algebraic structures.",
        },
        {
          pointId: 3,
          icon: <TbGeometry className="h-10 w-10 mb-5" />,
          label: "Geometry",
          description:
            "Explore the properties and relations of points, lines, surfaces, and solids.",
        },
        {
          pointId: 4,
          icon: <HiChartPie className="h-10 w-10 mb-5" />,
          label: "Statistics",
          description:
            "Learn methods to collect, analyze, interpret, and present data.",
        },
        {
          pointId: 5,
          icon: <SiAnswer className="h-10 w-10 mb-5" />,
          label: "Probability",
          description: "Study the mathematics of randomness and uncertainty.",
        },
        {
          pointId: 6,
          icon: <TbNumbers className="h-10 w-10 mb-5" />,
          label: "Number Theory",
          description:
            "Delve into the properties and relationships of numbers.",
        },
      ],
      timelineImage: "/crowdsource/maths-timeline.svg",
      benefits: [
        {
          title: "Enhance Analytical Thinking",
          subtitle: "Critical Problem Solving",
          description:
            "Develop strong analytical thinking and problem-solving skills by mastering various mathematical concepts.",
        },
        {
          title: "Foundations for Science",
          subtitle: "Core of Scientific Knowledge",
          description:
            "Gain a solid foundation in mathematics, which is essential for understanding and excelling in other scientific disciplines.",
        },
        {
          title: "Advanced Calculations",
          subtitle: "Tackle Complex Problems",
          description:
            "Learn to perform advanced calculations and tackle complex mathematical problems with confidence.",
        },
        {
          title: "Data Analysis",
          subtitle: "Interpret and Analyze",
          description:
            "Acquire skills in data analysis and interpretation, essential for research and decision-making in various fields.",
        },
        {
          title: "Innovative Thinking",
          subtitle: "Creative Problem Solving",
          description:
            "Foster innovative thinking and creativity by approaching problems from different mathematical perspectives.",
        },
        {
          title: "Career Pathways",
          subtitle: "Diverse Opportunities",
          description:
            "Open the door to diverse career opportunities in fields such as engineering, finance, data science, and academia.",
        },
      ],
    },
  },
  {
    courseId: "biology",
    courseName: "Biology",
    hero: {
      imgUrl: "/crowdsource/bio-hero.jpg",
      "span-label": "Collaborative",
      label: "Research in Action",
      description:
        "Explore the power of crowdsourcing in advancing biological research.",
    },
    coursecoverings: {
      subTitle: "Unlock the Mysteries of Life",
      Title: "Biology Innovation Exchange",
      description:
        "Engage in our biology innovation exchange, where global experts collaborate to pioneer advancements in molecular biology, biotechnology, and intricate biological processes.",
      points: [
        {
          pointId: 1,
          icon: <TbCell className="h-10 w-10 mb-5" />,
          label: "Cell Biology",
          description:
            "Understand the structure and function of cells, the building blocks of life.",
        },
        {
          pointId: 2,
          icon: <Dna className="h-10 w-10 mb-5" />,
          label: "Genetics",
          description:
            "Explore the principles of heredity and the function of genes.",
        },
        {
          pointId: 3,
          icon: <GiTreeGrowth className="h-10 w-10 mb-5" />,
          label: "Evolution",
          description:
            "Study the processes that drive the diversity of life on Earth.",
        },
        {
          pointId: 4,
          icon: <GiEcology className="h-10 w-10 mb-5" />,
          label: "Ecology",
          description:
            "Learn about the relationships between organisms and their environments.",
        },
        {
          pointId: 5,
          icon: <MdOutlinePsychology className="h-10 w-10 mb-5" />,
          label: "Physiology",
          description:
            "Understand the functions and mechanisms in living organisms.",
        },
        {
          pointId: 6,
          icon: <Microscope className="h-10 w-10 mb-5" />,
          label: "Microbiology",
          description:
            "Study microorganisms and their roles in health, disease, and the environment.",
        },
      ],
      timelineImage: "/crowdsource/medicine-timeline.svg",
      benefits: [
        {
          title: "Explore Life Sciences",
          subtitle: "Understand Living Organisms",
          description:
            "Delve into the study of living organisms, exploring their structure, function, growth, evolution, and interactions.",
        },
        {
          title: "Hands-On Experience",
          subtitle: "Practical Biology",
          description:
            "Gain hands-on experience through laboratory experiments and fieldwork, bringing biological concepts to life.",
        },
        {
          title: "Conservation Biology",
          subtitle: "Protect Biodiversity",
          description:
            "Learn about conservation efforts and the importance of protecting biodiversity for the health of our planet.",
        },
        {
          title: "Genetics and Evolution",
          subtitle: "Discover Genetic Secrets",
          description:
            "Explore the principles of genetics and evolution, understanding how traits are inherited and species evolve.",
        },
        {
          title: "Human Anatomy",
          subtitle: "Understand the Human Body",
          description:
            "Study human anatomy and physiology, gaining insights into the structure and function of the human body.",
        },
        {
          title: "Career in Biology",
          subtitle: "Opportunities in Life Sciences",
          description:
            "Prepare for a rewarding career in biology or related fields, equipped with the knowledge and skills to make a difference.",
        },
      ],
    },
  },
  {
    courseId: "computer-fundamentals",
    courseName: "Computer Fundamentals",
    hero: {
      imgUrl: "/crowdsource/computer-hero.jpg",
      "span-label": "Building",
      label: "the Digital Future",
      description:
        "Start your journey into the world of computers and technology. Understand the basics of hardware and software, learn programming fundamentals, and explore the innovations driving the digital age.",
    },
    coursecoverings: {
      subTitle: "Foundation of Technology",
      Title: "Computer Science Innovation Network",
      description:
        "Discover our computer science innovation network, where global experts collaborate to push the boundaries of algorithms, data structures, software development, and machine learning.",
      points: [
        {
          pointId: 1,
          icon: <MdHardware className="h-10 w-10 mb-5" />,
          label: "Computer Hardware",
          description:
            "Learn about the physical components that make up a computer system.",
        },
        {
          pointId: 2,
          icon: <SiBmcsoftware className="h-10 w-10 mb-5" />,
          label: "Computer Software",
          description:
            "Understand the programs and operating systems that run on computers.",
        },
        {
          pointId: 3,
          icon: <Code className="h-10 w-10 mb-5" />,
          label: "Programming Basics",
          description:
            "Get introduced to programming languages and basic coding principles.",
        },
        {
          pointId: 4,
          icon: <Network className="h-10 w-10 mb-5" />,
          label: "Networking",
          description:
            "Explore the basics of computer networks and how they connect devices.",
        },
        {
          pointId: 5,
          icon: <TbTower className="h-10 w-10 mb-5" />,
          label: "Internet Fundamentals",
          description:
            "Understand how the internet works and its underlying technologies.",
        },
        {
          pointId: 6,
          icon: <SiCyberdefenders className="h-10 w-10 mb-5" />,
          label: "Cybersecurity",
          description:
            "Learn about protecting computer systems and data from cyber threats.",
        },
      ],
      timelineImage: "/crowdsource/computer-timeline.svg",
      benefits: [
        {
          title: "Basic Computer Skills",
          subtitle: "Essential Knowledge",
          description:
            "Learn the essential computer skills required in today's digital world, from operating systems to basic software applications.",
        },
        {
          title: "Introduction to Programming",
          subtitle: "Code Your Future",
          description:
            "Get introduced to the world of programming, learning the basics of coding and software development.",
        },
        {
          title: "Understanding Hardware",
          subtitle: "Know Your Machine",
          description:
            "Gain a solid understanding of computer hardware components and how they work together to form a functioning system.",
        },
        {
          title: "Internet and Networking",
          subtitle: "Stay Connected",
          description:
            "Learn about the fundamentals of internet and networking, including how data is transmitted and received over networks.",
        },
        {
          title: "Cybersecurity Basics",
          subtitle: "Protect Your Data",
          description:
            "Understand the basics of cybersecurity, learning how to protect your data and stay safe online.",
        },
        {
          title: "Career Prospects",
          subtitle: "Opportunities in Tech",
          description:
            "Prepare for a variety of career opportunities in the tech industry by gaining a solid foundation in computer fundamentals.",
        },
      ],
    },
  },
];
