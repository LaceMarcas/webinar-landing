import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: "Webinar: Fotovoltaicos - Ahorra 70% en Energía | LACE",
  description:
    "Descubre cómo los sistemas fotovoltaicos reducen costos eléctricos hasta 70%. Webinar gratuito con expertos de LACE Laboratorios. Regístrate hoy y adopta energía sostenible.",
  keywords: "sistemas fotovoltaicos, energía solar, reducción de costos, webinar, LACE Laboratorios, sostenibilidad energética",
  generator: "v0.app",
  openGraph: {
    title: "Webinar: Fotovoltaicos - Ahorra 70% en Energía | LACE",
    description: "Descubre cómo los sistemas fotovoltaicos reducen costos eléctricos hasta 70%. Webinar gratuito con expertos de LACE Laboratorios. Regístrate hoy y adopta energía sostenible.",
    url: "https://lace-laboratorios.com/webinar",
    siteName: "LACE Laboratorios",
    images: [
      {
        url: "/Paneles.png",
        width: 1200,
        height: 630,
        alt: "Sistemas Fotovoltaicos - Paneles Solares",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webinar: Fotovoltaicos - Ahorra 70% en Energía | LACE",
    description: "Descubre cómo los sistemas fotovoltaicos reducen costos eléctricos hasta 70%. Webinar gratuito con expertos de LACE Laboratorios. Regístrate hoy y adopta energía sostenible.",
    images: ["/Paneles.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossOrigin="anonymous"></script>
        <script src="https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024" type="text/javascript"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5TTGVXSF2W"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5TTGVXSF2W');
            `,
          }}
        />
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
                "url": "https://lace-laboratorios.com"
              },
              "image": "https://lace-laboratorios.com/Paneles.png",
              "url": "https://lace-laboratorios.com/webinar"
            }),
          }}
        />
      </head>
      <body className={`font-sans ${montserrat.variable} ${openSans.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
