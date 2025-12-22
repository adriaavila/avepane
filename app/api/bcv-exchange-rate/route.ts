import { NextResponse } from "next/server"

// BCV API endpoint for exchange rates
const BCV_API_URL = "https://bcv-api.rafnixg.dev/rates/"

async function fetchBCVRate(url: string): Promise<number | null> {
  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour
      headers: {
        "Accept": "application/json",
      },
      signal: AbortSignal.timeout(8000), // 8 second timeout
    })

    if (!response.ok) {
      console.error(`BCV API returned status ${response.status}`)
      return null
    }

    const contentType = response.headers.get("content-type")
    if (!contentType || !contentType.includes("application/json")) {
      console.error(`BCV API returned content-type: ${contentType}`)
      return null
    }

    const data = await response.json()
    console.log(`BCV API response from ${url}:`, JSON.stringify(data, null, 2))

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
  } catch (error) {
    console.error(`Error fetching from ${url}:`, error)
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

    // If primary endpoint fails, return error
    return NextResponse.json(
      {
        success: false,
        error: "No se pudo obtener la tasa de cambio del BCV",
        message: "La API del BCV no respondió correctamente",
      },
      { status: 500 }
    )
  } catch (error: any) {
    console.error("Error fetching BCV exchange rate:", error)
    
    return NextResponse.json(
      {
        success: false,
        error: "No se pudo obtener la tasa de cambio del BCV",
        message: error.message || "Error desconocido",
      },
      { status: 500 }
    )
  }
}
