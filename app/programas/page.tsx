import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Briefcase, Users, HandHeart, CheckCircle, ArrowRight } from "lucide-react"
import { PageSummary } from "@/components/page-summary"

// Short summary for TTS (max 120 words)
const PAGE_SUMMARY = `AVEPANE ofrece tres programas especializados para la inclusión laboral de personas 
con discapacidad intelectual. El programa de Inserción Laboral prepara a las personas para el mercado 
laboral competitivo. El Empleo Protegido brinda un entorno adaptado y supervisado para desarrollar 
habilidades. El Empleo con Apoyo proporciona acompañamiento continuo para garantizar la integración 
exitosa en empresas. Con más de 50 años de experiencia, hemos beneficiado a más de 500 personas.`

export const metadata = {
  title: "Nuestros Programas - AVEPANE",
  description:
    "Conoce los programas de AVEPANE: Inserción Laboral, Empleo Protegido y Empleo con Apoyo para personas con discapacidad intelectual.",
}

export default function ProgramsPage() {
  const programs = [
    {
      id: "insercion-laboral",
      icon: Briefcase,
      title: "Inserción Laboral",
      description:
        "Programa integral que prepara a personas con discapacidad intelectual para su incorporación exitosa al mercado laboral competitivo.",
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
      title: "Empleo Protegido",
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
              Ofrecemos programas especializados diseñados para promover la inclusión laboral y el desarrollo de
              habilidades de personas con discapacidad intelectual
            </p>
            <PageSummary text={PAGE_SUMMARY} />
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

      {/* Impact Section */}
      <section className="py-16 md:py-20 bg-accent text-accent-foreground" aria-labelledby="impact-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 id="impact-heading" className="font-heading text-3xl font-bold md:text-4xl text-balance">
              Nuestro Impacto
            </h2>

            <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
              <div className="space-y-2">
                <p className="font-heading text-5xl font-bold text-primary">57+</p>
                <p className="text-lg">Años de experiencia</p>
              </div>
              <div className="space-y-2">
                <p className="font-heading text-5xl font-bold text-primary">500+</p>
                <p className="text-lg">Personas beneficiadas</p>
              </div>
              <div className="space-y-2">
                <p className="font-heading text-5xl font-bold text-primary">100+</p>
                <p className="text-lg">Empresas aliadas</p>
              </div>
            </div>

            <p className="text-lg leading-relaxed max-w-2xl mx-auto text-pretty">
              Más de cinco décadas transformando vidas y construyendo un Venezuela más inclusivo
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
    </MainLayout>
  )
}
