import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { FiMaximize2 } from "react-icons/fi";
import { TbSitemap } from "react-icons/tb";
import { DIAGRAM_TABS } from "./projectData";

const fileNameFor = (title, tab) =>
  `${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}-${tab}`;

const ProjectArchitectureModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState("flow");
  const [zoomOpen, setZoomOpen] = useState(false);

  useEffect(() => {
    if (project) {
      setActiveTab("flow");
      setZoomOpen(false);
    }
  }, [project]);

  const activeImage = project?.architecture?.[activeTab] || null;

  return (
    <>
      <AnimatePresence>
        {project && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm grid place-items-center p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-4xl max-h-[85vh] overflow-y-auto thin-scrollbar bg-card border border-content/10 rounded-xl p-6 md:p-7 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-content/40 hover:text-content text-2xl z-10"
              >
                ×
              </button>

              <p className="text-xs uppercase tracking-[0.15em] text-[#7c83ff] font-bold mb-8">
                System Architecture
              </p>

              <div className="flex items-center justify-between gap-3 mb-5 flex-wrap">
                <div className="flex gap-2 flex-wrap">
                  {DIAGRAM_TABS.map(({ key, label }) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={
                        activeTab === key
                          ? "px-4 py-2 rounded-lg text-sm font-semibold bg-[#7c83ff]/15 border border-[#7c83ff]/40 text-[#a5b4fc] transition"
                          : "px-4 py-2 rounded-lg text-sm font-semibold bg-content/[0.03] border border-content/10 text-content/55 hover:text-content hover:border-content/20 transition"
                      }
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {activeImage && (
                  <a
                    href={activeImage}
                    download={fileNameFor(project.title, activeTab)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-invert text-invert-fg transition hover:opacity-90 whitespace-nowrap"
                  >
                    <HiDownload size={16} /> Download
                  </a>
                )}
              </div>

              <div className="rounded-xl border border-content/10 bg-card overflow-hidden">
                {activeImage ? (
                  <button
                    type="button"
                    onClick={() => setZoomOpen(true)}
                    className="relative block w-full cursor-zoom-in group"
                  >
                    <img
                      src={activeImage}
                      alt={`${project.title} ${activeTab} diagram`}
                      className="w-full h-auto block"
                    />
                    <span className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-black/70 border border-content/10 text-[11px] font-medium text-content/80 opacity-90 group-hover:opacity-100 transition-opacity">
                      <FiMaximize2 size={12} /> Click to zoom
                    </span>
                  </button>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center py-20 px-6">
                    <TbSitemap size={40} className="text-content/15 mb-4" />
                    <p className="text-content/60 font-semibold mb-1">
                      Diagram coming soon
                    </p>
                    <p className="text-content/35 text-sm max-w-sm">
                      The {DIAGRAM_TABS.find((t) => t.key === activeTab)?.label}{" "}
                      for this project will be added shortly.
                    </p>
                  </div>
                )}
              </div>

              {activeImage && (
                <p className="text-content/30 text-xs mt-3 text-center">
                  Click the diagram to zoom in, or use Download to save it.
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {zoomOpen && activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/95 grid place-items-center p-4 md:p-10"
            onClick={() => setZoomOpen(false)}
          >
            <button
              onClick={() => setZoomOpen(false)}
              aria-label="Close zoomed diagram"
              className="absolute top-5 right-5 flex items-center justify-center w-10 h-10 rounded-full bg-content/10 border border-content/15 text-content hover:bg-content/20 transition z-10"
            >
              ×
            </button>

            <motion.img
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={activeImage}
              alt={`${project?.title} ${activeTab} diagram, zoomed`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-content/40 text-xs">
              Click anywhere or press the × to close
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectArchitectureModal;
