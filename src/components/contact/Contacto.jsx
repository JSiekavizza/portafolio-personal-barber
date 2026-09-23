import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaLocationDot } from "react-icons/fa6";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const Contacto = () => {
  return (
    <section id="contacto" className="relative overflow-hidden px-8 py-28">

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        <motion.p
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="flex items-center gap-2.5 text-sm font-medium text-gold before:h-px before:w-7 before:bg-gold before:content-['']"
        >
          Contacto
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ink-muted"
        >
          <span className="flex items-center gap-2">
            <FaLocationDot className="text-racing-yellow" />
            Orlando, Florida
          </span>
          
            <a href="https://instagram.com/TODO"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-ink"
          >
            <FaInstagram className="text-racing-yellow" />
            @TODO
          </a>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-24 flex max-w-6xl flex-col items-center gap-3 border-t border-ink/10 pt-8 text-center text-xs text-ink-muted sm:flex-row sm:justify-between sm:text-left">
        <span>© {new Date().getFullYear()} Sergio H. — Barbero</span>
        <span>Diseño y desarrollo: Focus Digital</span>
      </div>
    </section>
  );
};

export default Contacto;