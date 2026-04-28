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

const allies: {
  id: string
  name: string
  logo: string
  logoContainerClassName?: string
  link?: string | null
}[] = [
  {
    id: "aquantys",
    name: "Aquantys",
    logo: "/aliados/Aquantys.jpg",
    logoContainerClassName: "bg-white",
  },
  {
    id: "asogin",
    name: "Asogin",
    logo: "/aliados/Asogin.jpg",
    logoContainerClassName: "bg-white",
  },
  {
    id: "atelier-de-pintores",
    name: "Atelier de Pintores",
    logo: "/aliados/Atelier de Pintores.jpg",
    logoContainerClassName: "bg-white",
  },
  {
    id: "ayl-impresion-digital",
    name: "AyL Impresión digital",
    logo: "/aliados/AyL Impresión digital.jpg",
    logoContainerClassName: "bg-white",
  },
  {
    id: "casa-avepane",
    name: "Casa Avepane",
    logo: "/aliados/Casa Avepane.jpg",
    logoContainerClassName: "bg-white",
  },
  {
    id: "ceta",
    name: "Ceta",
    logo: "/aliados/Ceta.jpg",
    logoContainerClassName: "bg-white",
  },
  {
    id: "colegio-marbe",
    name: "Colegio Marbe",
    logo: "/aliados/Colegio Marbe.jpg",
    logoContainerClassName: "bg-white",
  },
  {
    id: "consejo-municipal-de-baruta",
    name: "Consejo Municipal de Baruta",
    logo: "/aliados/Consejo Municipal de Baruta.jpg",
    logoContainerClassName: "bg-white",
  },
  {
    id: "cygne-porcelanas",
    name: "Cygne Porcelanas",
    logo: "/aliados/Cygne Porcelanas.jpg",
    logoContainerClassName: "bg-white",
  },
  {
    id: "digitel",
    name: "Digitel",
    logo: "/aliados/Digitel.jpg",
    logoContainerClassName: "bg-white",
  },
  {
    id: "movistar-venezuela",
    name: "Movistar Venezuela",
    logo: "/aliados/Movistar Venezuela.jpg",
    logoContainerClassName: "bg-white",
  },
  {
    id: "paramas",
    name: "Paramas",
    logo: "/aliados/Paramas.jpg",
    logoContainerClassName: "bg-white",
  },
  {
    id: "prenta-ccs",
    name: "Prenta CCS",
    logo: "/aliados/Prenta CCS.jpg",
    logoContainerClassName: "bg-white",
  },
  {
    id: "que-marquesas",
    name: "Que Marquesas",
    logo: "/aliados/Que Marquesas.jpg",
    logoContainerClassName: "bg-white",
  },
  {
    id: "vivero-la-montanita",
    name: "Vivero La Montañita",
    logo: "/aliados/Vivero La Montañita.jpg",
    logoContainerClassName: "bg-white",
  },
  {
    id: "wild-padel",
    name: "Wild Padel",
    logo: "/aliados/Wild Padel.jpg",
    logoContainerClassName: "bg-white",
  },
  {
    id: "zoom",
    name: "Zoom",
    logo: "/aliados/Zoom.jpg",
    logoContainerClassName: "bg-white",
  },
  {
    id: "selva",
    name: "Proyecto Niños de la Selva",
    logo: "/aliados/logo-proyecto-ninos-de-la-selva.png",
    logoContainerClassName: "bg-white",
    link: "https://www.anuv.co/programa-ni%C3%B1os-de-la-selva.php",
  },
  {
    id: "jabali",
    name: "Jabalí Coffee Club",
    logo: "/aliados/logo-jabali-coffee-club.jpg",
    logoContainerClassName: "bg-black",
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

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {allies.map((ally) => (
              <Card key={ally.id} className="border-border bg-background shadow-sm transition-shadow hover:shadow-lg overflow-hidden">
                <div
                  className={`relative flex h-[220px] w-full items-center justify-center p-6 ${ally.logoContainerClassName}`}
                >
                  {ally.link ? (
                    <a href={ally.link} target="_blank" rel="noopener noreferrer" className="relative flex h-full w-full items-center justify-center">
                      <Image
                        src={ally.logo}
                        alt={`Logo de ${ally.name}`}
                        fill
                        className="object-contain p-4"
                      />
                    </a>
                  ) : (
                    <div className="relative flex h-full w-full items-center justify-center">
                      <Image
                        src={ally.logo}
                        alt={`Logo de ${ally.name}`}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/20 py-16 md:py-20" aria-labelledby="support-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center space-y-4">
            <h2 id="support-heading" className="font-heading text-3xl font-bold text-balance md:text-4xl">
              Apadrina hoy, impacta siempre
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
