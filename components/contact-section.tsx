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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* WhatsApp Contact */}
          <Card className="bg-card">
            <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  Fale Conosco no WhatsApp
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Clique no botão abaixo para conversar diretamente conosco e
                  solicitar seu orçamento personalizado.
                </p>
              </div>

              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-2 rounded-full text-sm sm:text-base">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="font-semibold">(11) 94063-6383</span>
                </div>
              </div>

              <a
                href="https://wa.me/5511940636383?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20controle%20de%20pragas.%20Podem%20me%20ajudar%20com%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20ECOMIP%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                <Button
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base lg:text-lg py-4 sm:py-6 cursor-pointer px-2 sm:px-4"
                >
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 mr-1 sm:mr-2 flex-shrink-0" />
                  <span className="truncate">
                    SOLICITAR ORÇAMENTO VIA WHATSAPP
                  </span>
                </Button>
              </a>

              <p className="text-xs sm:text-sm text-muted-foreground mt-4">
                Resposta rápida garantida! Atendemos de segunda a domingo.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8">
            <Card className="bg-card">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">
                  Informações de Contato
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-foreground text-sm sm:text-base break-words">
                        (11) 94063-6383
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        WhatsApp e Ligações
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-foreground text-sm sm:text-base break-all">
                        contato@ecomip.com.br
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        E-mail para orçamentos
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-foreground text-sm sm:text-base">
                        Grande São Paulo
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Atendemos toda região metropolitana
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-foreground text-sm sm:text-base">
                        24 horas por dia
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
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
