import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Briefcase, Users, HandHeart, CheckCircle, ArrowRight } from "lucide-react"
import { PageSummary } from "@/components/page-summary"

// Short summary for TTS (max 120 words)
const PAGE_SUMMARY = `En AVEPANE trabajamos para desarrollar habilidades prácticas y productivas en 
personas con discapacidad intelectual. Lo hacemos a través de programas especializados y áreas de 
formación que acompañan su proceso de aprendizaje. El resultado que buscamos es fortalecer su inclusión 
laboral y su participación activa en la comunidad.`

export const metadata = {
  title: "Nuestros Programas - AVEPANE",
  description:
    "Conoce cómo AVEPANE desarrolla habilidades prácticas y productivas mediante programas especializados que favorecen la inclusión laboral.",
}

function ProgramsCTA({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <section className="py-8 md:py-10 bg-background" aria-labelledby="programs-cta-top-heading">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div className="space-y-2">
                  <h2 id="programs-cta-top-heading" className="font-heading text-2xl font-bold text-balance md:text-3xl">
                    ¿Quieres participar en nuestros programas?
                  </h2>
                  <p className="max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
                    Contáctanos para orientarte sobre cómo formar parte de AVEPANE como beneficiario, aliado o voluntario.
                  </p>
                </div>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contacto">
                    Contactar ahora
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-heading text-3xl font-bold md:text-4xl text-balance">
          ¿Quieres participar en nuestros programas?
        </h2>
        <p className="text-lg leading-relaxed text-pretty">
          Contáctanos para conocer cómo puedes formar parte de AVEPANE como beneficiario, empresa aliada o voluntario
        </p>
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="bg-background text-foreground hover:bg-background/90"
        >
          <Link href="/contacto">
            Contactar ahora
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

export default function ProgramsPage() {
  const approach = [
    {
      label: "Fin",
      title: "Desarrollar habilidades prácticas y productivas",
      description:
        "Fortalecemos capacidades que ayudan a cada participante a desenvolverse con mayor autonomía en distintos entornos.",
    },
    {
      label: "Medio",
      title: "Programas especializados y áreas de formación",
      description:
        "Acompañamos ese proceso a través de programas y talleres diseñados según las necesidades y posibilidades de cada persona.",
    },
    {
      label: "Resultado",
      title: "Favorecer la inclusión laboral",
      description:
        "Buscamos que ese aprendizaje se traduzca en oportunidades reales de participación, formación para el trabajo e integración laboral.",
    },
  ]

  const programs = [
    {
      id: "insercion-laboral",
      icon: Briefcase,
      title: "Inserción laboral",
      description:
        "Programa integral que prepara a personas con discapacidad intelectual para su incorporación exitosa a empleos productivos.",
      features: [
        "Evaluación de habilidades y competencias laborales",
        "Formación en competencias técnicas específicas",
        "Desarrollo de habilidades blandas y sociales",
        "Intermediación laboral con empresas",
        "Seguimiento y apoyo post-colocación",
      ],
      image: "/person-with-disability-working-office-professional.jpg",
    },
    {
      id: "empleo-protegido",
      icon: Users,
      title: "Empleo protegido",
      description:
        "Entorno laboral adaptado y supervisado que permite el desarrollo de habilidades en un ambiente seguro y estructurado.",
      features: [
        "Ambiente de trabajo adaptado a necesidades individuales",
        "Supervisión constante y apoyo personalizado",
        "Desarrollo de habilidades laborales básicas",
        "Rutinas estructuradas y predecibles",
        "Evaluación continua del progreso",
      ],
      image: "/sheltered-workshop-people-disabilities-working-tog.jpg",
    },
    {
      id: "empleo-apoyo",
      icon: HandHeart,
      title: "Empleo con Apoyo",
      description:
        "Acompañamiento continuo y personalizado para garantizar la integración exitosa de trabajadores con discapacidad en empresas.",
      features: [
        "Preparador laboral dedicado",
        "Adaptación del puesto de trabajo",
        "Capacitación en el lugar de trabajo",
        "Mediación con empleadores y compañeros",
        "Seguimiento y ajustes continuos",
      ],
      image: "/job-coach-supporting-employee-disability-workplace.jpg",
    },
  ]

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-secondary/30 to-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
              Nuestros Programas
            </h1>
            <p className="text-lg leading-relaxed text-pretty md:text-xl">
              Desarrollamos habilidades prácticas y productivas en personas con discapacidad intelectual a través de
              programas especializados que favorecen su inclusión laboral.
            </p>
            <PageSummary text={PAGE_SUMMARY} />
          </div>
        </div>
      </section>

      <ProgramsCTA compact />

      <section className="py-12 md:py-16 bg-background" aria-labelledby="approach-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="approach-heading" className="font-heading text-3xl font-bold mb-4 md:text-4xl text-balance">
              Nuestro enfoque
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto text-pretty text-muted-foreground">
              Así organizamos nuestro trabajo: primero el propósito, luego la forma de acompañamiento y finalmente el
              resultado que buscamos construir con cada participante.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {approach.map((item) => (
              <Card key={item.label} className="border-border bg-secondary/10">
                <CardContent className="p-6 space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{item.label}</p>
                  <h3 className="font-heading text-2xl font-bold text-balance">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Ocupacionales Section */}
      <section className="py-16 md:py-20 bg-background" aria-labelledby="areas-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="areas-heading" className="font-heading text-3xl font-bold mb-4 md:text-4xl text-balance">
              Áreas de formación práctica
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto text-pretty text-muted-foreground">
              Estas áreas forman parte del medio de trabajo de AVEPANE: son espacios donde se fortalecen habilidades
              prácticas y productivas que luego apoyan los procesos de inclusión laboral.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border bg-secondary/10 hover:bg-secondary/20 transition-colors">
              <CardContent className="p-6 text-center space-y-4">
                <div className="h-12 w-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold">Artesanía y Manualidades</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Fomentamos la creatividad, la motricidad fina y la atención al detalle a través de la creación de piezas únicas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-secondary/10 hover:bg-secondary/20 transition-colors">
              <CardContent className="p-6 text-center space-y-4">
                <div className="h-12 w-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold">Encuadernación</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Desarrollamos disciplina, organización y destrezas manuales estructuradas mediante procesos técnicos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-secondary/10 hover:bg-secondary/20 transition-colors">
              <CardContent className="p-6 text-center space-y-4">
                <div className="h-12 w-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold">Gastronomía Básica</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Promovemos la autonomía, el cumplimiento de normas de higiene y secuencias lógicas de preparación.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-secondary/10 hover:bg-secondary/20 transition-colors">
              <CardContent className="p-6 text-center space-y-4">
                <div className="h-12 w-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold">Labores de Oficina</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Preparamos para entornos profesionales desarrollando competencias en manejo de archivos, asistencia y habilidades ofimáticas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Sections */}
      {programs.map((program, index) => {
        const IconComponent = program.icon
        const isEven = index % 2 === 0

        return (
          <section
            key={program.id}
            id={program.id}
            className={`py-16 md:py-20 ${isEven ? "bg-background" : "bg-secondary/20"}`}
            aria-labelledby={`${program.id}-heading`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className={`grid gap-12 lg:grid-cols-2 items-center ${!isEven ? "lg:grid-flow-dense" : ""}`}>
                <div className={`space-y-6 ${!isEven ? "lg:col-start-2" : ""}`}>
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-lg bg-primary/10">
                    <IconComponent className="h-7 w-7 text-primary" aria-hidden="true" />
                  </div>

                  <h2 id={`${program.id}-heading`} className="font-heading text-3xl font-bold md:text-4xl text-balance">
                    {program.title}
                  </h2>

                  <p className="text-lg leading-relaxed text-pretty">{program.description}</p>

                  <div className="space-y-3">
                    <h3 className="font-heading text-xl font-semibold">Características del programa:</h3>
                    <ul className="space-y-3" role="list">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-3">
                          <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/contacto">
                      Más información
                      <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>

                <div className={`relative h-96 lg:h-[500px] ${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={`${program.title} - Programa de AVEPANE`}
                    fill
                    className="object-cover rounded-xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </section>
        )
      })}

      <ProgramsCTA />
    </MainLayout>
  )
}
