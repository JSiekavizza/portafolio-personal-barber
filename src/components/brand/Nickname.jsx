const Nickname = ({ inline = false }) => {
  // inline: entra en el flujo normal y lo ubica el padre (ej. una columna).
  // por defecto: flota en la esquina, como en SobreMi.
  const position = inline
    ? ""
    : "absolute right-20 top-12 z-[3] lg:right-60 lg:top-3 lg:z-auto lg:py-12";

  return (
    <div
      className={`${position} rotate-[-4deg] select-none font-pirata text-6xl text-racing-yellow lg:text-8xl`}
    >
      CHES
    </div>
  );
};

export default Nickname;