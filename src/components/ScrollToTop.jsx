import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Styles
const cls = {
  btn: "fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition group",
};

function ScrollToTop() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setProgress(scrollTop / height);
      setShow(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const radius = 18;
  const circumference = 2 * Math.PI * radius;

  if (!show) return null;

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cls.btn}
    >
      {/* Circular progress ring */}
      <svg className="absolute w-12 h-12 rotate-[-90deg]">
        <circle
          cx="24"
          cy="24"
          r={radius}
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="2"
          fill="transparent"
        />
        <circle
          cx="24"
          cy="24"
          r={radius}
          stroke="white"
          strokeWidth="2"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress * circumference}
          strokeLinecap="round"
        />
      </svg>

      {/* Up arrow */}
      <svg
        className="w-4 h-4 text-white/70 group-hover:text-white transition"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    </motion.button>
  );
}

export default ScrollToTop;
