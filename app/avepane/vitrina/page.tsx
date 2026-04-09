import { MainLayout } from "@/components/main-layout"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { ShoppingBag, Heart, Sparkles, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PageSummary } from "@/components/page-summary"
import { VIRTUAL_SHOWCASE_URL } from "@/lib/social-links"

const PAGE_SUMMARY = "La Vitrina Virtual AVEPANE reúne productos elaborados por participantes de nuestros programas. Aquí puedes conocer artesanías, pinturas, accesorios y otras creaciones que reflejan su dedicación y aprendizaje. Cada compra contribuye a visibilizar su trabajo y apoyar los procesos de formación e inclusión."

export const metadata = {
  title: "Vitrina Virtual - AVEPANE",
  description:
    "Conoce la vitrina virtual de AVEPANE y descubre productos elaborados por participantes de sus programas de formación e inclusión.",
}

export default function VitrinaPage() {
  const showcaseMoments = [
    {
      title: "Piezas de la vitrina",
      description: "Selección de productos elaborados por participantes en distintos talleres de AVEPANE.",
      image: "/virtual-market-handmade-crafts-bazaar-products.jpg",
    },
    {
      title: "Proceso creativo",
      description: "Actividades donde se fortalecen creatividad, expresión y dedicación en cada pieza.",
      image: "/art-workshop-creativity-painting-disabilities-incl.jpg",
    },
    {
      title: "Trabajo en taller",
      description: "Espacios formativos donde el aprendizaje se convierte en productos con valor para la comunidad.",
      image: "/inclusive-activities-workshop-training-disabilitie.jpg",
    },
  ]

  const communityVoices = [
    {
      role: "Participantes",
      title: "Visibiliza su esfuerzo",
      description: "La vitrina permite mostrar el resultado de procesos de aprendizaje, constancia y trabajo realizado en los talleres.",
    },
    {
      role: "Compradores solidarios",
      title: "Conecta compra y propósito",
      description: "Cada producto ofrece la oportunidad de llevarse una pieza útil o decorativa mientras se apoya la continuidad de AVEPANE.",
    },
    {
      role: "Familias y comunidad",
      title: "Fortalece orgullo y pertenencia",
      description: "Ver estos productos publicados y valorados ayuda a reconocer capacidades, avances y logros compartidos.",
    },
  ]

  // Ejemplo de trabajos - en producción estos vendrían de una base de datos
  const trabajos = [
    {
      id: 1,
      titulo: "Artesanías en Madera",
      descripcion: "Hermosas piezas talladas a mano con diseños únicos y creativos",
      categoria: "Artesanía",
      imagen: "/art-workshop-creativity-painting-disabilities-incl.jpg",
      autor: "Taller de Artesanía",
    },
    {
      id: 2,
      titulo: "Pinturas y Dibujos",
      descripcion: "Creaciones originales que reflejan procesos de expresión, creatividad y dedicación",
      categoria: "Arte",
      imagen: "/art-workshop-creativity-painting-disabilities-incl.jpg",
      autor: "Taller de Arte",
    },
    {
      id: 3,
      titulo: "Productos Textiles",
      descripcion: "Bolsos, carteras y accesorios confeccionados con dedicación y cuidado",
      categoria: "Textil",
      imagen: "/virtual-market-handmade-crafts-bazaar-products.jpg",
      autor: "Taller de Costura",
    },
    {
      id: 4,
      titulo: "Manualidades Decorativas",
      descripcion: "Piezas elaboradas a mano para decorar y regalar en distintas ocasiones",
      categoria: "Decoración",
      imagen: "/inclusive-activities-workshop-training-disabilitie.jpg",
      autor: "Taller de Manualidades",
    },
    {
      id: 5,
      titulo: "Cerámica y Barro",
      descripcion: "Piezas únicas moldeadas con técnicas tradicionales",
      categoria: "Cerámica",
      imagen: "/virtual-market-handmade-crafts-bazaar-products.jpg",
      autor: "Taller de Cerámica",
    },
    {
      id: 6,
      titulo: "Joyería Artesanal",
      descripcion: "Accesorios únicos creados con materiales reciclados y naturales",
      categoria: "Joyería",
      imagen: "/virtual-market-handmade-crafts-bazaar-products.jpg",
      autor: "Taller de Joyería",
    },
  ]

  const categorias = ["Todos", "Artesanía", "Arte", "Textil", "Decoración", "Cerámica", "Joyería"]

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 mx-auto">
              <ShoppingBag className="h-8 w-8 text-primary" aria-hidden="true" />
            </div>
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
              Vitrina Virtual AVEPANE
            </h1>
            <p className="text-lg leading-relaxed text-pretty md:text-xl">
              Descubre productos elaborados por participantes de los programas de AVEPANE. Cada pieza refleja
              dedicación, aprendizaje y el valor del trabajo realizado en comunidad.
            </p>
            <PageSummary text={PAGE_SUMMARY} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                <Heart className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-3xl font-bold md:text-4xl text-balance">
                Una vitrina para visibilizar su trabajo
              </h2>
              <p className="text-lg leading-relaxed text-pretty">
                Cada compra apoya la continuidad de nuestros programas y reconoce el trabajo realizado por
                participantes que desarrollan habilidades en distintos talleres y procesos formativos.
              </p>
              <p className="leading-relaxed text-pretty">
                La vitrina virtual AVEPANE funciona como una página para dar a conocer y ofrecer productos elaborados
                por nuestra comunidad, fortaleciendo la inclusión, la participación y la valoración de sus capacidades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href={VIRTUAL_SHOWCASE_URL} target="_blank" rel="noopener noreferrer">
                    Ver vitrina oficial
                    <ExternalLink className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contacto">
                    Consultar productos disponibles
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                La vitrina oficial abre en una nueva pestaña para que puedas revisar los productos disponibles.
              </p>
            </div>

            <div className="grid gap-4">
              <Card className="overflow-hidden border-border bg-background">
                <div className="relative h-72 md:h-80">
                  <Image
                    src={showcaseMoments[0].image}
                    alt={showcaseMoments[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-5 space-y-2">
                  <h3 className="font-heading text-xl font-semibold">{showcaseMoments[0].title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{showcaseMoments[0].description}</p>
                </CardContent>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2">
                {showcaseMoments.slice(1).map((moment) => (
                  <Card key={moment.title} className="overflow-hidden border-border bg-background">
                    <div className="relative h-48">
                      <Image
                        src={moment.image}
                        alt={moment.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4 space-y-2">
                      <h3 className="font-heading text-lg font-semibold text-balance">{moment.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{moment.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary/20" aria-labelledby="community-voices-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
            <h2 id="community-voices-heading" className="font-heading text-3xl font-bold md:text-4xl text-balance">
              Lo que aporta esta vitrina a la comunidad
            </h2>
            <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
              Mientras reunimos testimonios directos de compradores y participantes, estas son algunas de las formas
              en que la vitrina genera valor para AVEPANE y su comunidad.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {communityVoices.map((voice) => (
              <Card key={voice.title} className="border-border bg-background">
                <CardContent className="p-6 space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{voice.role}</p>
                  <h3 className="font-heading text-2xl font-semibold text-balance">{voice.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{voice.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Process Section */}
      <section className="py-12 md:py-16 bg-secondary/10 border-y border-border" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="process-heading" className="font-heading text-2xl font-bold md:text-3xl text-balance">
              ¿Cómo comprar en la vitrina?
            </h2>
            <p className="text-muted-foreground mt-2">Un proceso sencillo y seguro para apoyar nuestro talento</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-border -z-10 transform -translate-y-1/2"></div>
            
            <Card className="border-border bg-background relative z-10 shadow-sm">
              <CardContent className="p-6 text-center space-y-4">
                <div className="h-12 w-12 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl ring-12 ring-secondary/50">
                  1
                </div>
                <h3 className="font-heading text-lg font-semibold">Explora los productos</h3>
                <p className="text-sm text-muted-foreground">
                  Revisa la{" "}
                  <Link
                    href={VIRTUAL_SHOWCASE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary underline underline-offset-4"
                  >
                    vitrina oficial
                  </Link>{" "}
                  y selecciona el producto que te interese apoyar o adquirir.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-background relative z-10 shadow-sm">
              <CardContent className="p-6 text-center space-y-4">
                <div className="h-12 w-12 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl ring-12 ring-secondary/50">
                  2
                </div>
                <h3 className="font-heading text-lg font-semibold">Contáctanos</h3>
                <p className="text-sm text-muted-foreground">Consulta disponibilidad, precios y detalles de entrega con nuestro equipo.</p>
              </CardContent>
            </Card>

            <Card className="border-border bg-background relative z-10 shadow-sm">
              <CardContent className="p-6 text-center space-y-4">
                <div className="h-12 w-12 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl ring-12 ring-secondary/50">
                  3
                </div>
                <h3 className="font-heading text-lg font-semibold">Coordina tu compra</h3>
                <p className="text-sm text-muted-foreground">Te indicaremos la forma de pago y entrega disponible para completar tu compra o aporte.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Works Gallery */}
      <section className="py-16 md:py-20 bg-secondary/20" aria-labelledby="works-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 mx-auto mb-4">
              <Sparkles className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>
            <h2 id="works-heading" className="font-heading text-3xl font-bold mb-4 md:text-4xl text-balance">
              Productos elaborados por participantes
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto text-pretty">
              Conoce algunas de las creaciones desarrolladas en los talleres y procesos formativos de AVEPANE.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trabajos.map((trabajo) => (
              <Card key={trabajo.id} className="border-border hover:shadow-lg transition-shadow bg-background overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={trabajo.imagen}
                    alt={trabajo.titulo}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {trabajo.categoria}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-heading text-xl font-semibold text-balance">{trabajo.titulo}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{trabajo.descripcion}</p>
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Taller:</span> {trabajo.autor}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
