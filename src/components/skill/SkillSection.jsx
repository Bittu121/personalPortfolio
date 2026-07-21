import FadeIn from "../FadeIn";
import { SKILL_GROUPS } from "./skillData";

const SkillSection = () => {
  return (
    <section
      id="skill"
      className="relative overflow-hidden bg-page py-24 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto relative">
        <FadeIn className="mb-12 md:mb-16">
          <p className="font-mono text-xs font-semibold tracking-[0.2em] text-[#818cf8] uppercase mb-4">
            02 — Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-content tracking-[-0.03em] leading-[1.05] mb-5">
            Tech stack &amp; tools
          </h2>
          <p className="text-sm md:text-[17px] text-content/45 max-w-[520px] leading-[1.7]">
            Technologies I work with daily and tools I use to build production
            software.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {SKILL_GROUPS.map(({ title, icon: Icon, level, skills }, i) => (
            <FadeIn
              key={title}
              duration={0.4}
              delay={i * 0.1}
              className="rounded-xl border border-content/[0.07] bg-content/[0.02] shadow-[0_0_40px_rgba(99,102,241,0.06)] p-6 md:p-7 transition-all duration-300 hover:border-[#818cf8]/25 hover:shadow-[0_0_50px_rgba(99,102,241,0.14)]"
            >
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-[#818cf8]">
                    <Icon size={20} />
                  </span>
                  <h3 className="text-lg font-bold text-content tracking-[-0.01em]">
                    {title}
                  </h3>
                </div>
                <span
                  className={
                    level === "Expert"
                      ? "font-mono text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded-lg text-[#818cf8] bg-[#818cf8]/10 border border-[#818cf8]/30"
                      : "font-mono text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded-lg text-[#2dd4bf] bg-[#2dd4bf]/10 border border-[#2dd4bf]/30"
                  }
                >
                  {level}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200 cursor-default hover:shadow-[0_0_16px_rgba(129,140,248,0.35)] ${
                      idx === 0
                        ? "text-[#a5b4fc] bg-[#6366f1]/15 border-[#6366f1]/40 hover:border-[#818cf8]/70 hover:bg-[#6366f1]/25"
                        : "text-content/60 bg-content/[0.03] border-content/10 hover:border-[#818cf8]/50 hover:text-content/90 hover:bg-[#6366f1]/[0.08]"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
