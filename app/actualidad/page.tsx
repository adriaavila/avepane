import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ImageIcon } from "lucide-react"
import { BlogPostCard } from "@/components/blog-post-card"
import { getAllPosts, parseSpanishDate } from "@/lib/blog-posts"
import { InstagramFeedSection } from "@/components/instagram-feed-section"

export const metadata = {
  title: "Actualidad - AVEPANE",
  description:
    "Sigue la actualidad de AVEPANE en Instagram y consulta noticias, actividades y publicaciones destacadas de la organización.",
}

export const revalidate = 3600

export default function NewsPage() {
  const allEvents = getAllPosts()
  // Sort by date (most recent first) and take only the 3 most recent
  const recentEvents = [...allEvents]
    .sort((a, b) => {
      const dateA = parseSpanishDate(a.date)
      const dateB = parseSpanishDate(b.date)
      return new Date(dateB).getTime() - new Date(dateA).getTime()
    })
    .slice(0, 3)

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
              Síguenos en Instagram y consulta aquí una selección de noticias, actividades y publicaciones destacadas.
            </p>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <InstagramFeedSection />

      {/* Events Section */}
      <section className="py-16 md:py-20 bg-background" aria-labelledby="events-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 id="events-heading" className="font-heading text-3xl font-bold mb-4 md:text-4xl text-balance">
              Eventos y Noticias
            </h2>
            <p className="text-lg leading-relaxed text-pretty">
              Una selección de noticias, actividades y publicaciones destacadas de AVEPANE.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentEvents.map((event) => (
              <BlogPostCard key={event.id} event={event} />
            ))}
          </div>

          {/* See All Events Button */}
          {allEvents.length > 3 && (
            <div className="mt-12 text-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link href="/actualidad/posts">
                  Ver todas las noticias
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          )}

          {/* Structured Data for Blog Listing (SEO) */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Blog",
                name: "Actualidad AVEPANE",
                description: "Eventos, noticias y actividades recientes de AVEPANE",
                url: "https://avepane.org/actualidad",
                blogPost: allEvents.map((event) => ({
                  "@type": "BlogPosting",
                  headline: event.title,
                  description: event.description,
                  image: event.image,
                  datePublished: parseSpanishDate(event.date),
                  url: `https://avepane.org/actualidad/${event.slug}`,
                })),
              }),
            }}
          />
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
