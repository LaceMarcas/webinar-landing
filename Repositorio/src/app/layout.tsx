import type React from "react"
import type { Metadata, Viewport } from "next"
import { Montserrat } from "next/font/google"
import { Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

// Configuración optimizada de fuentes
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
  display: "swap",
  preload: true,
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "600", "700"],
  display: "swap",
  preload: false,
})

// Metadata optimizada y segura
export const metadata: Metadata = {
  title: {
    default: "Webinar: Sistemas Fotovoltaicos - Ahorra 70% en Energía | LACE",
    template: "%s | LACE Laboratorios"
  },
  description:
    "Descubre cómo los sistemas fotovoltaicos reducen costos eléctricos hasta 70%. Webinar gratuito con expertos de LACE Laboratorios. Regístrate hoy y adopta energía sostenible.",
  keywords: [
    "sistemas fotovoltaicos",
    "energía solar",
    "reducción de costos",
    "webinar",
    "LACE Laboratorios",
    "sostenibilidad energética",
    "paneles solares",
    "energía renovable",
    "eficiencia energética"
  ],
  authors: [{ name: "LACE Laboratorios", url: "https://lace-laboratorios.com" }],
  creator: "LACE Laboratorios",
  publisher: "LACE Laboratorios",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://lace-laboratorios.com"),
  alternates: {
    canonical: "/webinar",
  },
  openGraph: {
    title: "Webinar: Sistemas Fotovoltaicos - Ahorra 70% en Energía | LACE",
    description: "Descubre cómo los sistemas fotovoltaicos reducen costos eléctricos hasta 70%. Webinar gratuito con expertos de LACE Laboratorios. Regístrate hoy y adopta energía sostenible.",
    url: "https://lace-laboratorios.com/webinar",
    siteName: "LACE Laboratorios",
    images: [
      {
        url: "/Paneles.png",
        width: 1200,
        height: 630,
        alt: "Sistemas Fotovoltaicos - Paneles Solares",
        type: "image/png",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webinar: Sistemas Fotovoltaicos - Ahorra 70% en Energía | LACE",
    description: "Descubre cómo los sistemas fotovoltaicos reducen costos eléctricos hasta 70%. Webinar gratuito con expertos de LACE Laboratorios. Regístrate hoy y adopta energía sostenible.",
    images: ["/Paneles.png"],
    creator: "@lacelab",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "G-5TTGVXSF2W",
  },
}

// Configuración de viewport optimizada
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

// Componente de carga optimizado
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        {/* Script de Google Analytics optimizado */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5TTGVXSF2W', {
                page_title: document.title,
                page_location: window.location.href,
                anonymize_ip: true,
                allow_ad_features: false,
                allow_ad_personalization_signals: false
              });
            `,
          }}
        />

        {/* Schema markup optimizado */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalEvent",
              "name": "Webinar: Sistemas Fotovoltaicos - LACE Laboratorios",
              "description": "Descubre el Impacto de los Sistemas Fotovoltaicos en tu Consumo Eléctrico. Reduce costos hasta 70% con energía sostenible.",
              "startDate": "2025-10-15T10:00:00-06:00",
              "endDate": "2025-10-15T11:00:00-06:00",
              "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
              "eventStatus": "https://schema.org/EventScheduled",
              "location": {
                "@type": "VirtualLocation",
                "url": "https://lace-laboratorios.com/webinar"
              },
              "organizer": {
                "@type": "Organization",
                "name": "LACE Laboratorios",
                "url": "https://lace-laboratorios.com",
                "sameAs": [
                  "https://lace-laboratorios.com"
                ]
              },
              "image": "https://lace-laboratorios.com/Paneles.png",
              "url": "https://lace-laboratorios.com/webinar",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "MXN",
                "availability": "https://schema.org/InStock",
                "validFrom": new Date().toISOString()
              }
            }),
          }}
        />

        {/* Preload de recursos críticos */}
        <link rel="preload" href="/Paneles.png" as="image" type="image/png" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body className="font-sans antialiased min-h-screen bg-background">
        <Suspense fallback={<LoadingFallback />}>
          <div className="relative">
            {children}
          </div>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}