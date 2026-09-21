import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

const AnimatedCounter = ({ to, suffix = "", duration = 1.6, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!isInView) return;
    const node = ref.current;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        if (node) node.textContent = Math.floor(value) + suffix;
      },
    });
    return () => controls.stop();
  }, [isInView, to, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
};

export default AnimatedCounter;