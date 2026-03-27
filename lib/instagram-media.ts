import { INSTAGRAM_PROFILE_URL } from "@/lib/social-links"

const INSTAGRAM_MEDIA_PROXY_PATH = "/api/instagram/media"
const INSTAGRAM_ALLOWED_MEDIA_HOST_SUFFIXES = ["cdninstagram.com", "fbcdn.net"] as const

export function getInstagramMediaProxyUrl(sourceUrl?: string | null) {
  if (!sourceUrl) {
    return undefined
  }

  return `${INSTAGRAM_MEDIA_PROXY_PATH}?url=${encodeURIComponent(sourceUrl)}`
}

export function isAllowedInstagramMediaUrl(sourceUrl: string) {
  try {
    const parsedUrl = new URL(sourceUrl)

    if (parsedUrl.protocol !== "https:") {
      return false
    }

    return INSTAGRAM_ALLOWED_MEDIA_HOST_SUFFIXES.some(
      (hostSuffix) => parsedUrl.hostname === hostSuffix || parsedUrl.hostname.endsWith(`.${hostSuffix}`)
    )
  } catch {
    return false
  }
}

export function getInstagramMediaRequestHeaders({
  accept,
  range,
}: {
  accept?: string
  range?: string
} = {}) {
  const headers: Record<string, string> = {
    Accept: accept || "*/*",
    Referer: INSTAGRAM_PROFILE_URL,
    "User-Agent": "Mozilla/5.0 (compatible; AVEPANEFeed/1.0; +https://www.instagram.com/avepane/)",
  }

  if (range) {
    headers.Range = range
  }

  return headers
}
