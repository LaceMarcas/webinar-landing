"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import Image from "next/image"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollToElement } = useSmoothScroll()

  // Efecto para detectar scroll y cambiar apariencia del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    scrollToElement(id, {
      duration: 800,
      easing: 'easeInOut',
      offset: 80 // Offset para header sticky
    })
    setMobileMenuOpen(false)
  }

  const navigationItems = [
    { id: "inicio", label: "Inicio" },
    { id: "beneficios", label: "Beneficios" },
    { id: "ponente", label: "Ponente" },
    { id: "registro", label: "Regístrate Gratis Ahora" }
  ]

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
      isScrolled
        ? "bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-sm"
        : "bg-background/95 backdrop-blur-sm"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 relative w-12 h-12">
            <Image
              src="/Logo-Empresa.jpg"
              alt="LACE Laboratorios de Calibración"
              fill
              className="object-contain"
              sizes="48px"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigationItems.slice(0, 3).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium hover:text-primary transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
            <Button
              size="lg"
              className="text-lg px-8 font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() => scrollToSection("registro")}
            >
              Reserva Tu Lugar Ahora (Es Gratis)
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col gap-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium hover:text-primary transition-colors text-left py-2 px-2 rounded-md hover:bg-accent"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}