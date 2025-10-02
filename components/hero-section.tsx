"use client"

import { Button } from "@/components/ui/button"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { useScrollToRegistration } from "@/hooks/use-scroll-to-registration"
import Image from "next/image"

export default function HeroSection() {
  const { scrollToElement } = useSmoothScroll()
  const { scrollToRegistration } = useScrollToRegistration()

  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-card to-background py-20 sm:py-[70px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-balance mb-6 leading-tight"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Descubre el Impacto de los Sistemas Fotovoltaicos en tu Consumo Eléctrico
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Únete al webinar exclusivo del 9 de octubre donde Javier Romero, experto en energías renovables, te
              revelará las estrategias exactas para transformar tu consumo eléctrico con sistemas fotovoltaicos.
            </p>

            <Button size="lg" className="text-lg px-8" onClick={scrollToRegistration}>
              Regístrate Ahora Gratis
            </Button>
          </div>

          <div className="relative w-full aspect-video">
            <Image
              src="/Paneles.png"
              alt="paneles fotovoltaicos"
              fill
              className="rounded-lg shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
