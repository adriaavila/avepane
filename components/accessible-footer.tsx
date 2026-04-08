import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, Phone, MapPin, GraduationCap, ExternalLink, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  CONTACT_EMAIL,
  FACEBOOK_PAGE_URL,
  INSTAGRAM_PROFILE_URL,
  PRIMARY_PHONE_HREF,
  PRIMARY_PHONE_LABEL,
  SECONDARY_PHONE_HREF,
  SECONDARY_PHONE_LABEL,
  YOUTUBE_CHANNEL_URL,
} from "@/lib/social-links"

export function AccessibleFooter() {
  const quickLinks = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/avepane/nosotros" },
    { name: "Programas", href: "/programas" },
    { name: "Actualidad", href: "/actualidad" },
  ]

  const programs = [
    { name: "Inserción Laboral", href: "/programas#insercion-laboral" },
    { name: "Empleo Protegido", href: "/programas#empleo-protegido" },
    { name: "Empleo con Apoyo", href: "/programas#empleo-apoyo" },
  ]

  const resources = [
    { name: "Aliados Estratégicos", href: "/aliados" },
    { name: "Voluntariado", href: "/avepane/voluntarios" },
    { name: "Vitrina virtual", href: "/#bazar-virtual" },
    { name: "Contacto", href: "/contacto" },
  ]

  return (
    <footer className="bg-accent text-accent-foreground" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and description */}
          <div className="space-y-4">
            <Image src="/images/avepane_vector_negativo2.svg" alt="Logo AVEPANE" width={80} height={80} className="h-20 w-auto" />
            <p className="text-sm leading-relaxed">Asociación Venezolana de Padres y Amigos de Niños Excepcionales</p>
            <div className="flex gap-4">
              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                aria-label="Visitar Facebook de AVEPANE"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                aria-label="Visitar Instagram de AVEPANE"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                aria-label="Visitar YouTube de AVEPANE"
              >
                <Youtube className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2" role="list">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Nuestros programas</h3>
            <ul className="space-y-2" role="list">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link
                    href={program.href}
                    className="text-sm hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded transition-colors"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3" role="list">
              <li className="flex gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm leading-relaxed">Caracas, Venezuela</span>
              </li>
              <li className="flex gap-2">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="flex flex-col gap-1">
                  <a
                    href={PRIMARY_PHONE_HREF}
                    className="text-sm hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  >
                    {PRIMARY_PHONE_LABEL}
                  </a>
                  <a
                    href={SECONDARY_PHONE_HREF}
                    className="text-sm hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  >
                    {SECONDARY_PHONE_LABEL}
                  </a>
                </div>
              </li>
              <li className="flex gap-2">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* IU AVEPANE Section */}
        <div className="mt-12 border-t border-accent-foreground/20 pt-8">
          <div className="flex flex-col items-center justify-center gap-4 mb-6">
            <div className="text-center max-w-2xl space-y-3">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/20 mb-2">
                <GraduationCap className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-lg font-semibold">Instituto Universitario AVEPANE</h3>
              <p className="text-sm leading-relaxed text-pretty">
                Conoce nuestro instituto universitario dedicado a la formación de profesionales en Educación Especial y carreras afines.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-accent-foreground/30 text-black hover:bg-primary hover:text-primary-foreground hover:border-primary"
              >
                <a
                  href="http://iua.edu.ve/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Visitar IU AVEPANE
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
          <p className="text-center text-sm">© {new Date().getFullYear()} AVEPANE. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
