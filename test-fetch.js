async function fetchBCVRate(url) {
  try {
    let controller = null
    let timeoutId = null
    
    try {
      controller = new AbortController()
      timeoutId = setTimeout(() => controller.abort(), 10000)
    } catch (e) {}

    const fetchOptions = {
      headers: {
        "Accept": "application/json",
        "User-Agent": "AVEPANE-Donation-App",
      },
      cache: 'no-store',
    }

    if (controller) fetchOptions.signal = controller.signal

    const response = await fetch(url, fetchOptions)

    if (timeoutId) clearTimeout(timeoutId)

    if (!response.ok) {
      console.error(`Status ${response.status}`)
      return null
    }

    const text = await response.text()
    console.log("Response text:", text.substring(0, 500))
    
    const data = JSON.parse(text)
    
    let usdToVes = null

    if (typeof data === "number" && data > 0) {
      usdToVes = data
    } else if (data.dollar) {
      usdToVes = typeof data.dollar === "number" ? data.dollar : parseFloat(String(data.dollar))
    }

    return usdToVes
  } catch (error) {
    console.error(`Error fetching:`, error)
    return null
  }
}

fetchBCVRate("https://bcv-api.rafnixg.dev/rates/").then(console.log).catch(console.error)
