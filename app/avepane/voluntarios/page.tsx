import { MainLayout } from "@/components/main-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Heart, ArrowRight, Users, Calendar, HandHeart } from "lucide-react"
import { PageSummary } from "@/components/page-summary"

const PAGE_SUMMARY = "El Programa de Voluntariado de AVEPANE invita a personas comprometidas a aportar tiempo, energía y habilidades en actividades que fortalecen la inclusión de jóvenes y adultos con discapacidad intelectual. Es una forma concreta de acompañar nuestra labor, apoyar a las familias y sumarse a una comunidad solidaria."

export const metadata = {
  title: "Voluntariado - AVEPANE",
  description:
    "Conoce el Programa de Voluntariado de AVEPANE y descubre cómo puedes aportar tiempo, habilidades y compromiso en actividades que impulsan la inclusión.",
}

export default function VolunteersPage() {
  const programGoals = [
    "Apoyar actividades, jornadas y eventos que fortalecen la atención y la inclusión.",
    "Acompañar acciones que benefician a jóvenes y adultos con discapacidad intelectual y a sus familias.",
    "Impulsar una ciudadanía activa y solidaria alrededor de la labor de AVEPANE.",
    "Respaldar iniciativas de recaudación y visibilización que sostienen nuestros programas.",
  ]

  const volunteerBenefits = [
    "Contribuyes de forma concreta a una causa con impacto social.",
    "Pones tus habilidades al servicio de actividades útiles y cercanas a la comunidad.",
    "Te integras a una red de personas comprometidas con la inclusión y el respeto.",
    "Vives una experiencia de aprendizaje, sensibilidad y trabajo en equipo.",
  ]

  const volunteerOpportunities = [
    {
      icon: Users,
      title: "Acompañamiento",
      description: "Apoya experiencias educativas, recreativas y de desarrollo personal junto a participantes y equipos.",
    },
    {
      icon: Calendar,
      title: "Eventos y jornadas",
      description: "Colabora en la organización, logística y atención de actividades institucionales y comunitarias.",
    },
    {
      icon: HandHeart,
      title: "Talleres y apoyo solidario",
      description: "Comparte tus habilidades y contribuye en iniciativas formativas, de difusión y recaudación.",
    },
  ]

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-background/20 mb-2">
              <Heart className="h-6 w-6" aria-hidden="true" />
            </div>
            <h1 className="font-heading text-3xl font-bold leading-tight tracking-tight text-balance md:text-4xl lg:text-5xl">
              Súmate al Voluntariado de AVEPANE
            </h1>
            <p className="text-base leading-relaxed text-pretty md:text-lg">
              Aporta tu tiempo, tus habilidades y tu compromiso en actividades que impulsan la inclusión.
            </p>
            <PageSummary text={PAGE_SUMMARY} />
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 md:py-16 bg-background" aria-labelledby="volunteering-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-5">
              <h2 id="volunteering-heading" className="font-heading text-2xl font-bold md:text-3xl lg:text-4xl text-balance">
                Programa de Voluntariado AVEPANE
              </h2>
              <div className="space-y-6 text-base md:text-lg leading-relaxed text-pretty">
                <p>
                  El <strong>Programa de Voluntariado de AVEPANE</strong> reúne a personas que deciden colaborar de manera solidaria en actividades, eventos y jornadas que apoyan el trabajo de nuestra institución.
                </p>
                <p>
                  Su propósito es sumar manos, ideas y compromiso a una labor que beneficia a jóvenes y adultos con discapacidad intelectual, al tiempo que fortalece el vínculo con sus familias y con la comunidad.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-secondary/20 p-6 rounded-xl border border-border space-y-4">
                    <h3 className="font-heading text-xl font-semibold text-primary flex items-center gap-2">
                      <Heart className="h-5 w-5" />
                      ¿Qué busca este programa?
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      {programGoals.map((goal) => (
                        <li key={goal} className="flex gap-3 items-start">
                          <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/10 space-y-4">
                    <h3 className="font-heading text-xl font-semibold text-primary flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      ¿Por qué sumarte?
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      {volunteerBenefits.map((benefit) => (
                        <li key={benefit} className="flex gap-3 items-start">
                          <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground mt-6"
              >
                <Link href="https://forms.gle/VzpCSaugW89CDnqG7" target="_blank" rel="noopener noreferrer">
                  Quiero ser voluntario
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <div className="relative h-80 md:h-96 lg:h-[500px]">
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

      {/* How to Join Section */}
      <section className="py-12 md:py-16 bg-secondary/20" aria-labelledby="how-to-join-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 id="how-to-join-heading" className="font-heading text-2xl font-bold mb-3 md:text-3xl lg:text-4xl text-balance">
              ¿Cómo puedes participar?
            </h2>
            <div className="max-w-3xl mx-auto space-y-6 text-base md:text-lg leading-relaxed text-pretty">
              <p>
                Solo necesitas disposición para colaborar, responsabilidad y ganas de aportar. Al completar el formulario podremos conocer tu interés, tu disponibilidad y la forma en la que te gustaría apoyar.
              </p>

              <p>
                El programa se articula alrededor de actividades concretas de AVEPANE, según las jornadas, eventos y necesidades vigentes. Tu participación puede convertirse en un apoyo valioso para nuestra comunidad.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 text-left">
                <div className="bg-background p-5 rounded-lg border border-border shadow-sm">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" /> Postulación
                  </h4>
                  <p className="text-sm text-muted-foreground">Completa el formulario y cuéntanos en qué te gustaría apoyar.</p>
                </div>
                <div className="bg-background p-5 rounded-lg border border-border shadow-sm">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" /> Actividades
                  </h4>
                  <p className="text-sm text-muted-foreground">Podrás colaborar en eventos, jornadas, talleres y acciones institucionales.</p>
                </div>
                <div className="bg-background p-5 rounded-lg border border-border shadow-sm">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <HandHeart className="h-4 w-4 text-primary" /> Compromiso
                  </h4>
                  <p className="text-sm text-muted-foreground">La empatía, la puntualidad y el trabajo en equipo hacen la diferencia.</p>
                </div>
              </div>

              <p className="font-medium text-primary mt-6">
                Cada aporte cuenta. Tu participación puede convertirse en una acción concreta a favor de la inclusión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities Section */}
      <section className="py-12 md:py-16 bg-background" aria-labelledby="opportunities-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 id="opportunities-heading" className="font-heading text-2xl font-bold mb-3 md:text-3xl lg:text-4xl text-balance">
              ¿En qué puedes apoyar?
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-pretty">
              Estas son algunas de las formas en las que el programa canaliza la participación voluntaria.
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            {volunteerOpportunities.map((opportunity) => {
              const IconComponent = opportunity.icon
              return (
                <Card key={opportunity.title} className="border-border bg-background">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-balance">{opportunity.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-pretty">{opportunity.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 md:py-16 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="font-heading text-2xl font-bold md:text-3xl text-balance">
                Súmate al programa
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-pretty max-w-2xl mx-auto">
                Completa el formulario y cuéntanos cómo te gustaría apoyar. Tu tiempo y tu compromiso pueden convertirse en un aporte real para nuestra comunidad.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="https://forms.gle/VzpCSaugW89CDnqG7" target="_blank" rel="noopener noreferrer">
                  Postularme como voluntario
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </MainLayout>
  )
}

