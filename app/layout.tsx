import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ECOMIP - Controle de Pragas e Dedetização em São Paulo",
  description:
    "Soluções profissionais em controle de pragas com garantia de resultado. Dedetização residencial e comercial na Grande São Paulo. Atendimento especializado!",
  keywords: [
    "dedetização",
    "controle de pragas",
    "dedetização São Paulo",
    "dedetização residencial",
    "dedetização comercial",
    "controle de roedores",
    "descupinização",
    "controle de pombos",
    "dedetização Grande São Paulo",
    "controle de baratas",
    "controle de formigas",
    "dedetização emergência",
    "ECOMIP",
  ],
  authors: [{ name: "ECOMIP - Controle de Pragas" }],
  creator: "ECOMIP",
  publisher: "ECOMIP",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ecomip.com.br",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ecomip.com.br",
    title: "ECOMIP - Controle de Pragas e Dedetização em São Paulo",
    description:
      "Soluções profissionais em controle de pragas com garantia de resultado. Dedetização residencial e comercial na Grande São Paulo. Atendimento especializado!",
    siteName: "ECOMIP - Controle de Pragas",
    images: [
      {
        url: "/logoEcomip.png",
        width: 1200,
        height: 630,
        alt: "ECOMIP - Controle de Pragas e Dedetização",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ECOMIP - Controle de Pragas e Dedetização em São Paulo",
    description:
      "Soluções profissionais em controle de pragas com garantia de resultado. Dedetização residencial e comercial na Grande São Paulo.",
    images: ["/logoEcomip.png"],
  },
  icons: {
    icon: "/faviconEcomip2.png",
    shortcut: "/faviconEcomip2.png",
    apple: "/faviconEcomip2.png",
  },
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "São Paulo",
    "geo.position": "-23.56643;-46.66102",
    ICBM: "-23.56643, -46.66102",
    "business:contact_data:street_address": "Rua Tatuí, 40",
    "business:contact_data:locality": "São Paulo",
    "business:contact_data:postal_code": "01409-010",
    "business:contact_data:region": "SP",
    "business:contact_data:country_name": "Brasil",
    "business:contact_data:phone_number": "+5511947559196",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ecomip Controle de Pragas",
    description:
      "Soluções profissionais em controle de pragas com garantia de resultado. Dedetização residencial e comercial na Grande São Paulo.",
    image: "https://ecomip.com.br/logoEcomip.png",
    url: "https://ecomip.com.br",
    telephone: "+55-11-94755-9196",
    email: "contato@ecomip.com.br",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Tatuí, 40",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "01409-010",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -23.56643,
      longitude: -46.66102,
    },
    areaServed: [
      {
        "@type": "City",
        name: "São Paulo",
      },
      {
        "@type": "State",
        name: "Grande São Paulo",
      },
      {
        "@type": "State",
        name: "Litoral de São Paulo",
      },
    ],
    serviceType: [
      "Dedetização Residencial",
      "Dedetização Comercial",
      "Controle de Roedores",
      "Descupinização",
      "Controle de Pombos",
      "Controle de Insetos",
    ],
    priceRange: "$$",
    openingHours: "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
    availableLanguage: "Portuguese",
    paymentAccepted: ["Cash", "Credit Card", "Debit Card", "Bank transfer"],
    currenciesAccepted: "BRL",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Controle de Pragas",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dedetização Residencial",
            description:
              "Controle eficaz de baratas, formigas, mosquitos e aranhas em residências com produtos seguros para família.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dedetização Comercial",
            description:
              "Soluções para estabelecimentos comerciais e industriais com certificados e relatórios técnicos.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Controle de Roedores",
            description:
              "Desratização profissional com técnicas seguras e produtos homologados pela ANVISA.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Descupinização",
            description:
              "Tratamento completo contra cupins de solo e madeira seca com garantia estendida.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Controle de Pombos",
            description:
              "Instalação de barreiras físicas e repelentes para afastamento definitivo de pombos.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Controle de Baratas",
            description:
              "Eliminação completa de infestações de baratas com produtos de última geração.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Controle de Formigas",
            description:
              "Tratamento especializado para todos os tipos de formigas urbanas.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dedetização de Emergência",
            description:
              "Atendimento imediato 24 horas para situações urgentes de infestação.",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quanto tempo dura o efeito da dedetização?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O efeito da dedetização dura em média de 3 a 6 meses, dependendo do tipo de praga, do ambiente e dos cuidados de manutenção. Oferecemos garantia de 90 dias para todos os nossos serviços residenciais.",
        },
      },
      {
        "@type": "Question",
        name: "A dedetização é segura para crianças e animais de estimação?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim! Utilizamos produtos homologados pela ANVISA e seguros para humanos e pets. Recomendamos aguardar 4 horas após a aplicação para retornar ao ambiente, tempo necessário para a secagem completa dos produtos.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto custa uma dedetização em São Paulo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O valor varia conforme o tamanho do imóvel e tipo de infestação. Entre em contato pelo WhatsApp (11) 94755-9196 para receber um orçamento gratuito e personalizado em até 2 horas.",
        },
      },
      {
        "@type": "Question",
        name: "Preciso sair de casa durante a dedetização?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Durante a aplicação, sim. O procedimento leva em média 1 a 2 horas e recomendamos que moradores e pets aguardem 4 horas antes de retornar ao ambiente tratado.",
        },
      },
      {
        "@type": "Question",
        name: "A ECOMIP atende em quais regiões?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Atendemos toda a Grande São Paulo, incluindo capital e região metropolitana, além do litoral de São Paulo. Oferecemos atendimento de emergência 24 horas.",
        },
      },
      {
        "@type": "Question",
        name: "Vocês fornecem certificado de dedetização?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim! Emitimos certificado técnico e relatório detalhado do serviço realizado, essencial para empresas e condomínios que precisam comprovar o controle de pragas perante à Vigilância Sanitária.",
        },
      },
    ],
  };

  return (
    <html lang="pt-BR">
      <head>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17668399297"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-17668399297');
        </script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#10b981" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
