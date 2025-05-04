import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"

interface NewsCardProps {
  title: string
  description?: string
  category: string
  image?: string
  timeAgo: string
  href: string
  size?: "small" | "medium" | "large"
}

export function NewsCard({
  title,
  description,
  category,
  image,
  timeAgo,
  href,
  size = "medium",
}: NewsCardProps) {
  const sizeClasses = {
    small: "max-w-sm",
    medium: "max-w-md",
    large: "max-w-lg",
  }

  return (
    <Link href={href}>
      <Card className={`h-full hover:bg-muted/50 ${sizeClasses[size]}`}>
        {image && (
          <div className="relative w-full aspect-video overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <CardContent className="p-4">
          <div className="text-sm font-medium text-red-600 mb-1">
            {category}
          </div>
          <CardTitle className={`${size === "small" ? "text-base" : "text-xl"} font-bold line-clamp-2`}>{title}</CardTitle>
          {description && (
            <CardDescription className="mt-2 line-clamp-2">
              {description}
            </CardDescription>
          )}
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0 text-xs text-muted-foreground">
          {timeAgo}
        </CardFooter>
      </Card>
    </Link>
  )
}
