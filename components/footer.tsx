import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">ECOMIP</h3>
            <p className="text-muted-foreground text-pretty">
              Controle de pragas com padrão de excelência e métodos modernos.
              Soluções seguras para sua tranquilidade.
            </p>
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Serviços</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Dedetização Residencial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Dedetização Comercial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Controle de Roedores
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Descupinização
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Controle de Pombos
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              Links Úteis
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href="#inicio"
                  className="hover:text-primary transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="hover:text-primary transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="hover:text-primary transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="hover:text-primary transition-colors"
                >
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Orçamento Grátis
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>(11) 94063-6383</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contato@ecomip.com.br</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Grande São Paulo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Ecomip. Todos os direitos reservados.
            </p>
            {/* <div className="flex gap-6 text-sm text-muted-foreground">
              <span>Licenciado pela ANVISA</span>
              <span>CRQ (Conselho Regional de Química): 123456789</span>
              <span>Responsável Técnico: João Silva</span>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
