import { motion, AnimatePresence } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const ProjectFeaturesModal = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-2xl max-h-[80vh] bg-card border border-content/10 rounded-xl relative flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-content/40 hover:text-content text-2xl z-10"
            >
              ×
            </button>

            <div className="p-7 pb-4 flex-shrink-0">
              <p className="text-xs uppercase tracking-[0.15em] text-[#818cf8] font-bold mb-1">
                Project Features
              </p>
              <h3 className="text-xl font-bold text-content pr-8">
                {project.title}
              </h3>
            </div>

            <ul className="flex flex-col gap-4 px-7 pb-7 overflow-y-auto thin-scrollbar">
              {project.bullets.map((item) => {
                const [label, ...rest] = item.split(" — ");
                const description = rest.join(" — ");

                return (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#818cf8]/15 border border-[#818cf8]/40 flex-shrink-0 mt-0.5">
                      <FiCheck size={12} className="text-[#818cf8]" />
                    </span>
                    <p className="text-content/75 leading-7 text-sm">
                      {description ? (
                        <>
                          <span className="text-content font-semibold">
                            {label}
                          </span>{" "}
                          — {description}
                        </>
                      ) : (
                        item
                      )}
                    </p>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectFeaturesModal;
