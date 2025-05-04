import Link from "next/link"
import { TrendingUp } from "lucide-react"

const trendingTopics = [
  { title: "Budget 2025", href: "/business/economy/budget-2025" },
  { title: "Affordable Housing", href: "/news/national/affordable-housing" },
  { title: "Devolution", href: "/counties/devolution" },
  { title: "Climate Action", href: "/news/environment/climate-action" },
  { title: "Digital Economy", href: "/business/tech-innovation/digital-economy" },
]

export function TrendingTopics() {
  return (
    <div className="bg-muted/50 p-4 rounded-md">
      <div className="flex items-center gap-2 mb-3">
        <TrendingUp size={18} className="text-red-600" />
        <h2 className="font-bold text-sm">Trending</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {trendingTopics.map((topic) => (
          <Link
            key={topic.href}
            href={topic.href}
            className="bg-background hover:bg-zinc-200 text-sm px-3 py-1 rounded-full border transition-colors"
          >
            {topic.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
