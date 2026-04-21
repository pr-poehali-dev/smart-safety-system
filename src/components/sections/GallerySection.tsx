import { useEffect, useState } from "react"
import Reveal from "@/components/ui/Reveal"

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

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<{ url: string; title: string } | null>(null)

  return (
    <>
      {lightbox && (
        <Lightbox url={lightbox.url} title={lightbox.title} onClose={() => setLightbox(null)} />
      )}

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
    </>
  )
}
