import FadeIn from "../FadeIn";
import ContactInfoCard from "./ContactInfoCard";
import ContactFormCard from "./ContactFormCard";

const ContactUs = () => {
  return (
    <section
      id="contact"
      name="contact"
      className="relative overflow-hidden bg-page py-24 px-4 md:px-8 border-t border-content/5"
    >
      <div
        className="absolute top-[10%] right-[5%] w-[500px] h-[500px] blur-[120px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <p className="font-mono text-xs font-semibold tracking-[0.2em] text-[#818cf8] uppercase mb-4">
            06 — Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-content tracking-[-0.03em] leading-[1.05] mb-14">
            Let's build something.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <ContactInfoCard />
          <ContactFormCard />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
