import { MainLayout } from "@/components/main-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react"

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
                <h2 className="font-heading text-3xl font-bold mb-6 text-balance">Información de Contacto</h2>
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
                      <div className="space-y-1">
                        <h3 className="font-heading text-lg font-semibold">Dirección</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Caracas, Venezuela
                          <br />
                          Avenida Principal, Edificio AVEPANE
                        </p>
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
                            href="tel:+582121234567"
                            className="hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded transition-colors"
                          >
                            +58 212 123 4567
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
                        <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-heading text-lg font-semibold">Email</h3>
                        <p className="text-muted-foreground">
                          <a
                            href="mailto:info@avepane.org"
                            className="hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded transition-colors"
                          >
                            info@avepane.org
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
                        <h3 className="font-heading text-lg font-semibold">Horario de Atención</h3>
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
            <div>
              <Card className="border-border bg-background">
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-bold mb-6 text-balance">Envíanos un Mensaje</h2>

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
      <section className="py-16 md:py-20 bg-secondary/20" aria-labelledby="map-heading">
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
              <a href="mailto:info@avepane.org?subject=Información sobre donaciones">Información sobre Donaciones</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <a href="tel:+582121234567">Llamar para Donar</a>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
