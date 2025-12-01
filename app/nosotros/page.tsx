import { MainLayout } from "@/components/main-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { History, Target, Users, Heart, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Nosotros - AVEPANE",
  description:
    "Conoce la historia, misión, visión y valores de AVEPANE. Más de 50 años trabajando por la inclusión de personas con discapacidad intelectual.",
}

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Compromiso",
      description: "Dedicación absoluta al bienestar y desarrollo de las personas con discapacidad intelectual.",
    },
    {
      icon: Users,
      title: "Inclusión",
      description: "Promovemos la integración social y laboral plena de todos los miembros de nuestra comunidad.",
    },
    {
      icon: Target,
      title: "Excelencia",
      description: "Buscamos la calidad en todos nuestros programas y servicios educativos y laborales.",
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
              Más de cinco décadas construyendo oportunidades y transformando vidas
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 md:py-20 bg-background" aria-labelledby="history-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src="/historical-photo-inclusive-education-venezuela-fou.jpg"
                alt="Historia de AVEPANE - Edificio histórico y fundadores"
                fill
                className="object-cover rounded-xl shadow-xl"
              />
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                <History className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h2 id="history-heading" className="font-heading text-3xl font-bold md:text-4xl text-balance">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-pretty">
                <p>
                  Somos la <strong>Asociación Venezolana de Padres y Amigos de Niños Excepcionales</strong>, una
                  organización fundada hace más de 50 años con el propósito de potenciar el desarrollo integral de
                  niños, jóvenes y adultos con discapacidad intelectual.
                </p>
                <p>
                  Nuestra misión es promover la formación y actualización de recursos humanos a nivel universitario en
                  Educación Especial y carreras afines, desarrollando acciones en las áreas de Prevención, Diagnóstico e
                  Investigación de los factores de alto riesgo que inciden en la discapacidad intelectual.
                </p>
                <p>
                  También promovemos la formación y actualización de recursos humanos a nivel universitario en Educación
                  Especial y carreras afines, siendo un referente nacional en la inclusión y el desarrollo de programas
                  laborales especializados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-border bg-background">
              <CardContent className="p-8 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-balance">Misión</h2>
                <p className="text-lg leading-relaxed text-pretty">
                  Potenciar el desarrollo integral de niños, jóvenes y adultos con discapacidad intelectual mediante un
                  equipo humano altamente motivado, desarrollar acciones en las áreas de Prevención, Diagnóstico e
                  Investigación, y promover la formación en Educación Especial.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-background">
              <CardContent className="p-8 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-balance">Visión</h2>
                <p className="text-lg leading-relaxed text-pretty">
                  Ser la organización líder en Venezuela en la promoción de la inclusión social y laboral de personas
                  con discapacidad intelectual, reconocida por la excelencia de nuestros programas y el impacto
                  transformador en la vida de nuestros beneficiarios y sus familias.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-background" aria-labelledby="values-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="values-heading" className="font-heading text-3xl font-bold mb-4 md:text-4xl text-balance">
              Nuestros Valores
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto text-pretty">
              Principios que guían nuestro trabajo diario y definen nuestra cultura organizacional
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => {
              const IconComponent = value.icon
              return (
                <Card key={value.title} className="border-border bg-background text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-16 w-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-balance">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-pretty">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Volunteering Section */}
      <section
        id="voluntariado"
        className="py-16 md:py-20 bg-primary text-primary-foreground"
        aria-labelledby="volunteering-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 id="volunteering-heading" className="font-heading text-3xl font-bold md:text-4xl text-balance">
                Únete como Voluntario
              </h2>
              <p className="text-lg leading-relaxed text-pretty">
                En AVEPANE valoramos enormemente el apoyo de voluntarios comprometidos con nuestra causa. Tu tiempo y
                dedicación pueden marcar una diferencia significativa en la vida de las personas con discapacidad
                intelectual.
              </p>
              <p className="leading-relaxed text-pretty">
                Como voluntario, podrás participar en actividades educativas, talleres, eventos especiales y programas
                de acompañamiento. No se requiere experiencia previa, solo ganas de ayudar y aprender.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/contacto">
                  Quiero ser voluntario
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <div className="relative h-96">
              <Image
                src="/volunteers-helping-people-disabilities-community-s.jpg"
                alt="Voluntarios de AVEPANE trabajando con la comunidad"
                fill
                className="object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-16 md:py-20 bg-secondary/20" aria-labelledby="structure-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="structure-heading" className="font-heading text-3xl font-bold mb-4 md:text-4xl text-balance">
              Estructura Organizacional
            </h2>
            <p className="text-lg leading-relaxed text-pretty">
              AVEPANE cuenta con un equipo multidisciplinario de profesionales comprometidos
            </p>
          </div>

          <Card className="border-border bg-background">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-heading text-xl font-semibold mb-2">Junta Directiva</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Conformada por padres, familiares y profesionales comprometidos con la misión de AVEPANE
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-heading text-xl font-semibold mb-2">Equipo Técnico</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Psicólogos, educadores especiales, terapeutas ocupacionales y trabajadores sociales
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-heading text-xl font-semibold mb-2">Equipo de Programas</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Coordinadores y facilitadores de los programas de inserción laboral y formación
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </MainLayout>
  )
}
