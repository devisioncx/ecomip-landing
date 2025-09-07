"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logoEcomip.png"
              alt="ECOMIP - Manejo Integrado de Pragas"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#inicio"
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </a>
            <a
              href="#servicos"
              className="text-foreground hover:text-primary transition-colors"
            >
              Serviços
            </a>
            <a
              href="#sobre"
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </a>
            <a
              href="#contato"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Phone className="h-4 w-4 mr-2" />
              <span>(11) 9999-9999</span>
            </div>
            <a href="#contato">
              <Button className="bg-primary hover:bg-primary/90">
                ORÇAMENTO GRÁTIS
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              <a
                href="#inicio"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a
                href="#servicos"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#sobre"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#contato"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <div className="flex items-center text-sm text-muted-foreground pt-2">
                <Phone className="h-4 w-4 mr-2" />
                <span>(11) 9999-9999</span>
              </div>
              <a href="#contato" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-primary hover:bg-primary/90 w-full">
                  ORÇAMENTO GRÁTIS
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
