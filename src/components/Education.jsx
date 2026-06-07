import { motion } from "framer-motion";
import { GraduationCap, Code2, Database, BrainCircuit } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: <BrainCircuit size={18} />,
    text: "Solved DSA problems such as arrays, trees, graphs, and dynamic programming.",
  },
  {
    icon: <Code2 size={18} />,
    text: "Built full-stack MERN applications including dashboards, CRUD systems, and REST APIs.",
  },
  {
    icon: <Database size={18} />,
    text: "Strong understanding of authentication, database design, and scalable backend architecture.",
  },
  {
    icon: <Code2 size={18} />,
    text: "Hands-on experience with clean UI development, responsive layouts, and API integration.",
  },
];

const TAGS = [
  "Computer Science",
  "Full-Stack Development",
  "DSA & Problem Solving",
];

// Styles
const cls = {
  section:
    "relative overflow-hidden py-16 md:py-24 px-4 md:px-6 border-t border-white/5",
  container: "max-w-6xl mx-auto relative z-10",
  heading:
    "text-3xl md:text-5xl font-extrabold text-white tracking-[-0.03em] leading-[1.1]",
  subText: "text-white/45 mt-3 text-base",
  mainCard:
    "border border-white/[0.06] bg-[linear-gradient(180deg,rgba(99,102,241,0.05),rgba(255,255,255,0.02))] rounded-xl p-7 md:p-8 backdrop-blur-sm",
  iconBox:
    "w-14 h-14 rounded-2xl flex items-center justify-center bg-indigo-500/10 border border-indigo-400/10 flex-shrink-0",
  degreeTitle: "text-xl md:text-[32px] font-bold text-white tracking-tight",
  degreeInfo: "text-white/50 mt-1 text-md",
  tag: "px-3 py-1 rounded-lg text-sm border border-white/[0.06] bg-white/[0.025] text-white/65",
  cgpaBox:
    "min-w-[100px] rounded-2xl border border-white/[0.06] bg-white/[0.025] px-5 py-4 text-center",
  cgpaLabel: "text-[11px] uppercase tracking-[0.15em] text-white/35 mb-1",
  cgpaValue: "text-3xl font-bold text-white",
  divider: "h-px bg-white/[0.04] my-7",
  highlight:
    "flex gap-3 items-start rounded-2xl border border-white/[0.05] bg-white/[0.02] p-4 hover:border-indigo-400/10 transition-all duration-300",
  highlightIcon: "text-indigo-300 mt-0.5 flex-shrink-0",
  highlightText: "text-sm leading-7 text-white/65",
};

function Education() {
  return (
    <section id="education" className={cls.section}>
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none line-grid" />

      {/* Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-indigo-500/8 blur-[120px] rounded-full pointer-events-none" />

      <div className={cls.container}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <p className="section-eyebrow mb-3">Academic Background</p>
          <h2 className={cls.heading}>Education</h2>
          <p className={cls.subText}>
            Computer science foundation with focus on full-stack development and
            backend systems.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className={cls.mainCard}
        >
          {/* Top row */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex gap-4">
              {/* Graduation icon */}
              <div className={cls.iconBox}>
                <GraduationCap className="text-indigo-300 w-7 h-7" />
              </div>

              {/* Degree info */}
              <div>
                <h3 className={cls.degreeTitle}>B.Tech in Computer Science</h3>
                <p className={cls.degreeInfo}>
                  DARBHANGA COLLEGE OF ENGINEERING, DARBHANGA • 2017 — 2021
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {TAGS.map((tag) => (
                    <span key={tag} className={cls.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CGPA box */}
            <div className={cls.cgpaBox}>
              <p className={cls.cgpaLabel}>CGPA</p>
              <p className={cls.cgpaValue}>8.5</p>
            </div>
          </div>

          <div className={cls.divider} />

          {/* Highlights grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {HIGHLIGHTS.map((item, index) => (
              <div key={index} className={cls.highlight}>
                <div className={cls.highlightIcon}>{item.icon}</div>
                <p className={cls.highlightText}>{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
