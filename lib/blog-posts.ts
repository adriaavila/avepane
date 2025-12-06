export interface BlogPost {
  id: number
  slug: string
  title: string
  date: string
  category: string
  description: string
  image: string
  fullContent: string
}

// Helper function to generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, "") // Remove leading/trailing hyphens
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "jornada-de-capacitacion-laboral",
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
    slug: "celebracion-dia-del-trabajador",
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
    slug: "nueva-alianza-con-empresa-local",
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
    slug: "taller-de-arte-y-creatividad",
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
    slug: "graduacion-de-participantes",
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
    slug: "bazar-navideno-avepane",
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

// Helper function to parse Spanish date format to ISO string
export function parseSpanishDate(dateString: string): string {
  const monthMap: Record<string, string> = {
    enero: "01",
    febrero: "02",
    marzo: "03",
    abril: "04",
    mayo: "05",
    junio: "06",
    julio: "07",
    agosto: "08",
    septiembre: "09",
    octubre: "10",
    noviembre: "11",
    diciembre: "12",
  }

  // Format: "15 de Marzo, 2024"
  const match = dateString.match(/(\d+)\s+de\s+(\w+),\s+(\d+)/i)
  if (match) {
    const day = match[1].padStart(2, "0")
    const monthName = match[2].toLowerCase()
    const year = match[3]
    const month = monthMap[monthName] || "01"

    return `${year}-${month}-${day}T00:00:00.000Z`
  }

  // Fallback: try to parse as regular date
  try {
    return new Date(dateString).toISOString()
  } catch {
    return new Date().toISOString()
  }
}

// Helper function to get post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

// Helper function to get all posts
export function getAllPosts(): BlogPost[] {
  return blogPosts
}

