import { useState } from "react";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { TbSitemap } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

// import travelDeskFlow   from "../images/traveldesk-flow.png";
// import travelDeskER     from "../images/traveldesk-er.png";
// import travelDeskSchema from "../images/traveldesk-schema.png";
// import assetFlow        from "../images/asset-flow.png";
// import assetER          from "../images/asset-er.png";
// import assetSchema      from "../images/asset-schema.png";

const PROJECTS = [
  {
    id: "01",
    badge: "Full-Stack · MERN",
    badgeBg: "#6366f1",
    title: "Q Eats — Food Delivery Platform",
    desc: "A production-grade food ordering system built end-to-end — from a polished React storefront to a Node.js/MongoDB backend with full order management.",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    bullets: [
      "Real-time cart with session persistence & quantity controls",
      "JWT authentication, protected routes & role-based access",
      "Complete checkout flow with live order status tracking",
    ],
    demo: "https://fooddeliveryapp-frontend-zn5z.onrender.com",
    code: "https://github.com/Bittu121/FoodDeliveryApp/tree/main/client",
  },
  {
    id: "02",
    badge: "Dashboard · React",
    badgeBg: "#8b5cf6",
    title: "Q Eats Admin Panel",
    desc: "Real-time admin dashboard to manage food listings, view orders, and control restaurant operations with live API sync.",
    tech: ["React", "REST API", "Tailwind CSS"],
    bullets: [
      "Live order management with real-time status updates",
      "Food listing CRUD — add, edit, delete with image support",
      "Admin-only access with protected dashboard routes",
    ],
    demo: "https://fooddeliveryapp-admin-fm6s.onrender.com",
    code: "https://github.com/Bittu121/FoodDeliveryApp/tree/main/admin",
  },
  {
    id: "03",
    badge: "Dev Tool · Interactive",
    badgeBg: "#06b6d4",
    title: "Algorithm Visualizer",
    desc: "Interactive, step-by-step visualizer for sorting algorithms — great for learning and demoing CS fundamentals visually.",
    tech: ["React", "JavaScript", "CSS Animations"],
    bullets: [
      "Visualizes Bubble, Merge, Quick and Selection sort",
      "Speed controls — run slow to observe each comparison",
      "Smooth frame-by-frame CSS animations",
    ],
    demo: "https://lively-gnome-7de8ae.netlify.app",
    code: "https://github.com/Bittu121/AlgorithmVisualizer",
  },
  {
    id: "04",
    badge: "Full-Stack · REST API",
    badgeBg: "#10b981",
    title: "Full-Stack CRUD App",
    desc: "Demonstrates complete Create, Read, Update & Delete operations with a React frontend backed by a Node.js REST API and MongoDB.",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    bullets: [
      "Complete REST API with GET, POST, PUT, DELETE endpoints",
      "React frontend with live state sync on every mutation",
      "Form validation with user-friendly error feedback",
    ],
    demo: "https://crudapreeminent-daifuku-f68aa4.netlify.app",
    code: "https://github.com/Bittu121/client/tree/main/src/components",
  },
  {
    id: "05",
    badge: "Social App · MERN",
    badgeBg: "#f59e0b",
    title: "Buddy App",
    desc: "A social connection platform where users can discover and connect with people who share their interests and goals.",
    tech: ["React", "Node.js", "MongoDB"],
    bullets: [
      "User profiles with interest tags and smart matching",
      "Social connections — send, accept & manage requests",
      "Fully responsive across mobile and desktop devices",
    ],
    demo: "https://silly-scone-9e187b.netlify.app",
    code: "https://github.com/Bittu121/Buddy-App",
  },
  {
    id: "06",
    badge: "Flagship · Full-Stack",
    badgeBg: "#ec4899",
    title: "Travel Desk Management System",
    desc: "Your description...",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    bullets: ["Feature 1", "Feature 2", "Feature 3"],
    demo: "https://...",
    code: "https://...",
    architecture: {
      // flow: travelDeskFlow, // or null until ready
      // er: travelDeskER,
      // schema: travelDeskSchema,
    },
  },
  {
    id: "07",
    badge: "Flagship · Full-Stack",
    badgeBg: "#14b8a6",
    title: "Asset Management System",
    desc: "Your description...",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    bullets: ["Feature 1", "Feature 2", "Feature 3"],
    demo: "https://...",
    code: "https://...",
    architecture: {
      // flow:   assetFlow,
      // er:     assetER,
      // schema: assetSchema,
    },
  },
];

const DIAGRAM_TABS = [
  { key: "flow", label: "Flow Diagram" },
  { key: "er", label: "ER Diagram" },
  { key: "schema", label: "Schema" },
];

// Styles
const cls = {
  section: "relative overflow-hidden bg-[#05050a] py-16 md:py-24 px-4 md:px-6",
  container: "max-w-6xl mx-auto relative",
  heading:
    "text-3xl md:text-5xl font-extrabold text-white tracking-[-0.03em] leading-[1.1]",
  subText: "text-white/45 text-base mt-4 max-w-[620px] leading-8",
  countBadge:
    "px-4 py-2 rounded-lg border border-white/10 text-sm text-white/40",
  card: "bg-[#0d0d16] border border-white/10 rounded-2xl p-5 flex flex-col",
  techTag:
    "px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] text-xs text-white/75",
  btnFeature:
    "px-4 py-2 rounded-md border border-white/10 bg-[#11111b] text-white text-sm font-semibold transition hover:border-white/20",
  btnDemo:
    "px-4 py-2 rounded-md bg-white text-black text-sm font-semibold flex items-center justify-center gap-2 transition hover:opacity-90",
  btnCode:
    "px-4 py-2 rounded-md border border-white/10 bg-[#0b0b14] text-white text-sm font-semibold flex items-center justify-center gap-2 transition hover:border-white/20",
  // Highlighted full-width button — only on flagship projects
  btnArch:
    "mt-2 w-full px-4 py-2.5 rounded-md bg-[#7c83ff]/10 border border-[#7c83ff]/40 text-[#a5b4fc] text-sm font-semibold flex items-center justify-center gap-2 transition hover:bg-[#7c83ff]/20 hover:border-[#7c83ff]/60",
  // Diagram modal tabs
  tabActive:
    "px-4 py-2 rounded-lg text-sm font-semibold bg-[#7c83ff]/15 border border-[#7c83ff]/40 text-[#a5b4fc] transition",
  tabIdle:
    "px-4 py-2 rounded-lg text-sm font-semibold bg-white/[0.03] border border-white/10 text-white/55 hover:text-white hover:border-white/20 transition",
};

function ProjectCard({ project, onViewFeatures, onViewArchitecture, index }) {
  const { id, badge, badgeBg, title, desc, tech, demo, code, architecture } =
    project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className={cls.card}
    >
      {/* Badge + id */}
      <div className="flex items-center justify-between mb-4">
        <div
          className="px-3 py-1 rounded-lg text-xs font-semibold"
          style={{
            background: `${badgeBg}15`,
            color: badgeBg,
            border: `1px solid ${badgeBg}40`,
          }}
        >
          {badge}
        </div>
        <span className="text-white/10 font-bold text-xs">{id}</span>
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-white/45 leading-7 mb-4">{desc}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {tech.map((item) => (
          <span key={item} className={cls.techTag}>
            {item}
          </span>
        ))}
      </div>

      {/* Buttons — pushed to bottom so all cards align */}
      <div className="mt-auto">
        <div className="grid grid-cols-3 gap-2">
          <button onClick={onViewFeatures} className={cls.btnFeature}>
            Features
          </button>
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className={cls.btnDemo}
          >
            <HiExternalLink size={14} /> Demo
          </a>
          <a
            href={code}
            target="_blank"
            rel="noreferrer"
            className={cls.btnCode}
          >
            <FaGithub size={13} /> Code
          </a>
        </div>

        {/* Architecture button — only for flagship projects */}
        {architecture && (
          <button onClick={onViewArchitecture} className={cls.btnArch}>
            <TbSitemap size={16} /> View Architecture &amp; ER Diagrams
          </button>
        )}
      </div>
    </motion.div>
  );
}

function Project() {
  const [featuresOf, setFeaturesOf] = useState(null);
  const [archOf, setArchOf] = useState(null);
  const [activeTab, setActiveTab] = useState("flow");

  const openArchitecture = (project) => {
    setActiveTab("flow"); // always start on the flow tab
    setArchOf(project);
  };

  const activeImage = archOf?.architecture?.[activeTab] || null;

  return (
    <section id="portfolio" className={cls.section}>
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none line-grid" />

      <div className={cls.container}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-12 flex-wrap gap-4"
        >
          <div>
            <p className="section-eyebrow mb-3">Featured Projects</p>
            <h2 className={cls.heading}>Full-stack applications I've built</h2>
            <p className={cls.subText}>
              Projects focused on frontend interfaces, backend APIs,
              authentication, dashboards, CRUD operations, and responsive user
              experiences.
            </p>
          </div>
          <div className={cls.countBadge}>{PROJECTS.length} Projects</div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onViewFeatures={() => setFeaturesOf(project)}
              onViewArchitecture={() => openArchitecture(project)}
            />
          ))}
        </div>
      </div>

      {/* ── Features modal ── */}
      <AnimatePresence>
        {featuresOf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={() => setFeaturesOf(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-xl bg-[#0d0d16] border border-white/10 rounded-xl p-7 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setFeaturesOf(null)}
                className="absolute top-5 right-5 text-white/40 hover:text-white text-2xl"
              >
                ×
              </button>

              <p className="text-xs uppercase tracking-[0.15em] text-[#7c83ff] font-bold mb-6">
                Project Features
              </p>

              <div className="space-y-4">
                {featuresOf.bullets.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#7c83ff] mt-3" />
                    <p className="text-white/70 leading-7 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Architecture / diagram modal*/}
      <AnimatePresence>
        {archOf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4 py-8"
            onClick={() => setArchOf(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d0d16] border border-white/10 rounded-xl p-6 md:p-7 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setArchOf(null)}
                className="absolute top-5 right-5 text-white/40 hover:text-white text-2xl z-10"
              >
                ×
              </button>

              {/* Header */}
              <p className="text-xs uppercase tracking-[0.15em] text-[#7c83ff] font-bold mb-1">
                System Architecture
              </p>
              <h3 className="text-xl font-bold text-white mb-5 pr-8">
                {archOf.title}
              </h3>

              {/* Tabs */}
              <div className="flex gap-2 mb-5 flex-wrap">
                {DIAGRAM_TABS.map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={activeTab === key ? cls.tabActive : cls.tabIdle}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Diagram area */}
              <div className="rounded-xl border border-white/10 bg-[#08080f] overflow-hidden">
                {activeImage ? (
                  // Click image to open full-size in a new tab (diagrams need zoom)
                  <a
                    href={activeImage}
                    target="_blank"
                    rel="noreferrer"
                    title="Open full size"
                  >
                    <img
                      src={activeImage}
                      alt={`${archOf.title} ${activeTab} diagram`}
                      className="w-full h-auto block"
                    />
                  </a>
                ) : (
                  // Placeholder until the diagram image is added
                  <div className="flex flex-col items-center justify-center text-center py-20 px-6">
                    <TbSitemap size={40} className="text-white/15 mb-4" />
                    <p className="text-white/60 font-semibold mb-1">
                      Diagram coming soon
                    </p>
                    <p className="text-white/35 text-sm max-w-sm">
                      The {DIAGRAM_TABS.find((t) => t.key === activeTab)?.label}{" "}
                      for this project will be added shortly.
                    </p>
                  </div>
                )}
              </div>

              {activeImage && (
                <p className="text-white/30 text-xs mt-3 text-center">
                  Click the diagram to open it full size.
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Project;
