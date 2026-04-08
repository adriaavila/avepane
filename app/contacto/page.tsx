import { MainLayout } from "@/components/main-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Clock,
  ExternalLink,
  Facebook,
  Globe2,
  Heart,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Youtube,
} from "lucide-react"
import Link from "next/link"
import { PageSummary } from "@/components/page-summary"
import {
  CONTACT_EMAIL,
  FACEBOOK_PAGE_URL,
  INSTAGRAM_PROFILE_URL,
  OFFICIAL_LINKS_HUB_URL,
  PRIMARY_PHONE_HREF,
  PRIMARY_PHONE_LABEL,
  SECONDARY_PHONE_HREF,
  SECONDARY_PHONE_LABEL,
  WEBSITE_URL,
  WHATSAPP_URL,
  YOUTUBE_CHANNEL_URL,
} from "@/lib/social-links"

const PAGE_SUMMARY =
  "Estamos aquí para ayudarte. Contáctanos por teléfono, WhatsApp, email o visítanos en nuestra sede en Caracas. También puedes acceder a nuestros canales oficiales para seguir actividades, publicaciones y vías de atención activas."

const OFFICIAL_CHANNELS = [
  {
    name: "Instagram",
    description: "Actividades, talleres y logros",
    href: INSTAGRAM_PROFILE_URL,
    icon: Instagram,
  },
  {
    name: "Facebook",
    description: "Noticias y comunidad",
    href: FACEBOOK_PAGE_URL,
    icon: Facebook,
  },
  {
    name: "YouTube",
    description: "Videos y contenidos",
    href: YOUTUBE_CHANNEL_URL,
    icon: Youtube,
  },
  {
    name: "Página web",
    description: "Información institucional",
    href: WEBSITE_URL,
    icon: Globe2,
  },
]

export const metadata = {
  title: "Contacto - AVEPANE",
  description:
    "Contáctanos para más información sobre nuestros programas, voluntariado o donaciones. Estamos aquí para ayudarte.",
}

export default function ContactPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-secondary/30 to-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
              Contáctanos
            </h1>
            <p className="text-lg leading-relaxed text-pretty md:text-xl">
              Estamos aquí para responder tus preguntas y ayudarte en lo que necesites
            </p>
            <PageSummary text={PAGE_SUMMARY} />
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 md:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl font-bold mb-6 text-balance">Información de contacto</h2>
                <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
                  Puedes comunicarte con nosotros a través de cualquiera de estos medios. Estaremos encantados de
                  atenderte.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-border bg-background">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div className="space-y-3 flex-1">
                        <div>
                          <h3 className="font-heading text-lg font-semibold">Dirección</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            Avenida La Guairita, Benzecri de Benmergui, Calle Reyna, Caracas 1050, Miranda, Venezuela
                          </p>
                        </div>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="w-full sm:w-auto"
                        >
                          <a href="#como-llegar" className="flex items-center gap-2">
                            <Navigation className="h-4 w-4" aria-hidden="true" />
                            Cómo Llegar
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-background">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-heading text-lg font-semibold">Teléfono</h3>
                        <p className="text-muted-foreground">
                          <a
                            href={PRIMARY_PHONE_HREF}
                            className="hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded transition-colors"
                          >
                            {PRIMARY_PHONE_LABEL}
                          </a>
                          <br />
                          <a
                            href={SECONDARY_PHONE_HREF}
                            className="hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded transition-colors"
                          >
                            {SECONDARY_PHONE_LABEL}
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-background">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div className="space-y-3 flex-1">
                        <div>
                          <h3 className="font-heading text-lg font-semibold">WhatsApp</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            Escríbenos directamente para orientarte sobre programas, voluntariado, donaciones o
                            alianzas.
                          </p>
                        </div>
                        <Button asChild size="sm" className="w-full sm:w-auto">
                          <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2"
                          >
                            <MessageCircle className="h-4 w-4" aria-hidden="true" />
                            Abrir WhatsApp
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-background">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-heading text-lg font-semibold">Email</h3>
                        <p className="text-muted-foreground">
                          <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded transition-colors"
                          >
                            {CONTACT_EMAIL}
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-background">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-heading text-lg font-semibold">Horario de atención</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Lunes a Viernes: 8:00 AM - 5:00 PM
                          <br />
                          Sábados: 9:00 AM - 1:00 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-6">
              <Card className="border-border bg-secondary/20">
                <CardContent className="p-6 space-y-5">
                  <div className="space-y-2">
                    <h3 className="font-heading text-lg font-semibold">Canales oficiales</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Si prefieres seguirnos o escribirnos por otros medios, aquí tienes accesos directos a nuestros
                      canales verificados.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {OFFICIAL_CHANNELS.map((channel) => {
                      const IconComponent = channel.icon

                      return (
                        <a
                          key={channel.name}
                          href={channel.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-xl border border-border bg-background px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                              <IconComponent className="h-5 w-5 text-primary" aria-hidden="true" />
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{channel.name}</p>
                              <p className="text-sm leading-relaxed text-muted-foreground">{channel.description}</p>
                            </div>
                          </div>
                        </a>
                      )
                    })}
                  </div>

                  <Button asChild variant="outline" className="w-full sm:w-auto">
                    <a
                      href={OFFICIAL_LINKS_HUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      Ver todos los canales oficiales
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border bg-background">
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-bold mb-6 text-balance">Envíanos un mensaje</h2>

                  <form className="space-y-6" aria-label="Formulario de contacto">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-base">
                        Nombre completo{" "}
                        <span className="text-destructive" aria-label="requerido">
                          *
                        </span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Tu nombre"
                        className="text-base h-12"
                        aria-required="true"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base">
                        Email{" "}
                        <span className="text-destructive" aria-label="requerido">
                          *
                        </span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="tu@email.com"
                        className="text-base h-12"
                        aria-required="true"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-base">
                        Teléfono
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+58 412 123 4567"
                        className="text-base h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-base">
                        Asunto{" "}
                        <span className="text-destructive" aria-label="requerido">
                          *
                        </span>
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        placeholder="¿En qué podemos ayudarte?"
                        className="text-base h-12"
                        aria-required="true"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-base">
                        Mensaje{" "}
                        <span className="text-destructive" aria-label="requerido">
                          *
                        </span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Escribe tu mensaje aquí..."
                        rows={6}
                        className="text-base resize-none"
                        aria-required="true"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    >
                      Enviar Mensaje
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      Los campos marcados con <span className="text-destructive">*</span> son obligatorios
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="como-llegar" className="py-16 md:py-20 bg-secondary/20" aria-labelledby="map-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="map-heading" className="font-heading text-3xl font-bold mb-4 md:text-4xl text-balance">
              Cómo Llegar
            </h2>
            <p className="text-lg leading-relaxed text-pretty">Encuéntranos en Caracas, Venezuela</p>
          </div>

          <div className="relative w-full rounded-xl overflow-hidden shadow-xl bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7847.524085608428!2d-66.857136!3d10.440448000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2af632a17f00f3%3A0x77872c7eeb39fb10!2sInstituto%20Universitario%20Avepane!5e0!3m2!1ses-419!2sco!4v1764701844673!5m2!1ses-419!2sco"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Ubicación de Instituto Universitario Avepane"
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg leading-relaxed text-pretty mb-4">
              También puedes ver nuestro video tutorial sobre cómo llegar a nuestras instalaciones
            </p>
            <Button variant="outline" size="lg" className="border-accent bg-transparent">
              Ver Video "Cómo Llegar"
            </Button>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section
        id="donar"
        className="py-16 md:py-20 bg-primary text-primary-foreground"
        aria-labelledby="donate-heading"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-foreground/20 mb-4">
            <Heart className="h-8 w-8" aria-hidden="true" />
          </div>
          <h2 id="donate-heading" className="font-heading text-3xl font-bold md:text-4xl text-balance">
            Apoya Nuestra Misión
          </h2>
          <p className="text-lg leading-relaxed text-pretty">
            Tu donación nos permite continuar transformando vidas y construyendo oportunidades para personas con
            discapacidad intelectual. Cada aporte cuenta y hace la diferencia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90"
            >
              <Link href="/donar">Información sobre Donaciones</Link>
            </Button>
          </div>
        </div>
      </section>

    </MainLayout>
  )
}
