import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-white/5 mt-20"
    >
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Main Footer */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Bittu Kumar</h2>

            <p className="text-white/45 text-sm max-w-[420px] leading-7">
              MERN Stack Developer focused on scalable web applications, clean
              UI, and backend APIs.
            </p>
          </div>

          {/* Center Navigation */}
          <div className="flex items-center gap-6 flex-wrap">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth
                duration={500}
                className="text-sm text-white/45 hover:text-white cursor-pointer transition"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Bittu121"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition"
            >
              <FaGithub size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/bittu-kumar143/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition"
            >
              <FaLinkedinIn size={16} />
            </a>

            <a
              href="mailto:bittukumar8713@gmail.com"
              className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition"
            >
              <HiOutlineMail size={18} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">© 2026 Bittu Kumar</p>

          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-5 py-2.5
              rounded-lg
              border border-white/10
              text-sm text-white
              hover:border-white/20
              transition
            "
          >
            View Resume
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
