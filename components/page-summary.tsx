"use client"

import { useEffect } from "react"
import { useTTS } from "@/components/tts-context"

export function PageSummary({ text }: { text: string }) {
    const { setSummary } = useTTS()

    useEffect(() => {
        setSummary(text)
        return () => setSummary(null)
    }, [text, setSummary])

    return null
}
