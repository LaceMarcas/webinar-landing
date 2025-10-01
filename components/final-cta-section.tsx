"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Calendar, Globe } from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"

export default function FinalCTASection() {

  return (
    <section id="registro" className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6 text-balance"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              No Dejes Pasar Esta Oportunidad Única
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto mb-4">
              Miles de empresas ya están ahorrando en el consumo eléctrico gracias a los sistemas
              fotovoltaicos. La pregunta no es si deberías considerar la energía solar, sino{" "}
              <strong className="text-foreground">cuándo vas a dar el primer paso</strong>.
            </p>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Este webinar gratuito te dará todas las respuestas que necesitas para tomar una decisión informada.
              Regístrate ahora y asegura tu lugar antes de que se llenen los cupos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle style={{ fontFamily: "var(--font-montserrat)" }}>Detalles del Webinar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Contacto</p>
            <p><a style={{
  textTransform: 'uppercase',
  fontSize: '14px',
  cursor: pointer;
  padding: '12px 18px',
  fontFamily: 'inherit',
  backgroundColor: '#0075E3',
  border: '1px solid #0075E3',
  color: '#FFFFFF',
  borderRadius: '4px',
  textDecoration: 'none',
  display: inline-block;
"}} href="javascript:void(
        window.open(
          'https://agent.jotform.com/0199968febfb78ccbfc3cc03a04be4c42e48?embedMode=popup&parentURL='+encodeURIComponent(window.top.location.href),
          'blank',
          'scrollbars=yes,toolbar=no,width=700,height=500,top='+(window.outerHeight / 2 - 250)+',left='+(window.outerWidth / 2 - 350)+'',
        ))">
            Preguntas y Respuestas
                </a></p>
                  </div>
              
                  
                </div>
                <div className="flex gap-3">
                  <Calendar className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Fecha</p>
                    <p className="text-sm text-muted-foreground">9 de octubre, 2025 | 11:00 AM</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Globe className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Formato</p>
                    <p className="text-sm text-muted-foreground">100% Online - Conéctate desde cualquier lugar</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm font-semibold text-foreground mb-2">Lo que aprenderás:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✓ Cómo reducir tu factura hasta un 70%</li>
                    <li>✓ ROI real de sistemas fotovoltaicos</li>
                    <li>✓ Tendencias del mercado en 2025</li>
                    <li>✓ Estrategias de implementación práctica</li>
                  </ul>
                </div>
                <div className="mb-12">
            <CountdownTimer targetDate="2025-10-09T10:00:00" />
          </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary">
              <CardHeader>
                <CardTitle style={{ fontFamily: "var(--font-montserrat)" }}>Regístrate Gratis en 30 Segundos</CardTitle>
              </CardHeader>
              <CardContent>
                <div id="mlb2-31470223" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-31470223">
                  <div className="ml-form-align-center">
                    <div className="ml-form-embedWrapper embedForm">
                      <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                        <div className="ml-form-embedContent">
                          <h4></h4>
                          <p><span style={{fontSize: '18px'}}><strong>Regístrate Gratis en 30 segundos</strong></span></p>
                        </div>
                        <form className="ml-block-form" action="https://assets.mailerlite.com/jsonp/1486635/forms/166905687917462974/subscribe" data-code="" method="post" target="_blank">
                          <div className="ml-form-formContent">
                            <div className="ml-form-fieldRow">
                              <div className="ml-field-group ml-field-name ml-validate-required">
                                <label>Nombre</label>
                                <input aria-label="name" aria-required="true" type="text" className="form-control" data-inputmask="" name="fields[name]" placeholder="" autoComplete="given-name" />
                              </div>
                            </div>
                            <div className="ml-form-fieldRow">
                              <div className="ml-field-group ml-field-last_name ml-validate-required">
                                <label>Apellido</label>
                                <input aria-label="last_name" aria-required="true" type="text" className="form-control" data-inputmask="" name="fields[last_name]" placeholder="" autoComplete="family-name" />
                              </div>
                            </div>
                            <div className="ml-form-fieldRow">
                              <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                                <label>Correo electrónico</label>
                                <input aria-label="email" aria-required="true" type="email" className="form-control" data-inputmask="" name="fields[email]" placeholder="" autoComplete="email" />
                              </div>
                            </div>
                            <div className="ml-form-fieldRow">
                              <div className="ml-field-group ml-field-phone">
                                <label>Teléfono</label>
                                <input aria-label="phone" type="text" className="form-control" data-inputmask="" name="fields[phone]" placeholder="" autoComplete="" />
                              </div>
                            </div>
                            <div className="ml-form-fieldRow ml-last-item">
                              <div className="ml-field-group ml-field-company">
                                <label>Empresa</label>
                                <input aria-label="company" type="text" className="form-control" data-inputmask="" name="fields[company]" placeholder="" autoComplete="" />
                              </div>
                            </div>
                          </div>
                          <div className="ml-form-embedPermissions">
                            <div className="ml-form-embedPermissionsContent default privacy-policy">
                              <p>Puedes darte de baja en cualquier momento. Para más información, consulta nuestra Política de Privacidad.</p>
                            </div>
                          </div>
                          <div className="ml-form-checkboxRow ml-validate-required">
                            <label className="checkbox">
                              <input type="checkbox" />
                              <div className="label-description">
                                <p>Opte por recibir noticias y actualizaciones.</p>
                                <p><br /></p>
                                <p>P.S. Los lugares son limitados. Regístrate ahora para no quedarte fuera.<br /></p>
                              </div>
                            </label>
                          </div>
                          <input type="hidden" name="ml-submit" value="1" />
                          <div className="ml-form-embedSubmit">
                            <button type="submit" className="primary">Sí, Quiero Mi Acceso Gratuito</button>
                            <button disabled={true} style={{display: 'none'}} type="button" className="loading">
                              <div className="ml-form-embedSubmitLoad"></div>
                              <span className="sr-only">Loading...</span>
                            </button>
                          </div>
                          <input type="hidden" name="anticsrf" value="true" />
                        </form>
                      </div>
                      <div className="ml-form-successBody row-success" style={{display: 'none'}}>
                        <div className="ml-form-successContent">
                          <h4>Tu registro esta asegurado</h4>
                          <p>Te compartiremos el link de acceso y más información por correo eléctronico.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <script dangerouslySetInnerHTML={{
                  __html: `
                    function ml_webform_success_31470223() {
                      var $ = window.ml_jQuery || window.jQuery;
                      $('.ml-subscribe-form-31470223 .row-success').show();
                      $('.ml-subscribe-form-31470223 .row-form').hide();
                    }
                  `
                }} />
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
                      fetch("https://assets.mailerlite.com/jsonp/1486635/forms/166905687917462974/takel")
                    `
                  }}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
