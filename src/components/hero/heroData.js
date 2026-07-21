import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "../../data/contactInfo";

export const HERO_TAGLINES = [
  "Full-Stack Developer",
  "MERN Stack Developer",
  "React Enthusiast",
  "Problem Solver",
];

export const HERO_GIT_LOG = [
  { hash: "d362a1c", msg: "feat: ship responsive dashboards in React" },
  { hash: "6c0ed7e", msg: "perf: optimize REST APIs for faster UX" },
  { hash: "bc685f3", msg: "feat: secure JWT auth + CRUD (MERN stack)" },
];

export const HERO_TABS = [
  { id: "role", file: "role.json", dot: "bg-[#818cf8]" },
  { id: "impact", file: "impact.log", dot: "bg-emerald-400" },
];

export const HERO_IMPACT_LOG = [
  { tag: "INFO", text: "loading impact.log ...", color: "text-white/35" },
  {
    tag: "OK",
    text: "5+ production-grade apps shipped",
    color: "text-emerald-400",
  },
  {
    tag: "OK",
    text: "1+ year hands-on MERN experience",
    color: "text-emerald-400",
  },
  {
    tag: "OK",
    text: "7+ technologies in daily use",
    color: "text-emerald-400",
  },
  {
    tag: "OK",
    text: "Clean REST APIs · secure auth · scalable systems",
    color: "text-emerald-400",
  },
  {
    tag: "READY",
    text: "open_to_work — full-time SDE / MERN roles",
    color: "text-[#818cf8]",
  },
];

export const HERO_SOCIALS = [
  { icon: FiGithub, href: GITHUB_URL },
  { icon: FiLinkedin, href: LINKEDIN_URL },
  { icon: FiMail, href: `mailto:${EMAIL}` },
];
