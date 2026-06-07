import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { id: 1, to: "Home", label: "Home" },
  { id: 2, to: "about", label: "About" },
  { id: 3, to: "skill", label: "Skills" },
  { id: 4, to: "portfolio", label: "Projects" },
  { id: 5, to: "experience", label: "Experience" },
  { id: 6, to: "education", label: "Education" },
];

// Shared scroll settings — duration kept short so navigation feels snappy
const SCROLL = { smooth: true, duration: 300, offset: -70 };

// Styles
const cls = {
  navScrolled:
    "bg-[rgba(5,5,10,0.9)] border-b border-white/[0.06] backdrop-blur-[16px]",
  navDefault: "bg-transparent border-b border-transparent",
  desktopLink:
    "cursor-pointer block px-3.5 py-1.5 rounded-lg text-sm font-medium text-white/55 hover:text-white hover:bg-white/[0.05] transition-all duration-150 no-underline",
  talkBtn:
    "hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm border border-white/20 rounded-md text-white hover:bg-white/10 transition-all duration-150 no-underline cursor-pointer",
  hamburger:
    "md:hidden bg-transparent border-0 text-white/60 cursor-pointer p-2",
  mobileMenu:
    "fixed top-16 left-0 right-0 z-[99] bg-[rgba(5,5,10,0.98)] backdrop-blur-[20px] border-b border-white/[0.06] px-4 pt-3 pb-5",
  mobileLink:
    "block px-4 py-3.5 rounded-[10px] text-[15px] font-medium text-white/70 hover:text-white hover:bg-white/[0.05] cursor-pointer transition-all duration-150",
};

function Navbar() {
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
          scrolled ? cls.navScrolled : cls.navDefault
        }`}
      >
        <div className="max-w-[1152px] w-full mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            to="Home"
            spy
            {...SCROLL}
            className="cursor-pointer no-underline"
          >
            <span className="text-white font-bold text-lg tracking-[-0.02em]">
              Bittu Kumar
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-0.5 list-none m-0 p-0">
            {NAV_LINKS.map(({ id, to, label }) => (
              <li key={id}>
                <Link
                  to={to}
                  spy
                  {...SCROLL}
                  className={cls.desktopLink}
                  activeClass="!text-white !bg-white/[0.06]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="contact" {...SCROLL} className={cls.talkBtn}>
            Let's Talk →
          </Link>

          <button onClick={() => setOpen(!open)} className={cls.hamburger}>
            {open ? <FaTimes size={19} /> : <FaBars size={19} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={cls.mobileMenu}
          >
            {NAV_LINKS.map(({ id, to, label }) => (
              <Link
                key={id}
                to={to}
                {...SCROLL}
                onClick={() => setOpen(false)}
                className={cls.mobileLink}
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

export default Navbar;
