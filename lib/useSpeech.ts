"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { cleanTextForSpeech } from "./text-cleaner"

// ============================================================================
// Types
// ============================================================================

export interface UseSpeechOptions {
  pitch?: number  // default: 1.1 (slightly warmer female tone)
  rate?: number   // default: 0.95 (clear and calm pace)
}

export interface UseSpeechReturn {
  speak: (text: string, title?: string) => void
  pause: () => void
  resume: () => void
  stop: () => void
  isPlaying: boolean
  isPaused: boolean
  isSupported: boolean
  voicesLoaded: boolean
}

// ============================================================================
// Constants
// ============================================================================

const DEFAULT_PITCH = 1.1
const DEFAULT_RATE = 0.95

// ============================================================================
// Browser Detection
// ============================================================================

type BrowserType = 'chrome' | 'safari' | 'edge' | 'other'

function detectBrowser(): BrowserType {
  if (typeof window === 'undefined') return 'other'
  
  const ua = navigator.userAgent
  
  // Edge must be checked first (it includes "Chrome" in UA)
  if (/Edg/.test(ua)) return 'edge'
  
  // Chrome (but not Edge)
  if (/Chrome/.test(ua) && /Google Inc/.test(navigator.vendor)) return 'chrome'
  
  // Safari (macOS/iOS)
  if (/Safari/.test(ua) && /Apple/.test(navigator.vendor)) return 'safari'
  
  return 'other'
}

// ============================================================================
// Voice Selection
// ============================================================================

/**
 * Gets the best native voice for Spanish TTS based on browser.
 * 
 * Priority order:
 * - Chrome/Android: "Google español"
 * - Safari/iOS/macOS: "Monica" > "Paulina" > "Lucia"
 * - Edge/Windows: "Microsoft Helena Online (Natural)"
 * - Fallback: Any Spanish voice with "Premium", "Natural", or "Neural" in name
 */
export function getBestNativeVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  if (!voices || voices.length === 0) return null
  
  const browser = detectBrowser()
  const spanishVoices = voices.filter(v => v.lang.startsWith('es'))
  
  // Priority 1: Browser-specific preferred voices
  const priorityMap: Record<BrowserType, string[]> = {
    chrome: ['Google español'],
    safari: ['Monica', 'Paulina', 'Lucia'],
    edge: ['Microsoft Helena Online (Natural)'],
    other: []
  }
  
  const priorities = priorityMap[browser]
  
  for (const name of priorities) {
    const match = spanishVoices.find(v => v.name.includes(name))
    if (match) return match
  }
  
  // Priority 2: Premium/Natural/Neural voices (any Spanish)
  const premiumVoice = spanishVoices.find(v => 
    /Premium|Natural|Neural/i.test(v.name)
  )
  if (premiumVoice) return premiumVoice
  
  // Priority 3: Any Spanish voice
  if (spanishVoices.length > 0) return spanishVoices[0]
  
  // Last resort: first available voice
  return voices[0] || null
}

// ============================================================================
// Text Chunking
// ============================================================================

/**
 * Splits text into chunks by sentence boundaries.
 * This prevents the native API from cutting off mid-paragraph on long texts.
 */
function splitIntoChunks(text: string): string[] {
  // Split by sentence-ending punctuation, keeping the delimiter
  return text
    .split(/(?<=[.?!¿¡])\s+/)
    .filter(chunk => chunk.trim().length > 0)
}

// ============================================================================
// Voice Loading Promise
// ============================================================================

/**
 * Returns a promise that resolves when voices are loaded.
 * Handles the async nature of voice loading in different browsers.
 */
function waitForVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    const synth = window.speechSynthesis
    
    // Try to get voices immediately
    let voices = synth.getVoices()
    if (voices.length > 0) {
      resolve(voices)
      return
    }
    
    // Set up the event listener for async loading
    const handleVoicesChanged = () => {
      voices = synth.getVoices()
      if (voices.length > 0) {
        synth.onvoiceschanged = null
        resolve(voices)
      }
    }
    
    synth.onvoiceschanged = handleVoicesChanged
    
    // Fallback timeouts for browsers that may not fire the event
    const timeouts = [50, 100, 250, 500, 1000]
    const timeoutIds: NodeJS.Timeout[] = []
    
    timeouts.forEach(delay => {
      timeoutIds.push(setTimeout(() => {
        voices = synth.getVoices()
        if (voices.length > 0) {
          synth.onvoiceschanged = null
          timeoutIds.forEach(id => clearTimeout(id))
          resolve(voices)
        }
      }, delay))
    })
  })
}

// ============================================================================
// useSpeech Hook
// ============================================================================

export function useSpeech(options: UseSpeechOptions = {}): UseSpeechReturn {
  const { pitch = DEFAULT_PITCH, rate = DEFAULT_RATE } = options
  
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isSupported, setIsSupported] = useState(false)
  const [voicesLoaded, setVoicesLoaded] = useState(false)
  
  const synthRef = useRef<SpeechSynthesis | null>(null)
  const voicesRef = useRef<SpeechSynthesisVoice[]>([])
  const chunksRef = useRef<string[]>([])
  const currentChunkIndexRef = useRef(0)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)
  
  // Initialize speech synthesis and load voices
  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return
    }
    
    setIsSupported(true)
    synthRef.current = window.speechSynthesis
    
    // Load voices asynchronously
    waitForVoices().then(voices => {
      voicesRef.current = voices
      setVoicesLoaded(true)
    })
    
    // Cleanup on unmount
    return () => {
      if (synthRef.current) {
        synthRef.current.cancel()
      }
      if (window.speechSynthesis.onvoiceschanged) {
        window.speechSynthesis.onvoiceschanged = null
      }
    }
  }, [])
  
  // Play the next chunk in the queue
  const playNextChunk = useCallback(() => {
    const synth = synthRef.current
    if (!synth || currentChunkIndexRef.current >= chunksRef.current.length) {
      // All chunks completed
      setIsPlaying(false)
      setIsPaused(false)
      chunksRef.current = []
      currentChunkIndexRef.current = 0
      return
    }
    
    const chunkText = chunksRef.current[currentChunkIndexRef.current]
    const utterance = new SpeechSynthesisUtterance(chunkText)
    
    // Apply voice
    const voice = getBestNativeVoice(voicesRef.current)
    if (voice) {
      utterance.voice = voice
      utterance.lang = voice.lang
    } else {
      utterance.lang = 'es-VE' // Fallback to Venezuelan Spanish
    }
    
    // Apply tuning constants
    utterance.pitch = pitch
    utterance.rate = rate
    utterance.volume = 1.0
    
    // Event handlers
    utterance.onstart = () => {
      setIsPlaying(true)
      setIsPaused(false)
    }
    
    utterance.onend = () => {
      currentChunkIndexRef.current++
      playNextChunk() // Play next chunk
    }
    
    utterance.onerror = (event) => {
      // Safely extract error type
      let errorType: string | undefined
      try {
        errorType = (event as SpeechSynthesisErrorEvent)?.error
      } catch {
        errorType = undefined
      }
      
      // Don't log "interrupted" or "canceled" as errors (these are expected)
      if (errorType && errorType !== 'interrupted' && errorType !== 'canceled') {
        console.warn('Speech synthesis error:', errorType)
      }
      
      // Stop playback on error
      setIsPlaying(false)
      setIsPaused(false)
      chunksRef.current = []
      currentChunkIndexRef.current = 0
      utteranceRef.current = null
    }
    
    utteranceRef.current = utterance
    
    try {
      synth.speak(utterance)
    } catch (error) {
      console.error('Error starting speech synthesis:', error)
      setIsPlaying(false)
      setIsPaused(false)
    }
  }, [pitch, rate])
  
  // Main speak function
  const speak = useCallback((text: string, title?: string) => {
    const synth = synthRef.current
    if (!synth || !isSupported || !text) return
    
    // Cancel any ongoing speech
    if (synth.speaking || synth.pending) {
      synth.cancel()
    }
    
    // Reset state
    setIsPlaying(false)
    setIsPaused(false)
    
    // Prepare text: add title, clean, and chunk
    const fullText = title ? `${title}. ${text}` : text
    const cleanedText = cleanTextForSpeech(fullText)
    const chunks = splitIntoChunks(cleanedText)
    
    if (chunks.length === 0) return
    
    // Store chunks and start playing
    chunksRef.current = chunks
    currentChunkIndexRef.current = 0
    
    // Start playback (must be synchronous for Chrome user activation)
    playNextChunk()
  }, [isSupported, playNextChunk])
  
  // Pause speech
  const pause = useCallback(() => {
    const synth = synthRef.current
    if (!synth || !isPlaying) return
    
    try {
      synth.pause()
      setIsPaused(true)
    } catch (error) {
      console.error('Error pausing speech:', error)
    }
  }, [isPlaying])
  
  // Resume speech
  const resume = useCallback(() => {
    const synth = synthRef.current
    if (!synth || !isPaused) return
    
    try {
      synth.resume()
      setIsPaused(false)
    } catch (error) {
      console.error('Error resuming speech:', error)
    }
  }, [isPaused])
  
  // Stop speech completely
  const stop = useCallback(() => {
    const synth = synthRef.current
    if (!synth) return
    
    try {
      synth.cancel()
      setIsPlaying(false)
      setIsPaused(false)
      chunksRef.current = []
      currentChunkIndexRef.current = 0
      utteranceRef.current = null
    } catch (error) {
      console.error('Error stopping speech:', error)
      setIsPlaying(false)
      setIsPaused(false)
    }
  }, [])
  
  return {
    speak,
    pause,
    resume,
    stop,
    isPlaying,
    isPaused,
    isSupported,
    voicesLoaded
  }
}
