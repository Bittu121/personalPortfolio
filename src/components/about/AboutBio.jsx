import { Link } from "react-scroll";
import { HiArrowRight } from "react-icons/hi";
import FadeIn from "../FadeIn";
import AboutStats from "./AboutStats";

const AboutBio = () => {
  return (
    <FadeIn delay={0.1} className="flex flex-col gap-5">
      <p className="text-base md:text-md text-content/55 leading-[1.75]">
        I'm a{" "}
        <span className="text-content font-semibold">Software Developer</span>{" "}
        at{" "}
        <span className="text-content font-semibold">
          Vserv Infosystems Private Limited
        </span>
        , where I build scalable, high-performance web applications with{" "}
        <span className="text-content font-semibold">
          MongoDB, Express.js, React, and Node.js
        </span>
        . I focus on clean REST APIs, secure authentication, and reliable
        production-ready systems.
      </p>

      <p className="text-base md:text-md text-content/55 leading-[1.75]">
        I've built real-world applications across dashboards, CRUD systems, and
        food-delivery platforms — shipping reusable component architecture,
        responsive frontends, and well-structured backend services along the
        way.
      </p>

      <p className="text-base md:text-md text-content/55 leading-[1.75]">
        Outside work I explore side projects, sharpen my DSA on LeetCode, and
        stay current with the modern web ecosystem. I care about{" "}
        <span className="text-content font-semibold">
          code quality, system design, and products that genuinely work
        </span>
        .
      </p>

      <AboutStats />

      <div className="flex gap-3 flex-wrap mt-4">
        <Link to="contact" smooth duration={400} offset={-70}>
          <button className="px-5 py-3 rounded-md bg-gradient-to-r from-[#6366f1] to-[#818cf8] text-content font-semibold text-sm flex items-center gap-2 transition-all duration-300 hover:opacity-90 shadow-[0_8px_24px_rgba(99,102,241,0.35)] cursor-pointer">
            Get in Touch
          </button>
        </Link>
        <Link to="portfolio" smooth duration={400} offset={-70}>
          <button className="px-5 py-3 rounded-md border border-content/10 bg-card text-content font-semibold text-sm flex items-center gap-2 transition-all duration-300 hover:border-content/30 cursor-pointer">
            See Projects <HiArrowRight size={16} />
          </button>
        </Link>
      </div>
    </FadeIn>
  );
};

export default AboutBio;
