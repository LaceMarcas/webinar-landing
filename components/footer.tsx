import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
              LACE Laboratorios de Calibración
            </h3>
            <p className="text-background/80 leading-relaxed">
              Especialistas en calibración e instrumentación de precisión para la industria energética y renovable.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#inicio" className="hover:text-background transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-background transition-colors">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#ponente" className="hover:text-background transition-colors">
                  Ponente
                </a>
              </li>
              <li>
                <a href="#registro" className="hover:text-background transition-colors">
                  Registro
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
              Contacto
            </h4>
            <div className="space-y-3 text-background/80">
              <div className="flex gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed">
                  Av. Adolfo López Mateos No. 16, Magisterial Vista Bella, C.P. 54050, Tlalnepantla de Baz, Edo. Méx.
                </p>
              </div>
              <div className="flex gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <p className="text-sm">+52 55 5361 1185</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
          <p>© 2025 LACE Laboratorios de Calibración. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
