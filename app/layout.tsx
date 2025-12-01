import type React from "react"
import type { Metadata, Viewport } from "next"
import { Atkinson_Hyperlegible, Nunito_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const nunitoSans = Nunito_Sans({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AVEPANE - Asociación Venezolana de Padres y Amigos de Niños Excepcionales",
  description:
    "Organización dedicada al desarrollo integral de niños, jóvenes y adultos con discapacidad intelectual mediante programas de inserción laboral, empleo protegido y empleo con apoyo.",
  keywords:
    "AVEPANE, discapacidad intelectual, inserción laboral, empleo protegido, Venezuela, educación especial, inclusión",
  authors: [{ name: "AVEPANE" }],
  openGraph: {
    title: "AVEPANE - Asociación Venezolana de Padres y Amigos de Niños Excepcionales",
    description: "Organización dedicada al desarrollo integral de personas con discapacidad intelectual",
    type: "website",
    locale: "es_VE",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#F37B24",
  width: "device-width",
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${atkinsonHyperlegible.variable} ${nunitoSans.variable}`}>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-to-main">
          Saltar al contenido principal
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
