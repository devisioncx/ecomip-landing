import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Building, MousePointer, TreePine, Bird, Bug } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Dedetização Residencial",
    description: "Controle eficaz de baratas, formigas, mosquitos e aranhas em residências.",
    features: ["Produtos seguros para família", "Tratamento personalizado", "Garantia de 6 meses"],
  },
  {
    icon: Building,
    title: "Dedetização Comercial",
    description: "Soluções para estabelecimentos comerciais e industriais com foco na prevenção.",
    features: ["Certificado para vigilância sanitária", "Cronograma personalizado", "Relatórios técnicos"],
  },
  {
    icon: MousePointer,
    title: "Controle de Roedores",
    description: "Eliminação e prevenção de ratos e camundongos com métodos seguros.",
    features: ["Iscas seguras", "Vedação de pontos de entrada", "Monitoramento contínuo"],
  },
  {
    icon: TreePine,
    title: "Descupinização",
    description: "Tratamento especializado para cupins de solo e madeira seca.",
    features: ["Diagnóstico completo", "Tratamento localizado", "Prevenção de reinfestação"],
  },
  {
    icon: Bird,
    title: "Controle de Pombos",
    description: "Instalação de barreiras e sistemas de repelência para pombos urbanos.",
    features: ["Métodos humanitários", "Instalação profissional", "Manutenção incluída"],
  },
  {
    icon: Bug,
    title: "Controle de Insetos",
    description: "Eliminação de pulgas, carrapatos, percevejos e outros insetos.",
    features: ["Tratamento específico", "Produtos registrados", "Aplicação segura"],
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Nossos Serviços Especializados</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Oferecemos soluções completas em controle de pragas com tecnologia avançada e produtos registrados pela
            ANVISA.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
