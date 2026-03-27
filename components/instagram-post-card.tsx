"use client"

import { startTransition, useEffect, useEffectEvent, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, Instagram } from "lucide-react"
import { InstagramPost, InstagramPostMediaItem } from "@/lib/instagram-feed"
import { cn } from "@/lib/utils"

interface InstagramPostCardProps {
  post: InstagramPost
}

const postDateFormatter = new Intl.DateTimeFormat("es-VE", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
})

function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text
  }

  return `${text.slice(0, maxLength - 1).trimEnd()}...`
}

function getMediaItems(post: InstagramPost) {
  if (post.items && post.items.length > 0) {
    return post.items
  }

  return [
    {
      id: post.id,
      media_url: post.media_url,
      media_type: post.media_type === "VIDEO" ? "VIDEO" : "IMAGE",
      thumbnail_url: post.thumbnail_url,
    } satisfies InstagramPostMediaItem,
  ]
}

function InstagramMediaSlide({
  item,
  altText,
  fit = "contain",
}: {
  item: InstagramPostMediaItem
  altText: string
  fit?: "contain" | "cover"
}) {
  if (item.media_type === "VIDEO") {
    return (
      <video
        className="h-full w-full bg-black object-contain"
        controls
        playsInline
        poster={item.thumbnail_url}
        preload="metadata"
      >
        <source src={item.media_url} type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>
    )
  }

  return (
    <img
      src={item.media_url}
      alt={altText}
      className={cn("h-full w-full bg-black", fit === "contain" ? "object-contain" : "object-cover")}
      draggable="false"
      loading="lazy"
    />
  )
}

export function InstagramPostCard({ post }: InstagramPostCardProps) {
  const mediaItems = getMediaItems(post)
  const hasCarousel = mediaItems.length > 1
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const captionPreview = truncateText(post.caption || "Publicación de AVEPANE", 180)
  const formattedDate = postDateFormatter.format(new Date(post.timestamp))
  const mediaLabel = hasCarousel ? `Carrusel ${activeIndex + 1}/${mediaItems.length}` : post.media_type === "VIDEO" ? "Video" : "Instagram"

  const syncActiveIndex = useEffectEvent(() => {
    const track = trackRef.current

    if (!track) {
      return
    }

    const nextIndex = Math.round(track.scrollLeft / Math.max(track.clientWidth, 1))
    const boundedIndex = Math.max(0, Math.min(mediaItems.length - 1, nextIndex))

    startTransition(() => {
      setActiveIndex((currentIndex) => (currentIndex === boundedIndex ? currentIndex : boundedIndex))
    })
  })

  const pauseInactiveVideos = useEffectEvent(() => {
    const track = trackRef.current

    if (!track) {
      return
    }

    track.querySelectorAll("video").forEach((videoElement, index) => {
      if (index !== activeIndex) {
        videoElement.pause()
      }
    })
  })

  useEffect(() => {
    if (!hasCarousel) {
      return
    }

    const track = trackRef.current

    if (!track) {
      return
    }

    let animationFrame = 0

    const handleScroll = () => {
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(() => {
        syncActiveIndex()
      })
    }

    track.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      cancelAnimationFrame(animationFrame)
      track.removeEventListener("scroll", handleScroll)
    }
  }, [hasCarousel, syncActiveIndex])

  useEffect(() => {
    pauseInactiveVideos()
  }, [activeIndex, pauseInactiveVideos])

  function goToSlide(nextIndex: number) {
    const track = trackRef.current

    if (!track) {
      return
    }

    const boundedIndex = Math.max(0, Math.min(mediaItems.length - 1, nextIndex))

    startTransition(() => {
      setActiveIndex(boundedIndex)
    })

    track.scrollTo({
      left: track.clientWidth * boundedIndex,
      behavior: "smooth",
    })
  }

  return (
    <article className="overflow-hidden rounded-[1.5rem] border border-border/60 bg-card shadow-[0_18px_40px_-28px_rgba(44,44,44,0.45)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(243,123,36,0.22),_transparent_55%),linear-gradient(180deg,_rgba(32,32,32,0.35),_rgba(11,11,11,0.92))]">
        <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-3 p-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
            <Instagram className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{mediaLabel}</span>
          </div>
          <a
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#F37B24] shadow-lg transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/60"
            aria-label="Abrir publicación original en Instagram"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {hasCarousel ? (
          <>
            <div
              ref={trackRef}
              className="instagram-carousel-track flex h-full snap-x snap-mandatory overflow-x-auto scroll-smooth touch-pan-x"
              aria-label={`Carrusel de Instagram con ${mediaItems.length} elementos`}
            >
              {mediaItems.map((item, index) => {
                const itemAltText = `${truncateText(post.caption || "Publicación de AVEPANE", 110)} (${index + 1} de ${mediaItems.length})`

                return (
                  <div key={item.id} className="h-full w-full shrink-0 snap-center">
                    <InstagramMediaSlide item={item} altText={itemAltText} fit="contain" />
                  </div>
                )
              })}
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3">
              <button
                type="button"
                className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white shadow-lg backdrop-blur-sm transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-35"
                onClick={() => goToSlide(activeIndex - 1)}
                disabled={activeIndex === 0}
                aria-label="Mostrar elemento anterior del carrusel"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white shadow-lg backdrop-blur-sm transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-35"
                onClick={() => goToSlide(activeIndex + 1)}
                disabled={activeIndex === mediaItems.length - 1}
                aria-label="Mostrar elemento siguiente del carrusel"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-center gap-2 px-4 pb-4">
              {mediaItems.map((item, index) => (
                <button
                  key={`${item.id}-dot`}
                  type="button"
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white",
                    activeIndex === index ? "w-8 bg-white" : "w-2.5 bg-white/45 hover:bg-white/70"
                  )}
                  onClick={() => goToSlide(index)}
                  aria-label={`Ir al elemento ${index + 1} del carrusel`}
                  aria-pressed={activeIndex === index}
                />
              ))}
            </div>
          </>
        ) : (
          <InstagramMediaSlide
            item={mediaItems[0]}
            altText={truncateText(post.caption || "Publicación de AVEPANE", 110)}
            fit={mediaItems[0]?.media_type === "VIDEO" ? "contain" : "cover"}
          />
        )}
      </div>

      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
          <span className="font-semibold uppercase tracking-[0.22em] text-primary">AVEPANE</span>
          <time dateTime={post.timestamp}>{formattedDate}</time>
        </div>

        <p className="text-sm leading-relaxed text-foreground/85">
          {captionPreview}
        </p>

        <div className="flex items-center justify-between gap-3">
          <p className="text-xs leading-relaxed text-muted-foreground">
            {hasCarousel
              ? "Desliza para recorrer todas las imágenes y videos del carrusel."
              : post.media_type === "VIDEO"
                ? "Puedes reproducir el video aquí mismo o abrir la publicación original."
                : "Publicación reciente de AVEPANE en Instagram."}
          </p>
          <a
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Ver post
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  )
}
