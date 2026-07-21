import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";
import FadeIn from "../FadeIn";
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "../../data/contactInfo";

const ContactInfoCard = () => {
  return (
    <FadeIn
      x={-20}
      delay={0.1}
      className="relative overflow-hidden rounded-3xl border border-content/10 bg-[var(--contact-card)] px-6 py-14 md:px-10 md:py-16 text-center"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.16) 0%, transparent 70%)",
        }}
      />

      <div className="relative">
        <p className="text-base md:text-lg text-content/50 leading-[1.6] max-w-[460px] mx-auto font-medium mb-7">
          Open to SDE-1, Frontend, Backend, and MERN Stack roles. Always happy
          to discuss interesting ideas.
        </p>

        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-content/10 bg-content/[0.03] mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[13px] font-bold text-content/75">
            Currently available for full-time opportunities
          </span>
        </div>

        <div className="flex flex-col items-center gap-3 mb-9">
          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex items-center gap-2 text-sm md:text-base font-semibold text-content hover:text-[#a5b4fc] transition-colors duration-200"
          >
            <HiMail
              size={19}
              className="text-content/45 group-hover:text-[#818cf8] transition-colors"
            />
            {EMAIL}
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="group inline-flex items-center gap-2 text-sm md:text-base font-semibold text-content hover:text-[#a5b4fc] transition-colors duration-200"
          >
            <HiPhone
              size={18}
              className="text-content/45 group-hover:text-[#818cf8] transition-colors"
            />
            {PHONE_DISPLAY}
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-content/10 bg-content/[0.03] text-[13px] font-semibold text-content/80 hover:border-content/25 hover:bg-content/[0.06] hover:text-content transition-all duration-200"
          >
            <FaLinkedinIn size={16} /> LinkedIn
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-content/10 bg-content/[0.03] text-[13px] font-semibold text-content/80 hover:border-content/25 hover:bg-content/[0.06] hover:text-content transition-all duration-200"
          >
            <FaGithub size={16} /> GitHub
          </a>
        </div>
      </div>
    </FadeIn>
  );
};

export default ContactInfoCard;
