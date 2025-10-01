import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  const faqs = [
    {
      question: "¿El webinar tiene algún costo?",
      answer: "No, el webinar es completamente gratuito. Solo necesitas registrarte para asegurar tu lugar.",
    },
    {
      question: "¿Recibiré una grabación del webinar?",
      answer:
        "Sí, todos los participantes registrados recibirán un enlace a la grabación del webinar dentro de las 24 horas posteriores al evento.",
    },
    {
      question: "¿Necesito conocimientos previos sobre energía solar?",
      answer:
        "No es necesario. El webinar está diseñado tanto para principiantes como para personas con conocimientos previos en el tema.",
    },
    {
      question: "¿Qué plataforma se utilizará para el webinar?",
      answer:
        "El webinar se realizará en una plataforma online de fácil acceso. Recibirás el enlace de acceso por correo electrónico después de registrarte.",
    },
    {
      question: "¿Podré hacer preguntas durante el webinar?",
      answer:
        "Sí, habrá una sesión de preguntas y respuestas al final del webinar donde podrás interactuar directamente con Javier Romero.",
    },
    {
      question: "¿Qué pasa si no puedo asistir en vivo?",
      answer:
        "No te preocupes. Todos los registrados recibirán acceso a la grabación completa del webinar, así podrás verlo cuando te sea conveniente.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4 text-balance"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Encuentra respuestas a las preguntas más comunes sobre el webinar
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
