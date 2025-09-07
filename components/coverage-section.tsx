import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Truck } from "lucide-react"

const cities = [
  "São Paulo",
  "Guarulhos",
  "Osasco",
  "Santo André",
  "São Bernardo do Campo",
  "São Caetano do Sul",
  "Diadema",
  "Mauá",
  "Ribeirão Pires",
  "Rio Grande da Serra",
  "Taboão da Serra",
  "Embu das Artes",
  "Cotia",
  "Barueri",
  "Carapicuíba",
]

export function CoverageSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Área de Atuação</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Atendemos toda a Grande São Paulo com equipes especializadas e equipamentos modernos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="bg-card">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Cidades Atendidas</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {cities.map((city, index) => (
                  <div key={index} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    <span className="text-sm">{city}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Atendimento Rápido</p>
                    <p className="text-sm text-muted-foreground">Chegamos ao local em até 2 horas para emergências</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="relative">
            <img
              src="/map-of-s-o-paulo-metropolitan-area-showing-service.jpg"
              alt="Mapa da área de cobertura da Ecomip"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
