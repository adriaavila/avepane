"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"
import { InstagramPost } from "@/app/api/instagram/route"
import { useState } from "react"

interface InstagramPostCardProps {
  post: InstagramPost
}

export function InstagramPostCard({ post }: InstagramPostCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  // Get the image URL - prefer thumbnail for videos, otherwise use media_url
  const imageUrl = post.media_type === "VIDEO" && post.thumbnail_url
    ? post.thumbnail_url
    : post.media_url

  // Create accessible alt text from caption
  const altText = post.caption
    ? post.caption.substring(0, 100) + (post.caption.length > 100 ? "..." : "")
    : "Publicación de AVEPANE en Instagram"

  // Truncate caption for aria-label (max 150 chars)
  const ariaLabelCaption = post.caption
    ? post.caption.substring(0, 150) + (post.caption.length > 150 ? "..." : "")
    : "Publicación de AVEPANE"

  return (
    <Link
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-square w-full overflow-hidden rounded-xl bg-muted shadow-md transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      aria-label={`Abrir publicación en Instagram: ${ariaLabelCaption}`}
    >
      {/* Image */}
      {!imageError ? (
        <Image
          src={imageUrl}
          alt={altText}
          fill
          className={`object-cover transition-all duration-500 ease-out group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-muted">
          <Instagram className="h-12 w-12 text-muted-foreground" aria-hidden="true" />
        </div>
      )}

      {/* Loading placeholder */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 animate-pulse bg-muted" aria-hidden="true" />
      )}

      {/* Overlay with Instagram icon */}
      <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />

      {/* Instagram icon overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <div className="rounded-full bg-white/90 p-3 shadow-lg">
          <Instagram className="h-6 w-6 text-[#F37B24]" aria-hidden="true" />
        </div>
      </div>

      {/* Media type indicator */}
      {post.media_type !== "IMAGE" && (
        <div className="absolute top-3 right-3 rounded-full bg-black/60 px-2 py-1">
          <span className="text-xs font-medium text-white">
            {post.media_type === "VIDEO" ? "Video" : "Carousel"}
          </span>
        </div>
      )}
    </Link>
  )
}
