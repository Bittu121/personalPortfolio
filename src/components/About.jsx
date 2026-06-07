import { motion } from "framer-motion";

const CAPABILITIES = [
  {
    number: "01",
    title: "Frontend Development",
    stack: "React · Next.js · Tailwind CSS",
    desc: "Building responsive, scalable, and modern frontend applications with reusable component architecture.",
    accent: "#6366f1",
  },
  {
    number: "02",
    title: "Backend APIs",
    stack: "Node.js · Express.js · REST APIs",
    desc: "Developing secure REST APIs with authentication, validation, and production-ready backend architecture.",
    accent: "#8b5cf6",
  },
  {
    number: "03",
    title: "Database & OOPs",
    stack: "MongoDB · JavaScript · OOPs",
    desc: "Working with database design, clean code structure, object-oriented programming, and scalable application flow.",
    accent: "#06b6d4",
  },
];

// Styles — change a style here, it updates everywhere it's used
const cls = {
  section: "relative overflow-hidden bg-[#0a0a14] py-16 md:py-24 px-4 md:px-8",
  container: "max-w-6xl mx-auto relative",
  heading:
    "text-3xl md:text-5xl font-extrabold text-white tracking-[-0.03em] leading-[1.1] mb-5",
  subText: "text-base text-white/45 max-w-[520px] leading-[1.8]",
  cardList: "flex flex-col gap-1 mb-14",
  cardBase: "card flex items-start gap-4 md:gap-7 px-4 py-5 md:px-8 md:py-7",
  cardTitle: "text-[20px] font-bold text-white tracking-[-0.02em]",
  cardStack:
    "text-xs font-medium text-[#c7d2fe] bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-md px-2.5 py-1",
  cardDesc: "text-sm text-white/45 leading-[1.8] max-w-[520px]",
  strip:
    "flex items-center gap-5 flex-wrap px-5 py-5 md:px-8 md:py-7 rounded-2xl bg-[#6366f1]/[0.05] border border-[#6366f1]/15",
  stripName: "text-white font-bold text-lg mb-1",
  stripRole: "text-[#c7d2fe] text-sm font-medium mb-2",
  stripDesc: "text-sm text-white/45 leading-[1.7] max-w-[650px]",
  btnIn:
    "px-4 py-3 rounded-md border border-[#7c83ff] bg-white text-black font-semibold text-sm flex items-center gap-2 transition-all duration-300 hover:opacity-90",
  btnResume:
    "px-4 py-3 rounded-md border border-white/10 bg-[#0b0b14] text-white font-semibold text-sm flex items-center gap-2 transition-all duration-300 hover:border-white/20",
};

function About() {
  return (
    <section id="about" className={cls.section}>
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none line-grid" />

      {/* Ambient Glow */}
      <div
        className="orb bottom-[-10%] right-[-5%] w-[500px] h-[500px]"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 65%)",
        }}
      />

      <div className={cls.container}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-eyebrow mb-4">What I bring to your team</p>

          <h2 className={cls.heading}>
            Full-stack developer building scalable web apps.
          </h2>

          <p className={cls.subText}>
            I build scalable MERN applications with clean UI, REST APIs,
            responsive frontend architecture, and production-ready backend
            systems. Currently working as a{" "}
            <span className="text-[#e2e8f0] font-semibold">
              Software Developer
            </span>{" "}
            at{" "}
            <span className="text-[#e2e8f0] font-semibold">
              Vserv Infosystems Private Limited
            </span>
            .
          </p>
        </motion.div>

        {/* Capability Cards */}
        <div className={cls.cardList}>
          {CAPABILITIES.map(({ number, title, stack, desc, accent }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={cls.cardBase}
              style={{
                borderRadius:
                  i === 0
                    ? "18px 18px 6px 6px"
                    : i === CAPABILITIES.length - 1
                      ? "6px 6px 18px 18px"
                      : "6px",
                "--c": accent,
              }}
            >
              {/* Number badge */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-[14px] font-extrabold tracking-[0.05em] flex-shrink-0"
                style={{
                  background: `${accent}10`,
                  border: `1px solid ${accent}35`,
                  color: accent,
                }}
              >
                {number}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap mb-2.5">
                  <h3 className={cls.cardTitle}>{title}</h3>
                  <span className={cls.cardStack}>{stack}</span>
                </div>
                <p className={cls.cardDesc}>{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Summary Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cls.strip}
        >
          <div className="w-px h-12 bg-[#6366f1]/20 flex-shrink-0" />

          <div className="flex-1 min-w-[240px]">
            <h3 className={cls.stripName}>Bittu Kumar</h3>
            <p className={cls.stripRole}>
              MERN Stack Developer · Open to Full-Time Roles
            </p>
            <p className={cls.stripDesc}>
              Built real-world applications across dashboards, CRUD systems,
              food delivery platforms, and scalable MERN stack projects.
            </p>
          </div>

          <div className="flex gap-3 flex-wrap">
            <a
              href="https://www.linkedin.com/in/bittu-kumar143/"
              target="_blank"
              rel="noreferrer"
              className={cls.btnIn}
            >
              LinkedIn ↗
            </a>
            <a href="/Resume.pdf" download className={cls.btnResume}>
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
