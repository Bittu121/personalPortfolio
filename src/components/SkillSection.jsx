import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiCplusplus,
  SiNextdotjs,
  SiMysql,
} from "react-icons/si";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { TbApi } from "react-icons/tb";
import { RiShieldCheckLine } from "react-icons/ri";

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    skills: [
      {
        icon: SiReact,
        name: "React.js",
        accent: "#6366f1",
        note: "Component architecture · State management",
      },
      {
        icon: SiNextdotjs,
        name: "Next.js",
        accent: "#ffffff",
        note: "SSR · Routing · Modern frontend apps",
      },
      {
        icon: SiTailwindcss,
        name: "Tailwind CSS",
        accent: "#06b6d4",
        note: "Utility-first · Responsive design",
      },
      {
        icon: RiShieldCheckLine,
        name: "Zod Validation",
        accent: "#818cf8",
        note: "Schema validation · Form validation",
      },
    ],
  },
  {
    title: "Language",
    skills: [
      {
        icon: SiJavascript,
        name: "JavaScript",
        accent: "#f59e0b",
        note: "ES6+ · Async patterns · DOM APIs",
      },
      {
        icon: SiCplusplus,
        name: "C++",
        accent: "#f59e0b",
        note: "DSA · Algorithms · Problem solving",
      },
      {
        icon: PiBracketsCurlyBold,
        name: "OOPs",
        accent: "#818cf8",
        note: "Encapsulation · Inheritance · Abstraction",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        icon: SiNodedotjs,
        name: "Node.js",
        accent: "#8b5cf6",
        note: "REST APIs · Middleware · Auth flows",
      },
      {
        icon: SiExpress,
        name: "Express.js",
        accent: "#8b5cf6",
        note: "Routing · Middleware · Backend architecture",
      },
      {
        icon: TbApi,
        name: "REST APIs",
        accent: "#22c55e",
        note: "Authentication · CRUD · API integration",
      },
      {
        icon: SiMongodb,
        name: "MongoDB",
        accent: "#10b981",
        note: "Schema design · Atlas · Aggregation",
      },
      {
        icon: SiMysql,
        name: "MySQL",
        accent: "#3b82f6",
        note: "Relational database · SQL queries",
      },
    ],
  },
];

const TOTAL_SKILLS = SKILL_CATEGORIES.reduce(
  (sum, cat) => sum + cat.skills.length,
  0,
);

// Styles
const cls = {
  section: "relative overflow-hidden bg-[#0a0a14] py-24 px-4 md:px-8",
  container: "max-w-6xl mx-auto relative",
  heading:
    "text-3xl md:text-5xl font-extrabold text-white tracking-[-0.03em] leading-[1.1]",
  countBadge:
    "text-xs font-semibold text-white/20 bg-white/[0.04] border border-white/[0.07] rounded-lg px-3.5 py-1.5",
  catLabel:
    "text-sm font-semibold text-white/40 uppercase tracking-widest mb-4",
  skillCard:
    "border border-white/10 bg-white/[0.03] p-5 rounded-xl hover:border-indigo-400/40 hover:bg-white/[0.06] transition cursor-default",
  skillName: "text-white font-medium text-sm",
  skillNote: "text-white/50 text-xs mt-2 leading-relaxed",
  strip:
    "mt-12 px-7 py-5 rounded-[14px] flex items-center justify-between flex-wrap gap-4 bg-[rgba(99,102,241,0.05)] border border-[rgba(99,102,241,0.15)]",
  stripDot: "w-[7px] h-[7px] rounded-full",
  stripText: "text-[13px] font-semibold text-white/50",
};

function SkillCard({ icon: Icon, name, accent, note }) {
  return (
    <motion.div whileHover={{ scale: 1.04 }} className={cls.skillCard}>
      <Icon className="text-2xl mb-3" style={{ color: accent }} />
      <h3 className={cls.skillName}>{name}</h3>
      <p className={cls.skillNote}>{note}</p>
    </motion.div>
  );
}

function SkillSection() {
  return (
    <section id="skill" className={cls.section}>
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none line-grid" />

      <div className={cls.container}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between flex-wrap gap-4 mb-12"
        >
          <div>
            <p className="section-eyebrow mb-3">Tech stack</p>
            <h2 className={cls.heading}>Skills & Technologies</h2>
          </div>
          <span className={cls.countBadge}>{TOTAL_SKILLS} skills</span>
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-10">
          {SKILL_CATEGORIES.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h3 className={cls.catLabel}>{category.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {category.skills.map((skill, idx) => (
                  <SkillCard key={idx} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cls.strip}
        >
          <div className="flex items-center gap-2.5">
            <div
              className={`${cls.stripDot} bg-[#818cf8] shadow-[0_0_6px_#818cf8]`}
            />
            <span className={cls.stripText}>
              Focused on building —{" "}
              <span className="text-[#e2e8f0]">
                Scalable MERN stack applications
              </span>
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <div
              className={`${cls.stripDot} bg-[#22c55e] shadow-[0_0_6px_#22c55e]`}
            />
            <span className={cls.stripText}>
              Currently looking for —{" "}
              <span className="text-[#e2e8f0]">
                SDE-1 / Full-Stack Developer roles in India
              </span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SkillSection;
