import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "../../data/contactInfo";

export const FOOTER_SOCIALS = [
  { icon: FaGithub, href: GITHUB_URL, size: 16 },
  { icon: FaLinkedinIn, href: LINKEDIN_URL, size: 16 },
  { icon: HiOutlineMail, href: `mailto:${EMAIL}`, size: 18 },
];
