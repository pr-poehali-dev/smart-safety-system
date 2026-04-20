const artPlaceholders = [
  { id: 1, title: "Скетч персонажа", emoji: "🎨" },
  { id: 2, title: "Цифровой арт", emoji: "✨" },
  { id: 3, title: "Фанарт", emoji: "🌸" },
  { id: 4, title: "Набросок", emoji: "🖊️" },
  { id: 5, title: "Иллюстрация", emoji: "🎀" },
  { id: 6, title: "Концепт", emoji: "🌙" },
]

const projects = [
  { title: "Комикс про Десскич", desc: "История моей козочки-персонажа в мире фэнтези", emoji: "📖", status: "В процессе" },
  { title: "Арт-серия «Сны»", desc: "Серия иллюстраций в пастельных тонах о снах и мечтах", emoji: "💭", status: "Планируется" },
  { title: "Стикерпак", desc: "Набор стикеров с Десскич для Telegram", emoji: "🐐", status: "Планируется" },
]

function Petals() {
  const petals = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    left: `${(i * 7.3) % 100}%`,
    size: 10 + (i % 5) * 3,
    duration: 7 + (i % 4) * 2,
    delay: (i * 1.1) % 9,
    type: i % 3 === 0 ? "🌸" : i % 3 === 1 ? "🍃" : "✿",
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map(p => (
        <div
          key={p.id}
          className="absolute animate-fall select-none"
          style={{
            left: p.left,
            top: "-40px",
            fontSize: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: 0,
          }}
        >
          {p.type}
        </div>
      ))}
    </div>
  )
}

function FlowerDeco({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={`absolute pointer-events-none select-none ${className}`} style={style} width="80" height="80" viewBox="0 0 80 80" fill="none">
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <ellipse
          key={i}
          cx={40 + 16 * Math.cos((deg * Math.PI) / 180)}
          cy={40 + 16 * Math.sin((deg * Math.PI) / 180)}
          rx="10" ry="6"
          fill={i % 2 === 0 ? "#f9b8cc" : "#b8e8b0"}
          opacity="0.75"
          transform={`rotate(${deg}, ${40 + 16 * Math.cos((deg * Math.PI) / 180)}, ${40 + 16 * Math.sin((deg * Math.PI) / 180)})`}
        />
      ))}
      <circle cx="40" cy="40" r="7" fill="#fdd9b5" />
    </svg>
  )
}

function LeafDeco({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={`absolute pointer-events-none select-none ${className}`} style={style} width="60" height="60" viewBox="0 0 60 60" fill="none">
      <ellipse cx="30" cy="30" rx="22" ry="12" fill="#a8dba8" opacity="0.5" transform="rotate(-30 30 30)" />
      <ellipse cx="30" cy="30" rx="22" ry="12" fill="#c8f0c0" opacity="0.4" transform="rotate(30 30 30)" />
      <ellipse cx="30" cy="30" rx="10" ry="5" fill="#80cc80" opacity="0.5" />
    </svg>
  )
}

export default function Index() {
  return (
    <div className="min-h-screen relative overflow-x-hidden"
      style={{ background: "linear-gradient(160deg, #fff0f5 0%, #f5fff0 50%, #fff8f0 100%)" }}>

      <Petals />

      {/* Фоновые декоры */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {["🌸", "🌿", "🍀", "🌺", "🌱", "✿"].map((s, i) => (
          <span key={i} className="absolute animate-sparkle select-none"
            style={{ left: `${8 + i * 15}%`, top: `${10 + (i % 3) * 25}%`, fontSize: `${14 + (i % 3) * 6}px`, animationDelay: `${i * 0.4}s`, opacity: 0.2 }}>
            {s}
          </span>
        ))}
        {["🌸", "🍃", "🌼", "🌿"].map((s, i) => (
          <span key={`r${i}`} className="absolute animate-sway select-none"
            style={{ right: `${5 + i * 22}%`, top: `${15 + i * 18}%`, fontSize: `${12 + i * 5}px`, animationDelay: `${i * 0.6 + 0.3}s`, opacity: 0.18 }}>
            {s}
          </span>
        ))}
      </div>

      {/* Навигация */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b"
        style={{ background: "rgba(255,240,245,0.8)", borderColor: "#f9c0d0" }}>
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="font-display text-xl" style={{ color: "#e07090" }}>nastya ✿</span>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-bold" style={{ color: "#c06080" }}>
            <a href="#about" className="hover:text-pink-400 transition-colors">Обо мне</a>
            <a href="#projects" className="hover:text-pink-400 transition-colors">Проекты</a>
            <a href="#gallery" className="hover:text-pink-400 transition-colors">Галерея</a>
            <a href="#character" className="hover:text-pink-400 transition-colors">Десскич</a>
          </nav>
        </div>
      </header>

      {/* Герой */}
      <section id="about" className="relative max-w-4xl mx-auto px-6 pt-16 pb-10 text-center z-10">
        <FlowerDeco className="top-4 left-0 w-20 h-20 animate-float-slow opacity-60" />
        <FlowerDeco className="top-4 right-0 w-16 h-16 animate-float opacity-50" style={{ animationDelay: "1s" }} />
        <LeafDeco className="top-16 left-12 animate-sway opacity-50" />
        <LeafDeco className="top-16 right-12 animate-sway opacity-50" style={{ animationDelay: "1.5s" }} />

        {/* Аватар */}
        <div className="animate-float inline-block mb-5 relative">
          <div className="w-36 h-36 rounded-full mx-auto overflow-hidden shadow-xl border-4"
            style={{ borderColor: "#f9b8cc", background: "#fff0f5" }}>
            <img
              src="https://cdn.poehali.dev/projects/8017feb0-4ae7-4a46-86a5-671cb07a895e/bucket/9ff9fb79-4fa0-4a3a-8012-0a6441f1790d.png"
              alt="Десскич"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-xl animate-sparkle">🌸</span>
          <span className="absolute -bottom-1 -left-3 text-lg animate-sparkle" style={{ animationDelay: "0.6s" }}>🌿</span>
          <span className="absolute -bottom-1 -right-3 text-lg animate-sparkle" style={{ animationDelay: "1.2s" }}>🌸</span>
        </div>

        <h1 className="font-display text-5xl md:text-6xl mb-2" style={{ color: "#e07090" }}>Настя</h1>
        <p className="text-sm mb-4 font-semibold tracking-wider uppercase" style={{ color: "#b8a0a8" }}>
          Ностя · Анастасия · 22.02.2012
        </p>
        <p className="text-lg max-w-xl mx-auto leading-relaxed mb-8" style={{ color: "#907080" }}>
          Привет! Мне 14 лет, я творческая личность 🌸<br />
          Рисую, придумываю персонажей и создаю целые миры в своей голове.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {["🎨 Иллюстратор", "✨ Выдумщица", "🐐 Автор Десскич", "🌿 Мечтательница"].map(tag => (
            <span key={tag} className="px-4 py-1.5 rounded-full text-sm font-bold text-white shadow-sm"
              style={{ background: "linear-gradient(90deg, #f0a0c0, #90d880)" }}>
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Биография */}
      <section className="relative max-w-4xl mx-auto px-6 py-10 z-10">
        <div className="rounded-3xl p-8 shadow-sm relative overflow-hidden"
          style={{ background: "rgba(255,255,255,0.8)", border: "1.5px solid #f9c8d8" }}>
          <FlowerDeco className="top-2 right-4 opacity-30 w-14 h-14" />
          <LeafDeco className="bottom-2 left-4 opacity-25 w-12 h-12" />
          <h2 className="font-display text-3xl mb-6 text-center" style={{ color: "#e07090" }}>✿ Моя история</h2>
          <div className="space-y-4 leading-relaxed text-[15px]" style={{ color: "#907080" }}>
            <p>Рисовать я начала давно — сначала это были простые каракули в тетрадях, потом персонажи из любимых аниме, а потом появились и свои собственные герои.</p>
            <p>Меня вдохновляют пастельные цвета, фэнтезийные миры, аниме и всё милое. Больше всего люблю придумывать образы и истории к ним — каждый персонаж для меня живой!</p>
            <p>Моя самая любимая работа — это, конечно, <strong style={{ color: "#e07090" }}>Десскич</strong>. Это козочка-персонаж, которую я придумала и постоянно развиваю. Она добрая, немного сонная и очень милая 🐐</p>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            {[
              { label: "Возраст", value: "14 лет", emoji: "🎂" },
              { label: "Хобби", value: "Рисование", emoji: "🎨" },
              { label: "Персонаж", value: "Десскич", emoji: "🐐" },
            ].map(item => (
              <div key={item.label} className="rounded-2xl p-4"
                style={{ background: "linear-gradient(135deg, #fce8f0, #e8f8e0)" }}>
                <div className="text-2xl mb-1">{item.emoji}</div>
                <div className="font-bold" style={{ color: "#907080" }}>{item.value}</div>
                <div className="text-xs" style={{ color: "#b8a8b0" }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Будущие проекты */}
      <section id="projects" className="relative max-w-4xl mx-auto px-6 py-10 z-10">
        <h2 className="font-display text-3xl mb-8 text-center" style={{ color: "#e07090" }}>✿ Будущие проекты</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((p, idx) => (
            <div key={p.title} className="rounded-3xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all relative overflow-hidden"
              style={{ background: "rgba(255,255,255,0.85)", border: "1.5px solid #f0d0e0" }}>
              {idx === 0 && <FlowerDeco className="top-1 right-1 w-10 h-10 opacity-25" />}
              {idx === 1 && <LeafDeco className="top-1 right-1 w-10 h-10 opacity-25" />}
              <div className="text-4xl mb-3">{p.emoji}</div>
              <h3 className="font-bold mb-2" style={{ color: "#907080" }}>{p.title}</h3>
              <p className="text-sm mb-4 leading-relaxed" style={{ color: "#b8a8b0" }}>{p.desc}</p>
              <span className="text-xs font-bold px-3 py-1 rounded-full"
                style={{ background: p.status === "В процессе" ? "#d8f0d8" : "#fce8f0", color: p.status === "В процессе" ? "#3aaa7a" : "#e07090" }}>
                {p.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Галерея артов */}
      <section id="gallery" className="relative max-w-4xl mx-auto px-6 py-10 z-10">
        <h2 className="font-display text-3xl mb-3 text-center" style={{ color: "#e07090" }}>✿ Галерея артов</h2>
        <p className="text-center mb-8 text-sm" style={{ color: "#b8a8b0" }}>Скоро здесь появятся мои работы 🌸</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {artPlaceholders.map((art, idx) => (
            <div key={art.id} className="rounded-3xl aspect-square flex flex-col items-center justify-center gap-2 cursor-pointer hover:scale-105 transition-transform shadow-sm"
              style={{
                background: idx % 2 === 0 ? "linear-gradient(135deg, #fce8f0, #fff4f8)" : "linear-gradient(135deg, #e8f8e0, #f4fff0)",
                border: `1.5px solid ${idx % 2 === 0 ? "#f0c0d0" : "#c0e0b0"}`,
              }}>
              <span className="text-4xl">{art.emoji}</span>
              <span className="text-xs font-semibold" style={{ color: "#b8a8b0" }}>{art.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Раздел персонажа */}
      <section id="character" className="relative max-w-4xl mx-auto px-6 py-10 z-10">
        <h2 className="font-display text-3xl mb-8 text-center" style={{ color: "#e07090" }}>✿ Десскич</h2>
        <div className="rounded-3xl overflow-hidden shadow-md"
          style={{ background: "rgba(255,255,255,0.85)", border: "1.5px solid #f0c8d8" }}>
          <div className="md:flex">
            <div className="md:w-1/2 flex items-center justify-center p-6"
              style={{ background: "linear-gradient(135deg, #fff0f5, #f0fff0)" }}>
              <img
                src="https://cdn.poehali.dev/projects/8017feb0-4ae7-4a46-86a5-671cb07a895e/bucket/80081749-bba2-4f18-91ec-e85fc5dbcdbc.jpeg"
                alt="Десскич — редизайн"
                className="w-full object-contain rounded-2xl"
                style={{ maxHeight: "420px" }}
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center relative">
              <FlowerDeco className="top-2 right-4 w-14 h-14 opacity-25" />
              <div className="text-4xl mb-3">🐐</div>
              <h3 className="font-display text-2xl mb-1" style={{ color: "#e07090" }}>Десскич</h3>
              <p className="text-sm font-semibold mb-4" style={{ color: "#b8a8b0" }}>Оригинальный персонаж · Козочка</p>
              <p className="leading-relaxed mb-6 text-sm" style={{ color: "#907080" }}>
                Десскич — мой самый любимый OC. Это нежная козочка в розовом платье с оборками, кудрявыми рожками и очень сонным взглядом. Она добрая, немного меланхоличная, любит цветы и сладкое.
              </p>
              <div className="space-y-2">
                {[
                  { label: "Вид", value: "Козочка (антропоморф)" },
                  { label: "Стиль", value: "Лолита, пастель" },
                  { label: "Характер", value: "Добрая, мечтательная" },
                  { label: "Любит", value: "Цветы 🌸, сон, сладкое" },
                ].map(row => (
                  <div key={row.label} className="flex gap-3 text-sm">
                    <span className="font-bold w-20 shrink-0" style={{ color: "#e07090" }}>{row.label}</span>
                    <span style={{ color: "#907080" }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="relative text-center py-10 z-10" style={{ borderTop: "1.5px solid #f0c8d8" }}>
        <div className="flex justify-center gap-3 mb-3 text-2xl">
          <span className="animate-sway inline-block">🌸</span>
          <span className="animate-float inline-block" style={{ animationDelay: "0.5s" }}>🌿</span>
          <span className="animate-sway inline-block" style={{ animationDelay: "1s" }}>🌺</span>
        </div>
        <p className="font-display text-xl mb-1" style={{ color: "#e07090" }}>nastya ✿</p>
        <p className="text-sm" style={{ color: "#b8a8b0" }}>Сделано с любовью 🌸 · Настя, 2024</p>
      </footer>

    </div>
  )
}
