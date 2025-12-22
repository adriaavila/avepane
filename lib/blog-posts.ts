import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import remarkHtml from "remark-html"
import rehypeSanitize from "rehype-sanitize"
import rehypeRaw from "rehype-raw"

export interface BlogPost {
  id: number
  slug: string
  title: string
  date: string
  category: string
  description: string
  image: string
  fullContent: string
  htmlContent?: string // HTML rendered from Markdown
}

// Helper function to generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, "") // Remove leading/trailing hyphens
}

// Directory where markdown files are stored
const postsDirectory = path.join(process.cwd(), "content/posts")

// Function to get all markdown files from the posts directory
function getPostFiles(): string[] {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return []
    }
    return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"))
  } catch (error) {
    console.error("Error reading posts directory:", error)
    return []
  }
}

// Function to read and parse a markdown file
function getPostByFile(fileName: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    // Validate required fields
    if (!data.slug || !data.title || !data.date) {
      console.warn(`Post ${fileName} is missing required fields`)
      return null
    }

    return {
      id: data.id || 0,
      slug: data.slug,
      title: data.title,
      date: data.date,
      category: data.category || "Noticia",
      description: data.description || "",
      image: data.image || "/placeholder.svg",
      fullContent: content.trim(),
    }
  } catch (error) {
    console.error(`Error reading post file ${fileName}:`, error)
    return null
  }
}

// Function to render Markdown to HTML with accessibility optimizations
async function renderMarkdownToHtml(markdown: string): Promise<string> {
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
      .process(markdown)

    return result.toString()
  } catch (error) {
    console.error("Error rendering markdown:", error)
    return markdown // Fallback to plain text
  }
}

// Helper function to parse Spanish date format to ISO string
export function parseSpanishDate(dateString: string): string {
  const monthMap: Record<string, string> = {
    enero: "01",
    febrero: "02",
    marzo: "03",
    abril: "04",
    mayo: "05",
    junio: "06",
    julio: "07",
    agosto: "08",
    septiembre: "09",
    octubre: "10",
    noviembre: "11",
    diciembre: "12",
  }

  // Format: "15 de Marzo, 2024"
  const match = dateString.match(/(\d+)\s+de\s+(\w+),\s+(\d+)/i)
  if (match) {
    const day = match[1].padStart(2, "0")
    const monthName = match[2].toLowerCase()
    const year = match[3]
    const month = monthMap[monthName] || "01"

    return `${year}-${month}-${day}T00:00:00.000Z`
  }

  // Fallback: try to parse as regular date
  try {
    return new Date(dateString).toISOString()
  } catch {
    return new Date().toISOString()
  }
}

// Helper function to get all posts
export function getAllPosts(): BlogPost[] {
  const files = getPostFiles()
  const posts = files
    .map((file) => getPostByFile(file))
    .filter((post): post is BlogPost => post !== null)
    .map((post, index) => ({
      ...post,
      id: post.id || index + 1, // Use provided ID or generate one
    }))

  // Sort by date (most recent first)
  return posts.sort((a, b) => {
    const dateA = parseSpanishDate(a.date)
    const dateB = parseSpanishDate(b.date)
    return new Date(dateB).getTime() - new Date(dateA).getTime()
  })
}

// Helper function to get post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  const files = getPostFiles()
  const file = files.find((f) => {
    const post = getPostByFile(f)
    return post?.slug === slug
  })

  if (!file) {
    return undefined
  }

  return getPostByFile(file) || undefined
}

// Helper function to get post by slug with HTML content (for server components)
export async function getPostBySlugWithHtml(slug: string): Promise<BlogPost | undefined> {
  const post = getPostBySlug(slug)
  if (!post) {
    return undefined
  }

  const htmlContent = await renderMarkdownToHtml(post.fullContent)
  return {
    ...post,
    htmlContent,
  }
}
