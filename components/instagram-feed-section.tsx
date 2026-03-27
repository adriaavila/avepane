import { InstagramPostCard } from "@/components/instagram-post-card"
import { Instagram as InstagramIcon, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getInstagramFeedData } from "@/lib/instagram-feed"
import { INSTAGRAM_PROFILE_URL } from "@/lib/social-links"

export async function InstagramFeedSection() {
  const { posts, message } = await getInstagramFeedData()

  return (
    <section
      className="py-16 md:py-20 bg-background"
      aria-labelledby="instagram-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 mb-4">
            <InstagramIcon className="h-7 w-7 text-primary" aria-hidden="true" />
          </div>
          <h2
            id="instagram-heading"
            className="font-heading text-3xl font-bold mb-4 md:text-4xl text-balance"
          >
            AVEPANE en Instagram
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto text-pretty">
            Síguenos en nuestras redes sociales para estar al día con nuestras actividades, eventos y logros
          </p>
        </div>

        {/* Posts Grid */}
        {posts.length > 0 && (
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <InstagramPostCard key={post.id} post={post} />
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-12 text-center">
              <Button
                asChild
                size="lg"
                className="bg-[#F37B24] text-white hover:bg-[#F37B24]/90 focus-visible:ring-2 focus-visible:ring-[#F37B24] focus-visible:ring-offset-2"
              >
                <a
                  href={INSTAGRAM_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Ver más publicaciones
                  <ExternalLink className="h-5 w-5" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </>
        )}

        {/* Empty State with Message - Always show grid structure */}
        {posts.length === 0 && (
          <>
            {/* Show skeleton grid structure even when empty */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-square w-full rounded-xl bg-muted/30 border-2 border-dashed border-muted flex items-center justify-center"
                  aria-hidden="true"
                >
                  <InstagramIcon className="h-12 w-12 text-muted-foreground/30" />
                </div>
              ))}
            </div>
            
            {/* Message and CTA */}
            <div className="mt-12 text-center space-y-4">
              {message && (
                <div
                  className="mx-auto max-w-2xl rounded-lg border border-muted bg-muted/50 p-4"
                  role="status"
                  aria-live="polite"
                >
                  <p className="text-sm text-muted-foreground">
                    {message}
                  </p>
                </div>
              )}
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  No hay publicaciones disponibles en este momento
                </p>
                {/* Always show CTA button even when empty */}
                <div className="pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#F37B24] text-white hover:bg-[#F37B24]/90 focus-visible:ring-2 focus-visible:ring-[#F37B24] focus-visible:ring-offset-2"
                  >
                    <a
                      href={INSTAGRAM_PROFILE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      Visitar Instagram de AVEPANE
                      <ExternalLink className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
