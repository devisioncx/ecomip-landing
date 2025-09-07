import { Button } from "@/components/ui/button"
import { Phone, Clock, AlertTriangle } from "lucide-react"

export function EmergencySection() {
  return (
    <section className="py-16 bg-destructive/5 border-y border-destructive/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="p-4 bg-destructive/10 rounded-full">
              <AlertTriangle className="h-12 w-12 text-destructive" />
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">ATENDIMENTO DE EMERGÊNCIA 24H</h2>
            <p className="text-xl text-muted-foreground">Infestação grave? Não deixe o problema piorar!</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <Phone className="h-6 w-6 text-primary" />
              <span>(11) 9999-9999</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Disponível 24 horas por dia</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-lg px-8">
              <Phone className="h-5 w-5 mr-2" />
              LIGUE AGORA
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
