"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Calendar, ChevronDown, ChevronUp } from "lucide-react"
import { TextToSpeech } from "@/components/text-to-speech"

interface BlogPost {
  id: number
  title: string
  date: string
  category: string
  description: string
  image: string
  fullContent?: string
}

interface BlogPostCardProps {
  event: BlogPost
}

export function BlogPostCard({ event }: BlogPostCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const togglePost = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <Card className="border-border hover:shadow-lg transition-shadow bg-background overflow-hidden flex flex-col">
      <div className="relative h-48">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={`${event.title} - ${event.description}`}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
            {event.category}
          </span>
        </div>
      </div>

      <CardContent className="p-6 space-y-4 flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" aria-hidden="true" />
          <time dateTime={event.date}>{event.date}</time>
        </div>

        <h3 className="font-heading text-xl font-semibold text-balance">{event.title}</h3>

        <p className="text-muted-foreground leading-relaxed text-pretty">{event.description}</p>

        {event.fullContent && (
          <>
            <div className="mt-4">
              <TextToSpeech
                text={event.fullContent}
                title={event.title}
                ariaLabel={`Controles de lectura para: ${event.title}`}
                className="mb-4"
              />
            </div>

            <div className="mt-auto">
              <Button
                variant="outline"
                onClick={togglePost}
                aria-expanded={isExpanded}
                aria-controls={`post-content-${event.id}`}
                className="w-full flex items-center justify-center gap-2"
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="h-4 w-4" aria-hidden="true" />
                    <span>Leer menos</span>
                    <span className="sr-only">Ocultar contenido completo del artículo</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    <span>Leer más</span>
                    <span className="sr-only">Mostrar contenido completo del artículo</span>
                  </>
                )}
              </Button>
            </div>

            {isExpanded && (
              <article
                id={`post-content-${event.id}`}
                className="mt-4 pt-4 border-t border-border space-y-4"
                aria-label={`Contenido completo: ${event.title}`}
              >
                <div className="prose prose-sm max-w-none">
                  <p className="text-foreground leading-relaxed text-pretty whitespace-pre-line">
                    {event.fullContent}
                  </p>
                </div>
                <div className="pt-2">
                  <TextToSpeech
                    text={event.fullContent}
                    title={event.title}
                    ariaLabel={`Controles de lectura para el contenido completo de: ${event.title}`}
                  />
                </div>
              </article>
            )}
          </>
        )}
      </CardContent>
    </Card>
  )
}

