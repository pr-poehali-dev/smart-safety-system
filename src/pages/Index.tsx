import { useEffect, useRef, useState } from "react"

const galleryCategories = [
  {
    id: "fandoms",
    label: "Арты персонажей из фандомов",
    emoji: "🌟",
    arts: [
      { id: 1, title: "Персонаж из Pony Town", url: "https://cdn.poehali.dev/projects/8017feb0-4ae7-4a46-86a5-671cb07a895e/bucket/5c1e78c3-3796-46a3-bb0d-a303ca3946ff.jpeg" },
      { id: 2, title: "Шелли — Dandy's World", url: "https://cdn.poehali.dev/projects/8017feb0-4ae7-4a46-86a5-671cb07a895e/bucket/1eab597b-52ff-4043-8b35-88cb998866dd.jpeg" },
      { id: 5, title: "Madoka Kaname", url: "https://cdn.poehali.dev/projects/8017feb0-4ae7-4a46-86a5-671cb07a895e/bucket/05158768-f8c2-4086-9faf-43b6f21d1244.jpeg" },
    ],
  },
  {
    id: "original",
    label: "Оригинальные арты",
    emoji: "🐐",
    arts: [
      { id: 6, title: "Десскич · Hello Summer 🍉", url: "https://cdn.poehali.dev/projects/8017feb0-4ae7-4a46-86a5-671cb07a895e/bucket/ce6a8910-bb1a-475b-98f7-cc3ebaf88298.jpeg" },
    ],
  },
  {
    id: "for-others",
    label: "Арты для других художников",
    emoji: "🎁",
    arts: [
      { id: 3, title: "Арт для художницы", url: "https://cdn.poehali.dev/projects/8017feb0-4ae7-4a46-86a5-671cb07a895e/bucket/143c3ac6-e9e7-4bb1-9f24-ab6d432e1b9a.jpeg" },
      { id: 4, title: "Арт для Илфти 🍓", url: "https://cdn.poehali.dev/projects/8017feb0-4ae7-4a46-86a5-671cb07a895e/bucket/fdced9ed-0223-4798-9a2e-4118ced4bf16.jpeg" },
    ],
  },
  {
    id: "dreams",
    label: "Арт-серия «Сны»",
    emoji: "💭",
    arts: [],
  },
]

const projects = [
  { title: "Игра-новелла", desc: "Визуальная новелла с моим персонажем — история о сказочном мире, выборах и маленьких чудесах", emoji: "🎮", status: "Планируется" },
  { title: "Арт-серия «Сны»", desc: "Серия иллюстраций в пастельных тонах", emoji: "💭", status: "В процессе" },
  { title: "Стикерпак", desc: "Набор стикеров с Десскич для Telegram", emoji: "🐐", status: "Планируется" },
]

// Хук появления при скролле
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed")
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal-block ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

// Лайтбокс
function Lightbox({ url, title, onClose }: { url: string; title: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", handler)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", handler)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(30, 10, 20, 0.85)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full flex flex-col items-center"
        onClick={e => e.stopPropagation()}
      >
        <img
          src={url}
          alt={title}
          className="rounded-3xl shadow-2xl max-h-[80vh] w-auto object-contain"
          style={{ border: "2px solid #F2C4D4" }}
        />
        <p className="mt-3 text-white font-bold text-sm drop-shadow">{title}</p>
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 w-9 h-9 rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
          style={{ background: "var(--pink-dark)", color: "#fff" }}
        >
          ✕
        </button>
      </div>
    </div>
  )
}

// Фоновые элементы — плавают на месте, мерцают
function FloatingDeco() {
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

function FlowerDeco({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) {
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

export default function Index() {
  const [lightbox, setLightbox] = useState<{ url: string; title: string } | null>(null)

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ background: "var(--bg-light)" }}>

      <FloatingDeco />

      {lightbox && (
        <Lightbox url={lightbox.url} title={lightbox.title} onClose={() => setLightbox(null)} />
      )}

      {/* Навигация */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b" style={{ background: "rgba(255,246,248,0.92)", borderColor: "#F2C4D4" }}>
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="font-display text-xl" style={{ color: "var(--pink-dark)" }}>DESsite</span>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-bold" style={{ color: "var(--pink-dark)" }}>
            <a href="#about" className="hover:opacity-70 transition-opacity">Обо мне</a>
            <a href="#projects" className="hover:opacity-70 transition-opacity">Проекты</a>
            <a href="#gallery" className="hover:opacity-70 transition-opacity">Галерея</a>
            <a href="#character" className="hover:opacity-70 transition-opacity">Десскич</a>
            <a href="#socials" className="hover:opacity-70 transition-opacity">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Герой — первый экран */}
      <section id="about" className="relative max-w-4xl mx-auto px-6 pt-16 pb-16 text-center z-10">
        <FlowerDeco className="top-6 left-0 w-20 h-20 animate-float-slow opacity-50" />
        <FlowerDeco className="top-6 right-0 w-16 h-16 animate-float opacity-40" style={{ animationDelay: "1s" }} />

        <div className="animate-float inline-block mb-6 relative">
          <div className="w-36 h-36 rounded-full mx-auto overflow-hidden shadow-xl border-4" style={{ borderColor: "var(--pink-accent)", background: "#fff" }}>
            <img
              src="https://cdn.poehali.dev/projects/8017feb0-4ae7-4a46-86a5-671cb07a895e/bucket/9ff9fb79-4fa0-4a3a-8012-0a6441f1790d.png"
              alt="Десскич"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="font-display text-6xl md:text-7xl mb-3" style={{ color: "var(--pink-dark)" }}>Настя</h1>
        <p className="text-base mb-2 font-bold tracking-wider uppercase" style={{ color: "var(--text-muted)" }}>
          Анастасия · 14 лет
        </p>
        <p className="text-xl max-w-lg mx-auto leading-relaxed mb-4 font-semibold" style={{ color: "var(--text-sub)" }}>
          Художница, придумываю персонажей и рисую арты 🎨
        </p>
        <p className="text-base max-w-md mx-auto leading-relaxed mb-8" style={{ color: "var(--text-sub)" }}>
          Мой главный герой — козочка Десскич. Здесь мой мир: арты, персонажи и творческие проекты.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {["🎨 Иллюстратор", "🐐 Автор Десскич", "✨ Выдумщица", "🌿 Мечтательница"].map(tag => (
            <span key={tag} className="px-4 py-1.5 rounded-full text-sm font-bold text-white shadow"
              style={{ background: "var(--pink-accent)" }}>
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col items-center gap-2">
          <a
            href="https://t.me/d3sski4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-bold text-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            style={{ background: "var(--pink-dark)" }}
          >
            ✉️ Заказать арт
          </a>
          <p className="text-sm font-semibold" style={{ color: "var(--text-muted)" }}>
            (на данный момент, заказы временно не принимаются)
          </p>
        </div>
      </section>

      {/* Биография */}
      <section className="relative max-w-4xl mx-auto px-6 pb-16 z-10">
        <Reveal>
          <div className="rounded-3xl p-8 shadow-sm relative overflow-hidden" style={{ background: "#fff", border: "1.5px solid #F2C4D4" }}>
            <FlowerDeco className="top-2 right-4 opacity-20 w-14 h-14" />
            <h2 className="font-display text-4xl mb-2 text-center" style={{ color: "var(--pink-dark)" }}>Моя история</h2>
            <p className="text-center text-base font-semibold mb-6" style={{ color: "var(--green-mint)" }}>
              как всё начиналось
            </p>
            <div className="space-y-4 leading-relaxed text-base font-medium" style={{ color: "var(--text-sub)" }}>
              <p>Рисовать я начала давно — сначала это были простые каракули в тетрадях, потом персонажи из любимых аниме, а потом появились и свои собственные герои.</p>
              <p>Меня вдохновляют пастельные цвета, фэнтезийные миры, аниме и всё милое. Больше всего люблю придумывать образы и истории к ним — каждый персонаж для меня живой!</p>
              <p>Моя самая любимая работа — это, конечно, <strong style={{ color: "var(--pink-dark)" }}>Десскич</strong>. Это козочка-персонаж, которую я придумала и постоянно развиваю 🐐</p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              {[
                { label: "Возраст", value: "14 лет", emoji: "🎂" },
                { label: "Хобби", value: "Рисование", emoji: "🎨" },
                { label: "Персонаж", value: "Десскич", emoji: "🐐" },
              ].map(item => (
                <div key={item.label} className="rounded-2xl p-4" style={{ background: "var(--bg-light)", border: "1.5px solid #F2C4D4" }}>
                  <div className="text-2xl mb-1">{item.emoji}</div>
                  <div className="font-bold text-base" style={{ color: "var(--text-main)" }}>{item.value}</div>
                  <div className="text-sm font-semibold" style={{ color: "var(--text-muted)" }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Будущие проекты */}
      <section id="projects" className="relative max-w-4xl mx-auto px-6 pb-16 z-10">
        <Reveal>
          <h2 className="font-display text-4xl mb-2 text-center" style={{ color: "var(--pink-dark)" }}>Будущие проекты</h2>
          <p className="text-center text-base font-semibold mb-8" style={{ color: "var(--green-mint)" }}>над чем я работаю</p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="rounded-3xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all h-full"
                style={{ background: "#fff", border: "1.5px solid #F2C4D4" }}>
                <div className="text-4xl mb-3">{p.emoji}</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text-main)" }}>{p.title}</h3>
                <p className="text-sm mb-4 leading-relaxed font-medium" style={{ color: "var(--text-sub)" }}>{p.desc}</p>
                <span className="text-xs font-bold px-3 py-1.5 rounded-full"
                  style={{
                    background: p.status === "В процессе" ? "var(--green-soft)" : "var(--bg-light)",
                    color: p.status === "В процессе" ? "#57a639" : "var(--pink-dark)",
                    border: `1px solid ${p.status === "В процессе" ? "var(--green-mint)" : "#F2C4D4"}`,
                  }}>
                  {p.status}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Галерея артов */}
      <section id="gallery" className="relative max-w-4xl mx-auto px-6 pb-16 z-10">
        <Reveal>
          <h2 className="font-display text-4xl mb-2 text-center" style={{ color: "var(--pink-dark)" }}>Галерея артов</h2>
          <p className="text-center mb-10 text-base font-semibold" style={{ color: "var(--green-mint)" }}>нажми на картинку, чтобы посмотреть поближе 🌸</p>
        </Reveal>

        {galleryCategories.map((cat, catIdx) => (
          <Reveal key={cat.id} delay={catIdx * 80}>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl">{cat.emoji}</span>
                <h3 className="font-extrabold text-lg" style={{ color: "var(--text-main)" }}>{cat.label}</h3>
                <div className="flex-1 h-px" style={{ background: catIdx % 2 === 0 ? "#F2C4D4" : "var(--green-mint)" }} />
              </div>

              {cat.arts.length === 0 ? (
                <div className="rounded-3xl p-8 text-center" style={{ background: "var(--bg-light)", border: "1.5px dashed #E88AAE" }}>
                  <div className="text-3xl mb-2">🌙</div>
                  <p className="text-sm font-bold" style={{ color: "var(--text-muted)" }}>Скоро здесь появятся работы...</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {cat.arts.map((art, idx) => (
                    <button
                      key={art.id}
                      onClick={() => setLightbox({ url: art.url, title: art.title })}
                      className="rounded-3xl overflow-hidden cursor-pointer hover:scale-105 hover:shadow-lg transition-all shadow-sm group relative text-left"
                      style={{ border: `1.5px solid ${idx % 2 === 0 ? "#F2C4D4" : "var(--green-mint)"}` }}
                    >
                      <img
                        src={art.url}
                        alt={art.title}
                        className="w-full aspect-square object-cover"
                      />
                      <div className="absolute inset-0 flex items-end justify-center pb-3 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ background: "linear-gradient(to top, rgba(212,106,146,0.85) 0%, transparent 60%)" }}>
                        <span className="text-xs font-bold text-white drop-shadow px-2 text-center">{art.title}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </section>

      {/* Раздел персонажа */}
      <section id="character" className="relative max-w-4xl mx-auto px-6 pb-16 z-10">
        <Reveal>
          <h2 className="font-display text-4xl mb-2 text-center" style={{ color: "var(--pink-dark)" }}>Десскич</h2>
          <p className="text-center text-base font-semibold mb-8" style={{ color: "var(--green-mint)" }}>мой оригинальный персонаж</p>
        </Reveal>

        <Reveal>
          <div className="rounded-3xl overflow-hidden shadow-md mb-6" style={{ background: "#fff", border: "1.5px solid #F2C4D4" }}>
            <div className="md:flex">
              <div className="md:w-1/2 flex items-center justify-center p-6" style={{ background: "var(--bg-light)" }}>
                <img
                  src="https://cdn.poehali.dev/projects/8017feb0-4ae7-4a46-86a5-671cb07a895e/bucket/80081749-bba2-4f18-91ec-e85fc5dbcdbc.jpeg"
                  alt="Десскич — редизайн"
                  className="w-full object-contain rounded-2xl"
                  style={{ maxHeight: "420px" }}
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="text-4xl mb-3">🐐</div>
                <h3 className="font-display text-3xl mb-1" style={{ color: "var(--pink-dark)" }}>Десскич</h3>
                <p className="text-sm font-bold mb-1" style={{ color: "var(--text-muted)" }}>старое прозвище: Десску</p>
                <p className="text-sm font-semibold mb-5" style={{ color: "var(--text-sub)" }}>Оригинальный персонаж · Козочка · ДР: 22.12</p>

                <div className="rounded-2xl p-4 mb-5 text-sm leading-relaxed italic font-medium"
                  style={{ background: "var(--bg-light)", color: "var(--text-sub)", border: "1px solid #F2C4D4" }}>
                  «Она верила в сказки, в любовь с первого взгляда и в то, что добро всегда побеждает.»
                </div>

                <div className="space-y-2.5">
                  {[
                    { label: "Вид", value: "Козочка (антропоморф)" },
                    { label: "Возраст", value: "18 лет" },
                    { label: "Рост", value: "168 см" },
                    { label: "Стиль", value: "Сказочный, пастельная лолита" },
                    { label: "Любит 💚", value: "Природу, цветы, рисование, дождь, звёздное небо" },
                    { label: "Не любит 🚫", value: "Запах табачного дыма, когда её пугают, измены" },
                  ].map(row => (
                    <div key={row.label} className="flex gap-3 text-sm">
                      <span className="font-extrabold w-24 shrink-0" style={{ color: "var(--pink-dark)" }}>{row.label}</span>
                      <span className="font-medium" style={{ color: "var(--text-sub)" }}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-3xl overflow-hidden shadow-sm" style={{ background: "#fff", border: "1.5px dashed #E88AAE" }}>
            <div className="md:flex items-center">
              <div className="md:w-2/5 flex items-center justify-center p-6" style={{ background: "var(--bg-light)" }}>
                <img
                  src="https://cdn.poehali.dev/projects/8017feb0-4ae7-4a46-86a5-671cb07a895e/bucket/e293b2bd-4da0-416c-9d77-e1aab30f91e4.jpeg"
                  alt="Десскич — старая версия"
                  className="w-full object-contain rounded-2xl"
                  style={{ maxHeight: "340px" }}
                />
              </div>
              <div className="md:w-3/5 p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">📜</span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "var(--bg-light)", color: "var(--text-muted)", border: "1px solid #E88AAE" }}>
                    Старая версия · 03.04.25
                  </span>
                </div>
                <h4 className="font-display text-2xl mb-3" style={{ color: "var(--text-sub)" }}>Десскич — прошлое</h4>
                <p className="text-base leading-relaxed font-medium" style={{ color: "var(--text-sub)" }}>
                  Это более ранняя версия персонажа — Десску в уютном свитере и школьной юбке. Здесь она ещё чуть моложе (16 лет) и немного иначе выглядит, но её душа — всё та же: добрая, мечтательная и верящая в чудеса. Каждый художник растёт, и персонажи вместе с ним 🌿
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Цены на арт */}
      <section className="relative max-w-4xl mx-auto px-6 pb-16 z-10">
        <Reveal>
          <h2 className="font-display text-4xl mb-2 text-center" style={{ color: "var(--pink-dark)" }}>Комиссии на арт</h2>
          <p className="text-center text-base font-semibold mb-8" style={{ color: "var(--green-mint)" }}>Скоро здесь появятся цены — я ещё думаю 🌸</p>
        </Reveal>

        <div className="mb-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xl">🖥️</span>
              <h3 className="font-extrabold text-xl" style={{ color: "var(--text-main)" }}>Диджитал</h3>
              <div className="flex-1 h-px" style={{ background: "#F2C4D4" }} />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { type: "Скетч", img: "https://cdn.poehali.dev/projects/8017feb0-4ae7-4a46-86a5-671cb07a895e/bucket/74989328-2cdf-4f66-bb9c-d40aca5f084b.png" },
              { type: "Лайн арт", img: "https://cdn.poehali.dev/projects/8017feb0-4ae7-4a46-86a5-671cb07a895e/bucket/647c2fff-5756-487f-a217-1fa4f62ca234.jpeg" },
              { type: "Полный арт", img: "https://cdn.poehali.dev/projects/8017feb0-4ae7-4a46-86a5-671cb07a895e/bucket/0c6ec706-f7d7-4859-ae5d-3ca20a770fe8.jpeg" },
            ].map(({ type, img }, i) => (
              <Reveal key={type} delay={i * 100}>
                <div className="rounded-3xl overflow-hidden shadow-sm" style={{ background: "#fff", border: "1.5px solid #F2C4D4" }}>
                  <div className="aspect-square overflow-hidden" style={{ background: "var(--bg-light)" }}>
                    <img src={img} alt={type} className="w-full h-full object-contain p-2" />
                  </div>
                  <div className="p-5 text-center">
                    <h4 className="font-extrabold text-base mb-1" style={{ color: "var(--text-main)" }}>{type}</h4>
                    <p className="font-display text-xl" style={{ color: "var(--pink-accent)" }}>скоро</p>
                    <p className="text-sm font-semibold" style={{ color: "var(--text-muted)" }}>цена уточняется</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xl">✏️</span>
              <h3 className="font-extrabold text-xl" style={{ color: "var(--text-main)" }}>Традишионал</h3>
              <div className="flex-1 h-px" style={{ background: "var(--green-mint)" }} />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {["Скетч", "Лайн арт", "Полный арт"].map((type, i) => (
              <Reveal key={type} delay={i * 100}>
                <div className="rounded-3xl p-6 text-center shadow-sm"
                  style={{ background: "#fff", border: "1.5px solid var(--green-mint)" }}>
                  <div className="text-3xl mb-3">{["📝", "🖋️", "🖼️"][i]}</div>
                  <h4 className="font-extrabold text-base mb-1" style={{ color: "var(--text-main)" }}>{type}</h4>
                  <p className="font-display text-xl" style={{ color: "var(--green-mint)" }}>скоро</p>
                  <p className="text-sm font-semibold" style={{ color: "var(--text-muted)" }}>цена уточняется</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Соцсети */}
      <section id="socials" className="relative max-w-4xl mx-auto px-6 pb-16 z-10">
        <Reveal>
          <h2 className="font-display text-4xl mb-2 text-center" style={{ color: "var(--pink-dark)" }}>Найти меня</h2>
          <p className="text-center text-base font-semibold mb-8" style={{ color: "var(--green-mint)" }}>буду рада общению</p>
        </Reveal>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {[
            { href: "https://t.me/cool_desski4", border: "#A8D8C8", iconBg: "var(--green-soft)", icon: "✈️", label: "Telegram", sub: "@cool_desski4", delay: 0 },
            { href: "mailto:d3sski4.official@mail.ru", border: "var(--green-mint)", iconBg: "var(--green-soft)", icon: "💌", label: "Почта", sub: "d3sski4.official@mail.ru", delay: 100 },
            { href: "https://tiktok.com/@d3sski4_official", border: "#F2C4D4", iconBg: "var(--bg-light)", icon: "🎵", label: "TikTok", sub: "@d3sski4_official", delay: 200 },
          ].map(({ href, border, iconBg, icon, label, sub, delay }) => (
            <Reveal key={label} delay={delay}>
              <a href={href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-3xl px-8 py-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                style={{ background: "#fff", border: `1.5px solid ${border}` }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: iconBg }}>
                  {icon}
                </div>
                <div>
                  <p className="font-extrabold text-sm" style={{ color: "var(--text-main)" }}>{label}</p>
                  <p className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>{sub}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Футер */}
      <footer className="relative text-center py-10 z-10" style={{ borderTop: "1.5px solid #F2C4D4" }}>
        <p className="font-display text-2xl mb-2" style={{ color: "var(--pink-dark)" }}>DESsite ✿</p>
        <p className="text-sm font-semibold" style={{ color: "var(--text-muted)" }}>Сделано с любовью · Настя, с 2021</p>
      </footer>

    </div>
  )
}
