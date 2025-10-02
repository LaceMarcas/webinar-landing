export default function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-background py-[50px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-5">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-6 text-balance"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            ¿Tu Consumo Eléctrico Sigue Aumentando Mes Tras Mes?
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Sabemos lo frustrante que es ver cómo tu consumo eléctrico ocupa una parte cada vez mayor de tu presupuesto.
            Mientras las tarifas eléctricas siguen subiendo, tus ingresos se resiente. Pero hay una solución probada que
            miles de mexicanos ya están aprovechando:{" "}
            <strong className="text-foreground">los sistemas fotovoltaicos</strong>.
          </p>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed mt-4">
            En este webinar exclusivo, descubrirás exactamente cómo puedes tomar el control de tu consumo eléctrico y
            dejar de depender de las constantes alzas en las tarifas. No más sorpresas desagradables cada bimestre.
          </p>
        </div>
      </div>
    </section>
  )
}
