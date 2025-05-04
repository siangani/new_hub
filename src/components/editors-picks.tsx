import { NewsCard } from "@/components/news-card"
import { Separator } from "@/components/ui/separator"

const editorsPicks = [
  {
    id: 1,
    title: "Kenya's Coffee Industry Renaissance: Small-Scale Farmers Embrace Direct Trade",
    description: "How Kenyan coffee farmers are bypassing middlemen and establishing direct relationships with international buyers for premium prices.",
    category: "Business",
    image: "https://ext.same-assets.com/3278215394/2069370731.webp",
    timeAgo: "1 day ago",
    href: "/business/agriculture/coffee-direct-trade",
  },
  {
    id: 2,
    title: "The Conservation Success Story of Kenya's Black Rhino Population",
    description: "How community-led conservation efforts have helped increase the endangered black rhino population in Kenya's wildlife reserves.",
    category: "Environment",
    image: "https://ext.same-assets.com/3278215394/974665023.webp",
    timeAgo: "2 days ago",
    href: "/news/environment/black-rhino-conservation",
  },
  {
    id: 3,
    title: "Kenya's Traditional Foods Making a Comeback in Urban Restaurants",
    description: "Young chefs are reinventing indigenous Kenyan cuisine and bringing forgotten recipes back to the country's food scene.",
    category: "Lifestyle",
    image: "https://ext.same-assets.com/3278215394/714686809.webp",
    timeAgo: "3 days ago",
    href: "/lifestyle/food/traditional-cuisine-revival",
  },
]

export function EditorsPicks() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Editor's Picks</h2>
      </div>
      <Separator className="my-2" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {editorsPicks.map((news) => (
          <NewsCard
            key={news.id}
            title={news.title}
            description={news.description}
            category={news.category}
            image={news.image}
            timeAgo={news.timeAgo}
            href={news.href}
          />
        ))}
      </div>
    </div>
  )
}
