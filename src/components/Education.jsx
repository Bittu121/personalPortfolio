import { motion } from "framer-motion";
import { GraduationCap, Code2, Database, BrainCircuit } from "lucide-react";

const highlights = [
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

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 md:py-24 px-4 md:px-6 border-t border-white/5 relative overflow-hidden"
    >
      {/* Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-indigo-500/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <p className="section-eyebrow mb-3">Academic Background</p>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-[-0.03em] leading-none">
            Education
          </h2>

          <p className="text-white/45 mt-3 text-base">
            Computer science foundation with focus on full-stack development and
            backend systems.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="
            border border-white/[0.06]
            bg-[linear-gradient(180deg,rgba(99,102,241,0.05),rgba(255,255,255,0.02))]
            rounded-xl
            p-7 md:p-8
            backdrop-blur-sm
          "
        >
          {/* Top */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex gap-4">
              {/* Icon */}
              <div
                className="
                  w-14 h-14 rounded-2xl
                  flex items-center justify-center
                  bg-indigo-500/10
                  border border-indigo-400/10
                  flex-shrink-0
                "
              >
                <GraduationCap className="text-indigo-300 w-7 h-7" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl md:text-[32px] font-bold text-white tracking-tight">
                  B.Tech in Computer Science
                </h3>

                <p className="text-white/50 mt-1 text-md">
                  DARBHANGA COLLEGE OF ENGINEERING, DARBHANGA • 2017 — 2021
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Computer Science",
                    "Full-Stack Development",
                    "DSA & Problem Solving",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="
                        px-3 py-1
                        rounded-lg
                        text-sm
                        border border-white/[0.06]
                        bg-white/[0.025]
                        text-white/65
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CGPA */}
            <div
              className="
                min-w-[100px]
                rounded-2xl
                border border-white/[0.06]
                bg-white/[0.025]
                px-5 py-4
                text-center
              "
            >
              <p className="text-[11px] uppercase tracking-[0.15em] text-white/35 mb-1">
                CGPA
              </p>

              <p className="text-3xl font-bold text-white">8.5</p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/[0.04] my-7" />

          {/* Highlights */}
          <div className="grid md:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="
                  flex gap-3 items-start
                  rounded-2xl
                  border border-white/[0.05]
                  bg-white/[0.02]
                  p-4
                  hover:border-indigo-400/10
                  transition-all duration-300
                "
              >
                <div className="text-indigo-300 mt-0.5 flex-shrink-0">
                  {item.icon}
                </div>

                <p className="text-sm leading-7 text-white/65">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
