import { Users, Calendar, Globe } from "lucide-react"

export default function StatsSection() {
  return (
    <section className="bg-muted/50 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <Users className="h-12 w-12 text-primary mb-3" />
            <div className="text-3xl font-bold mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>
              500+
            </div>
            <div className="text-muted-foreground">Asistentes Esperados</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <Calendar className="h-12 w-12 text-primary mb-3" />
            <div className="text-3xl font-bold mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>
              9 Oct | 11:00 AM
            </div>
            <div className="text-muted-foreground">Fecha del Evento</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <Globe className="h-12 w-12 text-primary mb-3" />
            <div className="text-3xl font-bold mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>
              Online
            </div>
            <div className="text-muted-foreground">Formato Virtual</div>
          </div>
        </div>
      </div>
    </section>
  )
}
