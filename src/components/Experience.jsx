import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Software Developer",
    company: "VServ Infosystem Private Limited",
    duration: "2025 — 2026",
    points: [
      "Developed responsive admin dashboards and UI components",
      "Integrated APIs and improved frontend data handling",
      "Focused on reusable architecture and clean code structure",
    ],
    tech: ["React", "JavaScript", "REST APIs", "Git"],
  },
  {
    role: "MERN Stack Intern",
    company: "Applore Technologies",
    duration: "2023 — 2024",
    points: [
      "Optimized backend APIs and improved application performance",
      "Worked on authentication, CRUD operations, and REST APIs",
      "Built reusable frontend components and dashboard features",
    ],
    tech: ["React", "Node.js", "MongoDB", "REST APIs"],
  },
];

// Styles
const cls = {
  section:
    "relative overflow-hidden py-16 md:py-24 px-4 md:px-6 border-t border-white/5",
  container: "max-w-6xl mx-auto relative",
  heading:
    "text-3xl md:text-5xl font-extrabold text-white tracking-[-0.03em] leading-[1.1]",
  subText: "text-white/45 text-base mt-4 max-w-[620px] leading-8",
  card: "border border-white/10 bg-white/[0.03] rounded-2xl p-6 transition-all duration-300 hover:border-indigo-400/30",
  point: "flex items-start gap-3 text-white/65 leading-7",
  techTag:
    "px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] text-xs text-white/60",
};

function Experience() {
  return (
    <section id="experience" className={cls.section}>
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none line-grid" />

      <div className={cls.container}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-eyebrow mb-3">Experience</p>
          <h2 className={cls.heading}>Professional experience</h2>
          <p className={cls.subText}>
            Experience working on frontend interfaces, backend APIs,
            authentication systems, dashboards, and scalable web applications.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className={cls.card}
            >
              {/* Role + duration */}
              <div className="flex justify-between items-start gap-4 mb-5 flex-wrap">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-white/45 mt-1">{exp.company}</p>
                </div>
                <span className="text-sm text-white/35">{exp.duration}</span>
              </div>

              {/* Bullet points */}
              <ul className="space-y-3">
                {exp.points.map((point, idx) => (
                  <li key={idx} className={cls.point}>
                    <span className="w-2 h-2 rounded-full bg-[#7c83ff] mt-3" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {exp.tech.map((tech, idx) => (
                  <span key={idx} className={cls.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
