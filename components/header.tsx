"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { useScrollToRegistration } from "@/hooks/use-scroll-to-registration"
import Image from "next/image"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollToElement } = useSmoothScroll()
  const { scrollToRegistration } = useScrollToRegistration()

  const scrollToSection = (id: string) => {
    scrollToElement(id, {
      duration: 800,
      easing: 'easeInOut',
      offset: 80 // Offset para header sticky
    })
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 relative w-12 h-12">
            <Image
              src="/Logo-Empresa.jpg"
              alt="lace laboratorios de calibracion"
              fill
              className="object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection("ponente")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Ponente
            </button>
            <Button size="lg" className="text-lg px-8" onClick={scrollToRegistration}>
            Reserva Tu Lugar Ahora (Es Gratis)
          </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium hover:text-primary transition-colors text-left"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-sm font-medium hover:text-primary transition-colors text-left"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection("ponente")}
              className="text-sm font-medium hover:text-primary transition-colors text-left"
            >
              Ponente
            </button>
            <Button
              onClick={() => scrollToSection("registro")}
              className="mt-2"
            >
              Regístrate Gratis Ahora
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
