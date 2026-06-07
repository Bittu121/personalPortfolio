import { Link } from "react-scroll";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

// label = what's shown · to = the section id to scroll to
const NAV_LINKS = [
  { label: "Home", to: "Home" },
  { label: "About", to: "about" },
  { label: "Projects", to: "portfolio" },
  { label: "Skills", to: "skill" },
  { label: "Contact", to: "contact" },
];

// Match Navbar's snappy scroll
const SCROLL = { smooth: true, duration: 300, offset: -70 };

const SOCIALS = [
  { icon: FaGithub, href: "https://github.com/Bittu121", size: 16 },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/bittu-kumar143/",
    size: 16,
  },
  { icon: HiOutlineMail, href: "mailto:bittukumar8713@gmail.com", size: 18 },
];

// Styles
const cls = {
  footer: "relative overflow-hidden border-t border-white/5 mt-20",
  container: "max-w-6xl mx-auto px-6 py-10 relative",
  name: "text-2xl font-bold text-white mb-2",
  tagline: "text-white/45 text-sm max-w-[420px] leading-7",
  navLink: "text-sm text-white/45 hover:text-white cursor-pointer transition",
  iconBtn:
    "w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition",
  divider:
    "mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3",
  copyright: "text-xs text-white/25",
  resumeBtn:
    "px-5 py-2.5 rounded-lg border border-white/10 text-sm text-white hover:border-white/20 transition",
};

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cls.footer}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none line-grid" />

      <div className={cls.container}>
        {/* Main row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left — name + tagline */}
          <div>
            <h2 className={cls.name}>Bittu Kumar</h2>
            <p className={cls.tagline}>
              MERN Stack Developer focused on scalable web applications, clean
              UI, and backend APIs.
            </p>
          </div>

          {/* Center — nav links */}
          <div className="flex items-center gap-6 flex-wrap">
            {NAV_LINKS.map(({ label, to }) => (
              <Link key={to} to={to} {...SCROLL} className={cls.navLink}>
                {label}
              </Link>
            ))}
          </div>

          {/* Right — social icons */}
          <div className="flex items-center gap-4">
            {SOCIALS.map(({ icon: Icon, href, size }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={cls.iconBtn}
              >
                <Icon size={size} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className={cls.divider}>
          <p className={cls.copyright}>© 2026 Bittu Kumar</p>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={cls.resumeBtn}
          >
            View Resume
          </a>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
