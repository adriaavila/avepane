"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"
import { useTTS } from "@/components/tts-context"
import { TextToSpeech } from "@/components/text-to-speech"

export function AccessibilityControls() {
    const [fontSize, setFontSize] = useState(100)
    const [mounted, setMounted] = useState(false)
    const { summary } = useTTS()

    useEffect(() => {
        setMounted(true)
        const saved = localStorage.getItem("avepane-font-size")
        if (saved) {
            const size = Number.parseInt(saved)
            setFontSize(size)
            document.documentElement.style.fontSize = `${size}%`
        }
    }, [])

    const increaseFontSize = () => {
        const newSize = Math.min(fontSize + 10, 140)
        setFontSize(newSize)
        document.documentElement.style.fontSize = `${newSize}%`
        localStorage.setItem("avepane-font-size", newSize.toString())
    }

    const decreaseFontSize = () => {
        const newSize = Math.max(fontSize - 10, 80)
        setFontSize(newSize)
        document.documentElement.style.fontSize = `${newSize}%`
        localStorage.setItem("avepane-font-size", newSize.toString())
    }

    const resetFontSize = () => {
        setFontSize(100)
        document.documentElement.style.fontSize = "100%"
        localStorage.setItem("avepane-font-size", "100")
    }

    if (!mounted) return null

    return (
        <div
            className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-lg bg-background border border-border p-2 shadow-lg"
            role="toolbar"
            aria-label="Controles de accesibilidad"
        >
            {summary && (
                <>
                    <TextToSpeech text={summary} compact ariaLabel="Escuchar resumen de la página" />
                    <div className="h-6 w-px bg-border mx-1" aria-hidden="true" />
                </>
            )}

            <Button
                variant="outline"
                size="icon"
                onClick={decreaseFontSize}
                disabled={fontSize <= 80}
                aria-label="Disminuir tamaño de texto"
                className="h-10 w-10 bg-transparent"
            >
                <Minus className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
                variant="ghost"
                size="sm"
                onClick={resetFontSize}
                className="text-sm font-medium px-3 h-10 min-w-[3.5rem]"
                aria-label={`Restablecer tamaño de texto. Tamaño actual: ${fontSize}%`}
            >
                {fontSize}%
            </Button>
            <Button
                variant="outline"
                size="icon"
                onClick={increaseFontSize}
                disabled={fontSize >= 140}
                aria-label="Aumentar tamaño de texto"
                className="h-10 w-10"
            >
                <Plus className="h-4 w-4" aria-hidden="true" />
            </Button>
        </div>
    )
}
