import type React from "react"
import { AccessibleHeader } from "./accessible-header"
import { AccessibleFooter } from "./accessible-footer"
import { AccessibilityControls } from "./accessibility-controls"
import { TTSProvider } from "./tts-context"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <TTSProvider>
      <div className="flex min-h-screen flex-col">
        <AccessibleHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <AccessibleFooter />
        <AccessibilityControls />
      </div>
    </TTSProvider>
  )
}
