import { Sparkles, Sun, Diamond, Bird, Activity, Zap, Circle } from "lucide-react"

const partners = [
  { name: "СберБизнес", icon: Sparkles },
  { name: "Тинькофф", icon: Sun },
  { name: "Альфа-Банк", icon: Diamond },
  { name: "ВТБ", icon: Bird },
  { name: "Газпромбанк", icon: Activity },
  { name: "Райффайзен", icon: Zap },
  { name: "Точка", icon: Circle },
]

export function PartnersSection() {
  return (
    <section className="px-4 py-6">
      <p className="text-center text-xs text-gray-600 uppercase tracking-widest mb-6">Интеграция с ведущими банками</p>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {partners.map((partner) => (
          <div key={partner.name} className="flex items-center gap-2 text-gray-500 hover:text-gray-400 transition-colors">
            <partner.icon className="h-4 w-4" />
            <span className="text-sm font-medium">{partner.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}