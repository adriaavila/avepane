import { execFile } from "node:child_process"
import { promisify } from "node:util"
import { getInstagramMediaProxyUrl } from "@/lib/instagram-media"
import { getInstagramProfileInfoUrl, INSTAGRAM_PROFILE_URL, INSTAGRAM_PUBLIC_APP_ID } from "@/lib/social-links"

export interface InstagramPostMediaItem {
  id: string
  media_url: string
  media_type: "IMAGE" | "VIDEO"
  thumbnail_url?: string
}

export interface InstagramPost {
  id: string
  caption: string
  media_url: string
  permalink: string
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM"
  thumbnail_url?: string
  timestamp: string
  items?: InstagramPostMediaItem[]
}

export interface InstagramFeedData {
  posts: InstagramPost[]
  message?: string
}

const INSTAGRAM_POST_LIMIT = 12
export const INSTAGRAM_UNAVAILABLE_MESSAGE = "Las publicaciones de Instagram no están disponibles en este momento."

const execFileAsync = promisify(execFile)

interface InstagramCaptionEdge {
  node?: {
    text?: string
  }
}

interface InstagramMediaNode {
  __typename?: "GraphImage" | "GraphVideo" | "GraphSidecar"
  id?: string
  shortcode?: string
  display_url?: string
  thumbnail_src?: string
  video_url?: string
  is_video?: boolean
  taken_at_timestamp?: number
  edge_media_to_caption?: {
    edges?: InstagramCaptionEdge[]
  }
  edge_sidecar_to_children?: {
    edges?: Array<{
      node?: InstagramMediaNode
    }>
  }
}

interface InstagramProfileResponse {
  data?: {
    user?: {
      edge_owner_to_timeline_media?: {
        edges?: Array<{
          node?: InstagramMediaNode
        }>
      }
    }
  }
}

function mapInstagramMediaType(typename?: string): InstagramPost["media_type"] {
  switch (typename) {
    case "GraphVideo":
      return "VIDEO"
    case "GraphSidecar":
      return "CAROUSEL_ALBUM"
    default:
      return "IMAGE"
  }
}

function normalizeInstagramMediaItem(node: InstagramMediaNode | undefined, fallbackId: string): InstagramPostMediaItem | null {
  const mediaType = mapInstagramMediaType(node?.__typename)
  const proxiedDisplayUrl = getInstagramMediaProxyUrl(node?.display_url)
  const proxiedThumbnailUrl = getInstagramMediaProxyUrl(node?.thumbnail_src || (node?.is_video ? node.display_url : undefined))
  const proxiedVideoUrl = getInstagramMediaProxyUrl(node?.video_url)

  if (mediaType === "VIDEO") {
    if (!proxiedVideoUrl) {
      if (!proxiedDisplayUrl) {
        return null
      }

      return {
        id: node?.id || fallbackId,
        media_url: proxiedDisplayUrl,
        media_type: "IMAGE",
        thumbnail_url: proxiedThumbnailUrl || proxiedDisplayUrl,
      }
    }

    return {
      id: node?.id || fallbackId,
      media_url: proxiedVideoUrl,
      media_type: "VIDEO",
      thumbnail_url: proxiedThumbnailUrl || proxiedDisplayUrl || undefined,
    }
  }

  if (!proxiedDisplayUrl) {
    return null
  }

  return {
    id: node?.id || fallbackId,
    media_url: proxiedDisplayUrl,
    media_type: "IMAGE",
    thumbnail_url: proxiedThumbnailUrl,
  }
}

function normalizeInstagramPost(node?: InstagramMediaNode): InstagramPost | null {
  if (!node?.id || !node.shortcode || !node.display_url || !Number.isFinite(node.taken_at_timestamp)) {
    return null
  }

  const timestamp = new Date(node.taken_at_timestamp * 1000)

  if (Number.isNaN(timestamp.getTime())) {
    return null
  }

  const carouselItems = node.edge_sidecar_to_children?.edges
    ?.map((edge, index) => normalizeInstagramMediaItem(edge.node, `${node.id}-${index}`))
    .filter((item): item is InstagramPostMediaItem => item !== null)

  const fallbackItem = normalizeInstagramMediaItem(node, node.id)
  const items = carouselItems && carouselItems.length > 0
    ? carouselItems
    : fallbackItem
      ? [fallbackItem]
      : []
  const primaryItem = items[0]

  if (!primaryItem) {
    return null
  }

  return {
    id: node.id,
    caption: node.edge_media_to_caption?.edges?.[0]?.node?.text || "Publicación de AVEPANE",
    media_url: primaryItem.media_url,
    permalink: `https://www.instagram.com/p/${node.shortcode}/`,
    media_type: mapInstagramMediaType(node.__typename),
    thumbnail_url: primaryItem.thumbnail_url,
    timestamp: timestamp.toISOString(),
    items,
  }
}

async function fetchInstagramProfileWithFetch() {
  const response = await fetch(getInstagramProfileInfoUrl(), {
    headers: {
      "Accept": "application/json",
      "Referer": INSTAGRAM_PROFILE_URL,
      "User-Agent": "Mozilla/5.0 (compatible; AVEPANEFeed/1.0; +https://www.instagram.com/avepane/)",
      "x-ig-app-id": INSTAGRAM_PUBLIC_APP_ID,
    },
    next: { revalidate: 3600 },
    signal: AbortSignal.timeout(10000),
  })

  if (!response.ok) {
    const errorBody = await response.text().catch(() => "")
    throw new Error(`instagram_fetch_${response.status}:${errorBody.slice(0, 300)}`)
  }

  return (await response.json()) as InstagramProfileResponse
}

async function fetchInstagramProfileWithCurl() {
  const { stdout } = await execFileAsync(
    "curl",
    [
      "-sS",
      "-L",
      "-m",
      "15",
      "-H",
      "Accept: application/json",
      "-H",
      `Referer: ${INSTAGRAM_PROFILE_URL}`,
      "-H",
      "User-Agent: Mozilla/5.0",
      "-H",
      `x-ig-app-id: ${INSTAGRAM_PUBLIC_APP_ID}`,
      "-w",
      "\\n%{http_code}",
      getInstagramProfileInfoUrl(),
    ],
    {
      maxBuffer: 1024 * 1024 * 5,
    }
  )

  const lastNewlineIndex = stdout.lastIndexOf("\n")
  const responseBody = lastNewlineIndex >= 0 ? stdout.slice(0, lastNewlineIndex) : stdout
  const statusCode = Number(lastNewlineIndex >= 0 ? stdout.slice(lastNewlineIndex + 1).trim() : "0")

  if (statusCode < 200 || statusCode >= 300) {
    throw new Error(`instagram_curl_${statusCode}:${responseBody.slice(0, 300)}`)
  }

  return JSON.parse(responseBody) as InstagramProfileResponse
}

async function fetchInstagramProfile() {
  try {
    return await fetchInstagramProfileWithFetch()
  } catch (fetchError) {
    console.warn("Instagram fetch fallback to curl:", fetchError)
    return fetchInstagramProfileWithCurl()
  }
}

export async function getInstagramFeedData(): Promise<InstagramFeedData> {
  try {
    const data = await fetchInstagramProfile()
    const edges = data.data?.user?.edge_owner_to_timeline_media?.edges

    if (!Array.isArray(edges) || edges.length === 0) {
      console.warn("Instagram public profile returned no timeline media")
      return {
        posts: [],
        message: INSTAGRAM_UNAVAILABLE_MESSAGE,
      }
    }

    const posts = edges
      .slice(0, INSTAGRAM_POST_LIMIT)
      .map((edge) => normalizeInstagramPost(edge.node))
      .filter((post): post is InstagramPost => post !== null)

    if (posts.length === 0) {
      console.warn("Instagram public profile did not include usable posts")
      return {
        posts: [],
        message: INSTAGRAM_UNAVAILABLE_MESSAGE,
      }
    }

    return { posts }
  } catch (error) {
    console.error("Error fetching Instagram posts:", error)
    return {
      posts: [],
      message: INSTAGRAM_UNAVAILABLE_MESSAGE,
    }
  }
}
