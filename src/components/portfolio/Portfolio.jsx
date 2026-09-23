import { motion } from "framer-motion";

// TODO: reemplazar por fotos reales del trabajo de Checho.
// Destacados mezclados a propósito (no organizados por categoría) —
// esa organización ya vive en Servicios; aquí es solo prueba visual.
const highlights = [
  { id: 1, image: "https://picsum.photos/seed/checho-work-1/600/750" },
  { id: 2, image: "https://picsum.photos/seed/checho-work-2/600/750" },
  { id: 3, image: "https://picsum.photos/seed/checho-work-3/600/750" },
  { id: 4, image: "https://picsum.photos/seed/checho-work-4/600/750" },
  { id: 5, image: "https://picsum.photos/seed/checho-work-5/600/750" },
  { id: 6, image: "https://picsum.photos/seed/checho-work-6/600/750" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" },
  }),
};

const Portfolio = () => {
  return (
    <section id="portafolio" className="relative overflow-hidden px-8 py-28">
      {/* segunda imagen de fondo, propia de esta sección */}
      

      {/* overlay más liviano que Sobre mí: se ve más la foto */}
      <div className="absolute inset-0 bg-gradient-to-b from-base/60 via-base/20 to-base/40" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-4 flex items-center gap-2.5 text-sm font-medium text-gold before:h-px before:w-7 before:bg-gold before:content-['']">
              Portafolio
            </p>
            <h2 className="max-w-md font-display text-[32px] font-bold leading-tight text-ink drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] sm:text-[42px]">
              Una muestra del trabajo, no una lista de precios.
            </h2>
          </div>
          <p className="max-w-xs text-[15px] text-ink-muted drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            Una selección del oficio en distintos estilos.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
          {highlights.map(({ id, image }, i) => (
            <motion.div
              key={id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl 
               shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <img
                src={image}
                alt=""
                className="h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mt-12 flex justify-center"
        >
          
            <a href="#"
            className="rounded-md border-2 border-racing-yellow px-8 py-3 text-sm font-semibold text-racing-yellow transition-colors hover:bg-racing-yellow hover:text-black"
          >
            Ver portafolio completo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;