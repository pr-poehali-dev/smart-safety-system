export default function FloatingDeco() {
  const items = [
    { emoji: "🌸", x: "8%",  y: "12%", dur: 8,  delay: 0,   size: 22, fadeDur: 6,  fadeDelay: 0 },
    { emoji: "🌿", x: "88%", y: "18%", dur: 11, delay: 2,   size: 18, fadeDur: 8,  fadeDelay: 1 },
    { emoji: "🌸", x: "75%", y: "55%", dur: 9,  delay: 4,   size: 16, fadeDur: 7,  fadeDelay: 3 },
    { emoji: "🌿", x: "5%",  y: "60%", dur: 13, delay: 1,   size: 20, fadeDur: 9,  fadeDelay: 2 },
    { emoji: "🌸", x: "50%", y: "82%", dur: 10, delay: 3,   size: 14, fadeDur: 6,  fadeDelay: 4 },
    { emoji: "🌿", x: "92%", y: "78%", dur: 8,  delay: 5,   size: 18, fadeDur: 8,  fadeDelay: 1 },
    { emoji: "🌸", x: "20%", y: "40%", dur: 12, delay: 2.5, size: 13, fadeDur: 10, fadeDelay: 0 },
    { emoji: "🌿", x: "60%", y: "25%", dur: 9,  delay: 0.5, size: 16, fadeDur: 7,  fadeDelay: 3 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {items.map((item, i) => (
        <span
          key={i}
          className="absolute select-none"
          style={{
            left: item.x,
            top: item.y,
            fontSize: item.size,
            animation: `bgFloat ${item.dur}s ease-in-out ${item.delay}s infinite, bgFade ${item.fadeDur}s ease-in-out ${item.fadeDelay}s infinite`,
          }}
        >
          {item.emoji}
        </span>
      ))}
    </div>
  )
}
