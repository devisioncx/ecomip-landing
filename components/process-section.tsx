import { Card, CardContent } from "@/components/ui/card"
import { Search, FileText, SprayCan as Spray, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Inspeção Gratuita",
    description: "Avaliação detalhada do problema para identificar o tipo de praga e grau de infestação.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Orçamento Personalizado",
    description: "Proposta técnica detalhada sem compromisso, com prazo e garantia definidos.",
  },
  {
    icon: Spray,
    number: "03",
    title: "Aplicação Profissional",
    description: "Tratamento realizado por técnicos especializados com equipamentos de última geração.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Acompanhamento",
    description: "Garantia e monitoramento pós-serviço para assegurar a eficácia do tratamento.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Como Trabalhamos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Nosso processo é simples, transparente e focado em resultados duradouros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-card relative overflow-hidden">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="relative">
                    <div className="absolute -top-2 -right-2 text-6xl font-bold text-primary/10">{step.number}</div>
                    <div className="relative p-4 bg-primary/10 rounded-full w-fit mx-auto">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-pretty">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
