import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const categories = [
  {
    title: "News",
    subcategories: [
      { title: "National", href: "/news/national" },
      { title: "Politics", href: "/news/politics" },
      { title: "Counties", href: "/counties" },
      { title: "East Africa", href: "/news/east-africa" },
      { title: "Africa", href: "/news/africa" },
      { title: "World", href: "/news/world" },
      { title: "Diaspora", href: "/news/diaspora" },
    ]
  },
  {
    title: "Counties",
    subcategories: [
      { title: "Nairobi", href: "/counties/nairobi" },
      { title: "Mombasa", href: "/counties/mombasa" },
      { title: "Kisumu", href: "/counties/kisumu" },
      { title: "Nakuru", href: "/counties/nakuru" },
      { title: "Eldoret", href: "/counties/eldoret" },
      { title: "Browse all counties", href: "/counties/all" },
    ]
  },
  {
    title: "Business",
    subcategories: [
      { title: "Economy", href: "/business/economy" },
      { title: "Markets", href: "/business/markets" },
      { title: "Companies", href: "/business/companies" },
      { title: "Tech & Innovation", href: "/business/tech-innovation" },
      { title: "Agriculture", href: "/business/agriculture" },
      { title: "Real Estate", href: "/business/real-estate" },
    ]
  },
  {
    title: "Sports",
    subcategories: [
      { title: "Football", href: "/sports/football" },
      { title: "Athletics", href: "/sports/athletics" },
      { title: "Rugby", href: "/sports/rugby" },
      { title: "Cricket", href: "/sports/cricket" },
      { title: "Basketball", href: "/sports/basketball" },
      { title: "Motorsports", href: "/sports/motorsports" },
    ]
  },
  {
    title: "Lifestyle",
    subcategories: [
      { title: "Arts & Culture", href: "/lifestyle/arts-culture" },
      { title: "Food", href: "/lifestyle/food" },
      { title: "Travel", href: "/lifestyle/travel" },
      { title: "Health", href: "/lifestyle/health" },
      { title: "Family", href: "/lifestyle/family" },
    ]
  }
]

export function Sidebar() {
  return (
    <div className="h-screen w-64 border-r bg-background">
      <ScrollArea className="h-full">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-lg">Categories</h2>
          </div>
          <div className="mt-4 space-y-6">
            {categories.map((category) => (
              <div key={category.title} className="space-y-2">
                <h3 className="font-medium text-sm text-muted-foreground">
                  {category.title}
                </h3>
                <Separator />
                <div className="space-y-1 pt-1">
                  {category.subcategories.map((subcategory) => (
                    <Link
                      key={subcategory.href}
                      href={subcategory.href}
                      className="block text-sm hover:underline py-1"
                    >
                      {subcategory.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}
