import Link from "next/link"
import { Separator } from "@/components/ui/separator"

const mostReadArticles = [
  {
    id: 1,
    title: "Kenya Shilling Strengthens Against Dollar After Central Bank Intervention",
    category: "Business",
    href: "/business/economy/shilling-strengthens",
  },
  {
    id: 2,
    title: "Nairobi Expressway Cuts Travel Time by 70% According to New Study",
    category: "Counties",
    href: "/counties/nairobi/expressway-study",
  },
  {
    id: 3,
    title: "Kenyan Film 'Rafiki' Wins Major Award at International Festival",
    category: "Entertainment",
    href: "/entertainment/film/rafiki-award",
  },
  {
    id: 4,
    title: "New Health Initiative to Expand Coverage in Rural Counties",
    category: "Health",
    href: "/lifestyle/health/rural-coverage-initiative",
  },
  {
    id: 5,
    title: "East African Community Strengthens Trade Relations with New Agreement",
    category: "East Africa",
    href: "/news/east-africa/trade-agreement",
  },
]

export function MostRead() {
  return (
    <div className="bg-muted/50 p-4 rounded-md">
      <h2 className="font-bold text-lg mb-3">Most Read</h2>
      <Separator className="mb-4" />
      <ol className="space-y-4">
        {mostReadArticles.map((article, index) => (
          <li key={article.id} className="flex gap-3">
            <span className="text-2xl font-bold text-muted-foreground flex-shrink-0">
              {index + 1}
            </span>
            <div>
              <Link
                href={article.href}
                className="font-medium hover:underline line-clamp-2"
              >
                {article.title}
              </Link>
              <p className="text-xs text-muted-foreground mt-1">
                {article.category}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
