import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

const mainNavLinks = [
  { title: "Home", href: "/" },
  { title: "News", href: "/news" },
  { title: "Counties", href: "/counties" },
  { title: "Business", href: "/business" },
  { title: "Sports", href: "/sports" },
  { title: "Entertainment", href: "/entertainment" },
  { title: "Lifestyle", href: "/lifestyle" },
  { title: "Opinion", href: "/opinion" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-14 items-center">
        <MobileNav />
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-2xl bg-red-600 text-white px-2">JUAGLOBE</span>
          </Link>
        </div>
        <nav className="hidden md:flex flex-1 items-center space-x-2">
          {mainNavLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "text-sm font-medium"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
          <Link
            href="/sign-in"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  )
}
