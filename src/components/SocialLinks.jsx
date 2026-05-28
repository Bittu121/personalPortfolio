import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { motion } from "framer-motion";

const LINKS = [
  {
    id: 1,
    icon: <FaLinkedinIn size={15} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bittu-kumar143/",
    rounding: "0 8px 0 0",
  },
  {
    id: 2,
    icon: <FaGithub size={15} />,
    label: "GitHub",
    href: "https://github.com/Bittu121",
  },
  {
    id: 3,
    icon: <HiOutlineMail size={16} />,
    label: "Email",
    href: "mailto:bittukumar8713@gmail.com",
  },
  {
    id: 4,
    icon: <BsFillPersonLinesFill size={14} />,
    label: "Resume",
    href: "/Resume.pdf",
    download: true,
    rounding: "0 0 8px 0",
  },
];

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="fixed top-[38%] left-0 z-[30] hidden lg:block"
    >
      <ul className="list-none m-0 p-0 flex flex-col gap-0.5">
        {LINKS.map(({ id, icon, label, href, download, rounding }) => (
          <li key={id}>
            <a
              href={href}
              download={download || undefined}
              target={download ? undefined : "_blank"}
              rel="noreferrer"
              className="social-item"
              style={{ borderRadius: rounding || "0" }}
            >
              <span className="flex-shrink-0">{icon}</span>
              <span className="social-item-label">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
