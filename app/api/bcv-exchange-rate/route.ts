import { NextResponse } from "next/server"

// BCV API endpoint for exchange rates
const BCV_API_URL = "https://bcv-api.rafnixg.dev/rates/"

// Configure route - allow dynamic fetching (no caching on Vercel edge)
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs' // Use Node.js runtime for better fetch compatibility

async function fetchBCVRate(url: string): Promise<number | null> {
  try {
    // Create timeout controller for better compatibility
    let controller: AbortController | null = null
    let timeoutId: NodeJS.Timeout | null = null
    
    try {
      controller = new AbortController()
      timeoutId = setTimeout(() => controller!.abort(), 10000) // 10 second timeout
    } catch (controllerError) {
      console.warn('AbortController not available, proceeding without timeout')
    }

    const fetchOptions: RequestInit = {
      headers: {
        "Accept": "application/json",
        "User-Agent": "AVEPANE-Donation-App",
      },
      cache: 'no-store', // Don't cache in the fetch itself
    }

    if (controller) {
      fetchOptions.signal = controller.signal
    }

    const response = await fetch(url, fetchOptions)

    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    if (!response.ok) {
      console.error(`BCV API returned status ${response.status}`)
      return null
    }

    const contentType = response.headers.get("content-type")
    let data
    
    try {
      // Try to parse as JSON regardless of content-type header
      const text = await response.text()
      
      if (!contentType || !contentType.includes("application/json")) {
        console.error(`BCV API returned content-type: ${contentType}`)
        console.error(`BCV API response text:`, text.substring(0, 500))
      }
      
      try {
        data = JSON.parse(text)
        console.log(`BCV API response from ${url}:`, JSON.stringify(data, null, 2))
      } catch (jsonError) {
        console.error(`Failed to parse JSON response:`, jsonError)
        console.error(`Response text:`, text.substring(0, 500))
        return null
      }
    } catch (readError) {
      console.error(`Failed to read response:`, readError)
      return null
    }

    // Extract USD to VES rate from the response
    // The API structure may vary, so we'll handle different possible formats
    let usdToVes: number | null = null

    // Try different possible response formats
    // Check if it's a direct number (unlikely but possible)
    if (typeof data === "number" && data > 0) {
      usdToVes = data
    } else if (data.dollar) {
      // Format: { dollar: number, date: string } - This is the actual format from bcv-api.rafnixg.dev
      usdToVes = typeof data.dollar === "number" ? data.dollar : parseFloat(String(data.dollar))
    } else if (data.rates && data.rates.USD) {
      // Format: { rates: { USD: { value: number } } or { rates: { USD: number } }
      const usdRate = data.rates.USD
      usdToVes = typeof usdRate === "number" 
        ? usdRate 
        : usdRate.value || usdRate.rate || usdRate.price || usdRate.valor
    } else if (data.data && data.data.dolar) {
      // Format: { data: { dolar: { value: number } } }
      usdToVes = data.data.dolar.value || data.data.dolar.price || data.data.dolar.rate || data.data.dolar.valor
    } else if (data.USD) {
      // Format: { USD: number } or { USD: { value: number } }
      usdToVes = typeof data.USD === "number" ? data.USD : data.USD.value || data.USD.price || data.USD.rate || data.USD.valor
    } else if (data.dolar) {
      // Format: { dolar: { value: number } }
      usdToVes = typeof data.dolar === "number" ? data.dolar : data.dolar.value || data.dolar.price || data.dolar.rate || data.dolar.valor
    } else if (Array.isArray(data) && data.length > 0) {
      // Format: [{ code: "USD", rate: number }, ...]
      const usdItem = data.find((item: any) => item.code === "USD" || item.currency === "USD" || item.moneda === "USD")
      if (usdItem) {
        usdToVes = usdItem.rate || usdItem.value || usdItem.price || usdItem.valor
      }
    } else if (data.usd) {
      // Format: { usd: number } or { usd: { value: number } }
      usdToVes = typeof data.usd === "number" ? data.usd : data.usd.value || data.usd.price || data.usd.rate || data.usd.valor
    } else if (data.response && data.response.USD) {
      // Format: { response: { USD: number } }
      usdToVes = typeof data.response.USD === "number" ? data.response.USD : data.response.USD.value || data.response.USD.rate
    }

    // Convert string to number if needed and validate
    if (usdToVes !== null) {
      usdToVes = typeof usdToVes === "string" ? parseFloat(usdToVes.replace(/,/g, "")) : usdToVes
    }

    if (!usdToVes || isNaN(usdToVes) || usdToVes <= 0) {
      console.error("BCV API response data (could not parse):", JSON.stringify(data, null, 2))
      return null
    }

    return usdToVes
  } catch (error: any) {
    console.error(`Error fetching from ${url}:`, error)
    // Check if it's an abort error (timeout)
    if (error.name === 'AbortError') {
      console.error('Request timed out')
    }
    return null
  }
}

export async function GET() {
  // Try the primary BCV API endpoint
  try {
    const rate = await fetchBCVRate(BCV_API_URL)
    
    if (rate && rate > 0) {
      return NextResponse.json(
        {
          success: true,
          rate: rate,
          currency: "VES",
          baseCurrency: "USD",
          timestamp: new Date().toISOString(),
        },
        { status: 200 }
      )
    }

    // If primary endpoint fails, log the issue and return a more helpful error
    console.error("Failed to fetch BCV rate - rate was:", rate)
    return NextResponse.json(
      {
        success: false,
        error: "No se pudo obtener la tasa de cambio del BCV",
        message: "La API del BCV no respondió correctamente. Por favor, intenta más tarde.",
      },
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  } catch (error: any) {
    console.error("Error fetching BCV exchange rate:", error)
    console.error("Error stack:", error.stack)
    console.error("Error name:", error.name)
    console.error("Error message:", error.message)
    
    return NextResponse.json(
      {
        success: false,
        error: "No se pudo obtener la tasa de cambio del BCV",
        message: error.message || "Error desconocido al conectar con la API del BCV",
      },
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  }
}
