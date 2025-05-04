import { NewsCard } from "@/components/news-card"

const featuredNews = [
  {
    id: 1,
    title: "Government Announces New Infrastructure Projects Across Counties",
    description: "Major road and railway development projects unveiled to boost connectivity between Kenya's urban and rural areas.",
    category: "National",
    image: "https://ext.same-assets.com/3278215394/3992100846.webp",
    timeAgo: "2 hrs ago",
    href: "/news/national/infrastructure-projects",
  },
  {
    id: 2,
    title: "Kenya's Tech Hub Expands with Major Investment in Konza City",
    description: "New phase of development begins at Konza Technopolis as international tech firms commit to establishing regional headquarters.",
    category: "Business",
    image: "https://ext.same-assets.com/3278215394/4239515595.webp",
    timeAgo: "4 hrs ago",
    href: "/business/tech-innovation/konza-investment",
  },
  {
    id: 3,
    title: "Harambee Stars Qualify for Africa Cup of Nations",
    description: "Kenya's national football team secures spot in continental championship after decisive victory in final qualifying match.",
    category: "Sports",
    image: "https://ext.same-assets.com/3278215394/511770465.webp",
    timeAgo: "6 hrs ago",
    href: "/sports/football/harambee-stars-afcon",
  },
]

export function FeaturedNews() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Top Stories</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredNews.map((news) => (
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
