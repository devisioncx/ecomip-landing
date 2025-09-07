"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pestType: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Solicite Seu Orçamento Gratuito</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Entre em contato conosco e receba uma proposta personalizada sem compromisso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Formulário de Contato</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Nome Completo *</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Telefone *</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">E-mail</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Tipo de Praga *</label>
                  <Select onValueChange={(value) => handleInputChange("pestType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo de praga" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="baratas">Baratas</SelectItem>
                      <SelectItem value="formigas">Formigas</SelectItem>
                      <SelectItem value="ratos">Ratos/Camundongos</SelectItem>
                      <SelectItem value="cupins">Cupins</SelectItem>
                      <SelectItem value="pombos">Pombos</SelectItem>
                      <SelectItem value="mosquitos">Mosquitos</SelectItem>
                      <SelectItem value="outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Descrição do Problema</label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Descreva o problema com detalhes..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  SOLICITAR ORÇAMENTO GRÁTIS
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">(11) 9999-9999</p>
                      <p className="text-sm text-muted-foreground">WhatsApp e Ligações</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">contato@ecomip.com.br</p>
                      <p className="text-sm text-muted-foreground">E-mail para orçamentos</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Grande São Paulo</p>
                      <p className="text-sm text-muted-foreground">Atendemos toda região metropolitana</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">24 horas por dia</p>
                      <p className="text-sm text-muted-foreground">Atendimento de emergência</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">Precisa de Atendimento Urgente?</h3>
                <p className="mb-6">Ligue agora e receba atendimento imediato para casos de emergência.</p>
                <Button size="lg" variant="secondary" className="w-full">
                  <Phone className="h-5 w-5 mr-2" />
                  LIGAR AGORA: (11) 9999-9999
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
