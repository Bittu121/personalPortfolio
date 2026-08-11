import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiArrowRight, HiArrowDown } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import TerminalMock from "./TerminalMock";
import { HERO_TAGLINES, HERO_SOCIALS } from "./heroData";

const HeroSection = () => {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let phrase = 0;
    let char = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const full = HERO_TAGLINES[phrase];
      char += deleting ? -1 : 1;
      setTyped(full.slice(0, char));

      let delay = deleting ? 45 : 90;
      if (!deleting && char === full.length) {
        delay = 1600; // pause on the complete word
        deleting = true;
      } else if (deleting && char === 0) {
        deleting = false;
        phrase = (phrase + 1) % HERO_TAGLINES.length;
        delay = 400;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="Home"
      className="min-h-screen bg-page relative overflow-hidden px-4 md:px-8"
    >
      <div
        className="absolute inset-0 opacity-45 pointer-events-none bg-[radial-gradient(rgba(99,102,241,0.18)_1px,transparent_1px)] bg-[length:30px_30px]"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 55% at 50% 0%, black 30%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 55% at 50% 0%, black 30%, transparent 100%)",
        }}
      />

      <div
        className="absolute rounded-full pointer-events-none blur-[60px] top-[-15%] left-1/2 -translate-x-1/2 w-[800px] h-[600px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.14) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-40 lg:gap-72 pt-[100px] md:pt-[120px]">
          <div className="w-full text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-[7px] px-3.5 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/[0.08] text-emerald-400 text-xs font-bold tracking-[0.04em] mb-7 mx-auto md:mx-0"
            >
              <span className="w-[6px] h-[6px] rounded-full bg-[#34d399] animate-pulse" />
              Available for SDE opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-content leading-[0.95] tracking-[-0.04em] mb-8"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-[#818cf8] via-[#a78bfa] to-[#38bdf8] bg-clip-text text-transparent">
                Bittu Kumar
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-mono text-content/40 text-base md:text-lg mb-7 min-h-[1.5em]"
            >
              // {typed}
              <span className="inline-block w-[2px] h-[1em] bg-content/50 ml-0.5 align-middle animate-pulse" />
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg leading-[1.75] text-content/50 max-w-lg mb-8 mx-auto md:mx-0"
            >
              Building web applications with React, Next.js, Node.js,
              Express.js, and MongoDB.
              <br />
              Creating reusable UI components, integrating REST APIs, and
              building business applications at{" "}
              <span className="text-[#a5b4fc] font-semibold underline decoration-[#818cf8]/40 underline-offset-2">
                Vserv Infosystems
              </span>
              .
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-4 flex-wrap mb-7 justify-center md:justify-start"
            >
              <Link to="portfolio" smooth duration={300} offset={-70}>
                <button className="px-4 py-3 rounded-md bg-gradient-to-r from-[#6366f1] to-[#818cf8] text-content font-semibold text-sm flex items-center gap-2 transition-all duration-300 hover:opacity-90 shadow-[0_8px_24px_rgba(99,102,241,0.35)]">
                  View Projects <HiArrowRight size={17} />
                </button>
              </Link>
              <a href="/Bittu_Kumar_Resume.pdf" download="Bittu_Kumar_Resume.pdf">
                <button className="px-4 py-3 rounded-md border border-content/10 hover:border-content/40 bg-card text-content font-semibold text-sm flex items-center gap-2 transition-all duration-300">
                  Download Resume <FiDownload size={16} />
                </button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3 justify-center md:justify-start"
            >
              {HERO_SOCIALS.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg border border-content/10 bg-content/5 text-content/50 hover:text-content hover:border-content/30 hover:bg-content/10 transition-all duration-300"
                >
                  <Icon className="text-base" />
                </a>
              ))}
            </motion.div>
          </div>

          <TerminalMock />
        </div>
        <div className="pb-16" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link
          to="about"
          smooth
          duration={500}
          offset={-70}
          aria-label="Scroll to About section"
          className="cursor-pointer text-content/25 hover:text-content/60 transition-colors duration-300 animate-bounce"
        >
          <HiArrowDown size={18} />
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;
