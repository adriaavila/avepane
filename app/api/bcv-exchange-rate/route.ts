import { NextResponse } from "next/server"

// Store the last successful rate in memory as a fallback
let lastSuccessfulRate: number | null = null;
let lastSuccessfulDate: string | null = null;

// Configure route
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

async function fetchWithTimeout(url: string, timeoutMs: number = 8000): Promise<Response> {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs)
  
  try {
    const response = await fetch(url, {
      headers: {
        "Accept": "application/json",
        "User-Agent": "AVEPANE-Donation-App",
      },
      cache: 'no-store',
      signal: controller.signal
    })
    clearTimeout(timeoutId)
    return response
  } catch (error) {
    clearTimeout(timeoutId)
    throw error
  }
}

async function tryDolarApi(): Promise<number | null> {
  try {
    const response = await fetchWithTimeout("https://ve.dolarapi.com/v1/dolares/oficial", 8000)
    if (!response.ok) return null
    const data = await response.json()
    if (data && typeof data.promedio === 'number' && data.promedio > 0) {
      return data.promedio
    }
  } catch (e: any) {
    console.error("DolarAPI fetch failed:", e.message)
  }
  return null
}

async function tryRafnixgApi(): Promise<number | null> {
  try {
    const response = await fetchWithTimeout("https://bcv-api.rafnixg.dev/rates/", 8000)
    if (!response.ok) return null
    const data = await response.json()
    
    let rate = null;
    if (typeof data === "number" && data > 0) rate = data;
    else if (data.dollar) rate = typeof data.dollar === "number" ? data.dollar : parseFloat(String(data.dollar));
    else if (data.rates?.USD) rate = typeof data.rates.USD === "number" ? data.rates.USD : data.rates.USD.value;
    
    if (rate && !isNaN(rate) && rate > 0) return rate;
  } catch (e: any) {
    console.error("Rafnixg API fetch failed:", e.message)
  }
  return null
}

export async function GET() {
  try {
    // Strategy: Try Primary, then Secondary
    let rate = await tryDolarApi()
    
    if (!rate) {
      rate = await tryRafnixgApi()
    }
    
    // Fallback to in-memory cache if both APIs fail
    if (!rate && lastSuccessfulRate) {
      console.warn("Using cached exchange rate:", lastSuccessfulRate)
      rate = lastSuccessfulRate
    } else if (rate) {
      // Update cache
      lastSuccessfulRate = rate
      lastSuccessfulDate = new Date().toISOString()
    }
    
    // If we have a rate (either fresh or cached), return success
    if (rate && rate > 0) {
      return NextResponse.json(
        {
          success: true,
          rate: rate,
          currency: "VES",
          baseCurrency: "USD",
          timestamp: lastSuccessfulDate || new Date().toISOString(),
          isCached: !rate && lastSuccessfulRate ? true : false
        },
        { status: 200 }
      )
    }

    // Final failure
    return NextResponse.json(
      {
        success: false,
        error: "No se pudo obtener la tasa de cambio del BCV",
        message: "No se pudo contactar a ninguna de las APIs de tasa de cambio. Por favor, intenta más tarde.",
        rate: null
      },
      { status: 500 }
    )
  } catch (error: any) {
    console.error("Critical error in BCV exchange rate handler:", error)
    
    if (lastSuccessfulRate) {
      return NextResponse.json(
        {
          success: true,
          rate: lastSuccessfulRate,
          currency: "VES",
          baseCurrency: "USD",
          timestamp: lastSuccessfulDate,
          isCached: true
        },
        { status: 200 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        error: "Error interno al obtener tasa de cambio",
        message: error.message || "Error desconocido",
      },
      { status: 500 }
    )
  }
}
