import React, { useState } from "react";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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
];

function ProjectCard({ id, badge, badgeBg, title, desc, tech, bullets, demo, code, onViewFeatures, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="bg-[#0d0d16] border border-white/10 rounded-2xl p-5 flex flex-col"
      style={{ borderColor: "rgba(255,255,255,0.08)" }}
    >
      {/* Top */}
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

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

      {/* Description */}
      <p className="text-sm text-white/45 leading-7 mb-4">{desc}</p>

      {/* Tech */}
      <div className="flex flex-wrap gap-2 mb-5">
        {tech.map((item) => (
          <span
            key={item}
            className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] text-xs text-white/75"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-3 gap-2 mt-auto">
        <button
          onClick={onViewFeatures}
          className="px-4 py-2 rounded-md border border-white/10 bg-[#11111b] text-white text-sm font-semibold transition hover:border-white/20"
        >
          Features
        </button>

        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-md bg-white text-black text-sm font-semibold flex items-center justify-center gap-2 transition hover:opacity-90"
        >
          <HiExternalLink size={14} />
          Demo
        </a>

        <a
          href={code}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-md border border-white/10 bg-[#0b0b14] text-white text-sm font-semibold flex items-center justify-center gap-2 transition hover:border-white/20"
        >
          <FaGithub size={13} />
          Code
        </a>
      </div>
    </motion.div>
  );
}

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="portfolio"
      className="bg-[#05050a] py-16 md:py-24 px-4 md:px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-12 flex-wrap gap-4"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#7c83ff] font-semibold mb-3">
              Featured Projects
            </p>

            <h2 className="text-3xl md:text-5xl font-black text-white tracking-[-0.04em]">
              Full-stack applications I've built
            </h2>

            <p className="text-white/45 text-base mt-4 max-w-[620px] leading-8">
              Projects focused on frontend interfaces, backend APIs,
              authentication, dashboards, CRUD operations, and responsive user
              experiences.
            </p>
          </div>

          <div className="px-4 py-2 rounded-lg border border-white/10 text-sm text-white/40">
            {PROJECTS.length} Projects
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={i}
              onViewFeatures={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-xl bg-[#0d0d16] border border-white/10 rounded-xl p-7 relative"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 text-white/40 hover:text-white text-2xl"
              >
                ×
              </button>

              {/* Title */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.15em] text-[#7c83ff] font-bold mb-3">
                  Project Features
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {selectedProject.bullets.map((item) => (
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
    </section>
  );
}
