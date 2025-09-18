import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo - SP",
    rating: 5,
    text: "Excelente serviço! Acabaram com o problema de baratas na minha cozinha. Profissionais muito educados e pontuais. Recomendo!",
  },
  {
    name: "João Santos",
    location: "Guarulhos - SP",
    text: "Tive problema com ratos no meu restaurante. A Ecomip resolveu rapidamente e me ajudou com toda documentação para a vigilância sanitária.",
  },
  {
    name: "Ana Costa",
    location: "Santo André - SP",
    rating: 5,
    text: "Atendimento 24h funcionou mesmo! Liguei de madrugada por causa de uma infestação e eles vieram no mesmo dia. Muito profissionais.",
  },
];

const certifications = [
  {
    name: "ANVISA",
    description: "Licenciado pela Agência Nacional de Vigilância Sanitária",
  },
  {
    name: "CRQ",
    description:
      "Responsável técnico registrado no Conselho Regional de Química",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Clientes satisfeitos confiam na qualidade dos nossos serviços e na
            eficácia das nossas soluções em controle de pragas.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Quote className="h-8 w-8 text-primary/30" />
                  <p className="text-muted-foreground text-pretty">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                    {testimonial.rating && (
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-card text-center">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-primary">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.description}
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
