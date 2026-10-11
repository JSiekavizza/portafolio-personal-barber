// Banderas como SVG propio (no emoji): Windows no dibuja los emojis de
// banderas, mostraría "CO", "US", "BR" como letras. Las tres comparten
// la misma caja 24x16 para verse del mismo tamaño en el selector.

export const FlagCO = ({ className = "" }) => (
  <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
    <rect width="24" height="16" fill="#FCD116" />
    <rect y="8" width="24" height="4" fill="#003893" />
    <rect y="12" width="24" height="4" fill="#CE1126" />
  </svg>
);

// 13 franjas + recuadro azul con una cuadrícula de puntos que hace de estrellas
const stripeHeight = 16 / 13;
const cantonWidth = 9.6;
const cantonHeight = stripeHeight * 7;

const stars = [];
for (let row = 0; row < 9; row += 1) {
  const columns = row % 2 === 0 ? 6 : 5;
  for (let col = 0; col < columns; col += 1) {
    const x =
      row % 2 === 0
        ? (cantonWidth / 12) * (1 + 2 * col)
        : (cantonWidth / 12) * (2 + 2 * col);
    const y = (cantonHeight / 10) * (row + 1);
    stars.push({ x, y, key: `${row}-${col}` });
  }
}

export const FlagUS = ({ className = "" }) => (
  <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
    <rect width="24" height="16" fill="#FFFFFF" />
    {[0, 2, 4, 6, 8, 10, 12].map((i) => (
      <rect
        key={i}
        y={i * stripeHeight}
        width="24"
        height={stripeHeight}
        fill="#B22234"
      />
    ))}
    <rect width={cantonWidth} height={cantonHeight} fill="#3C3B6E" />
    {stars.map((s) => (
      <circle key={s.key} cx={s.x} cy={s.y} r="0.32" fill="#FFFFFF" />
    ))}
  </svg>
);

export const FlagBR = ({ className = "" }) => (
  <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
    <rect width="24" height="16" fill="#009C3B" />
    <polygon points="12,1.6 22.4,8 12,14.4 1.6,8" fill="#FFDF00" />
    <circle cx="12" cy="8" r="3.9" fill="#002776" />
    <path
      d="M8.2 7.2 Q12 5.9 15.8 9"
      stroke="#FFFFFF"
      strokeWidth="0.7"
      fill="none"
    />
  </svg>
);
