import Icon from "@/components/ui/icon"

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

export default function Index() {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #e8f4fd 0%, #f0e8ff 50%, #fde8f4 100%)" }}>

      {/* Декоративные звёздочки фона */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {["★", "✦", "✧", "⋆", "✩"].map((s, i) => (
          <span
            key={i}
            className="absolute text-blue-200 animate-sparkle"
            style={{
              left: `${10 + i * 20}%`,
              top: `${5 + i * 15}%`,
              fontSize: `${12 + i * 4}px`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {s}
          </span>
        ))}
        {["✦", "⋆", "✧"].map((s, i) => (
          <span
            key={`b${i}`}
            className="absolute text-pink-200 animate-sparkle"
            style={{
              right: `${5 + i * 25}%`,
              top: `${20 + i * 20}%`,
              fontSize: `${10 + i * 5}px`,
              animationDelay: `${i * 0.7 + 1}s`,
            }}
          >
            {s}
          </span>
        ))}
      </div>

      {/* Навигация */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="font-display text-xl" style={{ color: "#5bb8e8" }}>
            nastya ✦
          </span>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-semibold text-slate-500">
            <a href="#about" className="hover:text-sky-400 transition-colors">Обо мне</a>
            <a href="#projects" className="hover:text-sky-400 transition-colors">Проекты</a>
            <a href="#gallery" className="hover:text-sky-400 transition-colors">Галерея</a>
            <a href="#character" className="hover:text-sky-400 transition-colors">Десскич</a>
          </nav>
        </div>
      </header>

      {/* Герой */}
      <section id="about" className="max-w-4xl mx-auto px-6 pt-16 pb-10 text-center">
        <div className="animate-float inline-block mb-6">
          <div
            className="w-28 h-28 rounded-full mx-auto flex items-center justify-center text-5xl shadow-lg"
            style={{ background: "linear-gradient(135deg, #b8e0ff, #e8c8ff)" }}
          >
            🎨
          </div>
        </div>

        <h1 className="font-display text-5xl md:text-6xl mb-2" style={{ color: "#4a9fd4" }}>
          Настя
        </h1>
        <p className="text-slate-400 text-sm mb-4 font-medium tracking-wider uppercase">
          Ностя · Анастасия · 22.02.2012
        </p>

        <p className="text-lg text-slate-600 max-w-xl mx-auto leading-relaxed mb-8">
          Привет! Мне 14 лет, и я творческая личность 🌸<br />
          Рисую, придумываю персонажей и создаю целые миры в своей голове.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {["🎨 Иллюстратор", "✨ Выдумщица", "🐐 Автор Десскич", "🌙 Мечтательница"].map(tag => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full text-sm font-semibold text-white shadow-sm"
              style={{ background: "linear-gradient(90deg, #7ec8e3, #a8d8f0)" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Биография */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <div className="rounded-3xl p-8 shadow-sm" style={{ background: "rgba(255,255,255,0.7)" }}>
          <h2 className="font-display text-3xl mb-6 text-center" style={{ color: "#4a9fd4" }}>
            ✦ Моя история
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed text-[15px]">
            <p>
              Рисовать я начала давно — сначала это были простые каракули в тетрадях, потом персонажи из любимых аниме, а потом появились и свои собственные герои.
            </p>
            <p>
              Меня вдохновляют пастельные цвета, фэнтезийные миры, аниме и всё милое. Больше всего люблю придумывать образы и истории к ним — каждый персонаж для меня живой!
            </p>
            <p>
              Моя самая любимая работа — это, конечно, <strong style={{ color: "#5bb8e8" }}>Десскич</strong>. Это козочка-персонаж, которую я придумала и постоянно развиваю. Она добрая, немного сонная и очень милая 🐐
            </p>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            {[
              { label: "Возраст", value: "14 лет", emoji: "🎂" },
              { label: "Хобби", value: "Рисование", emoji: "🎨" },
              { label: "Персонаж", value: "Десскич", emoji: "🐐" },
            ].map(item => (
              <div key={item.label} className="rounded-2xl p-4" style={{ background: "linear-gradient(135deg, #e8f4fd, #f0e8ff)" }}>
                <div className="text-2xl mb-1">{item.emoji}</div>
                <div className="font-bold text-slate-700">{item.value}</div>
                <div className="text-xs text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Будущие проекты */}
      <section id="projects" className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="font-display text-3xl mb-8 text-center" style={{ color: "#4a9fd4" }}>
          ✦ Будущие проекты
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {projects.map(p => (
            <div
              key={p.title}
              className="rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow"
              style={{ background: "rgba(255,255,255,0.75)" }}
            >
              <div className="text-4xl mb-3">{p.emoji}</div>
              <h3 className="font-bold text-slate-700 mb-2">{p.title}</h3>
              <p className="text-sm text-slate-500 mb-4 leading-relaxed">{p.desc}</p>
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{
                  background: p.status === "В процессе" ? "#d4f0e8" : "#f0e8ff",
                  color: p.status === "В процессе" ? "#3aaa7a" : "#9b59b6",
                }}
              >
                {p.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Галерея артов */}
      <section id="gallery" className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="font-display text-3xl mb-3 text-center" style={{ color: "#4a9fd4" }}>
          ✦ Галерея артов
        </h2>
        <p className="text-center text-slate-400 mb-8 text-sm">Скоро здесь появятся мои работы ✨</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {artPlaceholders.map(art => (
            <div
              key={art.id}
              className="rounded-3xl aspect-square flex flex-col items-center justify-center gap-2 cursor-pointer hover:scale-105 transition-transform shadow-sm"
              style={{ background: "linear-gradient(135deg, #ddeeff, #eeddff)" }}
            >
              <span className="text-4xl">{art.emoji}</span>
              <span className="text-xs text-slate-400 font-medium">{art.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Раздел персонажа */}
      <section id="character" className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="font-display text-3xl mb-8 text-center" style={{ color: "#4a9fd4" }}>
          ✦ Десскич
        </h2>
        <div className="rounded-3xl overflow-hidden shadow-md" style={{ background: "rgba(255,255,255,0.75)" }}>
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src="https://cdn.poehali.dev/projects/8017feb0-4ae7-4a46-86a5-671cb07a895e/bucket/80081749-bba2-4f18-91ec-e85fc5dbcdbc.jpeg"
                alt="Десскич — редизайн"
                className="w-full h-full object-contain bg-white/50"
                style={{ maxHeight: "500px" }}
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <div className="text-4xl mb-3">🐐</div>
              <h3 className="font-display text-2xl mb-1" style={{ color: "#4a9fd4" }}>Десскич</h3>
              <p className="text-sm text-slate-400 mb-4 font-medium">Оригинальный персонаж · Козочка</p>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                Десскич — мой самый любимый OC. Это нежная козочка в розовом платье с оборками, кудрявыми рожками и очень сонным взглядом. Она добрая, немного меланхоличная, любит цветы и сладкое.
              </p>
              <div className="space-y-2">
                {[
                  { label: "Вид", value: "Козочка (антропоморф)" },
                  { label: "Стиль", value: "Лолита, пастель" },
                  { label: "Характер", value: "Добрая, мечтательная" },
                  { label: "Любит", value: "Цветы, сон, сладкое" },
                ].map(row => (
                  <div key={row.label} className="flex gap-3 text-sm">
                    <span className="font-semibold text-slate-400 w-20 shrink-0">{row.label}</span>
                    <span className="text-slate-600">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="text-center py-10 text-sm text-slate-400">
        <p className="font-display text-lg mb-1" style={{ color: "#7ec8e3" }}>nastya ✦</p>
        <p>Сделано с любовью 🌸 · Настя, 2024</p>
      </footer>

    </div>
  )
}
