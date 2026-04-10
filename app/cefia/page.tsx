import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import {
  Briefcase,
  Users,
  HandHeart,
  CheckCircle,
  ArrowRight,
  Target,
  Lightbulb,
  Brain,
  ShieldCheck,
  Scale,
  ClipboardList,
  GraduationCap
} from "lucide-react"

export const metadata = {
  title: "CEFIA - Taller Laboral - AVEPANE",
  description:
    "Centro de Educación y Formación Integral para el Trabajo. Formación laboral del joven y adulto con discapacidad intelectual.",
}

const AREAS = [
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
    title: "Manipulados Industriales",
    items: ["Empaquetado", "Selección", "Preparación de productos"],
    icon: Briefcase,
  },
  {
    title: "Comercio y atención al cliente",
    items: ["Atención al público", "Inventario"],
    icon: Users,
  },
]

const EXTRACURRICULAR_OFFICES = [
  "Creativo artesanal",
  "Diseñador y personalizador textil",
  "Asistente administrativo",
  "Ayudantes de planta y operarios de almacén",
  "Panadería",
  "Café / Barismo",
]

const TEAM = [
  { role: "Docentes de educación especial", desc: "Formación pedagógica de los participantes." },
  { role: "Personal de psicopedagogía", desc: "Interviene en los procesos de aprendizaje." },
  { role: "Psicólogo", desc: "Personal de apoyo en evaluación psicológica." },
  { role: "Terapista ocupacional", desc: "Evalúa desempeño y perfil ocupacional." },
  { role: "Instructores laborales", desc: "Enseñanza de destrezas técnicas y habilidades prácticas." },
  { role: "Trabajador Social", desc: "Facilitador clave para la inserción y bienestar." },
]

export default function CefiaPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-secondary/30 to-background py-16 md:py-24" id="conocenos">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-4 tracking-wider uppercase">
            Taller Laboral
          </div>
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl max-w-4xl mx-auto">
            CEFIA
          </h1>
          <p className="text-xl md:text-2xl font-medium text-muted-foreground mx-auto max-w-3xl text-balance">
            Centro de Educación y Formación Integral para el Trabajo
          </p>
          <p className="text-lg leading-relaxed text-pretty md:text-xl max-w-4xl mx-auto mt-4 text-foreground/80">
            Un entorno diseñado para transformar la formación teórica en acción productiva, facilitando la transición hacia una vida laboral activa e independiente.
          </p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20 bg-primary/5 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4 text-center md:text-left flex flex-col items-center md:items-start text-balance">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h2 className="font-heading text-3xl font-bold">Misión</h2>
                <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
                  Educación integral, en la formación de un oficio, en áreas de interés dirigida a jóvenes y adultos con
                  necesidades y condiciones especiales que presentan discapacidad intelectual con un enfoque humanístico bajo
                  estrategias pedagógicas personalizadas.
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-primary/5 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4 text-center md:text-left flex flex-col items-center md:items-start text-balance">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Lightbulb className="h-7 w-7 text-primary" />
                </div>
                <h2 className="font-heading text-3xl font-bold">Visión</h2>
                <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
                  Garantizar la formación laboral del joven y adulto con discapacidad intelectual, permitiéndoles así avanzar
                  con la educación para el trabajo; promoviendo un perfil de empleabilidad y habilidades operativas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section className="py-16 md:py-20 bg-secondary/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4 md:text-4xl text-balance">
              Nuestros Objetivos
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Metas claras para asegurar la calidad formativa y la independencia de nuestros participantes.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {["Desarrollar en el joven o adulto con discapacidad la independencia aplicada al empleo.",
              "Mejorar a través de los métodos técnicos necesarios la calidad de vida del participante.",
              "Integrar con métodos científicos las habilidades sociales para un buen desenvolvimiento.",
              "Garantizar la incorporación a empleos productivos que garanticen su independencia económica y social."].map((obj, i) => (
                <div key={i} className="flex gap-4 p-6 bg-background rounded-xl shadow-sm border border-border">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-base text-foreground/90 font-medium leading-relaxed">{obj}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Áreas Ocupacionales */}
      <section className="py-16 md:py-24 bg-background" id="areas-ocupacionales">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold mb-4 md:text-4xl text-balance text-center">
              Área Ocupacional
            </h2>
            <p className="text-lg text-muted-foreground text-pretty text-center max-w-3xl mx-auto">
              Transformamos la formación teórica en acción productiva. Desarrollamos habilidades técnico-manuales y hábitos de
              trabajo para una vida laboral activa e independiente.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            {/* Qué se trabaja */}
            <div className="lg:col-span-5 space-y-6 bg-primary/5 p-8 rounded-2xl border border-primary/10">
              <h3 className="font-heading text-2xl font-bold flex items-center gap-3">
                <Brain className="h-6 w-6 text-primary" />
                ¿Qué trabajamos?
              </h3>
              <ul className="space-y-4">
                {[
                  "Competencias y habilidades sociales (comunicación, empatía, convivencia).",
                  "Desarrollo cognitivo (atención, memoria, funciones ejecutivas).",
                  "Desarrollo de conducta (cumplimiento de normas, instrucciones, disciplina).",
                  "Autonomía personal en actividades de la vida diaria.",
                  "Habilidades técnicas propias de diferentes oficios.",
                  "Competencias blandas, trabajo en equipo y adaptación al entorno.",
                  "Hábitos de conducta laboral y seguridad industrial.",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2.5"></span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cuartos y Oficios */}
            <div className="lg:col-span-7">
              <h3 className="font-heading text-2xl font-bold mb-6">Nuestras Áreas y Oficios</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {AREAS.map((area, idx) => {
                  const Icon = area.icon
                  return (
                    <Card key={idx} className="border-border">
                      <CardHeader className="pb-3 flex flex-row items-center gap-3 space-y-0">
                        <div className="p-2 bg-secondary/30 rounded-md">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{area.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{area.items.join(", ")}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              <div className="mt-8">
                <h4 className="font-heading text-lg font-semibold mb-4 px-1">Oficios a desarrollar:</h4>
                <div className="flex flex-wrap gap-2">
                  {EXTRACURRICULAR_OFFICES.map((oficio, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-secondary/40 text-secondary-foreground text-sm rounded-full font-medium">
                      {oficio}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfil del Participante y Personal */}
      <section className="py-16 md:py-24 bg-accent/5" id="perfil">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Perfil del Participante */}
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center justify-center p-3 rounded-xl bg-primary/10 mb-2">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">Perfil del Participante</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Atendemos a personas de <strong>15 a 45 años</strong>, provenientes del hogar o la comunidad, con
                capacidades diferentes desde el punto de vista intelectual (Síndrome de Down, Retardo mental, TEA) 
                con diagnóstico especializado.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="bg-background border border-border p-8 rounded-2xl shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
                <h4 className="font-heading text-xl font-bold text-foreground mb-6">El perfil de ingreso busca:</h4>
                <ul className="space-y-4">
                  <li className="flex gap-4 items-start">
                    <div className="bg-primary/10 p-1.5 rounded-full"><CheckCircle className="h-5 w-5 text-primary" /></div>
                    <span className="text-base font-medium">Habilidades básicas de autonomía e higiene.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="bg-primary/10 p-1.5 rounded-full"><CheckCircle className="h-5 w-5 text-primary" /></div>
                    <span className="text-base font-medium">Capacidad de seguimiento de instrucciones sencillas.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="bg-primary/10 p-1.5 rounded-full"><CheckCircle className="h-5 w-5 text-primary" /></div>
                    <span className="text-base font-medium">Motivación por el aprendizaje manual.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="bg-primary/10 p-1.5 rounded-full"><CheckCircle className="h-5 w-5 text-primary" /></div>
                    <span className="text-base font-medium">Comunicación funcional y puntualidad.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Personal a cargo */}
          <div>
            <div className="text-center mb-10">
              <h3 className="font-heading text-3xl font-bold flex items-center justify-center gap-3">
                <HandHeart className="h-8 w-8 text-primary" /> 
                Personal a cargo
              </h3>
              <p className="text-muted-foreground mt-4 text-lg">Un equipo profesional multidisciplinario comprometido con el desarrollo de cada participante.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {TEAM.map((member, i) => (
                <Card key={i} className="border border-border bg-background hover:border-primary/20 hover:shadow-md transition-all">
                  <CardContent className="p-6 text-center space-y-2">
                    <h4 className="font-heading font-bold text-lg text-foreground">{member.role}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inscripción y Legal */}
      <section className="py-16 md:py-24 bg-background" id="inscripcion">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
          
          <div className="text-center space-y-4">
            <h2 className="font-heading text-3xl md:text-5xl font-bold">Proceso de Inscripción</h2>
            <p className="text-lg text-muted-foreground">Pasos para formar parte de formativa en CEFIA</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Timeline connector for larger screens */}
            <div className="hidden lg:block absolute top-[44px] left-0 w-full h-[2px] bg-border z-0"></div>
            
            {[
              { title: "Evaluación Documental", desc: "Revisión de documentos personales, informes médicos y psicológicos, y certificación de discapacidad." },
              { title: "Verificación y Entrevista", desc: "Entrevista con el director del taller, psicólogo y trabajador social." },
              { title: "Período de Prueba", desc: "Actividades prácticas en áreas ocupacionales, evaluación de perfil y conclusiones." },
              { title: "Admisión Oficial", desc: "Formalización de la inscripción y comienzo del programa formativo." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center space-y-6">
                <div className="w-14 h-14 bg-background border-4 border-primary rounded-full flex items-center justify-center font-bold text-xl text-primary shadow-sm">
                  {i + 1}
                </div>
                <Card className="w-full bg-secondary/5 border-border shadow-none">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
              <Link href="/contacto">
                Solicitar información de ingreso
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Marco legal */}
          <div className="max-w-4xl mx-auto mt-24">
            <div className="bg-secondary/10 border border-border p-8 rounded-2xl">
              <h3 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3 justify-center md:justify-start">
                <Scale className="h-7 w-7 text-primary" />
                Marco Legal del Taller Laboral
              </h3>
              <ul className="grid md:grid-cols-2 gap-x-6 gap-y-3 text-sm text-muted-foreground list-disc pl-4 marker:text-primary/50">
                <li>Constitución de la República Bolivariana de Venezuela.</li>
                <li>Ley Orgánica para la Inclusión, Igualdad y Desarrollo Integral de las Personas con Discapacidad.</li>
                <li>Ley Orgánica del Trabajo, Trabajadores y Trabajadoras.</li>
                <li>Ley Especial para las Trabajadoras y Trabajadores con Discapacidad.</li>
                <li>LOPNNA y legislaciones vinculantes.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
