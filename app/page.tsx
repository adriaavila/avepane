import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Heart, Users, Briefcase, ArrowRight, Gift, ShoppingBag } from "lucide-react"
import { PageSummary } from "@/components/page-summary"

const PAGE_SUMMARY = "Bienvenidos a AVEPANE. Desde hace más de 50 años construimos oportunidades para personas con discapacidad intelectual en Venezuela. Ofrecemos programas de inserción laboral, empleo protegido y educación especial. Conoce nuestra misión, nuestros programas y cómo puedes formar parte de esta labor."

export default function HomePage() {
  const programs = [
    {
      icon: Briefcase,
      title: "Inserción Laboral",
      description: "Facilitamos la incorporación de personas con discapacidad intelectual al mercado laboral.",
      href: "/programas#insercion-laboral",
    },
    {
      icon: Users,
      title: "Empleo Protegido",
      description: "Entorno laboral adaptado que permite el desarrollo de habilidades en un ambiente seguro.",
      href: "/programas#empleo-protegido",
    },
    {
      icon: Heart,
      title: "Empleo con Apoyo",
      description: "Acompañamiento continuo para garantizar la integración exitosa en empresas.",
      href: "/programas#empleo-apoyo",
    },
  ]

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-secondary/30 to-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
                Construyendo Oportunidades para Todos
              </h1>
              <p className="text-lg leading-relaxed text-pretty md:text-xl">
                Somos la <strong>Asociación Venezolana de Padres y Amigos de Niños Excepcionales (AVEPANE)</strong>, nuestra
                misión es potenciar el desarrollo integral de niños, jóvenes y adultos con discapacidad intelectual
                mediante programas especializados.
              </p>
              <PageSummary text={PAGE_SUMMARY} />
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  <Link href="/avepane/nosotros">
                    Conócenos
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-accent text-foreground hover:bg-secondary/50 bg-transparent"
                >
                  <Link href="/contacto">Contáctanos</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-96 lg:h-[500px]">
              <Image
                src="/people-with-disabilities-working-together-in-suppo.jpg"
                alt="Personas trabajando en un ambiente inclusivo y de apoyo"
                fill
                className="object-cover rounded-xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4 md:text-4xl text-balance">Somos AVEPANE</h2>
            <p className="text-lg leading-relaxed text-pretty">
              Desde hace más de 50 años trabajamos para promover la formación y actualización de recursos humanos en
              Educación Especial y carreras afines, desarrollando acciones en las áreas de Prevención, Diagnóstico e
              Investigación.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-20 bg-secondary/20" aria-labelledby="programs-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="programs-heading" className="font-heading text-3xl font-bold mb-4 md:text-4xl text-balance">
              Nuestros Programas
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto text-pretty">
              Desarrollamos programas especializados enfocados en la inserción laboral y el desarrollo de habilidades
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => {
              const IconComponent = program.icon
              return (
                <Card key={program.title} className="border-border hover:shadow-lg transition-shadow bg-background">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-balance">{program.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-pretty">{program.description}</p>
                    <Link
                      href={program.href}
                      className="inline-flex items-center text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded font-medium"
                    >
                      Conocer más
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Activities Gallery */}
      <section className="py-16 md:py-20 bg-background" aria-labelledby="activities-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="activities-heading" className="font-heading text-3xl font-bold mb-4 md:text-4xl text-balance">
              Nuestras Actividades
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto text-pretty">
              Conoce algunas de las actividades que realizamos con nuestra comunidad
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative h-64 rounded-xl overflow-hidden group">
                <Image
                  src={`/inclusive-activities-workshop-training-disabilitie.jpg?height=300&width=400&query=inclusive activities workshop training disabilities support group ${item}`}
                  alt={`Actividad de AVEPANE ${item} - Talleres y actividades de integración`}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Bazaar Section */}
      <section
        id="bazar-virtual"
        className="py-16 md:py-20 bg-primary text-primary-foreground"
        aria-labelledby="bazaar-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-foreground/20">
                <ShoppingBag className="h-8 w-8" aria-hidden="true" />
              </div>
              <h2 id="bazaar-heading" className="font-heading text-3xl font-bold md:text-4xl text-balance">
                Vitrina virtual AVEPANE
              </h2>
              <p className="text-lg leading-relaxed text-pretty">
                Te invitamos a formar parte del <strong>Bazar Virtual Avepane 2020</strong>, dirigido a presentar una vitrina que funcione
                para dar a conocer a importantes emprendimientos en la búsqueda de personas sensibles a las obras de
                carácter social y humanitario.
              </p>
              <p className="leading-relaxed text-pretty">
                Con el <strong>Bazar Virtual Avepane 2020</strong> tendremos la oportunidad de ayudarnos, tu mercado va a crecer y nosotros
                recibiremos un aporte. El Covid-19 nos ha cambiado todas las formas de recaudar fondos para continuar con
                los planes que AVEPANE realiza desde hace 57 años, pero no nos podemos detener, nuestros niños, jóvenes y adultos cuentan con nosotros.
              </p>
              <p className="leading-relaxed text-pretty">
                Buscamos captar fondos para contribuir con los programas que lleva a cabo la institución en el presente año a través de actividades virtuales: torneos de golf, conciertos, bazar. En esta oportunidad empezaremos con el Bazar Virtual Avepane 2020, el cual capitalizará la empatía que existe en la comunidad hacia la institución. Tu marca formará parte de los grandes colaboradores para continuar con nuestros programas.
              </p>
              <p className="leading-relaxed text-pretty font-semibold">
                ¡Contamos con tu apoyo, contamos contigo!
              </p>
              <p className="leading-relaxed text-pretty">
                Escríbenos al email <a href="mailto:avepanebazar@gmail.com" className="underline hover:no-underline font-semibold">avepanebazar@gmail.com</a> para enviarte la información de cómo puedes apoyar y estar en nuestro Bazar Virtual Avepane 2020.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/avepane/vitrina">
                  <Gift className="mr-2 h-5 w-5" aria-hidden="true" />
                  Acceder a la vitrina
                </Link>
              </Button>
            </div>

            <div className="relative h-96">
              <Image
                src="/virtual-market-handmade-crafts-bazaar-products.jpg"
                alt="Vitrina virtual - Productos artesanales y emprendimientos"
                fill
                className="object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-accent text-accent-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl text-balance">¿Necesitas más información?</h2>
          <p className="text-lg leading-relaxed text-pretty">
            Estamos aquí para ayudarte. Contáctanos y te responderemos a la brevedad.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/contacto">
              Contactar
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  )
}
