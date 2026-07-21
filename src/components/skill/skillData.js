import { FiLayout, FiServer, FiCode, FiTool } from "react-icons/fi";

export const SKILL_GROUPS = [
  {
    title: "Frontend & Web",
    icon: FiLayout,
    level: "Proficient",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Redux",
    ],
  },
  {
    title: "Backend & APIs",
    icon: FiServer,
    level: "Proficient",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Auth",
      "Zod Validation",
      "Middleware",
    ],
  },
  {
    title: "Languages & CS",
    icon: FiCode,
    level: "Proficient",
    skills: ["C++", "JavaScript", "OOPs", "DSA", "System Design", "DBMS"],
  },
  {
    title: "Databases & Tools",
    icon: FiTool,
    level: "Proficient",
    skills: ["MongoDB", "MySQL", "Git & GitHub", "Postman", "VS Code", "npm"],
  },
];
