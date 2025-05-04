import Link from "next/link"
import { AlertCircle } from "lucide-react"

interface LiveBannerProps {
  title: string
  href: string
}

export function LiveBanner({ title, href }: LiveBannerProps) {
  return (
    <Link href={href}>
      <div className="bg-red-600 text-white px-4 py-2 flex items-center gap-2 hover:bg-red-700 transition-colors">
        <AlertCircle size={18} className="animate-pulse" />
        <div className="flex items-center gap-2">
          <span className="font-bold text-sm uppercase">Breaking</span>
          <span className="hidden sm:inline">|</span>
          <span className="text-sm">{title}</span>
        </div>
      </div>
    </Link>
  )
}
