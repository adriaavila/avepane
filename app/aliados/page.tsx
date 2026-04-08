import { MainLayout } from "@/components/main-layout"
import { PageSummary } from "@/components/page-summary"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Coffee, ExternalLink, Handshake, Heart, Leaf } from "lucide-react"

const PAGE_SUMMARY =
  "Conoce a dos aliados reales que hoy acompañan a AVEPANE: Proyecto Niños de la Selva y Jabalí Coffee Club. Su trabajo suma impacto social, apoyo concreto y vínculos que fortalecen nuestra comunidad."

export const metadata = {
  title: "Aliados Estratégicos - AVEPANE",
  description:
    "Conoce a los aliados reales que acompañan a AVEPANE y descubre cómo apoyar la continuidad de sus programas a través de donaciones y padrinazgo.",
}

const allies = [
  {
    id: "selva",
    name: "Proyecto Niños de la Selva",
    logo: "/aliados/logo-proyecto-ninos-de-la-selva.png",
    logoContainerClassName: "bg-white",
    description:
      "Fundación con 28 años de labor filantrópica que ha concentrado esfuerzos en llevar medicinas, ropa, comida, juguetes y atención médico-odontológica a más de 1.300 niños de comunidades indígenas del sur de Venezuela. También impulsa útiles escolares, construcción de escuelas y expediciones solidarias junto a un equipo multidisciplinario liderado por Tony Velásquez.",
    highlights: ["28 años", "+1.300 niños", "4 expediciones al año"],
    link: "https://www.anuv.co/programa-ni%C3%B1os-de-la-selva.php",
    linkLabel: "Conocer el proyecto",
  },
  {
    id: "jabali",
    name: "Jabalí Coffee Club",
    logo: "/aliados/logo-jabali-coffee-club.jpg",
    logoContainerClassName: "bg-black",
    description:
      "Proyecto dedicado a proyectar la excelencia del café venezolano a través de toda su cadena de valor, honrando al productor local y diseñando experiencias de sabor personalizadas para sus clientes. Su visión apuesta por conectar de forma transparente la finca con la taza y elevar el estándar de calidad y pasión alrededor del café venezolano.",
    highlights: ["Café venezolano", "Finca a taza", "Productor local"],
    link: null,
    linkLabel: "",
  },
]

const supportOptions = [
  {
    icon: Heart,
    title: "Hazte padrino",
    description:
      "Con tu aporte periódico contribuyes a sostener programas de formación, talleres y espacios de acompañamiento para jóvenes y adultos de AVEPANE.",
  },
  {
    icon: Leaf,
    title: "Tu aporte es importante",
    description:
      "Cada contribución fortalece materiales, atención, actividades y oportunidades que impactan de manera directa a nuestra comunidad.",
  },
  {
    icon: Coffee,
    title: "Dona aquí",
    description:
      "Si deseas apoyar hoy, puedes hacerlo desde nuestra sección de donaciones y sumarte de forma concreta a esta labor.",
  },
]

export default function AlliesPage() {
  return (
    <MainLayout>
      <section className="relative bg-gradient-to-b from-secondary/30 to-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Handshake className="h-8 w-8 text-primary" aria-hidden="true" />
            </div>
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
              Aliados Estratégicos
            </h1>
            <p className="text-lg leading-relaxed text-pretty md:text-xl">
              Marcas y proyectos que hoy acompañan a AVEPANE y fortalecen nuestra labor social
            </p>
            <PageSummary text={PAGE_SUMMARY} />
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20" aria-labelledby="allies-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="allies-heading" className="sr-only">
            Organizaciones aliadas de AVEPANE
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {allies.map((ally) => (
              <Card key={ally.id} className="border-border bg-background shadow-sm transition-shadow hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div
                      className={`relative flex min-h-[220px] items-center justify-center overflow-hidden rounded-2xl border border-border/60 p-6 ${ally.logoContainerClassName}`}
                    >
                      <Image
                        src={ally.logo}
                        alt={`Logo de ${ally.name}`}
                        width={360}
                        height={260}
                        className="h-auto max-h-[220px] w-auto max-w-full object-contain"
                      />
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-heading text-2xl font-semibold text-balance">{ally.name}</h3>
                      <p className="text-base leading-relaxed text-muted-foreground text-pretty">{ally.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {ally.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full bg-secondary/40 px-3 py-1 text-sm font-medium text-foreground"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {ally.link ? (
                      <Button asChild variant="outline" className="w-full sm:w-auto">
                        <a
                          href={ally.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          {ally.linkLabel}
                          <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        </a>
                      </Button>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/20 py-16 md:py-20" aria-labelledby="support-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center space-y-4">
            <h2 id="support-heading" className="font-heading text-3xl font-bold text-balance md:text-4xl">
              Formas de apoyar a AVEPANE
            </h2>
            <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
              El trabajo de AVEPANE también se fortalece gracias a personas y empresas que deciden sumarse con apoyo
              concreto, solidario y sostenido.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {supportOptions.map((option) => {
              const IconComponent = option.icon

              return (
                <Card key={option.title} className="border-border bg-background">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <IconComponent className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-balance">{option.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-pretty">{option.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="font-heading text-3xl font-bold text-balance md:text-4xl">
              Hazte padrino de AVEPANE
            </h2>
            <p className="text-lg leading-relaxed text-pretty">
              Tu apoyo hace posible la continuidad de nuestros programas, talleres y oportunidades de desarrollo. Si
              deseas sumarte a esta causa, aquí encontrarás una forma directa de aportar o de solicitar más
              información.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/donar">
                  Dona aquí
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/contacto">
                  Quiero más información
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
