import { Link } from "react-scroll";
import { HiArrowRight } from "react-icons/hi";
import FadeIn from "../FadeIn";
import AboutStats from "./AboutStats";

const AboutBio = () => {
  return (
    <FadeIn delay={0.1} className="flex flex-col gap-5">
      <p className="text-base md:text-md text-content/55 leading-[1.75]">
        I'm a{" "}
        <span className="text-content font-semibold">Software Engineer</span>{" "}
        with over 2+ years of experience building web applications using{" "}
        <span className="text-content font-semibold">
          React.js, Next.js, Node.js, Express.js, and MongoDB
        </span>
        .
      </p>

      <p className="text-base md:text-md text-content/55 leading-[1.75]">
        At{" "}
        <span className="text-content font-semibold">
          Vserv Infosystems Private Limited
        </span>
        , I work on ERP and enterprise applications, building features that are
        simple, reliable, and easy to maintain. I enjoy creating user-friendly
        applications, integrating REST APIs, and solving real business problems
        through software.
      </p>

      <p className="text-base md:text-md text-content/55 leading-[1.75]">
        I was honored to receive the{" "}
        <span className="text-content font-semibold">
          KRA Performance Award
        </span>{" "}
        for my contributions. Every project gives me an opportunity to learn,
        improve, and become a better engineer.
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
