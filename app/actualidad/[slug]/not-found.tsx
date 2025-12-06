import { MainLayout } from "@/components/main-layout"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <MainLayout>
      <div className="min-h-[60vh] flex items-center justify-center py-16">
        <div className="text-center space-y-6 max-w-md mx-auto px-4">
          <h1 className="font-heading text-4xl font-bold">404</h1>
          <h2 className="font-heading text-2xl font-semibold">Artículo no encontrado</h2>
          <p className="text-muted-foreground">
            Lo sentimos, el artículo que buscas no existe o ha sido movido.
          </p>
          <Button asChild>
            <Link href="/actualidad">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Volver a Actualidad
            </Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  )
}

