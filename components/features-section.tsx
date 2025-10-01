"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingDown, Sun, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export default function FeaturesSection() {
  const { scrollToElement } = useSmoothScroll()

  const scrollToRegistration = () => {
    scrollToElement("registro", {
      duration: 800,
      easing: 'easeInOut',
      offset: 80 // Offset para header sticky
    })
  }

  const features = [
    {
      icon: TrendingDown,
      title: "Reduce tu Consumo Eléctrico",
      description:
        "Aprenderás estrategias prácticas y comprobadas para implementar sistemas fotovoltaicos en México. Descubre cómo maximizar tu ahorro en consumo eléctrico comercial e industrial con retornos rápidos en tu inversión energética.",
    },
    {
      icon: Sun,
      title: "Conoce las Últimas Tendencias en Sistemas Fotovoltaicos",
      description:
        "Explora el crecimiento explosivo del sector fotovoltaico en México. Te mostraremos las innovaciones más recientes en paneles solares y las oportunidades reales para las industrias y empresas en 2025.",
    },
    {
      icon: Shield,
      title: "Consejos Prácticos de un Experto Reconocido",
      description:
        "Obtén perspectivas exclusivas de Javier Romero para navegar los desafíos regulatorios y optimizar tu transición a energía solar sostenible. Conocimiento que normalmente cuesta miles de pesos en consultoría.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-6 text-balance"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            ¿Por Qué Deberías Asistir a Este Webinar?
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Este no es un webinar más sobre energía solar. Es tu oportunidad de aprender directamente de uno de los
            expertos más reconocidos en regulación energética de México. En solo 60 minutos, obtendrás el conocimiento
            que necesitas para tomar decisiones inteligentes sobre tu inversión en sistemas fotovoltaicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-balance" style={{ fontFamily: "var(--font-montserrat)" }}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            <strong className="text-foreground">Datos del evento:</strong> 500+ accesos para que te beneficies de esta información.
            El 9 de octubre a las 11:00 AM en formato 100% online para que puedas conectarte desde donde
            estés.
          </p>
          <Button size="lg" className="text-lg px-8" onClick={scrollToRegistration}>
            Reserva Tu Lugar Ahora (Es Gratis)
          </Button>
        </div>
      </div>
    </section>
  )
}
