import { motion } from "framer-motion";

// Fades and slides content in once it scrolls into view.
// Every section was repeating this same initial/whileInView/transition
// block, so it's pulled out here and reused instead.
const FadeIn = ({
  children,
  delay = 0,
  duration = 0.5,
  y = 20,
  x = 0,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
