"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, VolumeX } from "lucide-react"
import { useSpeech } from "@/lib/useSpeech"

interface TextToSpeechProps {
  text: string
  title?: string
  className?: string
  compact?: boolean
  ariaLabel?: string
}

export function TextToSpeech({ text, title, className, ariaLabel, compact = false }: TextToSpeechProps) {
  const {
    speak,
    pause,
    resume,
    stop,
    isPlaying,
    isPaused,
    isSupported,
    voicesLoaded
  } = useSpeech({
    pitch: 1.1,  // Slightly warmer female tone
    rate: 0.95   // Clear and calm pace
  })

  // Track previous text to detect changes
  const prevTextRef = useRef(text)

  // Stop playback if text changes (important for context-based switching)
  useEffect(() => {
    if (prevTextRef.current !== text && isPlaying) {
      stop()
    }
    prevTextRef.current = text
  }, [text, isPlaying, stop])

  // Handle play/pause toggle
  const handlePlayPause = () => {
    if (!text) return

    if (isPlaying && !isPaused) {
      pause()
    } else if (isPaused) {
      resume()
    } else {
      speak(text, title)
    }
  }

  // Handle stop
  const handleStop = () => {
    stop()
  }

  if (!isSupported) {
    if (compact) return null // Hide in compact mode if not supported
    return (
      <div className={className} role="status" aria-live="polite">
        <p className="text-sm text-muted-foreground">
          La función de lectura en voz alta no está disponible en tu navegador.
        </p>
      </div>
    )
  }

  return (
    <div
      className={`flex items-center gap-2 ${className || ""}`}
      role="toolbar"
      aria-label={ariaLabel || "Controles de lectura en voz alta"}
    >
      <Button
        variant="outline"
        size={compact ? "icon" : "sm"}
        onClick={handlePlayPause}
        aria-label={isPlaying && !isPaused ? "Pausar lectura" : "Iniciar lectura en voz alta"}
        className={compact ? "h-10 w-10" : "flex items-center gap-2"}
        disabled={!text || !voicesLoaded}
      >
        {isPlaying && !isPaused ? (
          <>
            <Pause className="h-4 w-4" aria-hidden="true" />
            {!compact && <span>Pausar</span>}
            <span className="sr-only">Pausar lectura</span>
          </>
        ) : (
          <>
            <Play className="h-4 w-4" aria-hidden="true" />
            {!compact && <span>Escuchar</span>}
            <span className="sr-only">Iniciar lectura en voz alta</span>
          </>
        )}
      </Button>

      {isPlaying && (
        <Button
          variant="outline"
          size={compact ? "icon" : "sm"}
          onClick={handleStop}
          aria-label="Detener lectura"
          className={compact ? "h-10 w-10" : "flex items-center gap-2"}
        >
          <VolumeX className="h-4 w-4" aria-hidden="true" />
          {!compact && <span>Detener</span>}
          <span className="sr-only">Detener lectura</span>
        </Button>
      )}

      {isPlaying && !compact && (
        <span className="text-sm text-muted-foreground" aria-live="polite" aria-atomic="true">
          <span className="sr-only">Estado: </span>
          {isPaused ? "Pausado" : "Leyendo..."}
        </span>
      )}
    </div>
  )
}
