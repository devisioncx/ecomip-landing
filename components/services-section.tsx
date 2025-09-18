"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Home,
  Building,
  MousePointer,
  TreePine,
  Bird,
  Bug,
  Clock,
  Shield,
  CheckCircle,
  Phone,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Dedetização Residencial",
    description:
      "Controle eficaz de baratas, formigas, mosquitos e aranhas em residências.",
    features: [
      "Produtos seguros para família",
      "Tratamento personalizado",
      "Garantia de 6 meses",
    ],
    detailedInfo: {
      problem:
        "Preocupado com baratas, formigas, mosquitos ou aranhas invadindo sua casa?",
      solution:
        "Realizamos tratamento completo com produtos seguros para família e pets, focando na eliminação total das pragas e prevenção de reinvestação.",
      process: [
        "Identificação dos pontos de infestação",
        "Aplicação de produtos específicos e seguros",
        "Vedação de possíveis entradas",
        "Orientações preventivas personalizadas",
      ],
      duration: "2-4 horas dependendo do tamanho do imóvel",
      warranty: "6 meses com retorno gratuito se necessário",
      preparation:
        "Remover alimentos expostos e facilitar acesso aos ambientes",
    },
  },
  {
    icon: Building,
    title: "Dedetização Comercial",
    description:
      "Soluções para estabelecimentos comerciais e industriais com foco na prevenção.",
    features: [
      "Certificado para vigilância sanitária",
      "Cronograma personalizado",
      "Relatórios técnicos",
    ],
    detailedInfo: {
      problem:
        "Seu estabelecimento precisa estar em conformidade com a vigilância sanitária?",
      solution:
        "Oferecemos serviços especializados para comércio e indústria, com toda documentação necessária e cronograma flexível.",
      process: [
        "Avaliação técnica do ambiente",
        "Cronograma personalizado para não atrapalhar operação",
        "Aplicação com produtos registrados ANVISA",
        "Emissão de certificados e relatórios técnicos",
      ],
      duration: "Varia conforme o estabelecimento (2-8 horas)",
      warranty: "Contrato anual com visitas programadas",
      preparation: "Coordenação prévia com equipe para melhor horário",
    },
  },
  {
    icon: MousePointer,
    title: "Controle de Roedores",
    description:
      "Eliminação e prevenção de ratos e camundongos com métodos seguros.",
    features: [
      "Iscas seguras",
      "Vedação de pontos de entrada",
      "Monitoramento contínuo",
    ],
    detailedInfo: {
      problem:
        "Ratos ou camundongos estão causando transtornos e riscos sanitários?",
      solution:
        "Sistema completo de controle com iscas seguras, vedação de entradas e monitoramento contínuo para eliminar a infestação definitivamente.",
      process: [
        "Inspeção completa para identificar rotas e ninhos",
        "Instalação estratégica de iscas seguras",
        "Vedação de pontos de entrada",
        "Monitoramento e reposição periódica das iscas",
      ],
      duration: "3-5 horas para instalação inicial",
      warranty: "3 meses com monitoramento incluído",
      preparation:
        "Limpar áreas de acesso e remover possíveis fontes de alimento",
    },
  },
  {
    icon: TreePine,
    title: "Descupinização",
    description: "Tratamento especializado para cupins de solo e madeira seca.",
    features: [
      "Diagnóstico completo",
      "Tratamento localizado",
      "Prevenção de reinfestação",
    ],
    detailedInfo: {
      problem: "Descobriu cupins atacando a estrutura da sua casa ou móveis?",
      solution:
        "Tratamento especializado diferenciado para cupins de solo e madeira seca, com técnicas específicas para cada tipo de infestação.",
      process: [
        "Diagnóstico completo do tipo de cupim e extensão",
        "Tratamento localizado nas áreas afetadas",
        "Aplicação preventiva em estruturas vulneráveis",
        "Acompanhamento pós-tratamento para garantia",
      ],
      duration: "4-8 horas dependendo da infestação",
      warranty: "12 meses com vistoria inclusa",
      preparation: "Facilitar acesso a sótãos, porões e áreas estruturais",
    },
  },
  {
    icon: Bird,
    title: "Controle de Pombos",
    description:
      "Instalação de barreiras e sistemas de repelência para pombos urbanos.",
    features: [
      "Métodos humanitários",
      "Instalação profissional",
      "Manutenção incluída",
    ],
    detailedInfo: {
      problem: "Pombos estão causando sujeira e danos na sua propriedade?",
      solution:
        "Instalamos sistemas de barreiras físicas e repelência que afastam os pombos sem prejudicá-los, seguindo métodos humanitários.",
      process: [
        "Avaliação dos pontos de pouso e nidificação",
        "Instalação de telas, espículas ou fios",
        "Limpeza e desinfecção das áreas afetadas",
        "Manutenção periódica do sistema instalado",
      ],
      duration: "2-6 horas conforme a complexidade",
      warranty: "12 meses para o sistema instalado",
      preparation:
        "Acesso seguro aos locais de instalação (telhados, marquises)",
    },
  },
  {
    icon: Bug,
    title: "Controle de Insetos",
    description:
      "Eliminação de pulgas, carrapatos, percevejos e outros insetos.",
    features: [
      "Tratamento específico",
      "Produtos registrados",
      "Aplicação segura",
    ],
    detailedInfo: {
      problem:
        "Pulgas, carrapatos, percevejos ou outros insetos estão incomodando?",
      solution:
        "Tratamento específico para cada tipo de inseto, usando produtos registrados e técnicas seguras para eliminação completa.",
      process: [
        "Identificação precisa do tipo de inseto",
        "Aplicação direcionada com produtos específicos",
        "Tratamento de possíveis focos de reprodução",
        "Orientações para prevenção de reinfestação",
      ],
      duration: "1-3 horas dependendo da área",
      warranty: "3-6 meses conforme o tipo de praga",
      preparation: "Aspirar carpetes e facilitar acesso aos ambientes",
    },
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços Especializados
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Oferecemos soluções completas em controle de pragas com tecnologia
            avançada e produtos registrados pela ANVISA.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent cursor-pointer"
                    >
                      Saiba Mais
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <service.icon className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <DialogTitle className="text-2xl">
                            {service.title}
                          </DialogTitle>
                          <DialogDescription className="text-base mt-1">
                            {service.description}
                          </DialogDescription>
                        </div>
                      </div>
                    </DialogHeader>

                    <div className="space-y-6">
                      {/* Problema */}
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                          <Shield className="h-5 w-5 text-orange-500" />
                          Situação Problema
                        </h4>
                        <p className="text-muted-foreground">
                          {service.detailedInfo.problem}
                        </p>
                      </div>

                      {/* Solução */}
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          Nossa Solução
                        </h4>
                        <p className="text-muted-foreground">
                          {service.detailedInfo.solution}
                        </p>
                      </div>

                      {/* Processo */}
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-foreground">
                          Processo de Trabalho
                        </h4>
                        <ul className="space-y-2">
                          {service.detailedInfo.process.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs text-primary font-semibold mt-0.5">
                                {idx + 1}
                              </div>
                              <span className="text-muted-foreground">
                                {step}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Informações Técnicas */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h5 className="font-semibold text-foreground flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            Duração
                          </h5>
                          <p className="text-sm text-muted-foreground">
                            {service.detailedInfo.duration}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-semibold text-foreground flex items-center gap-2">
                            <Shield className="h-4 w-4" />
                            Garantia
                          </h5>
                          <p className="text-sm text-muted-foreground">
                            {service.detailedInfo.warranty}
                          </p>
                        </div>
                      </div>

                      {/* Preparação */}
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-foreground">
                          Preparação Necessária
                        </h4>
                        <p className="text-muted-foreground">
                          {service.detailedInfo.preparation}
                        </p>
                      </div>

                      {/* CTA WhatsApp */}
                      <div className="pt-4 border-t">
                        <a
                          href="https://wa.me/5511940636383?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20controle%20de%20pragas.%20Podem%20me%20ajudar%20com%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20ECOMIP%3F"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full cursor-pointer"
                        >
                          <Button
                            size="lg"
                            className="w-full bg-green-600 hover:bg-green-700 text-white cursor-pointer"
                          >
                            <Phone className="h-5 w-5 mr-2" />
                            Solicitar Orçamento via WhatsApp
                          </Button>
                        </a>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
