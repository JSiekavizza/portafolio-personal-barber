import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter.jsx";

import Nickname from "../brand/Nickname.jsx";

const values = ["Honestidad", "Confianza", "Escucha activa"];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

const SobreMi = () => {
  return (
    <section id="sobre-mi" className="relative overflow-hidden bg-base px-8 py-28">
      <img
        src="/img/tools2.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-base via-base/50 to-base" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(10,10,12,0.4)_0%,rgba(10,10,12,0.92)_70%)]" />

      <div className="pointer-events-none absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-racing-yellow opacity-[0.05] blur-[100px]" />
      <Nickname />
      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="mb-5 flex items-center gap-2.5 text-sm font-medium text-gold before:h-px before:w-7 before:bg-gold before:content-['']"
          >
            Sobre mí
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="mb-6 font-display text-[32px] font-bold leading-tight text-ink sm:text-[42px]"
          >
            Un oficio de precisión, una relación de{" "}
            <span className="bg-gradient-to-r from-racing-yellow to-racing-yellow bg-clip-text text-transparent">
              confianza
            </span>
            .
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="mb-8 max-w-lg text-[15px] leading-relaxed text-ink-muted"
          >
            Con base en Orlando, Florida, mi trabajo parte de escuchar antes
            de cortar. Cortes clásicos y modernos, diseño de barba y afeitado
            tradicional con navaja — pero lo que de verdad marca la
            diferencia es la honestidad: si algo no te va a quedar bien, te
            lo digo antes de tocarte con la tijera.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="flex flex-wrap gap-3"
          >
            {values.map((v) => (
              <span
                key={v}
                className="rounded border border-ink/20 bg-ink/[0.06] px-4 py-2 text-[13px] font-medium text-ink backdrop-blur-md"
              >
                {v}
              </span>
            ))}
          </motion.div>
        </div>
        <div className="flex flex-col items-center">      
              
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="rounded-2xl border-2 border-racing-yellow bg-ink/[0.04] p-10 text-center backdrop-blur-md"
          >
          <div className="font-display text-6xl font-bold text-racing-yellow sm:text-7xl">
          <AnimatedCounter to={7} suffix="+" />
          </div>
            <p className="mt-3 text-sm text-ink-muted">
              años de experiencia en el oficio
            </p>
          </motion.div>
        </div>  
      </div>
    </section>
  );
};

export default SobreMi;