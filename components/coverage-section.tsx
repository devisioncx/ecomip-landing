import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Truck } from "lucide-react";

const regions = ["São Paulo", "Grande São Paulo", "Litoral de São Paulo"];

export function CoverageSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Área de Atuação
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Atendemos São Paulo, Grande São Paulo e Litoral com equipes
            especializadas e equipamentos modernos.
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="bg-card max-w-md w-full">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Regiões Atendidas
                </h3>
              </div>

              <div className="space-y-4">
                {regions.map((region, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-lg font-medium">{region}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">
                      Atendimento Ágil
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Priorizamos emergências com atendimento rápido
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
