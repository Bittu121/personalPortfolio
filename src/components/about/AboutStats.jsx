import FadeIn from "../FadeIn";
import { ABOUT_STATS } from "./aboutData";

const AboutStats = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mt-3">
      {ABOUT_STATS.map(({ value, label }, i) => (
        <FadeIn
          key={label}
          y={15}
          duration={0.4}
          delay={0.15 + i * 0.08}
          className="rounded-2xl border border-content/[0.07] bg-content/[0.02] px-5 py-6 text-center transition-all duration-300 hover:border-[#818cf8]/30 hover:bg-[#818cf8]/[0.04]"
        >
          <div className="text-3xl md:text-[34px] font-extrabold text-[#818cf8] leading-none">
            {value}
          </div>
          <div className="font-mono text-[11px] md:text-xs text-content/40 mt-2 tracking-[0.03em]">
            {label}
          </div>
          <div className="w-8 h-[2px] bg-gradient-to-r from-[#6366f1] to-[#818cf8] rounded-full mx-auto mt-3" />
        </FadeIn>
      ))}
    </div>
  );
};

export default AboutStats;
