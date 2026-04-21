import Reveal from "@/components/ui/Reveal"
import FlowerDeco from "@/components/layout/FlowerDeco"

const projects = [
  { title: "Игра-новелла", desc: "Визуальная новелла с моим персонажем — история о сказочном мире, выборах и маленьких чудесах", emoji: "🎮", status: "Планируется" },
  { title: "Арт-серия «Сны»", desc: "Серия иллюстраций в пастельных тонах", emoji: "💭", status: "В процессе" },
  { title: "Стикерпак", desc: "Набор стикеров с Десскич для Telegram", emoji: "🐐", status: "Планируется" },
]

export default function HeroSection() {
  return (
    <>
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
    </>
  )
}
