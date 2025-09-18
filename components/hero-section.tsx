import { Button } from "@/components/ui/button";
import { Shield, Award, Clock } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="bg-gradient-to-br from-background to-muted py-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Livre-se das Pragas com{" "}
                <span className="text-primary">Segurança</span> e{" "}
                <span className="text-secondary">Eficiência</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Soluções profissionais em controle de pragas com garantia de
                resultado. Proteja sua família e seu negócio com quem entende do
                assunto.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5511940636383?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20controle%20de%20pragas.%20Podem%20me%20ajudar%20com%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20ECOMIP%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8 cursor-pointer"
                >
                  SOLICITAR ORÇAMENTO
                </Button>
              </a>
              <a
                href="https://wa.me/5511940636383?text=Ol%C3%A1%21%20Tenho%20uma%20situa%C3%A7%C3%A3o%20de%20emerg%C3%AAncia%20com%20pragas%20e%20preciso%20de%20atendimento%20urgente.%20Podem%20me%20ajudar%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 bg-transparent cursor-pointer"
                >
                  EMERGÊNCIA 24H
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-5 w-5 text-secondary" />
                <span>Licenciado pela ANVISA</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="h-5 w-5 text-secondary" />
                <span>Garantia de Resultado</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-5 w-5 text-secondary" />
                <span>Atendimento 24h</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/professional-pest-control-technician-in-uniform-sp.jpg"
              alt="Profissional da Ecomip realizando dedetização"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
