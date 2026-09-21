import { motion } from "framer-motion";
import { GiScissors, GiBeard, GiRazorBlade } from "react-icons/gi";

const services = [
  {
    icon: GiScissors,
    label: "Corte",
    // TODO: reemplazar por foto real de Checho cortando
    image: "/img/classic.jpg",
  },
  {
    icon: GiBeard,
    label: "Diseño de barba",
    // TODO: reemplazar por foto real
    image: "/img/senior.jpg",
  },
  {
    icon: GiRazorBlade,
    label: "Afeitado tradicional",
    // TODO: reemplazar por foto real
    image: "/img/relax.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const Services = () => {
  return (
    <section id="servicios" className="relative px-8 mb-12 ">
      <div className="mx-auto max-w-6xl">
        

        {/* 2 columnas en móvil, 3 en pantallas grandes */}
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-6">
          {services.map(({ icon: Icon, label, image }, i) => (
            <motion.div
              key={label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl 
              border-2 border-racing-yellow shadow-[0_10px_40px_rgba(0,0,0,0.5)] 
              transition-shadow duration-300 "
            >
              <img
                src={image}
                alt={label}
                className="h-full w-full object-cover grayscale transition-transform 
                duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base via-base/20 to-transparent" />
              <div className="absolute inset-0 opacity-0  
              transition-opacity duration-300 group-hover:opacity-100" />
              <div className="transition-shadow hover:shadow-[0_0_26px_rgba(247,183,21,0.6)] absolute inset-0 bg-gradient-to-t from-base via-base/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 p-5 
              text-center">
                <Icon className="text-xl text-racing-yellow" />
                <span className="font-display text-sm font-semibold lg:text-ink sm:text-base">
                  {label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
