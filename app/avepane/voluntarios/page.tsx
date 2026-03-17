import { MainLayout } from "@/components/main-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Heart, ArrowRight, Users, Calendar, HandHeart } from "lucide-react"
import { PageSummary } from "@/components/page-summary"

const PAGE_SUMMARY = "El Voluntariado de AVEPANE es un grupo comprometido que colabora altruistamente en todas nuestras actividades. Tu tiempo y dedicación en eventos, talleres y acompañamiento pueden transformar vidas. Únete a nosotros para generar cambios positivos y apoyar la inclusión de personas con discapacidad intelectual."

export const metadata = {
  title: "Voluntarios - AVEPANE",
  description:
    "Únete como voluntario a AVEPANE. Tu tiempo y dedicación pueden marcar una diferencia significativa en la vida de las personas con discapacidad intelectual.",
}

export default function VolunteersPage() {
  const volunteerOpportunities = [
    {
      icon: Users,
      title: "Acompañamiento",
      description: "Apoya en actividades educativas y programas de desarrollo personal.",
    },
    {
      icon: Calendar,
      title: "Eventos Especiales",
      description: "Participa en la organización y ejecución de eventos y actividades comunitarias.",
    },
    {
      icon: HandHeart,
      title: "Talleres",
      description: "Comparte tus conocimientos y habilidades en talleres formativos.",
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
              Únete como Voluntario
            </h1>
            <p className="text-base leading-relaxed text-pretty md:text-lg">
              Tu tiempo y dedicación pueden marcar una diferencia significativa en la vida de las personas con discapacidad intelectual
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
                Voluntariado AVEPANE
              </h2>
              <div className="space-y-6 text-base md:text-lg leading-relaxed text-pretty">
                <p>
                  El <strong>Voluntariado de AVEPANE</strong> es un grupo de personas que colaboran por decisión propia, de manera altruista y solidaria en las actividades de nuestra Institución.
                </p>

                <div className="bg-secondary/20 p-6 rounded-xl border border-border space-y-4">
                  <h3 className="font-heading text-xl font-semibold text-primary flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    Nuestra Misión
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3 items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span><strong>Generar agentes de cambio</strong> a favor de las personas con discapacidad intelectual (DI).</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span><strong>Apoyar e intervenir</strong> en actividades, eventos y jornadas de la Institución.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span><strong>Luchar por la igualdad</strong> de oportunidades, la calidad de vida y la justicia social.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span><strong>Colaborar en la recaudación de fondos</strong> para consolidar y ampliar nuestros programas y servicios.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary/5 p-6 rounded-xl border border-primary/10 space-y-3">
                  <h3 className="font-heading text-xl font-semibold text-primary flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Nuestra Visión
                  </h3>
                  <p className="text-muted-foreground italic">
                    "Ser un grupo de mucha acción, consolidado, con presencia y expresión de ciudadanía activa organizada. Mientras más grande es nuestra riqueza interior, más frutos producirá nuestro trabajo."
                  </p>
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
              ¿Cómo puedes formar parte del grupo de voluntariado de AVEPANE?
            </h2>
            <div className="max-w-3xl mx-auto space-y-6 text-base md:text-lg leading-relaxed text-pretty">
              <p>
                Para formar parte del grupo de voluntarios de AVEPANE, solo necesitas dedicar parte de tu tiempo libre a las actividades y eventos en nuestra sede. Tu responsabilidad, motivación y solidaridad serán tu mejor aporte.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                <div className="bg-background p-5 rounded-lg border border-border shadow-sm">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" /> Organización
                  </h4>
                  <p className="text-sm text-muted-foreground">Apoyo en la logística y realización de eventos institucionales.</p>
                </div>
                <div className="bg-background p-5 rounded-lg border border-border shadow-sm">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <HandHeart className="h-4 w-4 text-primary" /> Recaudación
                  </h4>
                  <p className="text-sm text-muted-foreground">Ayuda en la venta de productos elaborados por nuestros participantes.</p>
                </div>
              </div>

              <p className="font-medium text-primary mt-6">
                ¡Te invitamos a colaborar! Con tu granito de arena, nos apoyas a incrementar esta hermosa labor que beneficia a nuestra comunidad.
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
              Oportunidades de Voluntariado
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-pretty">
              Diferentes formas en las que puedes contribuir y hacer la diferencia
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
                ¿Listo para hacer la diferencia?
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-pretty max-w-2xl mx-auto">
                Contáctanos y descubre cómo puedes contribuir a nuestra misión de inclusión y desarrollo integral
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="https://forms.gle/VzpCSaugW89CDnqG7" target="_blank" rel="noopener noreferrer">
                  Contactar ahora
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


