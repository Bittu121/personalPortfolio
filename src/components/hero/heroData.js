import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "../../data/contactInfo";

export const HERO_TAGLINES = [
  "Full-Stack Developer",
  "MERN Stack Developer",
  "React Enthusiast",
  "Problem Solver",
];

export const HERO_GIT_LOG = [
  { hash: "d362a1c", msg: "feat: build reusable UI components" },
  { hash: "6c0ed7e", msg: "feat: integrate REST APIs across modules" },
  {
    hash: "bc685f3",
    msg: "feat: implement authentication and protected routes",
  },
];

export const HERO_TABS = [
  { id: "role", file: "role.json", dot: "bg-[#818cf8]" },
  { id: "impact", file: "impact.log", dot: "bg-emerald-400" },
];

export const HERO_IMPACT_LOG = [
  { tag: "INFO", text: "loading impact.log ...", color: "text-white/35" },
  {
    tag: "OK",
    text: "4+ full-stack projects completed",
    color: "text-emerald-400",
  },
  {
    tag: "OK",
    text: "2+ years of hands-on MERN experience",
    color: "text-emerald-400",
  },
  {
    tag: "OK",
    text: "7+ technologies used across projects",
    color: "text-emerald-400",
  },
  {
    tag: "OK",
    text: "Reusable UI · REST APIs · JWT Authentication",
    color: "text-emerald-400",
  },
  {
    tag: "Ready",
    text: "Open to SDE / Frontend / Full-Stack Roles",
    color: "text-[#818cf8]",
  },
];

export const HERO_SOCIALS = [
  { icon: FiGithub, href: GITHUB_URL },
  { icon: FiLinkedin, href: LINKEDIN_URL },
  { icon: FiMail, href: `mailto:${EMAIL}` },
];
