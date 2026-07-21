import FadeIn from "../FadeIn";
import Timeline from "./Timeline";
import { WORK_EXPERIENCE, EDUCATION } from "./experienceData";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-page py-16 md:py-24 px-4 md:px-8 border-t border-content/5"
    >
      <div className="max-w-7xl mx-auto relative">
        <FadeIn className="mb-14">
          <p className="font-mono text-xs font-semibold tracking-[0.2em] text-[#818cf8] uppercase mb-4">
            03 — Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-content tracking-[-0.03em] leading-[1.05]">
            Where I've worked &amp; studied
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="font-mono text-xs font-semibold tracking-[0.18em] text-content/35 uppercase mb-8">
              Work Experience
            </p>
            <Timeline items={WORK_EXPERIENCE} />
          </div>

          <div>
            <p className="font-mono text-xs font-semibold tracking-[0.18em] text-content/35 uppercase mb-8">
              Education
            </p>
            <Timeline items={EDUCATION} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
