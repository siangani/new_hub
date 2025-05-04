import type { Metadata } from "next"
import "./globals.css"
import ClientBody from "./ClientBody"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LiveBanner } from "@/components/live-banner"

export const metadata: Metadata = {
  title: "JuaGlobe - Kenya News, Politics, Counties, Business & Sports",
  description: "Kenya's leading news site covering national news, politics, business, counties, sports and lifestyle.",
}

export default function RootLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ClientBody>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <LiveBanner
              title="President announces major cabinet reshuffle in address to the nation"
              href="/news/politics/cabinet-reshuffle"
            />
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
        </ClientBody>
      </body>
    </html>
  )
}
