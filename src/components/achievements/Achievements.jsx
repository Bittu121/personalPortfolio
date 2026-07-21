import FadeIn from "../FadeIn";
import { FiCheck } from "react-icons/fi";
import { ACHIEVEMENTS } from "./achievementsData";

const Achievements = () => {
  return (
    <section
      id="achievement"
      className="relative bg-page py-24 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn y={25}>
          <p className="font-mono uppercase tracking-[0.25em] text-xs font-semibold text-[#818CF8] mb-4">
            04 — Achievements
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-content tracking-[-0.03em] leading-[1.05]">
            Milestones &amp; recognition
          </h2>

          <p className="mt-4 text-sm md:text-[17px] text-content/55 max-w-2xl leading-relaxed">
            Competitions, research, and leadership that define the journey.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-12">
          {ACHIEVEMENTS.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeIn
                key={item.title}
                y={25}
                duration={0.45}
                delay={index * 0.08}
                className="rounded-lg border border-content/10 bg-content/[0.03] p-6 transition-all duration-300 hover:border-[#6366F1]/40 hover:-translate-y-1"
              >
                <div className="flex gap-4">
                  <div className="h-11 w-11 rounded-xl border border-[#6366F1]/30 bg-[#6366F1]/10 flex items-center justify-center text-[#818CF8] shrink-0">
                    <Icon size={21} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-base leading-snug font-bold text-content">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-content/55 leading-relaxed text-[13px]">
                      {item.description}
                    </p>

                    <div className="inline-flex items-center gap-2 rounded-full border border-[#3A5F35] bg-[#1A2B1E] px-2 py-1 mt-4">
                      <FiCheck className="text-[#7ED957]" size={15} />

                      <span className="font-mono uppercase tracking-[0.12em] text-[10px] font-bold text-[#7ED957]">
                        Unlocked
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
