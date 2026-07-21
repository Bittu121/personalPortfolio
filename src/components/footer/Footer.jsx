import { motion } from "framer-motion";
import { FOOTER_SOCIALS } from "./footerData";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden bg-page border-t border-content/5 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 relative">
        <div className="border-content/5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] leading-none text-[#6B7280] font-normal tracking-normal">
            © 2026 Bittu Kumar. Designed & built with care.
          </p>
          <div className="flex items-center gap-4">
            {FOOTER_SOCIALS.map(({ icon: Icon, href, size }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-content/10 flex items-center justify-center text-content/60 hover:text-content hover:border-content/20 transition"
              >
                <Icon size={size} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
