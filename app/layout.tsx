import type { Metadata } from "next";
import { Inter, Fraunces, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Caribbean Investment Holdings",
    template: "%s — Caribbean Investment Holdings",
  },
  description:
    "A holding company building durable real assets across the Caribbean. Tokenized access for accredited investors via TierraDex.",
  metadataBase: new URL("https://caribbeaninvestmentholdings.com"),
  openGraph: {
    title: "Caribbean Investment Holdings",
    description:
      "Durable real assets across the Caribbean. Tokenized access for accredited investors via TierraDex.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${fraunces.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-paper-foreground">
        {children}
      </body>
    </html>
  );
}
