import { MainLayout } from "@/components/main-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowRight, ImageIcon } from "lucide-react"

export const metadata = {
  title: "Actualidad - AVEPANE",
  description:
    "Eventos, noticias y actividades recientes de AVEPANE. Mantente informado sobre nuestras acciones y logros.",
}

export default function NewsPage() {
  const events = [
    {
      id: 1,
      title: "Jornada de Capacitación Laboral",
      date: "15 de Marzo, 2024",
      category: "Evento",
      description:
        "Taller práctico de habilidades laborales para nuevos participantes del programa de inserción laboral.",
      image: "/job-training-workshop-people-disabilities-learning.jpg",
    },
    {
      id: 2,
      title: "Celebración Día del Trabajador",
      date: "1 de Mayo, 2024",
      category: "Celebración",
      description: "Reconocimiento a todos los participantes de nuestros programas de empleo y sus logros.",
      image: "/celebration-workers-disabilities-achievement-recog.jpg",
    },
    {
      id: 3,
      title: "Nueva Alianza con Empresa Local",
      date: "10 de Junio, 2024",
      category: "Noticia",
      description: "Firmamos convenio con importante empresa venezolana para la inserción de 10 nuevos trabajadores.",
      image: "/business-partnership-handshake-agreement-collabora.jpg",
    },
    {
      id: 4,
      title: "Taller de Arte y Creatividad",
      date: "20 de Julio, 2024",
      category: "Evento",
      description: "Actividad recreativa que desarrolla habilidades artísticas y expresión personal.",
      image: "/art-workshop-creativity-painting-disabilities-incl.jpg",
    },
    {
      id: 5,
      title: "Graduación de Participantes",
      date: "5 de Agosto, 2024",
      category: "Celebración",
      description: "Ceremonia de graduación para participantes que completaron el programa de formación laboral.",
      image: "/graduation-ceremony-celebration-achievement-disabi.jpg",
    },
    {
      id: 6,
      title: "Bazar Navideño AVEPANE",
      date: "1 de Diciembre, 2024",
      category: "Evento",
      description:
        "Venta de productos elaborados por nuestros participantes. Todo lo recaudado apoya nuestros programas.",
      image: "/christmas-bazaar-handmade-crafts-market-fair.jpg",
    },
  ]

  const galleryImages = [
    "/avepane-activities-workshop-group-1.jpg",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
  ]

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-secondary/30 to-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
              Actualidad AVEPANE
            </h1>
            <p className="text-lg leading-relaxed text-pretty md:text-xl">
              Mantente informado sobre nuestros eventos, actividades y noticias más recientes
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 md:py-20 bg-background" aria-labelledby="events-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 id="events-heading" className="font-heading text-3xl font-bold mb-4 md:text-4xl text-balance">
              Eventos y Noticias
            </h2>
            <p className="text-lg leading-relaxed text-pretty">
              Nuestras actividades más destacadas y próximos eventos
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <Card
                key={event.id}
                className="border-border hover:shadow-lg transition-shadow bg-background overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={`${event.title} - ${event.description}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                      {event.category}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    <time dateTime={event.date}>{event.date}</time>
                  </div>

                  <h3 className="font-heading text-xl font-semibold text-balance">{event.title}</h3>

                  <p className="text-muted-foreground leading-relaxed text-pretty">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 md:py-20 bg-secondary/20" aria-labelledby="gallery-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 mb-4">
              <ImageIcon className="h-7 w-7 text-primary" aria-hidden="true" />
            </div>
            <h2 id="gallery-heading" className="font-heading text-3xl font-bold mb-4 md:text-4xl text-balance">
              Galería Fotográfica
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto text-pretty">
              Momentos especiales capturados en nuestras actividades y eventos
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                className="relative h-64 rounded-xl overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label={`Ver imagen ${index + 1} de la galería`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Galería AVEPANE - Actividad ${index + 1}`}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl text-balance">
            ¿Quieres participar en nuestros eventos?
          </h2>
          <p className="text-lg leading-relaxed text-pretty">
            Únete a nuestras actividades y forma parte de la comunidad AVEPANE
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90"
          >
            <Link href="/contacto">
              Contáctanos
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  )
}
