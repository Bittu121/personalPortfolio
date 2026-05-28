import React, { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSev9gvaoPUlBScVM9mknt2dTTCrXXsChhN0bJ4zCB0bHiAdbw/formResponse";

    const formBody = new FormData();

    formBody.append("entry.2085734985", formData.name);
    formBody.append("entry.387459929", formData.message);
    try {
      await fetch(googleFormURL, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      });

      setFormData({ name: "", message: "" });
      toast.success("Thank you! Your response has been recorded.");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      name="contact"
      className="bg-[#05050a] py-24 px-4 md:px-8 relative overflow-hidden border-t border-white/5"
    >
      {/* Background Glow */}
      <div
        className="absolute top-[10%] right-[5%] w-[500px] h-[500px] blur-[120px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-eyebrow mb-4">Get in touch</p>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-[-0.04em] leading-[1.05] mb-4">
            Available for Full-Time SDE Roles
          </h2>

          <p className="text-[15px] text-white/40 max-w-[520px] leading-[1.8]">
            Open to software development opportunities, backend engineering,
            frontend development, and full-stack MERN roles.
          </p>
        </motion.div>

        <div
          className="grid contact-grid gap-6 items-start"
          style={{ gridTemplateColumns: "0.9fr 1.1fr" }}
        >

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-4">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="card px-6 py-5 flex items-center gap-4"
            >
              <div className="w-11 h-11 rounded-md bg-indigo-500/10 border border-indigo-400/10 flex items-center justify-center flex-shrink-0">
                <HiMail size={18} className="text-[#818cf8]" />
              </div>

              <div>
                <p className="text-[11px] font-bold text-white/25 uppercase tracking-[0.12em] mb-1">
                  Email
                </p>

                <a
                  href="mailto:bittukumar8713@gmail.com"
                  className="text-[15px] font-medium text-[#e2e8f0] hover:text-[#818cf8] transition-colors"
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
              className="card px-6 py-5 flex items-center gap-4"
            >
              <div className="w-11 h-11 rounded-md bg-indigo-500/10 border border-indigo-400/10 flex items-center justify-center flex-shrink-0">
                <HiLocationMarker size={18} className="text-[#818cf8]" />
              </div>

              <div>
                <p className="text-[11px] font-bold text-white/25 uppercase tracking-[0.12em] mb-1">
                  Location
                </p>

                <p className="text-[15px] font-medium text-[#e2e8f0]">
                  India · Open to Remote & On-site
                </p>
              </div>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="card px-6 py-5"
            >
              <p className="text-[11px] font-bold text-white/25 uppercase tracking-[0.12em] mb-4">
                Connect
              </p>

              <div className="flex gap-3">
                <a
                  href="https://github.com/Bittu121"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex-1 h-[50px]
                    rounded-md
                    border border-white/[0.07]
                    bg-white/[0.03]
                    flex items-center justify-center gap-2
                    text-sm font-medium text-white/75
                    hover:border-indigo-400/15
                    hover:text-white
                    transition-all duration-300
                  "
                >
                  <FaGithub size={15} />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/bittu-kumar143/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex-1 h-[50px]
                    rounded-md
                    bg-[#6366f1]
                    flex items-center justify-center gap-2
                    text-sm font-semibold text-white
                    hover:bg-[#7375ff]
                    transition-all duration-300
                  "
                >
                  <FaLinkedinIn size={15} />
                  LinkedIn
                </a>
              </div>
            </motion.div>

            {/* Note */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="px-5 py-4 rounded-md bg-indigo-500/[0.04] border border-indigo-400/[0.08]"
            >
              <p className="text-[13px] leading-[1.7] text-white/40">
                ⚡ Typically respond within{" "}
                <span className="text-[#818cf8] font-semibold">24 hours</span>.
                Open to SDE-1, frontend, backend, and MERN stack opportunities.
              </p>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card p-5 md:p-10 h-fit max-w-2xl"
          >
            <h3 className="text-[22px] font-bold text-white tracking-[-0.03em] mb-6 leading-none">
              Tell me about your opportunity
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name */}
              <div>
                <label className="form-label mb-2 block">Name</label>

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="
                    w-full
                    h-[54px]
                    rounded-xl
                    bg-white/[0.03]
                    border border-white/[0.07]
                    px-5
                    text-white
                    text-base
                    outline-none
                    transition-all duration-300
                    focus:border-[#818cf8]/30
                  "
                />
              </div>

              {/* Opportunity */}
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
                  className="
                    w-full
                    rounded-xl
                    bg-white/[0.03]
                    border border-white/[0.07]
                    px-5
                    py-4
                    text-white
                    text-base
                    outline-none
                    resize-none
                    transition-all duration-300
                    focus:border-[#818cf8]/30
                  "
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="
                  h-[54px]
                  rounded-xl
                  bg-white
                  text-black
                  font-semibold
                  text-base
                  transition-all duration-300
                  hover:scale-[1.01]
                  disabled:opacity-60
                "
              >
                {loading ? "Sending..." : "Send Opportunity →"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
