import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  ArrowRight,
  Brain,
  Briefcase,
  CheckCircle,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  HandHeart,
  Handshake,
  Heart,
  Lightbulb,
  Scale,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react"

export const metadata = {
  title: "CEFIA - Taller Laboral - AVEPANE",
  description:
    "Centro de Educación y Formación Integral para el Trabajo. Formación técnica, empleabilidad e inclusión para personas con discapacidad intelectual y Síndrome de Down.",
}

const VALUES = [
  {
    title: "Inclusión",
    description:
      "Creemos en la capacidad de todas las personas para desarrollarse y contribuir a la sociedad, independientemente de sus capacidades.",
    icon: Users,
  },
  {
    title: "Respeto",
    description:
      "Valoramos la dignidad y los derechos de todas las personas, y las tratamos con respeto y consideración.",
    icon: Heart,
  },
  {
    title: "Calidad",
    description:
      "Nos esforzamos por ofrecer servicios y productos de alta calidad, alineados con las necesidades de nuestros participantes, familias y aliados.",
    icon: CheckCircle2,
  },
  {
    title: "Compromiso",
    description:
      "Trabajamos con pasión y dedicación para promover la inclusión laboral de personas con discapacidad intelectual y Síndrome de Down.",
    icon: HandHeart,
  },
  {
    title: "Transparencia",
    description:
      "Actuamos con honestidad, claridad y coherencia en nuestras decisiones, procesos y relaciones institucionales.",
    icon: ShieldCheck,
  },
]

const OBJECTIVES = [
  "Capacitar a personas con discapacidad intelectual y Síndrome de Down en habilidades laborales, técnicas y sociales.",
  "Desarrollar programas de intermediación laboral que faciliten su inserción en empresas ordinarias.",
  "Generar oportunidades de empleo digno y productivo dentro del taller y en empresas colaboradoras.",
  "Sensibilizar a la sociedad sobre la importancia de la inclusión laboral de las personas con discapacidad intelectual y Síndrome de Down.",
  "Promover la investigación y la innovación en el ámbito de la inclusión laboral.",
]

const OCCUPATIONAL_FOCUS = [
  "Competencias y habilidades sociales y de conducta: comunicación, empatía y convivencia.",
  "Desarrollo cognitivo: atención, memoria y funciones ejecutivas.",
  "Desarrollo de la conducta: cumplimiento de normas, seguimiento de instrucciones, trabajo en equipo, puntualidad y disciplina.",
  "Autonomía personal en actividades de la vida diaria.",
  "Competencias y habilidades técnicas propias del oficio.",
  "Competencias blandas: habilidades interpersonales, sociales y de personalidad que facilitan la adaptación al entorno.",
  "Hábitos de conducta laboral: horarios, seguridad industrial, uso de herramientas y limpieza del área de trabajo.",
  "Inteligencia emocional, comunicación efectiva, resolución de conflictos y liderazgo como base para el éxito laboral y personal.",
]

const OCCUPATIONAL_AREAS = [
  {
    title: "Producción artesanal y manual",
    items: ["Manualidades", "Arte y pintura", "Artesanía", "Cerámica", "Bisutería"],
    icon: Lightbulb,
  },
  {
    title: "Oficios técnicos y de servicios",
    items: ["Corte y costura", "Sublimado"],
    icon: CheckCircle,
  },
  {
    title: "Tecnología",
    items: ["Informática", "Alfabetización digital"],
    icon: Brain,
  },
  {
    title: "Manipulados industriales",
    items: ["Empaquetado", "Selección", "Preparación de productos"],
    icon: Briefcase,
  },
  {
    title: "Comercio y atención al cliente",
    items: ["Atención al público", "Inventario"],
    icon: Users,
  },
]

const WORKSHOPS = [
  "Creativo artesanal",
  "Diseñador y personalizador textil",
  "Asistente administrativo",
  "Ayudantes de planta y operarios de almacén",
  "Panadería",
  "Café y barismo",
]

const PARTICIPANT_PROFILE = [
  {
    title: "Aptitudes y actitudes",
    subtitle: 'El "saber ser"',
    icon: HandHeart,
    items: [
      "Disposición al aprendizaje y apertura a estrategias pedagógicas personalizadas.",
      "Sentido de responsabilidad con la asistencia, la puntualidad y el cuidado de los materiales.",
      "Habilidades socioafectivas para relacionarse con respeto con pares, instructores y figuras de autoridad.",
      "Motivación hacia la autonomía y el desarrollo de la independencia económica.",
    ],
  },
  {
    title: "Competencias operativas",
    subtitle: 'El "saber hacer"',
    icon: Briefcase,
    items: [
      "Habilidades motoras funcionales, finas o gruesas, acordes al oficio que se esté trabajando.",
      "Capacidad para ejecutar tareas secuenciales y rutinas laborales con supervisión o apoyo visual.",
      "Adaptabilidad para asumir distintas tareas dentro de su área de formación.",
      "Cumplimiento de normas básicas de seguridad e higiene dentro del taller.",
    ],
  },
  {
    title: "Requisitos de ingreso",
    subtitle: "Criterios técnicos",
    icon: ClipboardList,
    items: [
      "Diagnóstico de discapacidad intelectual o Síndrome de Down.",
      "Joven o adulto en edad de formación para el trabajo.",
      "Habilidades básicas de autocuidado, higiene y alimentación para desenvolverse en el entorno del taller.",
      "Comunicación funcional, puntualidad y capacidad de trabajar con apoyo para favorecer la integración laboral.",
    ],
  },
]

const TEAM_AREAS = [
  {
    title: "Área pedagógica y técnica",
    icon: GraduationCap,
    items: [
      "Instructores de oficio con dominio técnico y sensibilidad social para simplificar procesos complejos en pasos concretos.",
      "Docente de educación especial que adapta materiales, estrategias y objetivos de aprendizaje.",
      "Tutores o preparadores laborales (job coaches) para acompañar al participante en el puesto de trabajo hasta lograr autonomía.",
    ],
  },
  {
    title: "Área bio-psicosocial",
    icon: Brain,
    items: [
      "Psicólogo o psicóloga para trabajar conducta, manejo de frustración, inteligencia emocional y apoyo a las familias.",
      "Trabajador o trabajadora social para evaluar el entorno, articular con las familias y facilitar la inserción laboral.",
      "Terapeuta ocupacional para adaptar herramientas y espacios a las capacidades motoras y sensoriales.",
      "Terapista de lenguaje como apoyo en comunicación funcional y desenvolvimiento social.",
    ],
  },
  {
    title: "Área de gestión y salud",
    icon: ShieldCheck,
    items: [
      "Director del taller y coordinación operativa para liderar la visión institucional y la ejecución diaria.",
      "Personal médico o de primeros auxilios, especialmente cuando existan herramientas o maquinarias que requieran supervisión de seguridad.",
    ],
  },
  {
    title: "Comunicación y redes sociales",
    icon: Heart,
    items: [
      "Responsable de storytelling, registro visual y educación digital para sensibilizar y humanizar la marca institucional.",
      "Gestión de comunidad para responder dudas de familias, aliados y empresas interesadas.",
    ],
  },
  {
    title: "Comercialización y ventas",
    icon: Briefcase,
    items: [
      "Búsqueda de canales de venta como ferias, tiendas aliadas, mercados locales o plataformas digitales.",
      "Gestión de ventas corporativas, control de calidad y fijación de precios con enfoque social y sostenibilidad económica.",
    ],
  },
  {
    title: "Relaciones institucionales y alianzas",
    icon: Handshake,
    items: [
      "Búsqueda de convenios con empresas privadas y entes públicos para empleo, donaciones y colaboraciones.",
      "Representación institucional, networking y seguimiento de inserción junto al equipo técnico.",
    ],
  },
]

const KEY_ROLES = [
  {
    title: "Director del taller",
    icon: Target,
    summary:
      "Lidera la estrategia institucional, asegura la sostenibilidad del programa y representa al taller ante aliados, autoridades y empresas.",
    items: [
      "Planificación anual, apertura de nuevos oficios y supervisión general del equipo multidisciplinario.",
      "Garantía de calidad pedagógica y control de calidad de productos o servicios.",
      "Gestión de recursos, cumplimiento legal y mantenimiento de herramientas, equipos y presupuesto.",
      "Monitoreo del impacto social, seguimiento de egresados y relación permanente con las familias.",
    ],
  },
  {
    title: "Coordinador",
    icon: ClipboardList,
    summary:
      "Es el motor operativo del día a día: organiza la jornada, articula al equipo y acompaña de cerca el avance de cada participante.",
    items: [
      "Organización de horarios, descansos, rotaciones, inventarios y condiciones de seguridad e higiene.",
      "Enlace entre instructores y especialistas para aplicar correctamente las estrategias personalizadas.",
      "Seguimiento de asistencia, desempeño, convivencia y comunicación cotidiana con las familias.",
      "Supervisión de simulaciones, prácticas internas y reportes de empleabilidad para la inserción laboral.",
    ],
  },
  {
    title: "Instructor de oficio",
    icon: Lightbulb,
    summary:
      "Es la figura que enseña a hacer y también a ser productivo: adapta el oficio, cuida la calidad y construye hábitos laborales.",
    items: [
      "Enseñanza práctica y secuencial del oficio con apoyos visuales o herramientas adaptadas cuando sea necesario.",
      "Fomento de la autonomía, interviniendo solo cuando resulte indispensable para evitar dependencia.",
      "Supervisión de calidad, uso seguro de herramientas y aprovechamiento responsable de la materia prima.",
      "Modelado de puntualidad, orden, limpieza, trabajo en equipo y registro de avances para informar al coordinador.",
    ],
  },
]

const ENROLLMENT_STEPS = [
  {
    title: "Recaudos y documentos",
    desc: "Revisión de documentos personales, informes médicos, psicológicos y de salud, certificación de discapacidad y otros recaudos requeridos.",
  },
  {
    title: "Entrevista con responsable",
    desc: "Verificación y entrevista con el tutor responsable junto al director del taller, psicólogo y trabajador social.",
  },
  {
    title: "Período de prueba",
    desc: "Participación en actividades de las áreas ocupacionales para construir el perfil laboral y realizar la evaluación inicial.",
  },
  {
    title: "Admisión e inscripción",
    desc: "Presentación de conclusiones, decisión de ingreso y formalización de la inscripción al programa formativo.",
  },
]

const LEGAL_FRAMEWORK = [
  "Constitución de la República Bolivariana de Venezuela.",
  "Ley Orgánica para la Inclusión, Igualdad y Desarrollo Integral de las Personas con Discapacidad.",
  "Ley Orgánica del Trabajo, los Trabajadores y las Trabajadoras.",
  "Ley Especial para las Trabajadoras y Trabajadores con Discapacidad.",
  "Ley Orgánica para la Protección del Niño, Niña y Adolescente.",
  "Ley para la Prevención y Erradicación del Abuso Sexual contra Niñas, Niños y Adolescentes.",
  "Ordenanzas municipales, circulares, providencias, resoluciones y otros instrumentos normativos aplicables según la ubicación territorial de la institución.",
]

export default function CefiaPage() {
  return (
    <MainLayout>
      <section className="relative bg-gradient-to-b from-secondary/30 to-background py-16 md:py-24" id="conocenos">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl space-y-6">
            <div className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground">
              Taller Laboral
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
              CEFIA
            </h1>
            <p className="mx-auto max-w-3xl text-xl font-medium text-muted-foreground text-balance md:text-2xl">
              Centro de Educación y Formación Integral para el Trabajo
            </p>
            <p className="mx-auto max-w-4xl text-lg leading-relaxed text-pretty text-foreground/80 md:text-xl">
              Un espacio de formación técnica, acompañamiento humanístico y empleabilidad para jóvenes y adultos con
              discapacidad intelectual y Síndrome de Down.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Card className="border-primary/20 bg-primary/5 shadow-sm">
            <CardContent className="flex h-full flex-col items-start gap-4 p-8 text-left">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Target className="h-7 w-7 text-primary" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-balance">Misión</h2>
              <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
                Brindar una educación integral y humanística a jóvenes y adultos con discapacidad intelectual y Síndrome
                de Down, a través de la formación técnica en oficios y estrategias pedagógicas personalizadas, con el fin
                de desarrollar sus potencialidades y garantizar su plena inclusión laboral e independencia económica.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5 shadow-sm">
            <CardContent className="flex h-full flex-col items-start gap-4 p-8 text-left">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Lightbulb className="h-7 w-7 text-primary" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-balance">Visión</h2>
              <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
                Ser el modelo de referencia líder en la formación y empleabilidad de personas con discapacidad intelectual
                y Síndrome de Down, reconocido por la excelencia en nuestras habilidades operativas y la calidad de
                nuestros servicios, contribuyendo activamente a la construcción de una sociedad más justa, equitativa e
                inclusiva.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-secondary/10 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 xl:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-10 max-w-3xl">
                <h2 className="font-heading text-3xl font-bold text-balance md:text-4xl">Valores y objetivos</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
                  La propuesta formativa de CEFIA combina inclusión, calidad y empleabilidad para que cada participante
                  desarrolle habilidades reales para la vida y el trabajo.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {VALUES.map((value) => {
                  const Icon = value.icon
                  return (
                    <Card key={value.title} className="border-border bg-background">
                      <CardContent className="space-y-4 p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-heading text-xl font-semibold text-balance">{value.title}</h3>
                          <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{value.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            <Card className="border-primary/15 bg-background shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="font-heading text-2xl">Objetivos del taller</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-6 pt-2">
                {OBJECTIVES.map((objective) => (
                  <div key={objective} className="flex items-start gap-3 rounded-xl border border-border/60 bg-secondary/10 p-4">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <p className="leading-relaxed text-pretty text-foreground/90">{objective}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24" id="areas-ocupacionales">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <h2 className="font-heading text-3xl font-bold text-balance md:text-4xl">Áreas de atención</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              El área ocupacional transforma la formación teórica en acción productiva. Su propósito es desarrollar
              habilidades técnico-manuales, hábitos de trabajo y autonomía para facilitar una transición real hacia la
              vida laboral activa e independiente.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-12">
            <div className="space-y-6 rounded-2xl border border-primary/10 bg-primary/5 p-8 lg:col-span-5">
              <h3 className="font-heading flex items-center gap-3 text-2xl font-bold">
                <Brain className="h-6 w-6 text-primary" aria-hidden="true" />
                Qué se trabaja
              </h3>
              <ul className="space-y-4">
                {OCCUPATIONAL_FOCUS.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="leading-relaxed text-pretty">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7">
              <h3 className="mb-6 font-heading text-2xl font-bold">Áreas ocupacionales y oficios</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {OCCUPATIONAL_AREAS.map((area) => {
                  const Icon = area.icon
                  return (
                    <Card key={area.title} className="border-border">
                      <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-3">
                        <div className="rounded-md bg-secondary/30 p-2">
                          <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                        </div>
                        <CardTitle className="text-lg text-balance">{area.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                          {area.items.join(", ")}
                        </p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              <div className="mt-8 rounded-2xl border border-border bg-secondary/10 p-6">
                <h4 className="font-heading text-lg font-semibold">Oficios que se desarrollan en el taller laboral</h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {WORKSHOPS.map((workshop) => (
                    <span
                      key={workshop}
                      className="rounded-full bg-background px-3 py-1.5 text-sm font-medium text-secondary-foreground shadow-sm"
                    >
                      {workshop}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent/5 py-16 md:py-24" id="perfil">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h2 className="font-heading text-3xl font-bold text-balance md:text-4xl">Perfil del participante</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              El taller está dirigido a jóvenes y adultos, idealmente entre 15 y 45 años, provenientes del hogar o la
              comunidad, con diagnóstico de discapacidad intelectual o Síndrome de Down y con habilidades básicas de
              autocuidado para desenvolverse en el entorno formativo.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {PARTICIPANT_PROFILE.map((group) => {
              const Icon = group.icon
              return (
                <Card key={group.title} className="border-border bg-background">
                  <CardHeader className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-balance">{group.title}</CardTitle>
                      <p className="mt-1 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                        {group.subtitle}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-muted-foreground">
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                          <span className="leading-relaxed text-pretty">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h2 className="font-heading text-3xl font-bold text-balance md:text-4xl">Equipo multidisciplinario</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              El taller no solo enseña un oficio: acompaña el desarrollo integral de cada persona. Por eso requiere un
              equipo que articule pedagogía, soporte humano, gestión, comercialización y alianzas.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {TEAM_AREAS.map((area) => {
              const Icon = area.icon
              return (
                <Card key={area.title} className="border-border bg-secondary/10">
                  <CardHeader className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background">
                      <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-2xl text-balance">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {area.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-muted-foreground">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span className="leading-relaxed text-pretty">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-secondary/10 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h2 className="font-heading text-3xl font-bold text-balance md:text-4xl">Funciones clave</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              La gestión del taller se fortalece cuando cada rol entiende su responsabilidad técnica, humana y operativa.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {KEY_ROLES.map((role) => {
              const Icon = role.icon
              return (
                <Card key={role.title} className="border-primary/15 bg-background">
                  <CardHeader className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="text-2xl text-balance">{role.title}</CardTitle>
                      <p className="leading-relaxed text-muted-foreground text-pretty">{role.summary}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {role.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-muted-foreground">
                          <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                          <span className="leading-relaxed text-pretty">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card className="border-border bg-background">
              <CardContent className="space-y-3 p-6">
                <h3 className="font-heading text-xl font-semibold">Diferencia de roles</h3>
                <p className="leading-relaxed text-muted-foreground text-pretty">
                  El director consigue fondos, firma convenios y define el rumbo del taller: mira hacia afuera y hacia el
                  futuro.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border bg-background">
              <CardContent className="space-y-3 p-6">
                <h3 className="font-heading text-xl font-semibold">Coordinación operativa</h3>
                <p className="leading-relaxed text-muted-foreground text-pretty">
                  El coordinador ejecuta el plan, supervisa al personal y resuelve lo que sucede hoy: mira hacia adentro y
                  al presente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24" id="inscripcion">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-balance md:text-5xl">Proceso de inscripción</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground text-pretty">
              El ingreso al taller combina recaudos, entrevistas y una evaluación práctica para construir el perfil
              formativo y ocupacional de cada participante.
            </p>
          </div>

          <div className="relative mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {ENROLLMENT_STEPS.map((step, index) => (
              <div key={step.title} className="relative">
                <Card className="h-full border-border bg-secondary/10">
                  <CardContent className="space-y-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background font-heading text-lg font-bold text-primary">
                      {index + 1}
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading text-xl font-semibold text-balance">{step.title}</h3>
                      <p className="leading-relaxed text-muted-foreground text-pretty">{step.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg shadow-lg">
              <Link href="/contacto">
                Solicitar información de ingreso
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <div className="mx-auto mt-20 max-w-5xl">
            <Card className="border-border bg-secondary/10">
              <CardContent className="space-y-6 p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background">
                    <Scale className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-balance">Marco legal del taller laboral</h3>
                    <p className="text-muted-foreground">
                      Normativas que orientan la protección, inclusión y operación responsable del programa.
                    </p>
                  </div>
                </div>
                <ul className="grid gap-x-6 gap-y-3 md:grid-cols-2">
                  {LEGAL_FRAMEWORK.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="leading-relaxed text-pretty">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
