import FadeIn from "../FadeIn";
import ProfileCard from "./ProfileCard";
import AboutBio from "./AboutBio";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-page py-16 md:py-24 px-4 md:px-8"
    >
      <div
        className="absolute rounded-full pointer-events-none blur-[60px] bottom-[-10%] right-[-5%] w-[500px] h-[500px]"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <FadeIn className="mb-12 md:mb-16">
          <p className="font-mono text-xs font-semibold tracking-[0.2em] text-[#818cf8] uppercase mb-4">
            01 — About
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-content tracking-[-0.03em] leading-[1.05]">
            The person behind the code
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,340px)_1fr] gap-10 md:gap-16 items-start">
          <ProfileCard />
          <AboutBio />
        </div>
      </div>
    </section>
  );
};

export default About;
