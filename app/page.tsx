import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Heart, Users, Briefcase, ArrowRight, Gift, ShoppingBag, ExternalLink } from "lucide-react"
import { PageSummary } from "@/components/page-summary"
import { VIRTUAL_SHOWCASE_URL } from "@/lib/social-links"

const PAGE_SUMMARY = "AVEPANE fue fundada en 1963 como una asociación civil sin fines de lucro por padres, familiares y profesionales comprometidos con mejorar la calidad de vida de personas con discapacidad intelectual y sus familias. A través de programas especializados, promovemos inclusión, formación, autonomía y participación en la comunidad."

export default function HomePage() {
  const programs = [
    {
      icon: Briefcase,
      title: "Áreas Ocupacionales",
      description: "Entorno diseñado para transformar la formación teórica en acción productiva.",
      href: "/cfia#areas-ocupacionales",
    },
    {
      icon: Users,
      title: "Perfil del Participante",
      description: "Buscamos motivación por el aprendizaje manual y capacidades de autonomía básica.",
      href: "/cfia#perfil",
    },
    {
      icon: Heart,
      title: "Proceso de Inscripción",
      description: "Evaluaciones, entrevistas y período de prueba para la admisión.",
      href: "/cfia#inscripcion",
    },
  ]

  const activities = [
    {
      title: "Capacitación para el trabajo",
      description: "Actividades formativas prácticas dirigidas a fortalecer hábitos, destrezas y competencias preparatorias para distintos entornos laborales.",
      caption: "La formación laboral acompaña el desarrollo de la autonomía y la inclusión técnica.",
      image: "/activities/capacitacion.jpg",
    },
    {
      title: "Deporte y Recreación",
      description: "Promovemos el bienestar físico, la salud y el trabajo en equipo a través de actividades deportivas, celebrando con alegría cada triunfo.",
      caption: "El deporte fomenta la disciplina, el compañerismo y la superación personal.",
      image: "/activities/deporte.jpg",
    },
    {
      title: "Arte y Expresión",
      description: "Espacio creativo donde los participantes exploran su expresión personal y talentos creando obras gráficas y desarrollos adaptados.",
      caption: "El arte fortalece la creatividad, la concentración y permite comunicar emociones.",
      image: "/activities/arte-manualidades.jpg",
    },
    {
      title: "Integración Social",
      description: "Desarrollamos encuentros comunitarios para compartir experiencias, participar activamente en la sociedad y fortalecer lazos afectivos.",
      caption: "Estos espacios favorecen el intercambio, la confianza y la convivencia armónica.",
      image: "/activities/integracion.jpg",
    },
  ]

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-secondary/30 to-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
                AVEPANE
              </h1>
              <p className="text-lg leading-relaxed text-pretty md:text-xl">
                <strong>AVEPANE</strong> fue fundada en <strong>1963</strong> como una asociación civil sin fines de lucro por
                padres, familiares y profesionales comprometidos con mejorar la calidad de vida de personas con
                discapacidad intelectual y sus familias. Hoy desarrollamos programas orientados a la inclusión, la
                formación y la autonomía.
              </p>
              <PageSummary text={PAGE_SUMMARY} />
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  <Link href="/avepane/nosotros">
                    Conócenos
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-accent text-foreground hover:bg-secondary/50 bg-transparent"
                >
                  <Link href="/contacto">Contáctanos</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-96 lg:h-[500px]">
              <Image
                src="/activities/hero-community.jpg"
                alt="Comunidad AVEPANE celebrando juntos en un ambiente inclusivo y de apoyo"
                fill
                className="object-cover rounded-xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4 md:text-4xl text-balance">Nuestra historia</h2>
            <p className="text-lg leading-relaxed text-pretty">
              Nacimos como <strong>Asociación de Padres y Amigos de Niños Excepcionales</strong>, impulsados por la
              necesidad de crear espacios de apoyo, educación y atención especializada para personas con discapacidad
              intelectual en Venezuela. Con el tiempo, AVEPANE consolidó programas orientados a la formación, la
              inclusión y el acompañamiento de su comunidad.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-20 bg-secondary/20" aria-labelledby="programs-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="programs-heading" className="font-heading text-3xl font-bold mb-4 md:text-4xl text-balance">
              CFIA
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto text-pretty">
              Conoce nuestro Centro de Formación Integral AVEPANE.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => {
              const IconComponent = program.icon
              return (
                <Card key={program.title} className="border-border hover:shadow-lg transition-shadow bg-background">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-balance">{program.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-pretty">{program.description}</p>
                    <Link
                      href={program.href}
                      className="inline-flex items-center text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded font-medium"
                    >
                      Conocer más
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Activities Gallery */}
      <section className="py-16 md:py-20 bg-background" aria-labelledby="activities-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="activities-heading" className="font-heading text-3xl font-bold mb-4 md:text-4xl text-balance">
              Nuestras Actividades
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto text-pretty">
              Conoce algunas de las actividades y talleres que desarrollamos con nuestra comunidad.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {activities.map((activity) => (
              <Card key={activity.title} className="overflow-hidden border-border bg-background">
                <figure className="space-y-0">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={`${activity.title} en AVEPANE`}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="font-heading text-xl font-semibold text-balance">{activity.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-pretty">{activity.description}</p>
                    <figcaption className="text-sm leading-relaxed text-muted-foreground border-t border-border pt-3">
                      {activity.caption}
                    </figcaption>
                  </CardContent>
                </figure>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Showcase Section */}
      <section
        id="vitrina-virtual"
        className="py-16 md:py-20 bg-primary text-primary-foreground"
        aria-labelledby="showcase-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-foreground/20">
                <ShoppingBag className="h-8 w-8" aria-hidden="true" />
              </div>
              <h2 id="showcase-heading" className="font-heading text-3xl font-bold md:text-4xl text-balance">
                Vitrina virtual AVEPANE
              </h2>
              <p className="text-lg leading-relaxed text-pretty">
                La vitrina virtual AVEPANE es un espacio para exhibir y ofrecer productos elaborados por participantes
                de nuestros programas. Aquí se visibiliza su trabajo, su dedicación y las habilidades que desarrollan
                a través de sus procesos formativos.
              </p>
              <p className="leading-relaxed text-pretty">
                Cada producto representa una oportunidad para valorar el talento de nuestra comunidad y apoyar la
                continuidad de los programas que AVEPANE desarrolla desde 1963 en favor de personas con discapacidad
                intelectual y sus familias.
              </p>
              <p className="leading-relaxed text-pretty">
                Si deseas conocer los productos disponibles, apoyar una compra o descubrir más sobre esta iniciativa,
                puedes ingresar a la vitrina y contactar a nuestro equipo.
              </p>
              <p className="leading-relaxed text-pretty font-semibold">
                ¡Contamos con tu apoyo, contamos contigo!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  <Link href={VIRTUAL_SHOWCASE_URL} target="_blank" rel="noopener noreferrer">
                    <Gift className="mr-2 h-5 w-5" aria-hidden="true" />
                    Visitar la vitrina
                    <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="border border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link href="/avepane/vitrina">
                    Conocer la iniciativa
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/80">
                El enlace abre la vitrina oficial de AVEPANE en una nueva pestaña.
              </p>
            </div>

            <div className="relative">
              <Image
                src="/photos-cm/IMG_3066.JPG"
                alt="Participante de AVEPANE mostrando productos elaborados a mano para la vitrina virtual"
                width={1200}
                height={800}
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-accent text-accent-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl text-balance">¿Necesitas más información?</h2>
          <p className="text-lg leading-relaxed text-pretty">
            Estamos aquí para ayudarte. Contáctanos y te responderemos a la brevedad.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/contacto">
              Contactar
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  )
}
