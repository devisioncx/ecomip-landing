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
    canonical: "https://ecomip-landing.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ecomip-landing.vercel.app",
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
    "geo.position": "-23.5505;-46.6333",
    ICBM: "-23.5505, -46.6333",
    "business:contact_data:locality": "São Paulo",
    "business:contact_data:region": "SP",
    "business:contact_data:country_name": "Brasil",
    "business:contact_data:phone_number": "+5511940636383",
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
    name: "ECOMIP - Controle de Pragas",
    description:
      "Soluções profissionais em controle de pragas com garantia de resultado. Dedetização residencial e comercial na Grande São Paulo.",
    image: "https://ecomip-landing.vercel.app/logoEcomip.png",
    url: "https://ecomip-landing.vercel.app",
    telephone: "+55-11-94063-6383",
    email: "contato@ecomip.com.br",
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -23.5505,
      longitude: -46.6333,
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
      ],
    },
  };

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
