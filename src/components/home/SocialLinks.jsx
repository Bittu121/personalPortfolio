import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedinIn size={30} />
          <span className="ml-3">LinkedIn</span>
        </>
      ),
      href: "https://www.linkedin.com/in/bittu-kumar143/",
      style: "rounded-tr-lg",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
          <span className="ml-3">Github</span>
        </>
      ),
      href: "https://github.com/Bittu121",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
          <span className="ml-3">Mail</span>
        </>
      ),
      href: "mailto:bittukumar8713@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
          <span className="ml-3">Resume</span>
        </>
      ),
      href: "/Resume.pdf",
      download: true,
      style: "rounded-br-lg",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`group flex items-center w-14 h-14 px-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white ml-0 hover:w-52 hover:shadow-lg hover:rounded-md duration-300 ${style}`}
          >
            <a
              href={href}
              className="flex items-center w-full overflow-hidden transition-all duration-300 group-hover:justify-between"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {/* Icon always visible */}
              <span className="flex-shrink-0">{child.props.children[0]}</span>
              <span className="ml-3 hidden group-hover:inline-block">
                {child.props.children[1]}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
