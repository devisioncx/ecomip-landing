import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Solicite Seu Orçamento
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Entre em contato conosco e receba uma proposta personalizada para
            suas necessidades.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* WhatsApp Contact */}
          <Card className="bg-card">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Fale Conosco no WhatsApp
                </h3>
                <p className="text-muted-foreground">
                  Clique no botão abaixo para conversar diretamente conosco e
                  solicitar seu orçamento personalizado.
                </p>
              </div>

              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full">
                  <Phone className="h-5 w-5" />
                  <span className="font-semibold">(11) 94063-6383</span>
                </div>
              </div>

              <a
                href="https://wa.me/5511940636383?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20controle%20de%20pragas.%20Podem%20me%20ajudar%20com%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20ECOMIP%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full cursor-pointer"
              >
                <Button
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6 cursor-pointer"
                >
                  <Phone className="h-6 w-6 mr-2" />
                  SOLICITAR ORÇAMENTO VIA WHATSAPP
                </Button>
              </a>

              <p className="text-sm text-muted-foreground mt-4">
                Resposta rápida garantida! Atendemos de segunda a domingo.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        (11) 94063-6383
                      </p>
                      <p className="text-sm text-muted-foreground">
                        WhatsApp e Ligações
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        contato@ecomip.com.br
                      </p>
                      <p className="text-sm text-muted-foreground">
                        E-mail para orçamentos
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        Grande São Paulo
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Atendemos toda região metropolitana
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        24 horas por dia
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Atendimento de emergência
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
