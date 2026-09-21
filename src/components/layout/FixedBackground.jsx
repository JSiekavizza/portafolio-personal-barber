const FixedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* imagen base, mezclada en luminosity para que el morado la tome */}
      <img
        src="/img/eje.jpg"
        alt=""
        className="h-full w-full object-cover object-[center_20%] opacity-25 
        mix-blend-luminosity"
      />

      {/* negro sólido a la izquierda -> transparente a la derecha */}
      <div className="absolute inset-0 bg-gradient-to-r from-base from-[28%] via-base/50 via-[48%] to-transparent to-[78%]" />

      {/* resplandor morado neón mezclado sobre la imagen 
      <div className="absolute inset-0 
      bg-[radial-gradient(circle_at_78%_45%,#C13BFF_0%,transparent_55%)] 
      opacity-25 mix-blend-screen" /> */}

      {/* diagonal a negro en la esquina inferior, para que no quede "flotando" */}
      <div className="absolute inset-0 bg-[linear-gradient(200deg,transparent_55%,#0A0A0C_100%)]" />
    </div>
  );
};

export default FixedBackground;
