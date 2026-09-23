import { motion } from "framer-motion";
import AnimatedCounter from "../about/AnimatedCounter.jsx";

const stats = [
  { type: "static", value: "1 a 1", label: "Atención personalizada" },
  { type: "counter", to: 500, suffix: "+", label: "Clientes atendidos" }, // TODO: número real
  { type: "static", value: "5.0★", label: "Valoración de clientes" }, // TODO: rating real
];

const StatsBar = () => {
  return (
    <section className="relative border-y-2 border-black/80 bg-racing-yellow">
      <div className="mx-auto grid max-w-6xl grid-cols-3  sm:divide-x-2 sm:divide-black/15">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            className="flex flex-col items-center gap-1 px-4 py-10 text-center"
          >
            <span className="font-display text-3xl font-bold text-black sm:text-4xl">
              {s.type === "counter" ? (
                <AnimatedCounter to={s.to} suffix={s.suffix} />
              ) : (
                s.value
              )}
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wide text-black/70">
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;