"use client"

import { useId, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  FACEBOOK_PAGE_URL,
  INSTAGRAM_PROFILE_URL,
  OFFICIAL_LINKS_HUB_URL,
  WEBSITE_URL,
  WHATSAPP_URL,
  YOUTUBE_CHANNEL_URL,
} from "@/lib/social-links"
import { ExternalLink, Facebook, Globe2, Instagram, MessageCircle, X, Youtube } from "lucide-react"

const CHANNELS = [
  {
    name: "WhatsApp",
    description: "Escríbenos directo",
    href: WHATSAPP_URL,
    icon: MessageCircle,
    accentClassName: "bg-[#25D366]/12 text-[#25D366] border-[#25D366]/20",
  },
  {
    name: "Instagram",
    description: "Actividades y logros",
    href: INSTAGRAM_PROFILE_URL,
    icon: Instagram,
    accentClassName: "bg-primary/10 text-primary border-primary/20",
  },
  {
    name: "Facebook",
    description: "Comunidad AVEPANE",
    href: FACEBOOK_PAGE_URL,
    icon: Facebook,
    accentClassName: "bg-[#1877F2]/12 text-[#1877F2] border-[#1877F2]/20",
  },
  {
    name: "YouTube",
    description: "Videos y contenidos",
    href: YOUTUBE_CHANNEL_URL,
    icon: Youtube,
    accentClassName: "bg-[#FF0000]/10 text-[#FF0000] border-[#FF0000]/20",
  },
]

export function OfficialChannelsWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const panelId = useId()

  return (
    <div className="fixed bottom-24 left-4 z-40 md:bottom-4">
      <div
        className={cn(
          "absolute bottom-full left-0 mb-3 w-[min(20rem,calc(100vw-2rem))] rounded-2xl border border-border/70 bg-background/95 p-4 shadow-2xl backdrop-blur-sm transition-all duration-200",
          isOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0",
        )}
        id={panelId}
        aria-hidden={!isOpen}
      >
        <div className="mb-4 space-y-1">
          <p className="font-heading text-lg font-semibold text-foreground">Canales oficiales</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Accede rápido a nuestros medios de atención, redes y enlaces verificados.
          </p>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          {CHANNELS.map((channel) => {
            const Icon = channel.icon

            return (
              <a
                key={channel.name}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-border/70 bg-background p-3 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border",
                      channel.accentClassName,
                    )}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-foreground">{channel.name}</p>
                    <p className="text-xs leading-relaxed text-muted-foreground">{channel.description}</p>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        <div className="mt-3 border-t border-border/70 pt-3">
          <a
            href={OFFICIAL_LINKS_HUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl bg-secondary/30 px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setIsOpen(false)}
          >
            Ver todos los enlaces oficiales
            <ExternalLink className="h-4 w-4 text-primary" aria-hidden="true" />
          </a>
          <a
            href={WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setIsOpen(false)}
          >
            <Globe2 className="h-4 w-4" aria-hidden="true" />
            avepane.org
          </a>
        </div>
      </div>

      <Button
        type="button"
        size="sm"
        className="rounded-full bg-primary px-4 py-5 text-primary-foreground shadow-lg hover:bg-primary/90"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isOpen ? "Cerrar canales oficiales" : "Abrir canales oficiales"}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="inline-flex items-center gap-2">
          {isOpen ? <X className="h-4 w-4" aria-hidden="true" /> : <MessageCircle className="h-4 w-4" aria-hidden="true" />}
          <span className="font-medium">Canales oficiales</span>
        </span>
      </Button>
    </div>
  )
}
