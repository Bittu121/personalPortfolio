import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSev9gvaoPUlBScVM9mknt2dTTCrXXsChhN0bJ4zCB0bHiAdbw/formResponse";

// Styles
const cls = {
  section:
    "relative overflow-hidden bg-[#05050a] py-24 px-4 md:px-8 border-t border-white/5",
  container: "max-w-6xl mx-auto relative z-10",
  heading:
    "text-3xl md:text-5xl font-extrabold text-white tracking-[-0.03em] leading-[1.1] mb-4",
  subText: "text-[15px] text-white/40 max-w-[520px] leading-[1.8]",
  infoCard: "card px-6 py-5 flex items-center gap-4",
  iconBox:
    "w-11 h-11 rounded-md bg-indigo-500/10 border border-indigo-400/10 flex items-center justify-center flex-shrink-0",
  infoLabel:
    "text-[11px] font-bold text-white/25 uppercase tracking-[0.12em] mb-1",
  infoValue: "text-[15px] font-medium text-[#e2e8f0]",
  infoEmail:
    "text-[15px] font-medium text-[#e2e8f0] hover:text-[#818cf8] transition-colors",
  socialBtn:
    "flex-1 h-[50px] rounded-md border border-white/[0.07] bg-white/[0.03] flex items-center justify-center gap-2 text-sm font-medium text-white/75 hover:border-indigo-400/15 hover:text-white transition-all duration-300",
  linkedInBtn:
    "flex-1 h-[50px] rounded-md bg-[#6366f1] flex items-center justify-center gap-2 text-sm font-semibold text-white hover:bg-[#7375ff] transition-all duration-300",
  noteBox:
    "px-5 py-4 rounded-md bg-indigo-500/[0.04] border border-indigo-400/[0.08]",
  noteText: "text-[13px] leading-[1.7] text-white/40",
  formCard: "card p-5 md:p-10 h-fit max-w-2xl",
  formTitle:
    "text-[22px] font-bold text-white tracking-[-0.03em] mb-6 leading-none",
  input:
    "w-full h-[54px] rounded-xl bg-white/[0.03] border border-white/[0.07] px-5 text-white text-base outline-none transition-all duration-300 focus:border-[#818cf8]/30",
  textarea:
    "w-full rounded-xl bg-white/[0.03] border border-white/[0.07] px-5 py-4 text-white text-base outline-none resize-none transition-all duration-300 focus:border-[#818cf8]/30",
  submitBtn:
    "h-[54px] rounded-xl bg-white text-black font-semibold text-base transition-all duration-300 hover:scale-[1.01] disabled:opacity-60",
};

function ContactUs() {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const body = new FormData();
    body.append("entry.2085734985", formData.name);
    body.append("entry.387459929", formData.message);

    try {
      await fetch(GOOGLE_FORM_URL, { method: "POST", mode: "no-cors", body });
      setFormData({ name: "", message: "" });
      toast.success("Thank you! Your response has been recorded.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" name="contact" className={cls.section}>
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none line-grid" />

      {/* Background Glow */}
      <div
        className="absolute top-[10%] right-[5%] w-[500px] h-[500px] blur-[120px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
        }}
      />

      <div className={cls.container}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-eyebrow mb-4">Get in touch</p>
          <h2 className={cls.heading}>Available for Full-Time SDE Roles</h2>
          <p className={cls.subText}>
            Open to software development opportunities, backend engineering,
            frontend development, and full-stack MERN roles.
          </p>
        </motion.div>

        <div
          className="grid contact-grid gap-6 items-start"
          style={{ gridTemplateColumns: "0.9fr 1.1fr" }}
        >
          {/* LEFT — Contact info */}
          <div className="flex flex-col gap-4">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className={cls.infoCard}
            >
              <div className={cls.iconBox}>
                <HiMail size={18} className="text-[#818cf8]" />
              </div>
              <div>
                <p className={cls.infoLabel}>Email</p>
                <a
                  href="mailto:bittukumar8713@gmail.com"
                  className={cls.infoEmail}
                >
                  bittukumar8713@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className={cls.infoCard}
            >
              <div className={cls.iconBox}>
                <HiLocationMarker size={18} className="text-[#818cf8]" />
              </div>
              <div>
                <p className={cls.infoLabel}>Location</p>
                <p className={cls.infoValue}>
                  India · Open to Remote & On-site
                </p>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="card px-6 py-5"
            >
              <p className={cls.infoLabel}>Connect</p>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://github.com/Bittu121"
                  target="_blank"
                  rel="noreferrer"
                  className={cls.socialBtn}
                >
                  <FaGithub size={15} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/bittu-kumar143/"
                  target="_blank"
                  rel="noreferrer"
                  className={cls.linkedInBtn}
                >
                  <FaLinkedinIn size={15} /> LinkedIn
                </a>
              </div>
            </motion.div>

            {/* Note */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className={cls.noteBox}
            >
              <p className={cls.noteText}>
                ⚡ Typically respond within{" "}
                <span className="text-[#818cf8] font-semibold">24 hours</span>.
                Open to SDE-1, frontend, backend, and MERN stack opportunities.
              </p>
            </motion.div>
          </div>

          {/* RIGHT — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cls.formCard}
          >
            <h3 className={cls.formTitle}>Tell me about your opportunity</h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="form-label mb-2 block">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={cls.input}
                />
              </div>

              <div>
                <label className="form-label mb-2 block">
                  Opportunity Details
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Role, company, expectations..."
                  className={cls.textarea}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={cls.submitBtn}
              >
                {loading ? "Sending..." : "Send Opportunity →"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default ContactUs;
