"use client";

import Image from "next/image";
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
            <Image
              src="/logoEcomip.png"
              alt="ECOMIP - Manejo Integrado de Pragas"
              width={150}
              height={48}
              className="h-12 w-auto object-contain"
              priority
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
              <span>(11) 94755-9196</span>
            </div>
            <a
              href="https://wa.me/5511947559196?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20controle%20de%20pragas.%20Podem%20me%20ajudar%20com%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20ECOMIP%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Button className="bg-primary hover:bg-primary/90 cursor-pointer">
                SOLICITAR ORÇAMENTO
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
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
                <span>(11) 94755-9196</span>
              </div>
              <a
                href="https://wa.me/5511947559196?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20controle%20de%20pragas.%20Podem%20me%20ajudar%20com%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20ECOMIP%3F"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer"
              >
                <Button className="bg-primary hover:bg-primary/90 w-full cursor-pointer">
                  SOLICITAR ORÇAMENTO
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
