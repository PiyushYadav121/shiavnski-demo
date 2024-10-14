import {
  LucideWaves,
  Lock,
  Brain,
  LucidePenTool,
  BarChart3,
  BrainCircuit,
  Workflow,
} from "lucide-react";

export const docuIntellectFeatures = [
  {
    id: 1,
    icon: <Lock className="h-10 w-10 mb-5" />,
    description: `Protect your sensitive information with advanced encryption and robust access controls.`,
    featureLabel: "Enhanced Security",
  },
  {
    id: 2,
    icon: <Brain className="h-10 w-10 mb-5" />,
    description: `Generate polished documents with smart templates and suggestions.`,
    featureLabel: "AI-Powered Content Creation",
  },
  {
    id: 3,
    icon: <LucideWaves className="h-10 w-10 mb-5" />,
    description:
      "Track changes effortlessly and maintain a clear history of edits.",
    featureLabel: "Version Control",
  },
  {
    id: 4,
    icon: <LucidePenTool className="h-10 w-10 mb-5" />,
    description:
      "Connect with your favorite tools to enhance workflow efficiency.",
    featureLabel: "Integration Ready",
  },
  {
    id: 5,
    icon: <BarChart3 className="h-10 w-10 mb-5" />,
    description: "Gain valuable metrics to improve documentation strategy.",
    featureLabel: "Analytics Insights",
  },
  {
    id: 6,
    icon: <Workflow className="h-10 w-10 mb-5" />,
    description:
      "Tailor the platform to fit your unique documentation processes and business requirements.",
    featureLabel: "Customizable Workflows",
  },
];
