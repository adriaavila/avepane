import { remark } from "remark"
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
    const { default: remarkRehype } = await import("remark-rehype")
    const { default: rehypeStringify } = await import("rehype-stringify")

    const result = await remark()
      .use(remarkRehype, { allowDangerousHtml: true })
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
          "div",
          "span",
          "iframe",
        ],
        attributes: {
          a: ["href", "title", "aria-label", "target", "rel"],
          img: ["src", "alt", "width", "height", "loading", "title"],
          "*": ["className", "id", "role", "aria-label", "aria-hidden"],
          iframe: ["src", "width", "height", "title", "allow", "allowFullScreen"],
        },
      })
      .use(rehypeStringify)
      .process(content)

    htmlContent = result.toString()
  } catch (error) {
    console.error("Error rendering markdown:", error)
    // Fallback: Custom regex based basic markdown parsing in case unified ESM packages fail
    let parsedContent = content
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
      // Bold
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      // Blockquotes
      .replace(/^>\s+(.*$)/gm, "<blockquote>$1</blockquote>")
      // H3
      .replace(/^###\s+(.*$)/gm, "<h3>$1</h3>")
      // H2
      .replace(/^##\s+(.*$)/gm, "<h2>$1</h2>")
      // H1
      .replace(/^#\s+(.*$)/gm, "<h1>$1</h1>");

    // Split paragraphs
    htmlContent = parsedContent
      .split("\n\n")
      .map((para) => {
        // If it's already an HTML block element, don't wrap in <p>
        if (/^<(h1|h2|h3|h4|blockquote)/.test(para.trim())) {
          return para.trim();
        }
        return `<p>${para.trim().replace(/\n/g, "<br />")}</p>`;
      })
      .join("");
  }

  return (
    <div
      className={`prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-foreground prose-p:leading-relaxed prose-p:text-pretty prose-a:text-primary prose-a:underline hover:prose-a:text-primary/80 prose-strong:text-foreground prose-strong:font-semibold prose-ul:text-foreground prose-ol:text-foreground prose-li:text-foreground prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-code:text-foreground prose-pre:bg-muted ${className}`}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      aria-label="Contenido del artículo"
    />
  )
}

