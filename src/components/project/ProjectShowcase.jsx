import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { TbSitemap } from "react-icons/tb";
import { FiCode, FiCheckSquare, FiArrowRight} from "react-icons/fi";
import FadeIn from "../FadeIn";
import ProjectCarousel from "./ProjectCarousel";
import { TECH_ICONS } from "./projectData";


const ProjectShowcase = ({
  project,
  index,
  onViewFeatures,
  onViewArchitecture,
}) => {
  const { badge, title, desc, tech, images, demo, code, architecture } =
    project;

  return (
    <FadeIn
      y={24}
      delay={index * 0.1}
      className="flex flex-col rounded-2xl border border-content/10 bg-card p-5 h-full"
    >
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/[0.08] text-emerald-400 text-[11px] font-bold mb-3 self-start">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        {badge}
      </div>

      <h3 className="text-xl font-extrabold text-content tracking-[-0.02em] leading-[1.15] mb-2">
        {title}
      </h3>

      <p className="text-xs text-content/45 leading-5 mb-4 line-clamp-3">
        {desc}
      </p>

      <ProjectCarousel images={images} title={title} />

      <div className="mt-5">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-content/70 mb-2">
          <FiCode size={14} className="text-[#818cf8]" />
          Tech Stack
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {tech.map((item) => {
            const entry = TECH_ICONS[item];
            const Icon = entry?.icon;
            return (
              <span
                key={item}
                className="flex items-center gap-1 px-2 py-1 rounded-lg border border-content/10 bg-content/[0.02] text-[11px] font-medium text-content/80"
              >
                {Icon && <Icon size={12} style={{ color: entry.color }} />}
                {item}
              </span>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-5">
        <button
          onClick={onViewFeatures}
          className="flex flex-col items-center gap-1 py-2.5 rounded-lg border border-[#818cf8]/30 bg-[#818cf8]/[0.06] hover:bg-[#818cf8]/[0.1] transition"
        >
          <FiCheckSquare size={15} className="text-[#818cf8]" />
          <span className="text-[10px] font-semibold text-content">
            Features
          </span>
        </button>

        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 py-2.5 rounded-lg border border-content/10 bg-content/[0.02] hover:border-content/25 transition"
        >
          <HiExternalLink size={15} className="text-content/60" />
          <span className="text-[10px] font-semibold text-content">Demo</span>
        </a>

        <a
          href={code}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 py-2.5 rounded-lg border border-emerald-500/25 bg-emerald-500/[0.04] hover:bg-emerald-500/[0.08] transition"
        >
          <FaGithub size={14} className="text-emerald-400" />
          <span className="text-[10px] font-semibold text-content">Code</span>
        </a>
      </div>

      {architecture && (
        <button
          onClick={onViewArchitecture}
          className="w-full flex items-center justify-between gap-2 mt-2 px-3 py-2.5 rounded-lg border border-[#7c83ff]/25 bg-[#7c83ff]/[0.05] hover:bg-[#7c83ff]/[0.09] transition text-left"
        >
          <span className="flex items-center gap-2 min-w-0">
            <TbSitemap size={16} className="text-[#a5b4fc] flex-shrink-0" />
            <span className="text-xs font-semibold text-content truncate">
              System Architecture
            </span>
          </span>
          <FiArrowRight size={13} className="text-content/40 flex-shrink-0" />
        </button>
      )}
    </FadeIn>
  );
};

export default ProjectShowcase;
