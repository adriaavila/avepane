import { remark } from "remark"
import remarkHtml from "remark-html"
import rehypeSanitize from "rehype-sanitize"
import rehypeRaw from "rehype-raw"

interface MarkdownContentServerProps {
  content: string
  className?: string
}

/**
 * Server component to render Markdown content as HTML with accessibility optimizations
 * This component ensures proper semantic HTML structure and ARIA attributes
 * Use this for server-side rendering (better for SEO)
 */
export async function MarkdownContentServer({
  content,
  className = "",
}: MarkdownContentServerProps) {
  let htmlContent: string

  try {
    const result = await remark()
      .use(remarkHtml, { sanitize: false })
      .use(rehypeRaw)
      .use(rehypeSanitize, {
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

    htmlContent = result.toString()
  } catch (error) {
    console.error("Error rendering markdown:", error)
    // Fallback: render as plain text with line breaks
    htmlContent = content
      .split("\n\n")
      .map((para) => `<p>${para.replace(/\n/g, "<br />")}</p>`)
      .join("")
  }

  return (
    <div
      className={`prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-foreground prose-p:leading-relaxed prose-p:text-pretty prose-a:text-primary prose-a:underline hover:prose-a:text-primary/80 prose-strong:text-foreground prose-strong:font-semibold prose-ul:text-foreground prose-ol:text-foreground prose-li:text-foreground prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-code:text-foreground prose-pre:bg-muted ${className}`}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      aria-label="Contenido del artículo"
    />
  )
}

