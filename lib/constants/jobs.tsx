interface Role {
  title: string;
  description: string;
  qualifications: string[];
}

export const roles: Role[] = [
  {
    title: "Software Engineer",
    description: "Develop and maintain software applications.",
    qualifications: [
      "Degree in Computer Science or related field.",
      "Experience with JavaScript, React, and Node.js.",
      "Strong problem-solving skills.",
    ],
  },
  {
    title: "Data Scientist",
    description: "Analyze and interpret complex data sets.",
    qualifications: [
      "Degree in Marketing, Information Technology, or related field.",
      "Experience in SEO and online marketing.",
      "Proficiency with SEO tools and analytics platforms.",
    ],
  },
  {
    title: "Product Manager",
    description: "Lead product development from concept to launch.",
    qualifications: [
      "Degree in Business or related field.",
      "Experience in product management.",
      "Strong leadership and communication skills.",
    ],
  },
  {
    title: "UX/UI Designer",
    description: "Design user-friendly interfaces and experiences.",
    qualifications: [
      "Degree in Design or related field.",
      "Experience with design tools like Figma and Sketch.",
      "Strong portfolio of design projects.",
    ],
  },
  {
    title: "Marketing Specialist",
    description: "Create and implement marketing strategies.",
    qualifications: [
      "Degree in Marketing or related field.",
      "Experience in digital marketing.",
      "Proficiency with marketing tools and analytics platforms.",
    ],
  },
  {
    title: "Senior Frontend Developer",
    description: "Develop and Enhance Frontend Features.",
    qualifications: [
      "Proficient in React, Next.js, and Tailwind CSS.",
      "Strong Understanding of GitHub and Open Source.",
      "Passionate about User Experience.",
    ],
  },
];
