import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { PartnersSection } from "@/components/PartnersSection"
import { FeaturesSection } from "@/components/FeaturesSection"

export default function Index() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <footer className="py-10 text-center text-sm text-gray-500 border-t border-[#1a1a1a] mt-4">
        <p className="mb-2 text-gray-400">
          ФинПоток™ — финансовая платформа для бизнеса.{" "}
          <span className="font-medium text-white">Все платежи. Один поток.</span>
        </p>
        <p className="text-xs text-gray-700">© 2024 ФинПоток. Лицензия ЦБ РФ № 3498.</p>
      </footer>
    </main>
  )
}