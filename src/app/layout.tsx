import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casa Nina Carignano — Premium Apartment in Genoa",
  description:
    "A refined apartment in Genoa's most elegant quarter. Designed for digital nomads and web3 professionals who need deep focus and high-end comfort.",
  openGraph: {
    title: "Casa Nina Carignano — Premium Apartment in Genoa",
    description:
      "A refined apartment in Genoa's most elegant quarter. High-speed fiber, dedicated workspace, and effortless Italian living.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
