"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

interface TextToSpeechProps {
  text: string
  title?: string
  className?: string
  ariaLabel?: string
}

export function TextToSpeech({ text, title, className, ariaLabel }: TextToSpeechProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isSupported, setIsSupported] = useState(false)
  const [voicesLoaded, setVoicesLoaded] = useState(false)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)
  const synthRef = useRef<SpeechSynthesis | null>(null)
  const voicesRef = useRef<SpeechSynthesisVoice[]>([])

  // Function to find the best Spanish voice (prefer Venezuelan)
  const findBestSpanishVoice = (): SpeechSynthesisVoice | null => {
    const voices = voicesRef.current

    if (!voices || voices.length === 0) return null

    // Priority order: es-VE (Venezuelan) > es-MX (Mexican) > es-ES (Spain) > es (any Spanish)
    const priorities = [
      (v: SpeechSynthesisVoice) => v.lang.toLowerCase().startsWith("es-ve"),
      (v: SpeechSynthesisVoice) => v.lang.toLowerCase().startsWith("es-mx"),
      (v: SpeechSynthesisVoice) => v.lang.toLowerCase().startsWith("es-es"),
      (v: SpeechSynthesisVoice) => v.lang.toLowerCase().startsWith("es"),
    ]

    for (const priority of priorities) {
      const voice = voices.find(priority)
      if (voice) return voice
    }

    // Fallback: return first available voice
    return voices[0] || null
  }

  useEffect(() => {
    // Check if browser supports Speech Synthesis API
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return
    }

    setIsSupported(true)
    synthRef.current = window.speechSynthesis

    // Load voices - they may not be immediately available
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices()
      voicesRef.current = voices
      setVoicesLoaded(voices.length > 0)
    }

    // Try to load voices immediately
    loadVoices()

    // Some browsers load voices asynchronously
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices
    }

    // Also try loading after a short delay as fallback
    const timeoutId = setTimeout(loadVoices, 100)

    // Cleanup on unmount
    return () => {
      clearTimeout(timeoutId)
      if (synthRef.current) {
        synthRef.current.cancel()
      }
      if (window.speechSynthesis.onvoiceschanged) {
        window.speechSynthesis.onvoiceschanged = null
      }
    }
  }, [])

  const handlePlay = () => {
    if (!synthRef.current || !isSupported) return

    // If paused, resume
    if (isPaused) {
      synthRef.current.resume()
      setIsPaused(false)
      setIsPlaying(true)
      return
    }

    // Cancel any ongoing speech
    synthRef.current.cancel()

    // Wait for voices to be loaded if not already
    if (!voicesLoaded) {
      const voices = window.speechSynthesis.getVoices()
      if (voices.length > 0) {
        voicesRef.current = voices
        setVoicesLoaded(true)
      } else {
        // If still no voices, try to use default
        console.warn("No voices available, using default")
      }
    }

    // Create new utterance
    const utterance = new SpeechSynthesisUtterance()
    const fullText = title ? `${title}. ${text}` : text

    utterance.text = fullText

    // Find and set the best Spanish voice
    const voice = findBestSpanishVoice()
    if (voice) {
      utterance.voice = voice
      utterance.lang = voice.lang
    } else {
      // Fallback to language code (prefer Venezuelan Spanish)
      utterance.lang = "es-VE"
    }

    utterance.rate = 1.0 // Normal speed
    utterance.pitch = 1.0 // Normal pitch
    utterance.volume = 1.0 // Full volume

    // Event handlers
    utterance.onstart = () => {
      setIsPlaying(true)
      setIsPaused(false)
    }

    utterance.onend = () => {
      setIsPlaying(false)
      setIsPaused(false)
    }

    utterance.onerror = (event) => {
      // Safely extract error information
      // Some browsers fire error events with empty objects, so we need to be defensive
      let errorType: string | undefined
      
      try {
        errorType = (event as SpeechSynthesisErrorEvent)?.error
      } catch {
        // If we can't access the error property, treat as unknown
        errorType = undefined
      }
      
      // Only log if we have a meaningful error type
      // Ignore empty error objects or events without error codes
      if (errorType) {
        const errorInfo: Record<string, unknown> = { error: errorType }
        
        try {
          if (event?.type) errorInfo.type = event.type
          if (typeof (event as SpeechSynthesisErrorEvent)?.charIndex === "number") {
            errorInfo.charIndex = (event as SpeechSynthesisErrorEvent).charIndex
          }
          if ((event as SpeechSynthesisErrorEvent)?.char) {
            errorInfo.char = (event as SpeechSynthesisErrorEvent).char
          }
          if (typeof (event as SpeechSynthesisErrorEvent)?.elapsedTime === "number") {
            errorInfo.elapsed = (event as SpeechSynthesisErrorEvent).elapsedTime
          }
        } catch {
          // If accessing properties fails, just use the error type
        }
        
        // Only log critical errors, not warnings or normal interruptions
        if (errorType === "network" || errorType === "synthesis" || errorType === "synthesis-unavailable" || errorType === "audio-busy" || errorType === "not-allowed") {
          console.error("Speech synthesis error:", errorInfo)
        } else if (errorType !== "interrupted" && errorType !== "canceled") {
          // Log other errors but not interruptions/cancellations (these are normal)
          console.warn("Speech synthesis warning:", errorInfo)
        }
      }
      // If errorType is undefined or empty, silently handle it (might be a false positive)

      setIsPlaying(false)
      setIsPaused(false)

      // If it's a network error or not-allowed, try again with a simpler approach
      if (errorType && (errorType === "network" || errorType === "not-allowed" || errorType === "synthesis-unavailable")) {
        // Retry once with default settings
        setTimeout(() => {
          if (synthRef.current && !synthRef.current.speaking) {
            const retryUtterance = new SpeechSynthesisUtterance(fullText)
            retryUtterance.lang = "es"
            retryUtterance.rate = 1.0
            retryUtterance.pitch = 1.0
            retryUtterance.volume = 1.0

            retryUtterance.onstart = () => {
              setIsPlaying(true)
              setIsPaused(false)
            }

            retryUtterance.onend = () => {
              setIsPlaying(false)
              setIsPaused(false)
            }

            retryUtterance.onerror = () => {
              setIsPlaying(false)
              setIsPaused(false)
            }

            try {
              synthRef.current.speak(retryUtterance)
            } catch (retryError) {
              console.error("Error in retry speech synthesis:", retryError)
              setIsPlaying(false)
              setIsPaused(false)
            }
          }
        }, 500)
      }
    }

    utteranceRef.current = utterance

    try {
      synthRef.current.speak(utterance)
    } catch (error) {
      console.error("Error starting speech synthesis:", error)
      setIsPlaying(false)
      setIsPaused(false)
    }
  }

  const handlePause = () => {
    if (!synthRef.current || !isPlaying) return

    if (isPaused) {
      synthRef.current.resume()
      setIsPaused(false)
    } else {
      synthRef.current.pause()
      setIsPaused(true)
    }
  }

  const handleStop = () => {
    if (!synthRef.current) return

    synthRef.current.cancel()
    setIsPlaying(false)
    setIsPaused(false)
  }

  if (!isSupported) {
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
        size="sm"
        onClick={isPlaying && !isPaused ? handlePause : handlePlay}
        aria-label={isPlaying && !isPaused ? "Pausar lectura" : "Iniciar lectura en voz alta"}
        className="flex items-center gap-2"
        disabled={!text}
      >
        {isPlaying && !isPaused ? (
          <>
            <Pause className="h-4 w-4" aria-hidden="true" />
            <span>Pausar</span>
            <span className="sr-only">Pausar lectura</span>
          </>
        ) : (
          <>
            <Play className="h-4 w-4" aria-hidden="true" />
            <span>Escuchar</span>
            <span className="sr-only">Iniciar lectura en voz alta</span>
          </>
        )}
      </Button>

      {isPlaying && (
        <Button
          variant="outline"
          size="sm"
          onClick={handleStop}
          aria-label="Detener lectura"
          className="flex items-center gap-2"
        >
          <VolumeX className="h-4 w-4" aria-hidden="true" />
          <span>Detener</span>
          <span className="sr-only">Detener lectura</span>
        </Button>
      )}

      {isPlaying && (
        <span className="text-sm text-muted-foreground" aria-live="polite" aria-atomic="true">
          <span className="sr-only">Estado: </span>
          {isPaused ? "Pausado" : "Leyendo..."}
        </span>
      )}
    </div>
  )
}

