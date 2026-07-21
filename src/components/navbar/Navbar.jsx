import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, scroller } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { LuCommand } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import {
  FiHome,
  FiUser,
  FiCode,
  FiBriefcase,
  FiAward,
  FiFolder,
  FiMail,
  FiDownload,
  FiCopy,
  FiGithub,
  FiLinkedin,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import CommandPalette from "./CommandPalette";
import { NAV_LINKS } from "./navbarData";
import {
  SCROLL_OPTIONS,
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
} from "../../data/contactInfo";

const scrollToSection = (sectionId) => {
  setTimeout(() => scroller.scrollTo(sectionId, SCROLL_OPTIONS), 0);
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCommandIndex, setActiveCommandIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState("");
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") !== "light",
  );

  const searchInputRef = useRef(null);

  // Add/remove the "light" class on <html> and remember the choice
  useEffect(() => {
    document.documentElement.classList.toggle("light", !isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  // All the commands the palette can search through and run.
  const allCommands = [
    {
      key: "home",
      group: "Navigation",
      label: "Go to Home",
      hint: "Back to the top",
      icon: FiHome,
      perform: () => scrollToSection("Home"),
    },
    {
      key: "about",
      group: "Navigation",
      label: "Go to About",
      hint: "Who I am & background",
      icon: FiUser,
      perform: () => scrollToSection("about"),
    },
    {
      key: "skills",
      group: "Navigation",
      label: "Go to Skills",
      hint: "Tech stack & tools",
      icon: FiCode,
      perform: () => scrollToSection("skill"),
    },
    {
      key: "experience",
      group: "Navigation",
      label: "Go to Experience",
      hint: "Work history & education",
      icon: FiBriefcase,
      perform: () => scrollToSection("experience"),
    },
    {
      key: "achievements",
      group: "Navigation",
      label: "Go to Achievements",
      hint: "Awards & recognition",
      icon: FiAward,
      perform: () => scrollToSection("achievement"),
    },
    {
      key: "projects",
      group: "Navigation",
      label: "Go to Projects",
      hint: "Selected work",
      icon: FiFolder,
      perform: () => scrollToSection("portfolio"),
    },
    {
      key: "contact",
      group: "Navigation",
      label: "Go to Contact",
      hint: "Get in touch",
      icon: FiMail,
      perform: () => scrollToSection("contact"),
    },
    {
      key: "resume",
      group: "Actions",
      label: "Download Résumé",
      hint: "PDF · opens in a new tab",
      icon: FiDownload,
      perform: () => window.open("/Resume.pdf", "_blank", "noopener"),
    },
    {
      key: "copy-email",
      group: "Actions",
      label: "Copy Email Address",
      hint: EMAIL,
      icon: FiCopy,
      keepOpen: true,
      perform: async () => {
        try {
          await navigator.clipboard.writeText(EMAIL);
          setToastMessage("Email copied to clipboard");
        } catch {
          setToastMessage(EMAIL);
        }
      },
    },
    {
      key: "email",
      group: "Actions",
      label: "Email Me",
      hint: "Open your mail client",
      icon: FiMail,
      perform: () => (window.location.href = `mailto:${EMAIL}`),
    },
    {
      key: "github",
      group: "Actions",
      label: "View GitHub",
      hint: "github.com/Bittu121",
      icon: FiGithub,
      external: true,
      perform: () => window.open(GITHUB_URL, "_blank", "noopener"),
    },
    {
      key: "linkedin",
      group: "Actions",
      label: "View LinkedIn",
      hint: "in/bittu-kumar143",
      icon: FiLinkedin,
      external: true,
      perform: () => window.open(LINKEDIN_URL, "_blank", "noopener"),
    },
  ];

  const query = searchQuery.trim().toLowerCase();
  const commandResults = query
    ? allCommands.filter(
        (command) =>
          command.label.toLowerCase().includes(query) ||
          command.hint.toLowerCase().includes(query),
      )
    : allCommands;

  // Shrink navbar background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Global shortcut: Ctrl+K (or Cmd+K on Mac) toggles the palette
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Reset the palette every time it opens, and focus the search input
  useEffect(() => {
    if (!paletteOpen) return;

    setSearchQuery("");
    setActiveCommandIndex(0);
    setToastMessage("");
    const focusTimer = setTimeout(() => searchInputRef.current?.focus(), 40);

    return () => clearTimeout(focusTimer);
  }, [paletteOpen]);

  // Stop the page from scrolling behind the modal while it's open
  useEffect(() => {
    document.body.style.overflow = paletteOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [paletteOpen]);

  // Auto-dismiss the "copied to clipboard" toast after a couple of seconds
  useEffect(() => {
    if (!toastMessage) return;
    const dismissTimer = setTimeout(() => setToastMessage(""), 1800);
    return () => clearTimeout(dismissTimer);
  }, [toastMessage]);

  const closePalette = () => setPaletteOpen(false);

  const runCommand = (command) => {
    command.perform();
    if (!command.keepOpen) closePalette();
  };

  const onPaletteKeyDown = (e) => {
    const lastIndex = commandResults.length - 1;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveCommandIndex((i) => (i >= lastIndex ? 0 : i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveCommandIndex((i) => (i <= 0 ? lastIndex : i - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (commandResults[activeCommandIndex]) {
        runCommand(commandResults[activeCommandIndex]);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      closePalette();
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-[100] h-16 flex items-center px-4 md:px-8 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--nav-bg)] border-b border-content/[0.06] backdrop-blur-[16px]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
          <Link
            to="Home"
            spy
            {...SCROLL_OPTIONS}
            className="cursor-pointer no-underline"
          >
            <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-lg border border-content/10 hover:border-content/40 bg-content/5 text-content font-bold text-base tracking-[-0.02em]">
              BK
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-0.5 list-none m-0 p-0">
            {NAV_LINKS.map(({ id, to, label }) => (
              <li key={id}>
                <Link
                  to={to}
                  spy
                  {...SCROLL_OPTIONS}
                  className="cursor-pointer block px-3.5 py-1.5 rounded-lg text-sm font-medium text-content/55 hover:text-content hover:bg-content/[0.08] transition-all duration-150 no-underline"
                  activeClass="!text-content !bg-content/[0.06]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPaletteOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-content/10 bg-content/5 text-content/60 hover:text-content hover:border-content/40 hover:bg-content/10 transition-all duration-150 cursor-pointer"
            >
              <IoSearch size={16} />
              <span className="flex items-center gap-0.5 text-xs font-medium">
                <LuCommand size={13} />K
              </span>
            </button>

            <button
              type="button"
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle light and dark mode"
              className="flex items-center justify-center w-9 h-9 rounded-lg border border-content/10 bg-content/5 text-content/60 hover:text-content hover:border-content/40 hover:bg-content/10 transition-all duration-150 cursor-pointer"
            >
              {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden bg-transparent border-0 text-content/60 cursor-pointer p-2"
          >
            {mobileMenuOpen ? <FaTimes size={19} /> : <FaBars size={19} />}
          </button>
        </div>
      </motion.nav>

      <CommandPalette
        isOpen={paletteOpen}
        onClose={closePalette}
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
        commandResults={commandResults}
        activeCommandIndex={activeCommandIndex}
        setActiveCommandIndex={setActiveCommandIndex}
        searchInputRef={searchInputRef}
        onKeyDown={onPaletteKeyDown}
        runCommand={runCommand}
        toastMessage={toastMessage}
      />

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-[99] bg-[var(--nav-solid)] backdrop-blur-[20px] border-b border-content/[0.06] px-4 pt-3 pb-5"
          >
            {NAV_LINKS.map(({ id, to, label }) => (
              <Link
                key={id}
                to={to}
                {...SCROLL_OPTIONS}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3.5 rounded-[10px] text-[15px] font-medium text-content/70 hover:text-content hover:bg-content/[0.05] cursor-pointer transition-all duration-150"
              >
                {label}
              </Link>
            ))}
            <div className="pt-2 px-1">
              <a
                href="/Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#6366f1] text-content font-semibold text-sm transition-all duration-200 hover:bg-[#5254e8] hover:shadow-[0_0_32px_rgba(99,102,241,0.45)] w-full justify-center"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
