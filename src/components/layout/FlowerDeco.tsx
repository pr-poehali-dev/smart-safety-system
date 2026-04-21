export default function FlowerDeco({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={`absolute pointer-events-none select-none ${className}`} style={style} width="80" height="80" viewBox="0 0 80 80" fill="none">
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <ellipse
          key={i}
          cx={40 + 16 * Math.cos((deg * Math.PI) / 180)}
          cy={40 + 16 * Math.sin((deg * Math.PI) / 180)}
          rx="10" ry="6"
          fill={i % 2 === 0 ? "#E88AAE" : "#57a639"}
          opacity="0.45"
          transform={`rotate(${deg}, ${40 + 16 * Math.cos((deg * Math.PI) / 180)}, ${40 + 16 * Math.sin((deg * Math.PI) / 180)})`}
        />
      ))}
      <circle cx="40" cy="40" r="7" fill="#fdd9b5" />
    </svg>
  )
}
