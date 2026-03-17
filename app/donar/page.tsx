"use client"

import { useState, useEffect } from "react"
import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { DonationInternationalForm } from "@/components/donation-international-form"
import { DonationVenezuelaForm } from "@/components/donation-venezuela-form"
import { Heart, Brain, GraduationCap, Users, CheckCircle } from "lucide-react"
import { PageSummary } from "@/components/page-summary"

const PAGE_SUMMARY = "Tu donación transforma vidas. En AVEPANE trabajamos para que personas con autismo y discapacidad intelectual tengan acceso a educación y oportunidades. Aceptamos donaciones internacionales y nacionales. Tu aporte financia terapias, formación y apoyo a familias."

type DonationType = "international" | "venezuela"

export default function DonatePage() {
  const [donationType, setDonationType] = useState<DonationType>("venezuela")
  const [showThankYou, setShowThankYou] = useState(false)

  // Simple country detection (can be enhanced)
  // useEffect(() => {
  //   const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  //   if (timezone.includes("Caracas") || timezone.includes("America/Caracas")) {
  //     setDonationType("venezuela")
  //   }
  // }, [])

  const handleInternationalDonation = async (amount: number, isRecurring: boolean) => {
    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount * 100, // Convert to cents
          isRecurring,
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || "Error al procesar la donación")
      }

      const { url } = await response.json()
      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Hubo un error al procesar tu donación. Por favor, intenta nuevamente.")
    }
  }

  const handleVenezuelaDonation = async (data: any) => {
    try {
      const response = await fetch("/api/donations/venezuela", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || "Error al registrar la donación")
      }

      setShowThankYou(true)
    } catch (error) {
      console.error("Error:", error)
      alert("Hubo un error al registrar tu donación. Por favor, intenta nuevamente.")
    }
  }

  const impactAreas = [
    {
      icon: Brain,
      title: "Terapias especializadas",
      description: "Acceso a terapias personalizadas que mejoran la calidad de vida y el desarrollo de habilidades.",
    },
    {
      icon: GraduationCap,
      title: "Formación de profesionales",
      description: "Capacitación continua para profesionales que trabajan con personas con autismo.",
    },
    {
      icon: Users,
      title: "Programas educativos",
      description: "Programas educativos inclusivos que promueven el aprendizaje y la integración social.",
    },
    {
      icon: Heart,
      title: "Apoyo a familias",
      description: "Acompañamiento y recursos para familias que enfrentan los desafíos del autismo.",
    },
  ]

  if (showThankYou) {
    return (
      <MainLayout>
        <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 mb-4">
              <CheckCircle className="h-10 w-10 text-primary" aria-hidden="true" />
            </div>
            <h1 className="font-heading text-3xl font-bold md:text-4xl text-balance">
              ¡Gracias por tu donación!
            </h1>
            <p className="text-lg leading-relaxed text-pretty">
              Tu generosidad hace posible que continuemos apoyando a niños, adolescentes y familias con autismo en Venezuela.
            </p>
            <p className="text-base text-muted-foreground">
              Hemos recibido tu información y te contactaremos pronto para confirmar tu donación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="/">Volver al inicio</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setShowThankYou(false)}
              >
                Hacer otra donación
              </Button>
            </div>
          </div>
        </section>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-secondary/30 to-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
                Tu donación transforma vidas.
              </h1>
              <p className="text-lg leading-relaxed text-pretty md:text-xl">
                Ayuda a niños, adolescentes y familias con autismo en Venezuela a acceder a apoyo, inclusión y oportunidades reales.
              </p>
              <p className="text-base leading-relaxed text-pretty text-muted-foreground">
                Donar es acompañar. Donar es incluir. Donar es transformar.
              </p>
              <p className="text-base leading-relaxed text-pretty">
                En AVEPANE trabajamos cada día para que las personas con autismo y sus familias tengan acceso a atención, educación y oportunidades reales.
                Tu aporte —grande o pequeño— tiene un impacto directo y medible.
              </p>
              <PageSummary text={PAGE_SUMMARY} />
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-2">
                <span>Donaciones seguras</span>
                <span>•</span>
                <span>Transparencia</span>
                <span>•</span>
                <span>Impacto real</span>
              </div>
            </div>

            <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Heart className="h-32 w-32 text-primary/30" aria-hidden="true" />
              </div>
              {/* Placeholder for real image */}
              <div className="absolute inset-0 bg-primary/5" />
            </div>
          </div>
        </div>
      </section>

      {/* Donation Type Selector */}
      <section className="py-12 md:py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Tabs
            value={donationType}
            onValueChange={(value) => setDonationType(value as DonationType)}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-8 h-auto min-h-[3.5rem]">
              <TabsTrigger value="venezuela" className="text-base py-3.5 px-4 h-full">
                <span className="block text-center">
                  <span className="block md:inline">🇻🇪 Donación desde</span>
                  <span className="hidden md:inline"> </span>
                  <span className="block md:inline">Venezuela</span>
                </span>
              </TabsTrigger>
              <TabsTrigger value="international" className="text-base py-3.5 px-4 h-full">
                <span className="block text-center">
                  <span className="block md:inline">🌍 Donación</span>
                  <span className="hidden md:inline"> </span>
                  <span className="block md:inline">internacional</span>
                </span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="venezuela" className="mt-0">
              <Card className="border-2">
                <CardContent className="p-6 md:p-8">
                  <DonationVenezuelaForm onDonate={handleVenezuelaDonation} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="international" className="mt-0">
              <Card className="border-2">
                <CardContent className="p-6 md:p-12 text-center space-y-4">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-secondary mb-2">
                    <span className="text-3xl">🌍</span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-balance">Donaciones internacionales</h3>
                  <p className="text-lg text-muted-foreground text-pretty max-w-sm mx-auto">
                    Por el momento solo aceptamos donaciones en Venezuela.
                  </p>
                  {/* <DonationInternationalForm onDonate={handleInternationalDonation} /> */}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 md:py-20 bg-secondary/20" aria-labelledby="impact-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="impact-heading" className="font-heading text-3xl font-bold mb-4 md:text-4xl text-balance">
              ¿En qué se usa tu donación?
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto text-pretty">
              Cada donación se destina directamente a programas que transforman vidas
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {impactAreas.map((area) => {
              const IconComponent = area.icon
              return (
                <Card key={area.title} className="border-border hover:shadow-lg transition-shadow bg-background">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-balance">{area.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-pretty">{area.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-heading text-2xl font-bold md:text-3xl text-balance">
            Transparencia y confianza
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 rounded-lg bg-secondary/30 border border-border">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Años de trabajo continuo</p>
            </div>
            <div className="p-6 rounded-lg bg-secondary/30 border border-border">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <p className="text-muted-foreground">Familias atendidas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Footer */}
      <section className="py-12 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm leading-relaxed text-center text-muted-foreground">
            AVEPANE es una organización sin fines de lucro dedicada al apoyo integral de personas con autismo en Venezuela.
          </p>
        </div>
      </section>
    </MainLayout>
  )
}
