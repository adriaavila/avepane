import { NextResponse } from "next/server"

export interface InstagramPost {
  id: string
  caption: string
  media_url: string
  permalink: string
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM"
  thumbnail_url?: string
  timestamp: string
}

export async function GET() {
  try {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN
    const userId = process.env.INSTAGRAM_USER_ID

    // Return empty array if credentials are not configured (graceful fallback)
    if (!accessToken || !userId) {
      console.warn("Instagram API credentials not configured - returning empty posts")
      return NextResponse.json({ 
        posts: [],
        message: "Instagram API credentials not configured. Please set INSTAGRAM_ACCESS_TOKEN and INSTAGRAM_USER_ID environment variables."
      })
    }

    // Fetch recent media from Instagram Graph API
    const response = await fetch(
      `https://graph.instagram.com/${userId}/media?fields=id,caption,media_url,permalink,media_type,thumbnail_url,timestamp&access_token=${accessToken}&limit=12`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    )

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error("Instagram API error:", errorData)
      // Return empty array instead of error for graceful degradation
      return NextResponse.json({ 
        posts: [],
        message: "Unable to fetch Instagram posts at this time."
      })
    }

    const data = await response.json()

    // Normalize the response
    const posts: InstagramPost[] = (data.data || []).map((post: any) => ({
      id: post.id,
      caption: post.caption || "Publicación de AVEPANE",
      media_url: post.media_url,
      permalink: post.permalink,
      media_type: post.media_type,
      thumbnail_url: post.thumbnail_url,
      timestamp: post.timestamp,
    }))

    return NextResponse.json({ posts })
  } catch (error) {
    console.error("Error fetching Instagram posts:", error)
    // Return empty array instead of error for graceful degradation
    return NextResponse.json({ 
      posts: [],
      message: "Error loading Instagram posts."
    })
  }
}
