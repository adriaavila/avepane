import { NextRequest, NextResponse } from "next/server"

// Note: Stripe SDK should be installed: npm install stripe
// For now, this is a placeholder that will work once Stripe is installed
// You'll need to set STRIPE_SECRET_KEY in your .env.local

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { amount, isRecurring } = body

    // Validate input
    if (!amount || amount < 100) {
      return NextResponse.json(
        { error: "El monto mínimo es $1.00 USD" },
        { status: 400 }
      )
    }

    // Check if Stripe is available
    let Stripe
    try {
      Stripe = require("stripe")
    } catch (error) {
      return NextResponse.json(
        {
          error: "Stripe SDK no está instalado. Ejecuta: npm install stripe",
          message: "Por favor, instala el SDK de Stripe para continuar.",
        },
        { status: 500 }
      )
    }

    const stripeSecretKey = process.env.STRIPE_SECRET_KEY
    if (!stripeSecretKey) {
      return NextResponse.json(
        {
          error: "STRIPE_SECRET_KEY no está configurada",
          message: "Por favor, configura tu clave secreta de Stripe en las variables de entorno.",
        },
        { status: 500 }
      )
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2024-12-18.acacia",
    })

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"

    if (isRecurring) {
      // Create a subscription (monthly recurring donation)
      // First, create or get the product
      let product
      const products = await stripe.products.search({
        query: 'name:"Donación AVEPANE"',
      })

      if (products.data.length > 0) {
        product = products.data[0]
      } else {
        product = await stripe.products.create({
          name: "Donación AVEPANE",
          description: "Donación mensual recurrente para AVEPANE",
        })
      }

      // Create or get the price
      let price
      const prices = await stripe.prices.list({
        product: product.id,
        active: true,
      })

      const existingPrice = prices.data.find(
        (p) => p.unit_amount === amount && p.recurring?.interval === "month"
      )

      if (existingPrice) {
        price = existingPrice
      } else {
        price = await stripe.prices.create({
          product: product.id,
          unit_amount: amount,
          currency: "usd",
          recurring: {
            interval: "month",
          },
        })
      }

      // Create checkout session for subscription
      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        line_items: [
          {
            price: price.id,
            quantity: 1,
          },
        ],
        success_url: `${baseUrl}/donar?success=true&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/donar?canceled=true`,
        metadata: {
          donation_type: "recurring",
          organization: "AVEPANE",
        },
        payment_method_types: ["card"],
        allow_promotion_codes: true,
      })

      return NextResponse.json({ url: session.url })
    } else {
      // Create one-time payment
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Donación AVEPANE",
                description: "Donación única para AVEPANE",
              },
              unit_amount: amount,
            },
            quantity: 1,
          },
        ],
        success_url: `${baseUrl}/donar?success=true&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/donar?canceled=true`,
        metadata: {
          donation_type: "one-time",
          organization: "AVEPANE",
        },
        payment_method_types: ["card"],
        allow_promotion_codes: true,
      })

      return NextResponse.json({ url: session.url })
    }
  } catch (error: any) {
    console.error("Stripe checkout error:", error)
    return NextResponse.json(
      {
        error: "Error al crear la sesión de pago",
        message: error.message || "Por favor, intenta nuevamente.",
      },
      { status: 500 }
    )
  }
}
