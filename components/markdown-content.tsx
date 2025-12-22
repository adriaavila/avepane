"use client"

import { useEffect, useState } from "react"

interface MarkdownContentProps {
  content: string
  className?: string
}

/**
 * Component to render Markdown content as HTML with accessibility optimizations
 * This component ensures proper semantic HTML structure and ARIA attributes
 */
export function MarkdownContent({ content, className = "" }: MarkdownContentProps) {
  const [htmlContent, setHtmlContent] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function renderMarkdown() {
      try {
        // Dynamic import to avoid SSR issues
        const { remark } = await import("remark")
        const remarkHtml = await import("remark-html")
        const rehypeRaw = await import("rehype-raw")
        const rehypeSanitize = await import("rehype-sanitize")

        const result = await remark()
          .use(remarkHtml.default, { sanitize: false })
          .use(rehypeRaw.default)
          .use(rehypeSanitize.default, {
            tagNames: [
              "p",
              "br",
              "strong",
              "em",
              "u",
              "h1",
              "h2",
              "h3",
              "h4",
              "h5",
              "h6",
              "ul",
              "ol",
              "li",
              "blockquote",
              "a",
              "img",
              "code",
              "pre",
            ],
            attributes: {
              a: ["href", "title", "aria-label"],
              img: ["src", "alt", "width", "height", "loading"],
            },
          })
          .process(content)

        setHtmlContent(result.toString())
      } catch (error) {
        console.error("Error rendering markdown:", error)
        // Fallback: render as plain text with line breaks
        setHtmlContent(
          content
            .split("\n\n")
            .map((para) => `<p>${para.replace(/\n/g, "<br />")}</p>`)
            .join("")
        )
      } finally {
        setIsLoading(false)
      }
    }

    renderMarkdown()
  }, [content])

  if (isLoading) {
    return (
      <div className={`animate-pulse space-y-4 ${className}`} aria-busy="true" aria-live="polite">
        <div className="h-4 bg-muted rounded w-3/4"></div>
        <div className="h-4 bg-muted rounded"></div>
        <div className="h-4 bg-muted rounded w-5/6"></div>
      </div>
    )
  }

  return (
    <div
      className={`prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-foreground prose-p:leading-relaxed prose-p:text-pretty prose-a:text-primary prose-a:underline hover:prose-a:text-primary/80 prose-strong:text-foreground prose-strong:font-semibold prose-ul:text-foreground prose-ol:text-foreground prose-li:text-foreground prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground ${className}`}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      aria-label="Contenido del artículo"
    />
  )
}

