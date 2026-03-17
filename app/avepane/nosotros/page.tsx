import { MainLayout } from "@/components/main-layout"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { History, Target, Users, Heart, Briefcase, CheckCircle2 } from "lucide-react"
import { PageSummary } from "@/components/page-summary"

const PAGE_SUMMARY = `AVEPANE fue fundada en 1963 como una organización sin fines de lucro por padres, familiares y profesionales comprometidos con la calidad de vida de personas con discapacidad intelectual y sus familias. Su misión está orientada a la educación integral, la formación para el trabajo y el desarrollo de habilidades que promuevan inclusión, empleabilidad e independencia.`

export const metadata = {
  title: "Nosotros - AVEPANE",
  description:
    "Conoce la historia, misión, visión, objetivos y estructura institucional de AVEPANE. Más de seis décadas trabajando por la inclusión de personas con discapacidad intelectual.",
}

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Compromiso",
      description: "Trabajamos con dedicación y sensibilidad para acompañar a cada participante y a sus familias.",
    },
    {
      icon: Users,
      title: "Inclusión",
      description: "Promovemos oportunidades reales de participación, formación y desarrollo dentro de la sociedad.",
    },
    {
      icon: Target,
      title: "Formación",
      description: "Impulsamos procesos educativos y laborales orientados a fortalecer habilidades y autonomía.",
    },
  ]

  const objectives = [
    "Desarrollar en el joven o adulto con discapacidad la independencia aplicada al empleo.",
    "Mejorar a través de los métodos técnicos necesarios la calidad de vida del joven o adulto con discapacidad.",
    "Integrar a través de los métodos científicos necesarios las habilidades sociales que le permitan un buen desenvolvimiento al joven o adulto con discapacidad.",
    "Garantizar la incorporación del joven o adulto con discapacidad a empleos productivos que garanticen su independencia económica y social.",
  ]

  return (
    <MainLayout>
      <section className="relative bg-gradient-to-b from-secondary/30 to-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
              Sobre AVEPANE
            </h1>
            <p className="text-lg leading-relaxed text-pretty md:text-xl">
              Más de seis décadas dedicadas a la formación, la inclusión y el acompañamiento de personas con discapacidad intelectual y sus familias.
            </p>
            <PageSummary text={PAGE_SUMMARY} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background" aria-labelledby="history-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div className="relative h-96 lg:h-[560px]">
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
                Nuestra historia
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-pretty">
                <p>
                  <strong>AVEPANE</strong> fue fundada en <strong>1963</strong> como una organización sin fines de lucro por un grupo de padres, familiares y profesionales comprometidos con mejorar la calidad de vida de niños con discapacidad intelectual y sus familias.
                </p>
                <p>
                  La institución nació originalmente como <strong>Asociación de Padres y Amigos de Niños Excepcionales</strong>, impulsada por la necesidad de crear espacios de apoyo, educación y atención especializada para niños con necesidades especiales en Venezuela. Desde sus inicios, sus fundadores asumieron el reto de abordar esta realidad desde una perspectiva social, promoviendo iniciativas educativas, científicas y comunitarias en colaboración con la sociedad y el Estado.
                </p>
                <p>
                  Con el paso del tiempo, AVEPANE consolidó programas orientados a la formación, la investigación y la atención integral, siempre con el objetivo de promover la inclusión y el desarrollo de los niños y sus familias.
                </p>
              </div>
            </div>
          </div>

          <Card className="border-border bg-secondary/20 mt-12 md:mt-16">
            <CardContent className="p-6 md:p-10">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div className="space-y-6">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-balance">Primera junta directiva</h3>
                  <div className="space-y-4 text-base md:text-lg leading-relaxed text-pretty">
                    <p>
                      En el año <strong>1963</strong>, tras la fundación de la institución, se conformó el primer Consejo Directivo de AVEPANE, integrado por destacados padres, profesionales y colaboradores comprometidos con la causa.
                    </p>
                    <p>
                      El consejo estuvo conformado por <strong>Carlos Beracasa</strong>, <strong>Carlos Tronconi</strong>, <strong>Jacques Benergui</strong>, <strong>Reyna de Benergui</strong>, <strong>Gustavo Leal</strong>, <strong>Bernardo Meléndez</strong> y <strong>Pedro Berrueta</strong>.
                    </p>
                    <p>
                      Este primer equipo directivo sentó las bases institucionales de AVEPANE, estableciendo su estructura organizativa y orientando las primeras iniciativas destinadas a mejorar la atención, educación y calidad de vida de los niños con discapacidad intelectual en Venezuela.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-xl bg-background p-6 border border-border shadow-sm space-y-4">
                    <p className="font-heading text-xl font-semibold text-foreground">Cargos directivos iniciales</p>
                    <ul className="space-y-3 text-muted-foreground text-base md:text-lg">
                      <li className="flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                        <span><strong className="text-foreground">Presidente:</strong> Carlos Beracasa</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                        <span><strong className="text-foreground">Vicepresidenta:</strong> Reyna de Benergui</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                        <span><strong className="text-foreground">Secretario General:</strong> Jacques Benergui</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                        <span><strong className="text-foreground">Secretario de Relaciones Públicas:</strong> Pedro Berrueta</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4 text-base md:text-lg leading-relaxed text-pretty">
                    <p>
                      Adicionalmente, de acuerdo con lo establecido en los estatutos de la institución, fueron designados Presidentes Honorarios <strong>Alegría de Beracasa</strong> y <strong>Dr. Luis Teófilo Núñez</strong>, en reconocimiento a su apoyo y compromiso con la misión de la organización.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-border bg-background">
              <CardContent className="p-8 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-balance">Misión</h2>
                <p className="text-lg leading-relaxed text-pretty">
                  Educación integral, en la formación de un oficio, en áreas de interés dirigida a jóvenes y adultos con necesidades y condiciones especiales que presentan discapacidad intelectual con un enfoque humanística bajo estrategias pedagógicas personalizadas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-background">
              <CardContent className="p-8 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-balance">Visión</h2>
                <p className="text-lg leading-relaxed text-pretty">
                  Garantizar la formación laboral del joven y adulto con discapacidad intelectual, permitiéndoles así avanzar con la educación para el trabajo; promoviendo un perfil de empleabilidad y habilidades operativas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background" aria-labelledby="objectives-heading">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="objectives-heading" className="font-heading text-3xl font-bold mb-4 md:text-4xl text-balance">
              Objetivos
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto text-pretty">
              Objetivos orientados a fortalecer la autonomía, la inclusión y la formación para el trabajo de jóvenes y adultos con discapacidad intelectual.
            </p>
          </div>

          <Card className="border-border bg-secondary/20">
            <CardContent className="p-8 md:p-10">
              <ul className="space-y-4">
                {objectives.map((objective) => (
                  <li key={objective} className="flex items-start gap-3 text-base md:text-lg leading-relaxed text-pretty">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" aria-hidden="true" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary/20" aria-labelledby="values-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="values-heading" className="font-heading text-3xl font-bold mb-4 md:text-4xl text-balance">
              Nuestros valores
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto text-pretty">
              Principios que orientan nuestro trabajo institucional y fortalecen nuestra relación con la comunidad.
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

      <section className="py-16 md:py-20 bg-background" aria-labelledby="structure-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="structure-heading" className="font-heading text-3xl font-bold mb-4 md:text-4xl text-balance">
              Estructura organizacional
            </h2>
            <p className="text-lg leading-relaxed text-pretty">
              AVEPANE cuenta con una estructura institucional y un equipo comprometido con su misión educativa y social.
            </p>
          </div>

          <Card className="border-border bg-secondary/20">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-heading text-xl font-semibold mb-2">Junta directiva</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Conformada por padres, familiares y profesionales comprometidos con la continuidad institucional y el cumplimiento de la misión de AVEPANE.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-heading text-xl font-semibold mb-2">Equipo técnico</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Integrado por especialistas y profesionales que acompañan los procesos educativos, formativos y de atención integral.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-heading text-xl font-semibold mb-2">Programas y formación</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Coordinadores y facilitadores que impulsan programas orientados al desarrollo de habilidades, formación laboral e inclusión.
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
