import { motion } from "framer-motion";
import { IoSearch } from "react-icons/io5";
import { LuCommand } from "react-icons/lu";
import { FiExternalLink } from "react-icons/fi";

// The ⌘K search / command modal opened from the Navbar.
// It shows a search box + a list of commands (go to section, download
// resume, copy email, etc.) that the user can click or navigate with
// the arrow keys.
const CommandPalette = ({
  isOpen,
  onClose,
  searchQuery,
  onSearchQueryChange,
  commandResults,
  activeCommandIndex,
  setActiveCommandIndex,
  searchInputRef,
  onKeyDown,
  runCommand,
  toastMessage,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15 }}
      onMouseDown={onClose}
      className="fixed inset-0 z-[9999] flex items-start justify-center bg-black/70 backdrop-blur-md px-4 pt-[11vh]"
    >
      <motion.div
        initial={{ opacity: 0, y: -14, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.2 }}
        onMouseDown={(e) => e.stopPropagation()}
        onKeyDown={onKeyDown}
        className="relative w-full max-w-2xl rounded-2xl border border-content/10 bg-card/95 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden"
      >
        <div className="flex items-center gap-3 px-5 py-4 border-b border-content/[0.06]">
          <IoSearch size={19} className="text-content/40 flex-shrink-0" />
          <input
            ref={searchInputRef}
            value={searchQuery}
            onChange={(e) => onSearchQueryChange(e.target.value)}
            placeholder="Search commands, sections, and actions…"
            className="flex-1 bg-transparent text-content text-[17px] placeholder:text-content/30 outline-none"
          />
          <kbd className="text-[11px] font-medium text-content/40 border border-content/10 rounded-md px-2 py-1 bg-content/[0.03]">
            esc
          </kbd>
        </div>

        {/* Results list */}
        <div className="max-h-[54vh] overflow-y-auto py-2 thin-scrollbar">
          {commandResults.length === 0 && (
            <div className="px-5 py-12 text-center">
              <p className="text-content/70 text-sm font-medium">
                No results for “{searchQuery}”
              </p>
              <p className="text-content/35 text-xs mt-1.5">
                Try “projects”, “email”, or “resume”.
              </p>
            </div>
          )}

          {commandResults.map((command, index) => {
            const CommandIcon = command.icon;
            const isActive = index === activeCommandIndex;

            return (
              <div className="px-2" key={command.key}>
                <button
                  type="button"
                  onMouseEnter={() => setActiveCommandIndex(index)}
                  onClick={() => runCommand(command)}
                  className={`w-full flex items-center gap-3.5 pl-4 pr-3 py-2.5 rounded-xl text-left transition-all duration-150 ${
                    isActive ? "bg-content/[0.055]" : "hover:bg-content/[0.025]"
                  }`}
                >
                  <span
                    className={`flex items-center justify-center w-9 h-9 rounded-xl border flex-shrink-0 ${
                      isActive
                        ? "border-[#818cf8]/40 bg-[#6366f1]/15 text-[#a5b4fc]"
                        : "border-content/10 bg-content/[0.03] text-content/50"
                    }`}
                  >
                    <CommandIcon size={17} />
                  </span>

                  <span className="flex-1 min-w-0">
                    <span
                      className={`block text-[15px] font-medium truncate ${
                        isActive ? "text-content" : "text-content/85"
                      }`}
                    >
                      {command.label}
                    </span>
                    <span className="block text-[12.5px] text-content/35 truncate">
                      {command.hint}
                    </span>
                  </span>

                  {command.external && (
                    <FiExternalLink
                      size={14}
                      className="text-content/25 flex-shrink-0"
                    />
                  )}
                </button>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between px-5 py-3 border-t border-content/[0.06]">
          <div className="flex items-center gap-4 text-[11px] text-content/35">
            <span className="flex items-center gap-1.5">
              <kbd className="border border-content/10 rounded px-1.5 py-0.5 bg-content/[0.03]">
                ↑
              </kbd>
              <kbd className="border border-content/10 rounded px-1.5 py-0.5 bg-content/[0.03]">
                ↓
              </kbd>
              navigate
            </span>
            <span className="flex items-center gap-1.5">
              <kbd className="border border-content/10 rounded px-1.5 py-0.5 bg-content/[0.03]">
                ↵
              </kbd>
              select
            </span>
          </div>

          {toastMessage ? (
            <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {toastMessage}
            </span>
          ) : (
            <span className="flex items-center gap-1.5 text-[11px] font-semibold text-content/30">
              <LuCommand size={12} />
              Bittu Kumar
            </span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CommandPalette;
