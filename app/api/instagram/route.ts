import { NextResponse } from "next/server"
import { getInstagramFeedData } from "@/lib/instagram-feed"

export const revalidate = 3600

export async function GET() {
  const data = await getInstagramFeedData()
  return NextResponse.json(data)
}
