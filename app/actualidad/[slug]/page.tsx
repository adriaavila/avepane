import { MainLayout } from "@/components/main-layout"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TextToSpeech } from "@/components/text-to-speech"
import {
  getPostBySlugWithHtml,
  getPostBySlug,
  getAllPosts,
  parseSpanishDate,
} from "@/lib/blog-posts"
import { MarkdownContentServer } from "@/components/markdown-content-server"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate static params for all blog posts (for better SEO and performance)
export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for each post (important for SEO)
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post no encontrado - AVEPANE",
    }
  }

  return {
    title: `${post.title} - Actualidad AVEPANE`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
    alternates: {
      canonical: `/actualidad/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostBySlugWithHtml(slug)

  if (!post) {
    notFound()
  }

  // Format date for structured data
  const formattedDate = parseSpanishDate(post.date)

  return (
    <MainLayout>
      {/* Breadcrumb Navigation */}
      <nav className="py-4 bg-background border-b border-border" aria-label="Breadcrumb">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Inicio
              </Link>
            </li>
            <li className="text-muted-foreground" aria-hidden="true">
              /
            </li>
            <li>
              <Link
                href="/actualidad"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Actualidad
              </Link>
            </li>
            <li className="text-muted-foreground" aria-hidden="true">
              /
            </li>
            <li className="text-foreground font-medium" aria-current="page">
              {post.title}
            </li>
          </ol>
        </div>
      </nav>

      <article className="py-8 md:py-12 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-6">
            <Button variant="ghost" asChild className="gap-2">
              <Link href="/actualidad">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Volver a Actualidad
              </Link>
            </Button>
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                {post.category}
              </span>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
              <time dateTime={formattedDate} className="flex items-center gap-2">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                {post.date}
              </time>
            </div>

            {/* Text-to-Speech Controls */}
            <div className="mb-8">
              <TextToSpeech
                text={post.fullContent}
                title={post.title}
                ariaLabel={`Controles de lectura para: ${post.title}`}
              />
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="space-y-8">
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              {post.description}
            </p>

            {/* Markdown Content */}
            <MarkdownContentServer content={post.fullContent} />
          </div>

          {/* Text-to-Speech at Bottom */}
          <div className="mt-12 pt-8 border-t border-border">
            <TextToSpeech
              text={post.fullContent}
              title={post.title}
              ariaLabel={`Controles de lectura para el contenido completo de: ${post.title}`}
            />
          </div>

          {/* Structured Data for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: post.title,
                description: post.description,
                image: post.image,
                datePublished: formattedDate,
                dateModified: formattedDate,
                author: {
                  "@type": "Organization",
                  name: "AVEPANE",
                },
                publisher: {
                  "@type": "Organization",
                  name: "AVEPANE",
                },
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": `https://avepane.org/actualidad/${post.slug}`,
                },
              }),
            }}
          />
        </div>
      </article>

      {/* Related Posts Section */}
      <section className="py-12 bg-secondary/20" aria-labelledby="related-posts-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="related-posts-heading" className="font-heading text-2xl font-bold mb-6">
            Más noticias
          </h2>
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/actualidad">
                Ver todas las noticias
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

