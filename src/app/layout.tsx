import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { DM_Serif_Display } from "next/font/google";

import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Casa Nina Carignano | Appartamento a Genova",
  description:
    "Un appartamento spazioso e accogliente nel quartiere Carignano di Genova. Perfetto per famiglie, coppie e viaggiatori. Prenota direttamente al miglior prezzo.",
  openGraph: {
    title: "Casa Nina Carignano",
    description:
      "Un appartamento spazioso nel cuore di Genova | per famiglie, coppie e viaggiatori di ogni tipo. Prenota direttamente.",
    type: "website",
    url: "https://casaninacarignano.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Casa Nina Carignano",
  description:
    "Appartamento raffinato nel quartiere Carignano di Genova, con soffitti alti, pavimenti in rovere e design curato.",
  url: "https://casaninaa.vercel.app",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Quartiere Carignano",
    addressLocality: "Genova",
    postalCode: "16128",
    addressRegion: "Liguria",
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.4056,
    longitude: 8.9445,
  },
  priceRange: "€€",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Air conditioning", value: true },
    { "@type": "LocationFeatureSpecification", name: "Kitchen", value: true },
    { "@type": "LocationFeatureSpecification", name: "Smart lock", value: true },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        {/* Preconnect to video/image CDNs so the hero loads faster */}
        <link rel="preconnect" href="https://videos.pexels.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://upload.wikimedia.org" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${dmSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
