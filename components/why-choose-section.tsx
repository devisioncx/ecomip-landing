import { Card, CardContent } from "@/components/ui/card";
import { UserCheck, Shield, Award, Clock, Heart } from "lucide-react";

const reasons = [
  {
    icon: UserCheck,
    title: "Profissionais Qualificados",
    description:
      "Técnicos licenciados e treinados constantemente nas melhores práticas do mercado.",
  },
  {
    icon: Shield,
    title: "Produtos Registrados ANVISA",
    description:
      "Utilizamos apenas produtos aprovados e seguros para sua família e pets.",
  },
  {
    icon: Award,
    title: "Garantia de Resultado",
    description:
      "Oferecemos garantia em todos os nossos serviços com acompanhamento pós-aplicação.",
  },
  {
    icon: Clock,
    title: "Atendimento 24h",
    description:
      "Emergências não esperam. Estamos disponíveis 24 horas para casos urgentes.",
  },
  {
    icon: Heart,
    title: "Métodos Seguros",
    description:
      "Priorizamos a segurança da sua família, pets e meio ambiente em todos os tratamentos.",
  },
];

export function WhyChooseSection() {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Por Que Escolher a Ecomip?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Dedicados à excelência em cada atendimento com métodos modernos,
            oferecendo soluções seguras e eficazes para o controle de pragas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <reason.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-pretty">
                    {reason.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
