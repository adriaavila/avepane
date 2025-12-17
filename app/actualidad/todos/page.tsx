import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { BlogPostCard } from "@/components/blog-post-card"
import { getAllPosts, parseSpanishDate } from "@/lib/blog-posts"

export const metadata = {
  title: "Todos los Eventos - Actualidad AVEPANE",
  description:
    "Todos los eventos, noticias y actividades de AVEPANE. Mantente informado sobre nuestras acciones y logros.",
}

export default function AllEventsPage() {
  const allEvents = getAllPosts()
    .sort((a, b) => {
      const dateA = parseSpanishDate(a.date)
      const dateB = parseSpanishDate(b.date)
      return new Date(dateB).getTime() - new Date(dateA).getTime()
    })

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-secondary/30 to-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="flex justify-center mb-4">
              <Button
                asChild
                variant="ghost"
                className="text-muted-foreground hover:text-foreground"
              >
                <Link href="/actualidad">
                  <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                  Volver a Actualidad
                </Link>
              </Button>
            </div>
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
              Todos los Eventos y Noticias
            </h1>
            <p className="text-lg leading-relaxed text-pretty md:text-xl">
              Explora todas nuestras actividades, eventos y noticias más recientes
            </p>
          </div>
        </div>
      </section>

      {/* All Events Section */}
      <section className="py-16 md:py-20 bg-background" aria-labelledby="all-events-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 id="all-events-heading" className="font-heading text-3xl font-bold mb-4 md:text-4xl text-balance">
              Eventos y Noticias
            </h2>
            <p className="text-lg leading-relaxed text-pretty">
              Nuestras actividades más destacadas y próximos eventos
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allEvents.map((event) => (
              <BlogPostCard key={event.id} event={event} />
            ))}
          </div>

          {/* Structured Data for Blog Listing (SEO) */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Blog",
                name: "Todos los Eventos - Actualidad AVEPANE",
                description: "Todos los eventos, noticias y actividades de AVEPANE",
                url: "https://avepane.org/actualidad/todos",
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
    </MainLayout>
  )
}
