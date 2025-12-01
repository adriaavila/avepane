import type React from "react"
import { AccessibleHeader } from "./accessible-header"
import { AccessibleFooter } from "./accessible-footer"
import { TextSizeToggle } from "./text-size-toggle"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <AccessibleHeader />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <AccessibleFooter />
      <TextSizeToggle />
    </div>
  )
}
