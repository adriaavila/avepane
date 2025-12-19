import { NextRequest, NextResponse } from "next/server"

// Stripe Webhook endpoint
// This handles events from Stripe after payment completion
// In production, you should:
// 1. Verify the webhook signature
// 2. Process the event (save to database, send emails, etc.)
// 3. Trigger n8n workflow if needed

export async function POST(request: NextRequest) {
  try {
    // Get the raw body for signature verification
    const body = await request.text()
    const signature = request.headers.get("stripe-signature")

    if (!signature) {
      return NextResponse.json(
        { error: "Missing stripe-signature header" },
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
          error: "Stripe SDK no está instalado",
        },
        { status: 500 }
      )
    }

    const stripeSecretKey = process.env.STRIPE_SECRET_KEY
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

    if (!stripeSecretKey || !webhookSecret) {
      return NextResponse.json(
        {
          error: "Stripe configuration missing",
        },
        { status: 500 }
      )
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2024-12-18.acacia",
    })

    let event
    try {
      // Verify webhook signature
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err: any) {
      console.error("Webhook signature verification failed:", err.message)
      return NextResponse.json(
        { error: `Webhook Error: ${err.message}` },
        { status: 400 }
      )
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object
        console.log("Checkout session completed:", session.id)

        // In production:
        // 1. Save donation to database
        // 2. Send confirmation email
        // 3. Trigger n8n workflow to add to Google Sheets
        // 4. Update internal records

        // Example:
        // await db.donations.create({
        //   data: {
        //     stripeSessionId: session.id,
        //     amount: session.amount_total / 100,
        //     currency: session.currency,
        //     customerEmail: session.customer_email,
        //     type: 'international',
        //     status: 'completed',
        //     metadata: session.metadata,
        //   }
        // })

        break

      case "invoice.paid":
        const invoice = event.data.object
        console.log("Invoice paid:", invoice.id)

        // Handle recurring donation payment
        // Example:
        // await db.donations.create({
        //   data: {
        //     stripeInvoiceId: invoice.id,
        //     stripeSubscriptionId: invoice.subscription,
        //     amount: invoice.amount_paid / 100,
        //     currency: invoice.currency,
        //     customerEmail: invoice.customer_email,
        //     type: 'international',
        //     isRecurring: true,
        //     status: 'completed',
        //   }
        // })

        break

      case "customer.subscription.created":
        const subscription = event.data.object
        console.log("Subscription created:", subscription.id)

        // Handle new subscription
        // Example:
        // await db.subscriptions.create({
        //   data: {
        //     stripeSubscriptionId: subscription.id,
        //     customerEmail: subscription.customer_email,
        //     status: subscription.status,
        //     amount: subscription.items.data[0].price.unit_amount / 100,
        //   }
        // })

        break

      case "customer.subscription.deleted":
        const deletedSubscription = event.data.object
        console.log("Subscription deleted:", deletedSubscription.id)

        // Handle subscription cancellation
        // Example:
        // await db.subscriptions.update({
        //   where: { stripeSubscriptionId: deletedSubscription.id },
        //   data: { status: 'canceled' }
        // })

        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error: any) {
    console.error("Webhook error:", error)
    return NextResponse.json(
      {
        error: "Webhook handler failed",
        message: error.message,
      },
      { status: 500 }
    )
  }
}
