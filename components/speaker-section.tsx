import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, Award } from "lucide-react"
import Image from "next/image"

export default function SpeakerSection() {
  return (
    <section id="ponente" className="bg-muted/30 py-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 bg-gradient-to-br from-primary to-secondary p-4 flex justify-center py-0 px-0 items-center flex-row border-none border-foreground leading-7 relative w-[280px] h-[373px]">
                  <Image
                    src="/Ponente Javier.jpg"
                    alt="Javier Romero Durand"
                    fill
                    className="rounded-md shadow-lg object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-8 lg:p-12">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
                    Javier Romero Durand
                  </h3>
                  <p className="text-primary font-semibold text-lg mb-6">
                    Experto en Regulación Energética y Energías Renovables
                  </p>

                  <p className="text-foreground leading-relaxed mb-6">
                    Líder orientado al negocio con amplia experiencia en administración, derecho corporativo, estrategia
                    y regulación energética. Javier ha dedicado su carrera a contribuir a la transición energética
                    sostenible en México, ayudando a empresas y hogares a navegar el complejo panorama de las energías
                    renovables.
                  </p>

                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <GraduationCap className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground leading-relaxed">
                        Abogado con MBA y Maestría en Negocios Internacionales (MIB)
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Briefcase className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground leading-relaxed">
                        Ex Director Ejecutivo de AMFEF y Secretario de Asuntos Industriales de ANES
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground leading-relaxed">
                        Socio y Gerente General de EcoValue, liderando proyectos de M&A y estrategia fiscal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
