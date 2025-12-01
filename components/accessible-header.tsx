"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
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

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
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
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            >
              <Image
                src="/images/logo-avepane.jpg"
                alt="Logo AVEPANE - Asociación Venezolana de Padres y Amigos de Niños Excepcionales"
                width={60}
                height={60}
                className="h-14 w-auto"
                priority
              />
              <span className="sr-only">AVEPANE - Inicio</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-2">
            {navigation.map((item) => {
              if (item.subItems) {
                return (
                  <NavigationMenu key={item.name}>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-transparent hover:bg-secondary/50 text-foreground font-sans text-base">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[200px] gap-1 p-2">
                            {item.subItems.map((subItem) => (
                              <li key={subItem.name}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subItem.href}
                                    className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    {subItem.name}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                )
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-md px-4 py-2 text-base font-medium text-foreground hover:bg-secondary/50 hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
                >
                  {item.name}
                </Link>
              )
            })}

            <Button asChild className="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              <Link href="/contacto#donar">Donar</Link>
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
          <div className="lg:hidden border-t border-border" id="mobile-menu">
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
                <Link href="/contacto#donar" onClick={() => setMobileMenuOpen(false)}>
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
