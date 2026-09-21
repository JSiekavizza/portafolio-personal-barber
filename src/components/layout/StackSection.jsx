import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const StackSection = ({ children, zIndex = 0 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.45]);

  return (
    <div ref={ref} className="sticky top-0" style={{ zIndex }}>
      <motion.div style={{ scale, opacity }}>{children}</motion.div>
    </div>
  );
};

export default StackSection;