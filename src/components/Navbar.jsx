import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { id: 1, to: "Home", label: "Home" },
  { id: 2, to: "about", label: "About" },
  { id: 4, to: "skill", label: "Skills" },
  { id: 3, to: "portfolio", label: "Projects" },
  { to: "experience", label: "Experience" },
  { to: "education", label: "Education" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-[100] h-16 flex items-center px-6 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(5,5,10,0.9)] border-b border-white/[0.06] backdrop-blur-[16px]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1152px] w-full mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            to="Home"
            smooth
            spy
            duration={500}
            offset={-70}
            className="cursor-pointer no-underline"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-white font-bold text-lg tracking-[-0.02em]">
                Bittu Kumar
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-0.5 list-none m-0 p-0">
            {NAV_LINKS.map(({ id, to, label }) => (
              <li key={id}>
                <Link
                  to={to}
                  smooth
                  spy
                  duration={500}
                  offset={-70}
                  className="cursor-pointer block px-3.5 py-1.5 rounded-lg text-sm font-medium text-white/55 hover:text-white hover:bg-white/[0.05] transition-all duration-150 no-underline"
                  activeClass="!text-white !bg-white/[0.06]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="contact"
            smooth
            duration={500}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm border border-white/20 rounded-md text-white hover:bg-white/10 transition-all duration-150 no-underline cursor-pointer"
          >
            Let's Talk →
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden bg-transparent border-0 text-white/60 cursor-pointer p-2"
          >
            {open ? <FaTimes size={19} /> : <FaBars size={19} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-[99] bg-[rgba(5,5,10,0.98)] backdrop-blur-[20px] border-b border-white/[0.06] px-4 pt-3 pb-5"
          >
            {NAV_LINKS.map(({ id, to, label }) => (
              <Link
                key={id}
                to={to}
                smooth
                duration={500}
                offset={-70}
                onClick={() => setOpen(false)}
                className="block px-4 py-3.5 rounded-[10px] text-[15px] font-medium text-white/70 hover:text-white hover:bg-white/[0.05] cursor-pointer transition-all duration-150"
              >
                {label}
              </Link>
            ))}
            <div className="pt-2 px-1">
              <a
                href="/Resume.pdf"
                download
                className="btn-primary w-full justify-center"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
