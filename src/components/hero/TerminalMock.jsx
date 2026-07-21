import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_TABS, HERO_GIT_LOG, HERO_IMPACT_LOG } from "./heroData";

// Stagger container for terminal lines — replays each time the tab changes
const lineContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055 } },
};
const lineItem = {
  hidden: { opacity: 0, x: -6 },
  show: { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

const TerminalMock = () => {
  const [activeTab, setActiveTab] = useState("role");

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="max-w-full mx-auto md:mx-0"
    >
      <div className="w-full max-w-[540px] rounded-2xl border border-content/[0.09] bg-card shadow-[0_32px_64px_rgba(0,0,0,0.6),0_0_0_1px_rgba(99,102,241,0.08)] overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-content/[0.06] bg-content/[0.02]">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="flex-1 text-center text-xs text-content/30 font-mono">
            ~/bittu — zsh
          </span>
        </div>

        <div className="flex items-center gap-1 px-3 pt-2.5 border-b border-content/[0.06] bg-content/[0.015]">
          {HERO_TABS.map((tab) => {
            const active = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-3.5 py-2 text-xs font-mono rounded-t-lg transition-colors duration-200 cursor-pointer ${
                  active
                    ? "text-content bg-card"
                    : "text-content/35 hover:text-content/60"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${tab.dot} ${
                    active ? "opacity-100" : "opacity-40"
                  }`}
                />
                {tab.file}
                {active && (
                  <motion.span
                    layoutId="hero-tab-underline"
                    className="absolute left-0 right-0 -bottom-px h-[2px] bg-gradient-to-r from-[#818cf8] to-[#38bdf8] rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="p-6 font-mono text-[13px] leading-[1.9] overflow-x-auto min-w-[380px]">
          <AnimatePresence mode="wait">
            {activeTab === "role" ? (
              <motion.div
                key="role"
                variants={lineContainer}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0 }}
              >
                <motion.p
                  variants={lineItem}
                  className="text-content/40 whitespace-nowrap"
                >
                  <span className="text-[#818cf8]">{">"}</span> cat role.json
                </motion.p>
                <motion.p variants={lineItem} className="text-content/60">
                  {"{"}
                </motion.p>
                <motion.p
                  variants={lineItem}
                  className="pl-4 whitespace-nowrap"
                >
                  <span className="text-content/40 inline-block w-[10ch]">
                    "name":
                  </span>
                  <span className="text-emerald-300">"Bittu Kumar"</span>,
                </motion.p>
                <motion.p
                  variants={lineItem}
                  className="pl-4 whitespace-nowrap"
                >
                  <span className="text-content/40 inline-block w-[10ch]">
                    "role":
                  </span>
                  <span className="text-emerald-300">
                    "Full-Stack Developer"
                  </span>
                  ,
                </motion.p>
                <motion.p
                  variants={lineItem}
                  className="pl-4 whitespace-nowrap"
                >
                  <span className="text-content/40 inline-block w-[10ch]">
                    "company":
                  </span>
                  <span className="text-emerald-300">"Vserv Infosystems"</span>,
                </motion.p>
                <motion.p
                  variants={lineItem}
                  className="pl-4 whitespace-nowrap"
                >
                  <span className="text-content/40 inline-block w-[10ch]">
                    "stack":
                  </span>
                  <span className="text-[#818cf8]">
                    ["React", "Node.js", "MongoDB"]
                  </span>
                  ,
                </motion.p>
                <motion.p
                  variants={lineItem}
                  className="pl-4 whitespace-nowrap"
                >
                  <span className="text-content/40 inline-block w-[10ch]">
                    "status":
                  </span>
                  <span className="text-emerald-400">"open_to_work"</span>{" "}
                  <span className="text-emerald-400">✓</span>
                </motion.p>
                <motion.p variants={lineItem} className="text-content/60">
                  {"}"}
                </motion.p>

                <motion.p
                  variants={lineItem}
                  className="mt-4 text-content/40 whitespace-nowrap"
                >
                  <span className="text-[#818cf8]">{">"}</span> git log
                  --oneline -3
                </motion.p>
                {HERO_GIT_LOG.map(({ hash, msg }) => (
                  <motion.p
                    key={hash}
                    variants={lineItem}
                    className="whitespace-nowrap"
                  >
                    <span className="text-content/70">{hash}</span>{" "}
                    <span className="text-emerald-300/80">{msg}</span>
                  </motion.p>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="impact"
                variants={lineContainer}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0 }}
              >
                <motion.p
                  variants={lineItem}
                  className="text-content/40 whitespace-nowrap"
                >
                  <span className="text-[#818cf8]">{">"}</span> tail -f
                  impact.log
                </motion.p>
                {HERO_IMPACT_LOG.map(({ tag, text, color }) => (
                  <motion.p
                    key={text}
                    variants={lineItem}
                    className="whitespace-nowrap mt-1"
                  >
                    <span
                      className={`inline-block w-[6ch] text-[11px] font-bold ${color}`}
                    >
                      [{tag}]
                    </span>
                    <span className="text-content/70">{text}</span>
                  </motion.p>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <p className="mt-4 text-content/30 italic whitespace-nowrap">
            <span className="text-[#818cf8]">{">"}</span> # 5+ projects · 7+
            technologies · 1+ yr experience{" "}
            <span className="inline-block w-[7px] h-[13px] bg-content/30 align-middle animate-pulse" />
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TerminalMock;
