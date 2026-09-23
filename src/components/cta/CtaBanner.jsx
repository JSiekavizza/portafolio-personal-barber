import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const CtaBanner = () => {
  return (
    <section className="relative overflow-hidden border-y-2 border-racing-yellow bg-base px-8 py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-racing-yellow opacity-[0.06] blur-[120px]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
        className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center"
      >
        <h2 className="font-display text-[34px] font-bold leading-tight text-ink sm:text-5xl">
          No adivines qué corte te queda —{" "}
          <span className="text-transparent [-webkit-text-stroke:2.5px_theme(colors.racing.yellow)] [paint-order:stroke]">
            pregúntame
          </span>
          .
        </h2>
        <p className="max-w-md text-[15px] text-ink-muted">
          Una asesoría honesta antes de tocarte con la tijera — sin
          compromiso, sin presión.
        </p>
        
        <a  href="#contacto"
          className="mt-2 rounded-md bg-racing-yellow px-8 py-4 text-sm font-semibold text-black shadow-[0_0_20px_rgba(247,183,21,0.5)] transition-shadow hover:shadow-[0_0_30px_rgba(247,183,21,0.8)] sm:text-[15px]"
        >
          Agenda tu asesoría
        </a>
      </motion.div>
    </section>
  );
};

export default CtaBanner;