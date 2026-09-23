const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 border-b border-racing-yellow/20 bg-base/60 
    backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-5 px-8">
        <a
          href="#"
          className="flex items-center gap-2.5 font-display text-5xl font-bold text-racing-yellow
           font-pirata"
        >
          
          Chess.
        </a>

        <div className="ml-auto hidden gap-9 text-[15px] text-ink-muted md:flex">
          <a href="#servicios" className="transition-colors hover:text-ink">
            Servicios
          </a>
          <a href="#sobre-mi" className="transition-colors hover:text-ink">
            Sobre mí
          </a>
          <a href="#contacto" className="transition-colors hover:text-ink">
            Contacto
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 text-sm text-ink-muted lg:flex">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-4 w-4"
            >
              <path d="M3 5c0-1 1-2 2-2h2l2 5-2 2c1 3 3 5 6 6l2-2 5 2v2c0 1-1 2-2 2C9 20 3 14 3 5z" />
            </svg>
            <span>+57 300 000 0000</span>
          </div>
          <a
            href="#contacto"
            className="whitespace-nowrap rounded-full border-2 border-racing-yellow 
            bg-black px-5 py-2.5 text-sm font-semibold text-ink 
             transition-shadow 
            hover:shadow-[0_0_26px_rgba(247,183,21,0.6)]"
          >
            Asesoría
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
