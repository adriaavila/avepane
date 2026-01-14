import { MainLayout } from "@/components/main-layout"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { ShoppingBag, Heart, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PageSummary } from "@/components/page-summary"

const PAGE_SUMMARY = "La Vitrina Virtual AVEPANE exhibe los increíbles trabajos realizados por nuestros Niños Excepcionales. Descubre artesanías, pinturas y manualidades únicas. Cada compra apoya directamente nuestros programas de formación y desarrollo, promoviendo el talento y la inclusión."

export const metadata = {
  title: "Vitrina Virtual - AVEPANE",
  description:
    "Descubre los trabajos y creaciones realizadas por los Niños Excepcionales de AVEPANE. Productos artesanales y emprendimientos únicos.",
}

export default function VitrinaPage() {
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
      descripcion: "Obras de arte originales que reflejan la creatividad y expresión de nuestros artistas",
      categoria: "Arte",
      imagen: "/art-workshop-creativity-painting-disabilities-incl.jpg",
      autor: "Taller de Arte",
    },
    {
      id: 3,
      titulo: "Productos Textiles",
      descripcion: "Bolsos, carteras y accesorios confeccionados con dedicación y cuidado",
      categoria: "Textil",
      imagen: "/christmas-bazaar-handmade-crafts-market-fair.jpg",
      autor: "Taller de Costura",
    },
    {
      id: 4,
      titulo: "Manualidades Navideñas",
      descripcion: "Decoraciones y artículos especiales para la temporada navideña",
      categoria: "Decoración",
      imagen: "/christmas-bazaar-handmade-crafts-market-fair.jpg",
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
              Descubre los increíbles trabajos y creaciones realizadas por nuestros Niños Excepcionales. Cada pieza es
              única y refleja el talento, dedicación y creatividad de nuestros artistas.
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
                Apoya a nuestros artistas
              </h2>
              <p className="text-lg leading-relaxed text-pretty">
                Cada compra o donación nos ayuda a continuar con nuestros programas de formación y desarrollo. Al
                adquirir estos productos, estás contribuyendo directamente al crecimiento personal y profesional de
                nuestros Niños Excepcionales.
              </p>
              <p className="leading-relaxed text-pretty">
                El Vitrina virtual AVEPANE es una iniciativa que busca dar a conocer los emprendimientos y trabajos
                realizados por nuestra comunidad, creando oportunidades de crecimiento tanto para los artistas como
                para la organización.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contacto">
                  Contactar para participar
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src="/virtual-market-handmade-crafts-bazaar-products.jpg"
                alt="Vitrina virtual - Productos artesanales y emprendimientos"
                fill
                className="object-cover rounded-xl shadow-xl"
              />
            </div>
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
              Trabajos de nuestros Niños Excepcionales
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto text-pretty">
              Explora la creatividad y el talento de nuestros artistas a través de sus creaciones únicas
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

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl text-balance">
            ¿Tienes un emprendimiento y quieres participar?
          </h2>
          <p className="text-lg leading-relaxed text-pretty">
            Si tienes un negocio sensible a las obras de carácter social y humanitario, te invitamos a formar parte del
            Vitrina virtual AVEPANE. Tu mercado crecerá y nosotros recibiremos un aporte para continuar con nuestros
            programas.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90"
          >
            <Link href="/contacto">
              Contactar para participar
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  )
}


