import { MainLayout } from "@/components/main-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Users, Heart, ShoppingBag, ArrowRight, History, Target } from "lucide-react"
import { PageSummary } from "@/components/page-summary"

const PAGE_SUMMARY = "AVEPANE (Asociación Venezolana de Padres y Amigos de Niños Excepcionales) trabaja desde hace más de 50 años por la inclusión. Nuestra misión es potenciar el desarrollo integral de personas con discapacidad intelectual mediante programas de prevención, educación y formación laboral."

export const metadata = {
  title: "AVEPANE - Asociación Venezolana de Padres y Amigos de Niños Excepcionales",
  description:
    "Conoce AVEPANE: nuestra historia, voluntariado y vitrina virtual. Más de 50 años trabajando por la inclusión de personas con discapacidad intelectual.",
}

export default function AvepanePage() {
  const sections = [
    {
      title: "Nosotros",
      description: "Conoce nuestra historia, misión, visión y valores. Más de cinco décadas construyendo oportunidades y transformando vidas.",
      href: "/avepane/nosotros",
      icon: History,
      image: "/historical-photo-inclusive-education-venezuela-fou.jpg",
      color: "from-secondary/30 to-background",
    },
    {
      title: "Voluntarios",
      description: "Únete como voluntario a AVEPANE. Tu tiempo y dedicación pueden marcar una diferencia significativa en la vida de las personas con discapacidad intelectual.",
      href: "/avepane/voluntarios",
      icon: Heart,
      image: "/volunteers-helping-people-disabilities-community-s.jpg",
      color: "from-primary to-primary/90",
    },
    {
      title: "Vitrina",
      description: "Descubre los increíbles trabajos y creaciones realizadas por nuestros Niños Excepcionales. Productos artesanales y emprendimientos únicos.",
      href: "/avepane/vitrina",
      icon: ShoppingBag,
      image: "/virtual-market-handmade-crafts-bazaar-products.jpg",
      color: "from-primary/10 to-background",
    },
  ]

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-secondary/30 to-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
              Sobre AVEPANE
            </h1>
            <p className="text-lg leading-relaxed text-pretty md:text-xl">
              Asociación Venezolana de Padres y Amigos de Niños Excepcionales
            </p>
            <PageSummary text={PAGE_SUMMARY} />
            <p className="text-base leading-relaxed text-pretty">
              Más de cinco décadas construyendo oportunidades y transformando vidas. Conoce nuestra organización, únete como voluntario o descubre los trabajos de nuestros Niños Excepcionales.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-16 md:py-20 bg-background" aria-labelledby="overview-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="overview-heading" className="font-heading text-3xl font-bold mb-4 md:text-4xl text-balance">
              Conoce más sobre AVEPANE
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto text-pretty">
              Explora nuestras secciones para conocer nuestra historia, unirte como voluntario o descubrir los trabajos de nuestra comunidad
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {sections.map((section) => {
              const IconComponent = section.icon
              return (
                <Card key={section.title} className="border-border bg-background overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-64">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 mb-2">
                        <IconComponent className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-primary-foreground text-balance">
                        {section.title}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed text-pretty">
                      {section.description}
                    </p>
                    <Button
                      asChild
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Link href={section.href}>
                        Ver más sobre {section.title}
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Brief Info Section */}
      <section className="py-16 md:py-20 bg-secondary/20" aria-labelledby="brief-info-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h2 id="brief-info-heading" className="font-heading text-3xl font-bold md:text-4xl text-balance">
                Nuestra Misión
              </h2>
              <p className="text-lg leading-relaxed text-pretty">
                Potenciar el desarrollo integral de niños, jóvenes y adultos con discapacidad intelectual mediante un
                equipo humano altamente motivado, desarrollar acciones en las áreas de Prevención, Diagnóstico e
                Investigación, y promover la formación en Educación Especial.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="/avepane/nosotros">
                  Conocer más sobre nosotros
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src="/historical-photo-inclusive-education-venezuela-fou.jpg"
                alt="Historia de AVEPANE"
                fill
                className="object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="font-heading text-2xl font-bold md:text-3xl text-balance">
                ¿Quieres ser parte de AVEPANE?
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-pretty">
                Ya sea como voluntario, donante o colaborador, tu apoyo es fundamental para continuar nuestra misión
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Link href="/avepane/voluntarios">
                    Ser voluntario
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                >
                  <Link href="/contacto">
                    Contactar
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </MainLayout>
  )
}


