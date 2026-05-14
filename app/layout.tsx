import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Valéa Agency | Agence Premium de Gestion de Profils",
  description:
    "Valéa Agency est une agence premium spécialisée dans la gestion et le développement de profils de créateurs de contenu. Maximisez vos revenus et votre audience avec notre accompagnement personnalisé.",
  keywords: [
    "agence créateurs",
    "gestion de profil",
    "influenceur",
    "créateur de contenu",
    "marketing digital",
    "développement audience",
    "agence premium",
    "Valéa Agency",
  ],
  authors: [{ name: "Valéa Agency" }],
  creator: "Valéa Agency",
  publisher: "Valéa Agency",
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
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://valeaagency.com",
    siteName: "Valéa Agency",
    title: "Valéa Agency | Agence Premium de Gestion de Profils",
    description:
      "Votre partenaire de confiance pour une carrière exceptionnelle. Gestion et développement de profils haut de gamme.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Valéa Agency - Agence Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valéa Agency | Agence Premium de Gestion de Profils",
    description:
      "Votre partenaire de confiance pour une carrière exceptionnelle. Gestion et développement de profils haut de gamme.",
    images: ["/og-image.jpg"],
    creator: "@valeaagency",
  },
  alternates: {
    canonical: "https://valeaagency.com",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Providers>
          {children}
        </Providers>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
