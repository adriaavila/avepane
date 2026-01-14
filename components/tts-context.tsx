"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface TTSContextType {
    summary: string | null
    setSummary: (text: string | null) => void
}

const TTSContext = createContext<TTSContextType | undefined>(undefined)

export function TTSProvider({ children }: { children: ReactNode }) {
    const [summary, setSummary] = useState<string | null>(null)

    return (
        <TTSContext.Provider value={{ summary, setSummary }}>
            {children}
        </TTSContext.Provider>
    )
}

export function useTTS() {
    const context = useContext(TTSContext)
    if (context === undefined) {
        throw new Error("useTTS must be used within a TTSProvider")
    }
    return context
}
