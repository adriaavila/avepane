"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function AccessibleHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigation = [
    { name: "Inicio", href: "/" },
    {
      name: "AVEPANE",
      href: "/avepane",
      subItems: [
        { name: "Nosotros", href: "/avepane/nosotros" },
        { name: "Voluntarios", href: "/avepane/voluntarios" },
        { name: "Vitrina", href: "/avepane/vitrina" },
      ],
    },
    {
      name: "Programas",
      href: "/programas",
      subItems: [
        { name: "Inserción Laboral", href: "/programas#insercion-laboral" },
        { name: "Empleo Protegido", href: "/programas#empleo-protegido" },
        { name: "Empleo con Apoyo", href: "/programas#empleo-apoyo" },
      ],
    },
    { name: "Actualidad", href: "/actualidad" },
    { name: "Aliados", href: "/aliados" },
    { name: "Contacto", href: "/contacto" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Navegación principal">
        <div className="flex min-h-16 sm:h-20 items-center justify-between py-2 sm:py-0 gap-2">
          {/* Logo */}
          <div className="flex-shrink-0 min-w-0">
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
              aria-label="AVEPANE - Asociación Venezolana de Padres y Amigos de Niños Excepcionales - Ir a inicio"
            >
              <Image
                src="/images/avepane_vector_logo.svg"
                alt="Logo AVEPANE"
                width={60}
                height={60}
                className="h-10 w-auto sm:h-14 flex-shrink-0"
                priority
              />
              <div className="flex flex-col font-heading font-bold text-foreground text-xs sm:text-sm md:text-base lg:text-lg leading-tight max-w-[140px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-none">
                <span className="whitespace-nowrap">Asociación Venezolana de Padres y</span>
                <span className="whitespace-nowrap">Amigos de Niños Excepcionales</span>
              </div>
              <span className="sr-only">Asociación Venezolana de Padres y Amigos de Niños Excepcionales</span>
            </Link>
          </div>

          {/* Desktop Navigation - deferred until mount to avoid Radix useId hydration mismatch (React 19.2) */}
          <div className="hidden lg:flex lg:items-center lg:gap-1 xl:gap-2 flex-shrink min-w-0">
            {mounted ? (
              <NavigationMenu viewport={false}>
                <NavigationMenuList className="gap-1">
                  {navigation.map((item) => {
                    if (item.subItems) {
                      return (
                        <NavigationMenuItem key={item.name}>
                          <NavigationMenuTrigger
                            className="bg-transparent hover:bg-secondary/50 text-foreground font-sans text-sm xl:text-base px-2 xl:px-4"
                            onClick={() => {
                              router.push(item.href)
                              setTimeout(() => {
                                window.scrollTo({ top: 0, behavior: "smooth" })
                              }, 100)
                            }}
                          >
                            {item.name}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent className="bg-popover text-[#2C2C2C]">
                            <ul className="grid w-[200px] gap-1 p-2" style={{ color: "#2C2C2C" }}>
                              {item.subItems.map((subItem) => (
                                <li key={subItem.name}>
                                  <Link
                                    href={subItem.href}
                                    className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors text-[#2C2C2C] hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    style={{ color: "#2C2C2C" }}
                                  >
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      )
                    }

                    return (
                      <NavigationMenuItem key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="rounded-md px-2 xl:px-4 py-2 text-sm xl:text-base font-medium text-foreground hover:bg-secondary/50 hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors whitespace-nowrap"
                          >
                            {item.name}
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            ) : null}
          </div>

          {/* Donate button - visible only on large screens */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Button asChild className="ml-2 xl:ml-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold whitespace-nowrap text-sm xl:text-base">
              <Link href="/donar">Donar</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div 
            className="lg:hidden border-t border-border max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] overflow-y-auto" 
            id="mobile-menu"
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-secondary/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.subItems && (
                    <div className="ml-4 space-y-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button asChild className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/donar" onClick={() => setMobileMenuOpen(false)}>
                  Donar
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
