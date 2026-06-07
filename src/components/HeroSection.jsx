import profileImage from "../images/profile.png";
import { Link } from "react-scroll";
import { HiArrowRight } from "react-icons/hi";
import { FaReact, FaNodeJs, FaJsSquare } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { motion } from "framer-motion";

const TECH = [
  { icon: <FaReact />, label: "React.js" },
  { icon: <SiNextdotjs />, label: "Next.js" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <SiTailwindcss />, label: "Tailwind" },
  { icon: <FaJsSquare />, label: "JavaScript" },
  { icon: <PiBracketsCurlyBold />, label: "OOPs" },
];

const STATS = [
  { value: "5+", label: "Projects Built" },
  { value: "7+", label: "Technologies" },
  { value: "1+", label: "Years Experience" },
];

const SOCIALS = [
  { icon: FiGithub, href: "https://github.com/Bittu121" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/bittu-kumar143/" },
  { icon: FiMail, href: "mailto:bittukumar8713@gmail.com" },
];

// Styles
const cls = {
  section: "min-h-screen bg-[#05050a] relative overflow-hidden",
  badge:
    "inline-flex items-center gap-[7px] px-3.5 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/[0.08] text-emerald-400 text-xs font-bold tracking-[0.04em] mb-7 mx-auto md:mx-0",
  heading:
    "text-4xl md:text-5xl font-black text-white leading-[0.95] tracking-[-0.04em] mb-5",
  description:
    "text-md leading-[1.75] text-white/50 max-w-lg mb-8 mx-auto md:mx-0",
  btnPrimary:
    "px-4 py-3 rounded-md border border-[#7c83ff] bg-white text-black font-semibold text-sm flex items-center gap-2 transition-all duration-300 hover:opacity-90",
  btnGhost:
    "px-4 py-3 rounded-md border border-white/10 bg-[#0b0b14] text-white font-semibold text-sm flex items-center gap-2 transition-all duration-300 hover:border-white/20",
  socialIcon: "text-white/50 hover:text-white transition hover:scale-110",
  techChip:
    "flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/[0.03] text-white/85 text-sm font-medium transition-all duration-300 hover:border-[#818cf8]/40 hover:bg-[#818cf8]/[0.06] hover:shadow-[0_0_20px_rgba(129,140,248,0.18)] hover:-translate-y-[2px]",
};

function HeroSection() {
  return (
    <section id="Home" className={cls.section}>
      {/* Dot-grid with radial mask */}
      <div
        className="dot-grid absolute inset-0 opacity-45 pointer-events-none"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 55% at 50% 0%, black 30%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 55% at 50% 0%, black 30%, transparent 100%)",
        }}
      />

      {/* Top-center glow orb */}
      <div
        className="orb top-[-15%] left-1/2 -translate-x-1/2 w-[800px] h-[600px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.14) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 pt-[100px] md:pt-[120px]">
          {/* ── LEFT ── */}
          <div className="w-full md:flex-1 text-center md:text-left">
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={cls.badge}
            >
              <span className="w-[6px] h-[6px] rounded-md bg-[#34d399] animate-pulse" />
              Available for SDE-1 opportunities
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={cls.heading}
            >
              Full-Stack Developer
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={cls.description}
            >
              I build scalable, high-performance web applications using MongoDB,
              Express.js, React, and Node.js.
              <br />
              Focused on clean REST APIs, secure authentication, and reliable
              systems. Hands-on experience at{" "}
              <span className="text-[#e2e8f0] font-semibold">
                Vserv Infosystems Private Limited
              </span>
              .
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-4 flex-wrap mb-7 justify-center md:justify-start"
            >
              <Link to="portfolio" smooth duration={300} offset={-70}>
                <button className={cls.btnPrimary}>
                  View My Work <HiArrowRight size={17} />
                </button>
              </Link>
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className={cls.btnGhost}>View Resume</button>
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-5 justify-center md:justify-start"
            >
              {SOCIALS.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cls.socialIcon}
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT — Profile image ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0 w-[200px] sm:w-[240px] md:w-[clamp(220px,28vw,300px)] mx-auto md:mx-0"
          >
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute rounded-full blur-[20px]"
                style={{
                  inset: "-12%",
                  background:
                    "radial-gradient(circle, rgba(99,102,241,0.28) 0%, rgba(139,92,246,0.12) 50%, transparent 75%)",
                }}
              />
              {/* Image — fetchPriority tells browser to load this before other images */}
              <div className="relative rounded-3xl overflow-hidden border border-white/[0.09] shadow-[0_32px_64px_rgba(0,0,0,0.7),0_0_0_1px_rgba(99,102,241,0.1)]">
                <img
                  src={profileImage}
                  alt="Bittu Kumar"
                  fetchPriority="high"
                  className="w-full block"
                />
              </div>
              {/* MERN chip */}
              <div className="absolute -bottom-3.5 -right-2.5 bg-[#0d0d16] border border-[#818cf8]/40 rounded-xl px-3 py-2 shadow-[0_0_15px_rgba(129,140,248,0.45),0_8px_24px_rgba(0,0,0,0.5)]">
                <p className="text-xs font-bold text-white m-0">
                  <span className="text-[#818cf8]">MERN</span> Stack
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Stats + Tech strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-[72px] pt-7 border-t border-white/[0.05]"
        >
          <div className="flex flex-col gap-6">
            {/* Stats row */}
            <div className="flex items-center gap-8 md:gap-16">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                >
                  <div className="text-[30px] font-extrabold text-white tracking-[-0.03em] leading-none">
                    {s.value}
                  </div>
                  <div className="text-sm text-white/40 mt-1 font-medium whitespace-nowrap">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech stack row */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs font-semibold text-white/20 uppercase tracking-[0.14em] mr-2 whitespace-nowrap">
                Built With
              </span>
              {TECH.map(({ icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
                  className={cls.techChip}
                >
                  <span className="text-[#818cf8] text-base">{icon}</span>
                  <span>{label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="pb-16" />
      </div>
    </section>
  );
}

export default HeroSection;
