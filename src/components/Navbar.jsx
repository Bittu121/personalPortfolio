import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <>
      <div className="flex justify-between items-center w-full h-16 px-4 text-white fixed top-0 left-0 bg-black z-50">
        {/* Logo */}
        <div>
          <Link to="Home" smooth spy duration={500} offset={-70}>
            <h1 className="text-3xl font-poppins font-bold ml-2 cursor-pointer hover:scale-105 duration-200">
              Portfolio
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
            >
              <Link to={link} smooth spy duration={500} offset={-70}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {/* Mobile Navigation */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-16 left-0 w-full bg-gradient-to-b from-black to-gray-800 text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-2xl"
            >
              <Link
                to={link}
                smooth
                spy
                duration={500}
                offset={-70}
                onClick={() => setNav(false)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Navbar;
