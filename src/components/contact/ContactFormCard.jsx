import { useState } from "react";
import { toast } from "react-toastify";
import FadeIn from "../FadeIn";
import { CONTACT_FORM_URL } from "./contactData";

const ContactFormCard = () => {
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
      await fetch(CONTACT_FORM_URL, { method: "POST", mode: "no-cors", body });
      setFormData({ name: "", message: "" });
      toast.success("Thank you! Your response has been recorded.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FadeIn
      x={20}
      delay={0.15}
      className="bg-card border border-content/[0.07] rounded-2xl p-6 md:p-9 h-full w-full max-w-xl mx-auto flex flex-col justify-center transition-all duration-300 hover:border-content/20"
    >
      <h3 className="text-[22px] font-bold text-content tracking-[-0.03em] mb-6 leading-none">
        Tell me about your opportunity
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-[11px] font-bold tracking-[0.1em] uppercase text-content/40 mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full h-[54px] rounded-xl bg-content/[0.03] border border-content/[0.07] px-5 text-content text-base outline-none transition-all duration-300 focus:border-[#818cf8]/30"
          />
        </div>

        <div>
          <label className="block text-[11px] font-bold tracking-[0.1em] uppercase text-content/40 mb-2">
            Opportunity Details
          </label>
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Role, company, expectations..."
            className="w-full rounded-xl bg-content/[0.03] border border-content/[0.07] px-5 py-4 text-content text-base outline-none resize-none transition-all duration-300 focus:border-[#818cf8]/30"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="h-[54px] rounded-xl bg-invert text-invert-fg font-semibold text-base transition-all duration-300 hover:scale-[1.01] disabled:opacity-60 flex items-center justify-center gap-2"
        >
          {loading && (
            <span className="w-4 h-4 rounded-full border-2 border-invert-fg/30 border-t-invert-fg animate-spin" />
          )}
          {loading ? "Sending..." : "Send Opportunity →"}
        </button>
      </form>
    </FadeIn>
  );
};

export default ContactFormCard;
