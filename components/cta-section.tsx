"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import CountdownTimer from "@/components/countdown-timer"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { useScrollToRegistration } from "@/hooks/use-scroll-to-registration"

export default function CTASection() {
  const { scrollToElement } = useSmoothScroll()
  const { scrollToRegistration } = useScrollToRegistration()

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto bg-background/95 backdrop-blur">
          <div className="p-8 sm:p-12 text-center">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4 text-balance"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              ¡Reserva tu acceso al webinar!
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              Asegura tu lugar en el webinar exclusivo del 9 de octubre con Javier Romero sobre sistemas fotovoltaicos.
            </p>

            <CountdownTimer targetDate="2025-10-09T10:00:00" />

            <div className="mt-8">
              <Button size="lg" className="text-lg px-8" onClick={scrollToRegistration}>
                Reservar mi acceso al webinar
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6 font-semibold">
              P.S. ¡Actúa rápido! Los lugares son limitados.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
