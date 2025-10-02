import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import BenefitsSection from "@/components/benefits-section"
import SpeakerSection from "@/components/speaker-section"
import FeaturesSection from "@/components/features-section"
import FinalCTASection from "@/components/final-cta-section"
import Footer from "@/components/footer"

// Metadata específica para la página principal
export const metadata = {
  title: "Webinar: Sistemas Fotovoltaicos - Ahorra 70% en Energía",
  description: "Descubre cómo los sistemas fotovoltaicos reducen costos eléctricos hasta 70%. Webinar gratuito con expertos de LACE Laboratorios.",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <BenefitsSection />
      <SpeakerSection />
      <FeaturesSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}