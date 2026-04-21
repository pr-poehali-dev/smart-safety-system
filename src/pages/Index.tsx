import FloatingDeco from "@/components/layout/FloatingDeco"
import HeroSection from "@/components/sections/HeroSection"
import GallerySection from "@/components/sections/GallerySection"
import CharacterSection from "@/components/sections/CharacterSection"

export default function Index() {
  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ background: "var(--bg-light)" }}>

      <FloatingDeco />

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

      <HeroSection />
      <GallerySection />
      <CharacterSection />

    </div>
  )
}
