import Link from "next/link"
import { Separator } from "@/components/ui/separator"

const footerLinks = [
  {
    title: "News",
    links: [
      { title: "National", href: "/news/national" },
      { title: "Politics", href: "/news/politics" },
      { title: "Counties", href: "/counties" },
      { title: "East Africa", href: "/news/east-africa" },
      { title: "Africa", href: "/news/africa" },
      { title: "World", href: "/news/world" },
    ],
  },
  {
    title: "Business & Economy",
    links: [
      { title: "Markets", href: "/business/markets" },
      { title: "Companies", href: "/business/companies" },
      { title: "Tech", href: "/business/tech-innovation" },
      { title: "Agriculture", href: "/business/agriculture" },
      { title: "Real Estate", href: "/business/real-estate" },
    ],
  },
  {
    title: "Lifestyle",
    links: [
      { title: "Arts & Culture", href: "/lifestyle/arts-culture" },
      { title: "Food", href: "/lifestyle/food" },
      { title: "Travel", href: "/lifestyle/travel" },
      { title: "Health", href: "/lifestyle/health" },
      { title: "Education", href: "/lifestyle/education" },
    ],
  },
  {
    title: "Media",
    links: [
      { title: "Podcasts", href: "/media/podcasts" },
      { title: "Video", href: "/media/video" },
      { title: "Photo Gallery", href: "/media/photos" },
      { title: "Live Updates", href: "/media/live" },
      { title: "Subscribe", href: "/subscribe" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-zinc-950 text-zinc-100 py-12">
      <div className="container">
        <div className="flex items-center mb-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl bg-red-600 text-white px-2">JUAGLOBE</span>
          </Link>
        </div>
        <Separator className="mb-8 bg-zinc-800" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="font-bold text-sm">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="my-8 bg-zinc-800" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs text-zinc-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} JuaGlobe Media. All rights reserved.
          </div>
          <div className="flex space-x-4 text-xs text-zinc-400">
            <Link href="/terms" className="hover:text-white">Terms of Use</Link>
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/advertise" className="hover:text-white">Advertise</Link>
            <Link href="/contact" className="hover:text-white">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
