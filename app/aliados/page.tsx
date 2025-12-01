import { MainLayout } from "@/components/main-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Handshake, ArrowRight, ExternalLink } from "lucide-react"

export const metadata = {
  title: "Aliados Estratégicos - AVEPANE",
  description:
    "Conoce las organizaciones y empresas que colaboran con AVEPANE para promover la inclusión laboral de personas con discapacidad intelectual.",
}

export default function AlliesPage() {
  const allies = [
    {
      id: 1,
      name: "UNESCO",
      logo: "/placeholder.svg?height=120&width=200",
      description: "Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura",
      website: "https://unesco.org",
    },
    {
      id: 2,
      name: "GLARP",
      logo: "/placeholder.svg?height=120&width=200",
      description: "Grupo Latinoamericano para el Retardo Mental",
      website: "https://example.com",
    },
    {
      id: 3,
      name: "ANDE",
      logo: "/placeholder.svg?height=120&width=200",
      description: "Asociación Nacional de Discapacidad Especial",
      website: "https://example.com",
    },
    {
      id: 4,
      name: "Fundación Kennedy",
      logo: "/placeholder.svg?height=120&width=200",
      description: "Fundación dedicada a apoyar personas con discapacidad intelectual",
      website: "https://example.com",
    },
    {
      id: 5,
      name: "VerySpecialArts",
      logo: "/placeholder.svg?height=120&width=200",
      description: "Organización de arte y educación para personas con discapacidad",
      website: "https://example.com",
    },
    {
      id: 6,
      name: "Liga Internacional para el Retardo Mental",
      logo: "/placeholder.svg?height=120&width=200",
      description: "Red internacional de apoyo a personas con discapacidad intelectual",
      website: "https://example.com",
    },
    {
      id: 7,
      name: "Clipedim",
      logo: "/placeholder.svg?height=120&width=200",
      description: "Centro de apoyo y recursos para la educación especial",
      website: "https://example.com",
    },
    {
      id: 8,
      name: "Real Patronato Español",
      logo: "/placeholder.svg?height=120&width=200",
      description: "Institución española de apoyo a personas con discapacidad",
      website: "https://example.com",
    },
  ]

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-secondary/30 to-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
              <Handshake className="h-8 w-8 text-primary" aria-hidden="true" />
            </div>
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
              Aliados Estratégicos
            </h1>
            <p className="text-lg leading-relaxed text-pretty md:text-xl">
              Organizaciones y empresas comprometidas con nuestra misión de inclusión y desarrollo integral
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <p className="text-lg leading-relaxed text-pretty">
              AVEPANE ha promovido acciones para lograr la cooperación con otros países en las relaciones de intercambio
              inter-institucionales que han generado una gran riqueza en cuanto a nuestros programas y proyectos
              futuros.
            </p>
            <p className="text-lg leading-relaxed text-pretty">
              Entre ellos destacan: UNESCO, GLARP, ANDE, VerySpecialArts, Liga Internacional para el Retardo Mental,
              Clipedim, Real Patronato Español, Fundación Kennedy y otros.
            </p>
          </div>
        </div>
      </section>

      {/* Allies Grid */}
      <section className="py-16 md:py-20 bg-secondary/20" aria-labelledby="allies-grid-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="allies-grid-heading" className="sr-only">
            Lista de organizaciones aliadas
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allies.map((ally) => (
              <Card key={ally.id} className="border-border hover:shadow-lg transition-all bg-background group">
                <CardContent className="p-6">
                  <a
                    href={ally.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block space-y-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
                    aria-label={`Visitar sitio web de ${ally.name}`}
                  >
                    <div className="relative h-24 flex items-center justify-center bg-muted/30 rounded-lg p-4">
                      <Image
                        src={ally.logo || "/placeholder.svg"}
                        alt={`Logo de ${ally.name}`}
                        fill
                        className="object-contain p-2"
                      />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-heading text-lg font-semibold text-balance group-hover:text-primary transition-colors">
                        {ally.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed text-pretty line-clamp-2">
                        {ally.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-primary font-medium">
                      <span>Visitar sitio</span>
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 md:py-20 bg-background" aria-labelledby="benefits-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="benefits-heading" className="font-heading text-3xl font-bold mb-4 md:text-4xl text-balance">
              Beneficios de Ser Aliado
            </h2>
            <p className="text-lg leading-relaxed text-pretty">
              Colaborar con AVEPANE genera valor compartido para tu organización y nuestra comunidad
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-border bg-background">
              <CardContent className="p-6 space-y-3">
                <h3 className="font-heading text-xl font-semibold text-balance">Responsabilidad Social</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Demuestra el compromiso de tu empresa con la inclusión y la responsabilidad social corporativa
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-background">
              <CardContent className="p-6 space-y-3">
                <h3 className="font-heading text-xl font-semibold text-balance">Talento Diverso</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Accede a un pool de talento motivado, capacitado y con habilidades comprobadas
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-background">
              <CardContent className="p-6 space-y-3">
                <h3 className="font-heading text-xl font-semibold text-balance">Acompañamiento Continuo</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Nuestro equipo brinda apoyo constante para garantizar una integración exitosa
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-background">
              <CardContent className="p-6 space-y-3">
                <h3 className="font-heading text-xl font-semibold text-balance">Impacto Social</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Contribuye directamente a transformar vidas y construir una sociedad más inclusiva
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl text-balance">¿Quieres ser nuestro aliado?</h2>
          <p className="text-lg leading-relaxed text-pretty">
            Únete a nuestra red de organizaciones comprometidas con la inclusión laboral
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90"
          >
            <Link href="/contacto">
              Contactar para alianza
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  )
}
