import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
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
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-paper-foreground">
        {children}
      </body>
    </html>
  );
}
