const items = [
  { word: "CHES", top: "12%", side: "right", offset: "6%", size: "text-[130px]", rotate: "rotate-[-4deg]", color: "text-racing-yellow", visibility: "lg:hidden" },
  { word: "CHES", top: "12%", side: "right", offset: "8%", size: "text-[190px]", rotate: "rotate-[10deg]", color: "text-racing-yellow", visibility: "hidden lg:block" },
  { word: "FADE", top: "19%", side: "left", offset: "-14%", size: "text-9xl", rotate: "rotate-[90deg]", color: "text-racing-dark", visibility: "lg:hidden" },
  { word: "FADE", top: "19%", side: "left", offset: "-8%", size: "text-[190px]", rotate: "rotate-[90deg]", color: "text-racing-dark", visibility: "hidden lg:block" },
  { word: "FADE", top: "40%", side: "left", offset: "10%", size: "text-8xl", rotate: "rotate-[-12deg]", color: "text-racing-dark" },
  { word: "CHES", top: "55%", side: "left", offset: "-6%", size: "text-9xl", rotate: "rotate-[90deg]", color: "text-racing-yellow", visibility: "hidden lg:block" },
  { word: "CHES", top: "60%", side: "left", offset: "-16%", size: "text-9xl", rotate: "rotate-[90deg]", color: "text-racing-yellow", visibility: "lg:hidden" },
  { word: "FADE", top: "68%", side: "right", offset: "6%", size: "text-[150px]", rotate: "rotate-[-6deg]", color: "text-racing-dark" },
  { word: "CHES", top: "68%", side: "right", offset: "-6%", size: "text-9xl", rotate: "rotate-[-90deg]", color: "text-racing-yellow", visibility: "hidden lg:block" },
  { word: "CHES", top: "70%", side: "right", offset: "-14%", size: "text-9xl", rotate: "rotate-[-90deg]", color: "text-racing-yellow", visibility: "lg:hidden" },
  { word: "CHES", top: "90%", side: "left", offset: "8%", size: "text-[190px]", color: "text-racing-dark" },
  { word: "CHES", top: "90%", side: "left", offset: "9%", size: "text-[190px]", color: "text-racing-yellow" },

];

const NicknameMosaic = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
      {items.map((it, i) => (
        <span
          key={i}
className={`absolute whitespace-nowrap font-pirata opacity-[0.45] ${it.size} ${it.rotate} ${it.color} ${it.visibility ?? ""}`}          
style={{ top: it.top, [it.side]: it.offset }}
        >
          {it.word}
        </span>
      ))}
    </div>
  );
};

export default NicknameMosaic;