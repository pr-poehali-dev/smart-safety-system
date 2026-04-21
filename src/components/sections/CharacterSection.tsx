import Reveal from "@/components/ui/Reveal"

export default function CharacterSection() {
  return (
    <>
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
    </>
  )
}
