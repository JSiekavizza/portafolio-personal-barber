const Hero = () => {
  return (
    <section className="relative flex max-h-screen items-center overflow-hidden px-8 py-32">
      <div className="mx-auto w-full max-w-6xl">
        
        <div className="max-w-xl">
          <p className="mb-5 flex items-center gap-2.5 text-sm font-medium text-gold before:h-px before:w-7 before:bg-gold before:content-['']">
            Barbería · Orlando / Florida
          </p>
          <h1 className="mb-6 font-display text-[42px] font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Precisión clásica,
            <br />
            {/*39FF6A*/}
            <span className="bg-gradient-to-r from-racing-yellow to-racing-yellow bg-clip-text text-transparent">
              actitud urbana.
            </span>
          </h1>
          <p className="mb-10 max-w-md text-lg text-ink-muted">
            Cortes de precisión, barba con carácter y una asesoría honesta —
            sin importar si vienes por un fade limpio o un afeitado a la
            antigua.
          </p>
          <div className="flex justify-between">
            
            <div className="flex items-center gap-7">
              <button href="#contacto" className="rounded-md 
                bg-racing-yellow transition-shadow shadow-[0_0_8px_rgba(247,183,21,0.6)] px-8 py-4 text-[15px] font-semibold text-black">
                Agendar mi cita
              </button>
            
              <a
                href="#servicios"
                className="border-b border-ink-muted/30 pb-1 text-[15px] text-ink-muted 
                transition-colors hover:border-ink hover:text-ink"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </div>
        <div className="absolute right-5 top-7 z-[3] flex flex-col 
        gap-[3px] rounded border border-ink/20 bg-ink/[0.08] px-3 py-2 
        shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_4px_16px_rgba(0,0,0,0.35)] 
        backdrop-blur-md backdrop-saturate-150 lg:right-20 lg:top-40 lg:bottom-auto
        ">
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-ink">
          <svg viewBox="0 0 24 16" className="h-[11px] w-4 flex-shrink-0 rounded-[1px]">
            <rect width="24" height="16" fill="#FCD116" />
            <rect y="8" width="24" height="4" fill="#003893" />
            <rect y="12" width="24" height="4" fill="#CE1126" />
          </svg>
          <span>Especialista en Corte Clásico</span>
        </div>
        <span className="pl-[22px] text-[10.5px] text-ink-muted">
          +7 años de experiencia
        </span>
      </div>

      </div>
    </section>
  );
};

export default Hero;
