import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ImageIcon } from "lucide-react"
import { BlogPostCard } from "@/components/blog-post-card"

export const metadata = {
  title: "Actualidad - AVEPANE",
  description:
    "Eventos, noticias y actividades recientes de AVEPANE. Mantente informado sobre nuestras acciones y logros.",
}

export default function NewsPage() {
  const events = [
    {
      id: 1,
      title: "Jornada de Capacitación Laboral",
      date: "15 de Marzo, 2024",
      category: "Evento",
      description:
        "Taller práctico de habilidades laborales para nuevos participantes del programa de inserción laboral.",
      image: "/job-training-workshop-people-disabilities-learning.jpg",
      fullContent: `El pasado 15 de marzo de 2024, AVEPANE llevó a cabo una exitosa Jornada de Capacitación Laboral dirigida a nuevos participantes de nuestro programa de inserción laboral. El evento contó con la participación de más de 30 personas con discapacidad que se están preparando para ingresar al mercado laboral.

Durante la jornada, los participantes recibieron formación práctica en diversas áreas fundamentales para el éxito en el trabajo. Los talleres incluyeron sesiones sobre comunicación efectiva en el entorno laboral, trabajo en equipo, resolución de problemas, y manejo de herramientas tecnológicas básicas.

Los instructores, todos profesionales especializados en inclusión laboral, utilizaron metodologías adaptadas a las necesidades individuales de cada participante. Se emplearon materiales visuales, ejercicios prácticos y dinámicas grupales que facilitaron el aprendizaje y la participación activa de todos.

Uno de los aspectos más destacados de la jornada fue la participación de empleadores locales que compartieron sus experiencias sobre la inclusión de personas con discapacidad en sus empresas. Estos testimonios motivaron a los participantes y les dieron una visión realista de las oportunidades laborales disponibles.

Al finalizar la jornada, los participantes expresaron su satisfacción con la experiencia y su entusiasmo por continuar su proceso de formación. Esta actividad forma parte del compromiso continuo de AVEPANE con la preparación integral de las personas con discapacidad para el mundo laboral.`,
    },
    {
      id: 2,
      title: "Celebración Día del Trabajador",
      date: "1 de Mayo, 2024",
      category: "Celebración",
      description: "Reconocimiento a todos los participantes de nuestros programas de empleo y sus logros.",
      image: "/celebration-workers-disabilities-achievement-recog.jpg",
      fullContent: `El 1 de mayo de 2024, AVEPANE celebró el Día del Trabajador con una emotiva ceremonia de reconocimiento a todos los participantes de nuestros programas de empleo. El evento reunió a más de 100 personas, incluyendo trabajadores, familiares, empleadores y voluntarios.

La celebración comenzó con palabras de bienvenida de nuestra directora, quien destacó los logros alcanzados durante el último año. Se reconoció especialmente a 25 trabajadores que han mantenido su empleo por más de dos años consecutivos, demostrando su compromiso y dedicación.

Durante la ceremonia, se entregaron certificados de reconocimiento a trabajadores destacados en diferentes categorías: excelencia en el trabajo, superación personal, trabajo en equipo y liderazgo. Cada reconocimiento fue acompañado de una breve historia personal que inspiró a todos los presentes.

Los empleadores también tuvieron un espacio para compartir sus experiencias positivas trabajando con personas con discapacidad. Varios de ellos destacaron la dedicación, puntualidad y entusiasmo que caracteriza a nuestros participantes.

La celebración incluyó una presentación artística preparada por los participantes del taller de arte, música en vivo, y un almuerzo compartido. El ambiente fue de alegría, orgullo y comunidad, reflejando el espíritu de inclusión y apoyo mutuo que define a AVEPANE.

Este evento anual es una oportunidad importante para visibilizar los logros de las personas con discapacidad en el ámbito laboral y para fortalecer los lazos entre todos los miembros de nuestra comunidad.`,
    },
    {
      id: 3,
      title: "Nueva Alianza con Empresa Local",
      date: "10 de Junio, 2024",
      category: "Noticia",
      description: "Firmamos convenio con importante empresa venezolana para la inserción de 10 nuevos trabajadores.",
      image: "/business-partnership-handshake-agreement-collabora.jpg",
      fullContent: `El 10 de junio de 2024, AVEPANE firmó un convenio histórico con una importante empresa venezolana del sector manufacturero, estableciendo una alianza estratégica que permitirá la inserción laboral de 10 personas con discapacidad en los próximos seis meses.

La firma del convenio se realizó en las instalaciones de la empresa, con la presencia de representantes de ambas organizaciones. El acuerdo incluye no solo la contratación de trabajadores, sino también un programa de acompañamiento y seguimiento durante los primeros 12 meses de empleo.

Esta alianza representa un hito importante en nuestros esfuerzos por ampliar las oportunidades laborales para personas con discapacidad. La empresa se comprometió a proporcionar adaptaciones razonables en el lugar de trabajo, capacitación continua y un ambiente laboral inclusivo.

El programa de inserción comenzará con un proceso de evaluación y matching entre los perfiles de los candidatos y las posiciones disponibles. AVEPANE proporcionará apoyo en la preparación de los candidatos, mientras que la empresa ofrecerá orientación sobre las funciones específicas del puesto.

Esta colaboración demuestra que la inclusión laboral es beneficiosa tanto para las personas con discapacidad como para las empresas. Esperamos que esta alianza sirva como modelo para futuras colaboraciones con otras empresas venezolanas comprometidas con la diversidad y la inclusión.`,
    },
    {
      id: 4,
      title: "Taller de Arte y Creatividad",
      date: "20 de Julio, 2024",
      category: "Evento",
      description: "Actividad recreativa que desarrolla habilidades artísticas y expresión personal.",
      image: "/art-workshop-creativity-painting-disabilities-incl.jpg",
      fullContent: `El 20 de julio de 2024, AVEPANE organizó un Taller de Arte y Creatividad que reunió a 40 participantes de diferentes programas. Esta actividad recreativa tiene como objetivo desarrollar habilidades artísticas y fomentar la expresión personal a través de diversas técnicas creativas.

El taller fue facilitado por artistas locales voluntarios y terapeutas ocupacionales especializados en arte terapia. Durante la jornada, los participantes exploraron diferentes medios artísticos, incluyendo pintura acrílica, dibujo, collage y escultura con materiales reciclados.

Cada participante tuvo la oportunidad de crear al menos una obra de arte personal, trabajando a su propio ritmo y según sus intereses y capacidades. Los facilitadores adaptaron las actividades para asegurar que todos pudieran participar plenamente, independientemente de sus habilidades motoras o cognitivas.

Uno de los momentos más especiales fue la creación de un mural colaborativo que representó los valores de AVEPANE: inclusión, comunidad, superación y alegría. Todos los participantes contribuyeron con su toque personal al mural, que ahora decora una de las paredes principales de nuestras instalaciones.

Las obras creadas durante el taller formarán parte de una exposición que se realizará en el próximo Bazar Navideño, donde los participantes podrán vender sus creaciones. Esta actividad no solo desarrolla habilidades artísticas, sino que también proporciona una oportunidad de expresión personal y potencial fuente de ingresos.

El taller concluyó con una pequeña exposición de las obras creadas, donde los participantes pudieron compartir sus creaciones con familiares y amigos. El ambiente fue de celebración, creatividad y apoyo mutuo.`,
    },
    {
      id: 5,
      title: "Graduación de Participantes",
      date: "5 de Agosto, 2024",
      category: "Celebración",
      description: "Ceremonia de graduación para participantes que completaron el programa de formación laboral.",
      image: "/graduation-ceremony-celebration-achievement-disabi.jpg",
      fullContent: `El 5 de agosto de 2024, AVEPANE celebró la graduación de 18 participantes que completaron exitosamente el programa de formación laboral. La ceremonia, realizada en nuestro auditorio principal, fue un momento de gran orgullo y celebración para toda la comunidad AVEPANE.

Los graduados completaron un programa intensivo de 6 meses que incluyó formación en habilidades laborales específicas, desarrollo de competencias sociales, uso de tecnología, y preparación para entrevistas de trabajo. Cada graduado recibió un certificado que acredita su participación y logros en el programa.

La ceremonia comenzó con un desfile de graduados, acompañados por sus familiares y mentores. Los discursos de graduación fueron especialmente emotivos, con varios graduados compartiendo sus historias de superación y agradeciendo el apoyo recibido.

Se entregaron reconocimientos especiales a tres graduados destacados: uno por excelencia académica, otro por superación personal, y un tercero por su liderazgo y apoyo a sus compañeros. Estos reconocimientos fueron acompañados de becas para continuar su formación.

Los empleadores asociados a AVEPANE estuvieron presentes en la ceremonia, y varios de ellos extendieron ofertas de trabajo a los graduados. Al finalizar el evento, 12 de los 18 graduados ya tenían ofertas de empleo confirmadas.

La ceremonia concluyó con una recepción donde los graduados, sus familias, instructores y empleadores pudieron compartir y celebrar juntos. Este momento representa no solo el cierre de una etapa formativa, sino el inicio de nuevas oportunidades laborales y de crecimiento personal para cada graduado.`,
    },
    {
      id: 6,
      title: "Bazar Navideño AVEPANE",
      date: "1 de Diciembre, 2024",
      category: "Evento",
      description:
        "Venta de productos elaborados por nuestros participantes. Todo lo recaudado apoya nuestros programas.",
      image: "/christmas-bazaar-handmade-crafts-market-fair.jpg",
      fullContent: `El 1 de diciembre de 2024, AVEPANE celebró su tradicional Bazar Navideño, un evento anual que reúne a la comunidad para apoyar nuestros programas a través de la venta de productos elaborados por nuestros participantes. Este año, el bazar fue especialmente exitoso, con más de 500 visitantes y una recaudación récord.

El bazar ofreció una amplia variedad de productos artesanales, incluyendo decoraciones navideñas, tarjetas de felicitación, velas aromáticas, productos de tejido, pinturas y esculturas. Todos los productos fueron elaborados por participantes de nuestros talleres de arte, empleo protegido y programas de capacitación.

Además de la venta de productos, el evento incluyó actividades para toda la familia: presentaciones musicales a cargo de nuestros participantes, una exposición de arte, juegos interactivos, y una zona de comida con platos preparados por familias de la comunidad AVEPANE.

Uno de los momentos más especiales fue la presentación del coro de AVEPANE, que interpretó villancicos tradicionales y canciones navideñas. La presentación fue recibida con gran entusiasmo por el público, demostrando los talentos artísticos de nuestros participantes.

Los fondos recaudados durante el bazar se destinarán directamente a financiar nuestros programas de inserción laboral, capacitación y apoyo a familias. Cada compra representa una inversión en el futuro de las personas con discapacidad y sus familias.

El evento también sirvió como una oportunidad importante de sensibilización, permitiendo que miembros de la comunidad conozcan más sobre el trabajo de AVEPANE y las capacidades de las personas con discapacidad. Muchos visitantes expresaron su admiración por la calidad de los productos y el talento de los participantes.

El Bazar Navideño concluyó con un mensaje de agradecimiento a todos los voluntarios, participantes, familias y visitantes que hicieron posible este evento. Este tipo de actividades no solo generan recursos, sino que fortalecen los lazos comunitarios y visibilizan las capacidades y contribuciones de las personas con discapacidad.`,
    },
  ]

  const galleryImages = [
    "/avepane-activities-workshop-group-1.jpg",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
  ]

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-secondary/30 to-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
              Actualidad AVEPANE
            </h1>
            <p className="text-lg leading-relaxed text-pretty md:text-xl">
              Mantente informado sobre nuestros eventos, actividades y noticias más recientes
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 md:py-20 bg-background" aria-labelledby="events-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 id="events-heading" className="font-heading text-3xl font-bold mb-4 md:text-4xl text-balance">
              Eventos y Noticias
            </h2>
            <p className="text-lg leading-relaxed text-pretty">
              Nuestras actividades más destacadas y próximos eventos
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <BlogPostCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 md:py-20 bg-secondary/20" aria-labelledby="gallery-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 mb-4">
              <ImageIcon className="h-7 w-7 text-primary" aria-hidden="true" />
            </div>
            <h2 id="gallery-heading" className="font-heading text-3xl font-bold mb-4 md:text-4xl text-balance">
              Galería Fotográfica
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto text-pretty">
              Momentos especiales capturados en nuestras actividades y eventos
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                className="relative h-64 rounded-xl overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label={`Ver imagen ${index + 1} de la galería`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Galería AVEPANE - Actividad ${index + 1}`}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl text-balance">
            ¿Quieres participar en nuestros eventos?
          </h2>
          <p className="text-lg leading-relaxed text-pretty">
            Únete a nuestras actividades y forma parte de la comunidad AVEPANE
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90"
          >
            <Link href="/contacto">
              Contáctanos
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  )
}
