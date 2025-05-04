import { EditorsPicks } from "@/components/editors-picks"
import { FeaturedNews } from "@/components/featured-news"
import { MostRead } from "@/components/most-read"
import { Sidebar } from "@/components/sidebar"
import { TrendingTopics } from "@/components/trending-topics"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <main className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main news section - takes up 2/3 of the grid */}
          <div className="lg:col-span-2 space-y-12">
            <FeaturedNews />
            <Separator />
            <div className="py-2">
              <TrendingTopics />
            </div>
            <Separator />
            <EditorsPicks />
          </div>

          {/* Right sidebar for Most Read - takes up 1/3 of the grid */}
          <div className="space-y-6">
            <MostRead />
          </div>
        </div>
      </div>
    </main>
  )
}
