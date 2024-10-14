import {
  Cable,
  GitGraph,
  Group,
  Map,
  MessageSquareHeart,
  Users,
} from "lucide-react";

export const exploreCards = [
  {
    id: 1,
    label: `Our Vision`,
    description: `Empowering businesses through innovative technology solutions,
                we aim to be at the forefront of the digital transformation
                journey. Our vision is to leverage cutting-edge technologies and
                methodologies to solve complex business challenges, driving
                growth and efficiency for our clients.`,
    icon: <Cable className="h-7 w-7 " />,
  },
  {
    id: 2,
    label: `Our Approach`,
    description: `We take a client-focused approach to every project, ensuring
                that our solutions are tailored to meet the unique needs and
                challenges of each business. By fostering collaboration and
                embracing flexibility, we deliver results that drive success.`,
    icon: <Map className="h-7 w-7" />,
  },
  {
    id: 3,
    label: `Our Mission`,
    description: `To deliver cutting-edge solutions that meet the evolving needs
                of our clients. We aim to transform ideas into innovative and
                efficient digital solutions that drive success and create
                lasting value. Our mission is to empower businesses with
                technology that fosters growth and efficiency.`,
    icon: <Group className="h-7 w-7" />,
  },
  {
    id: 4,
    label: `Our Values`,
    description: `Integrity, innovation, and customer-centricity are at the heart
                of everything we do. We believe in building trust through
                transparency and delivering exceptional value through continuous
                innovation. Our commitment to our clients' success is
                unwavering, and we strive to exceed their expectations at every
                turn.`,
    icon: <MessageSquareHeart className="h-7 w-7" />,
  },
  {
    id: 5,
    label: `Our Team`,
    description: `Our team is composed of experienced professionals who are
                passionate about technology and innovation. We bring diverse
                skills and perspectives to the table, working collaboratively to
                solve complex problems and deliver outstanding results.`,
    icon: <Users className="h-7 w-7" />,
  },
  {
    id: 6,
    label: `Our Commitment`,
    description: `We are committed to excellence in everything we do. From
                initial consultation to final delivery, we ensure the highest
                standards of quality and service. Our commitment to continuous
                improvement means we are always seeking ways to better serve our
                clients and stay ahead of industry trends.`,
    icon: <GitGraph className="h-7 w-7" />,
  },
];
