"use client"

import { Button } from "@/components/ui/button"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, Zap } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const { scrollToElement } = useSmoothScroll()

  const scrollToRegistration = () => {
    scrollToElement("registro", {
      duration: 800,
      easing: 'easeInOut',
      offset: 80 // Offset para header sticky
    })
  }

  const webinarDate = new Date("2025-10-15T10:00:00-06:00")

  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-card to-background py-20 sm:py-[70px]">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-48 -translate-x-48"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-8">
            {/* Badge de evento especial */}
            <Badge variant="secondary" className="text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Zap className="w-4 h-4 mr-2" />
              Evento Especial - Cupos Limitados
            </Badge>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-balance mb-6 leading-tight"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Descubre el Impacto de los Sistemas Fotovoltaicos en tu{" "}
              <span className="text-primary">Consumo Eléctrico</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Únete al webinar exclusivo del 15 de octubre donde Javier Romero, experto en energías renovables, te
              revelará las estrategias exactas para transformar tu consumo eléctrico con sistemas fotovoltaicos.
            </p>

            {/* Información del evento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border">
                <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold">Fecha</p>
                  <p className="text-sm text-muted-foreground">
                    {webinarDate.toLocaleDateString('es-ES', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold">Hora</p>
                  <p className="text-sm text-muted-foreground">
                    {webinarDate.toLocaleTimeString('es-ES', {
                      hour: '2-digit',
                      minute: '2-digit',
                      timeZoneName: 'short'
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Beneficios destacados */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  <Users className="w-3 h-3 mr-1" />
                  100% Gratuito
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  1 Hora Intensiva
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                  Certificado Incluido
                </Badge>
              </div>
            </div>

            <Button
              size="lg"
              className="text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group"
              onClick={scrollToRegistration}
            >
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Regístrate Ahora Gratis
            </Button>

            {/* Contador de inscritos */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>+500 personas ya inscritas</span>
              </div>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>Últimos 50 cupos disponibles</span>
            </div>
          </div>

          <div className="relative w-full aspect-video">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Paneles.png"
                alt="Paneles solares fotovoltaicos - Sistemas de energía renovable"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Overlay con información */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-sm font-medium text-gray-900">
                    Instalación típica de paneles solares
                  </p>
                  <p className="text-xs text-gray-600">
                    Reduce hasta 70% tu consumo eléctrico
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}