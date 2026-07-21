import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-page overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(rgba(99,102,241,0.18)_1px,transparent_1px)] bg-[length:30px_30px]"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, black 30%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      <div
        className="absolute w-[340px] h-[340px] rounded-full pointer-events-none blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)",
        }}
      />

      <div className="relative flex flex-col items-center gap-4">
        <div className="relative w-14 h-14 flex items-center justify-center">
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-content/10 border-t-[#818cf8] border-r-[#6366f1]"
          />
          <span className="flex items-center justify-center w-9 h-9 rounded-lg border border-content/10 bg-content/5 text-content font-bold text-sm tracking-[-0.02em]">
            BK
          </span>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-xs text-content/40">
          <span>Loading portfolio</span>
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-1 h-1 rounded-full bg-[#818cf8]"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Loading;
