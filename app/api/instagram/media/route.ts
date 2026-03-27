import { NextRequest, NextResponse } from "next/server"
import { getInstagramMediaRequestHeaders, isAllowedInstagramMediaUrl } from "@/lib/instagram-media"

const INSTAGRAM_MEDIA_REVALIDATE_SECONDS = 3600
const INSTAGRAM_MEDIA_TIMEOUT_MS = 15000

export const revalidate = 3600

async function proxyInstagramMedia(request: NextRequest, method: "GET" | "HEAD") {
  const sourceUrl = request.nextUrl.searchParams.get("url")

  if (!sourceUrl || !isAllowedInstagramMediaUrl(sourceUrl)) {
    return NextResponse.json(
      { error: "Invalid Instagram media URL." },
      { status: 400 }
    )
  }

  const acceptHeader = request.headers.get("accept") || undefined
  const rangeHeader = request.headers.get("range") || undefined
  const fetchOptions: RequestInit & { next?: { revalidate: number } } = {
    headers: getInstagramMediaRequestHeaders({
      accept: acceptHeader,
      range: rangeHeader,
    }),
    method,
    signal: AbortSignal.timeout(INSTAGRAM_MEDIA_TIMEOUT_MS),
  }

  if (rangeHeader) {
    fetchOptions.cache = "no-store"
  } else {
    fetchOptions.next = { revalidate: INSTAGRAM_MEDIA_REVALIDATE_SECONDS }
  }

  try {
    const response = await fetch(sourceUrl, fetchOptions)

    if (!response.ok || (method === "GET" && !response.body)) {
      console.error("Instagram media proxy error:", response.status, sourceUrl)
      return NextResponse.json(
        { error: "Unable to load Instagram media." },
        { status: 502 }
      )
    }

    const headers = new Headers()

    for (const headerName of [
      "accept-ranges",
      "content-length",
      "content-range",
      "content-type",
      "etag",
      "last-modified",
    ]) {
      const headerValue = response.headers.get(headerName)

      if (headerValue) {
        headers.set(headerName, headerValue)
      }
    }

    headers.set(
      "Cache-Control",
      rangeHeader
        ? "public, max-age=0, s-maxage=0"
        : "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400"
    )
    headers.set("Content-Disposition", "inline")
    headers.set("X-Content-Type-Options", "nosniff")

    return new NextResponse(method === "HEAD" ? null : response.body, {
      status: response.status,
      headers,
    })
  } catch (error) {
    console.error("Instagram media proxy request failed:", error)
    return NextResponse.json(
      { error: "Unable to load Instagram media." },
      { status: 502 }
    )
  }
}

export async function GET(request: NextRequest) {
  return proxyInstagramMedia(request, "GET")
}

export async function HEAD(request: NextRequest) {
  return proxyInstagramMedia(request, "HEAD")
}
