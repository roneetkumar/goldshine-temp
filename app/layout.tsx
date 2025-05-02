import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gold Shine Cleaning | Professional Cleaning Services Halifax",
  description:
    "Experience the joy of professional cleaning services in Halifax, Nova Scotia. Schedule a hassle-free service today and let Gold Shine Cleaning restore your home's shine!",
  keywords: [
    "cleaning services",
    "house cleaning",
    "professional cleaning",
    "halifax cleaning services",
    "nova scotia cleaning company",
    "gold shine cleaning",
    "residential cleaning",
    "commercial cleaning",
    "maid service halifax",
    "eco-friendly cleaning",
  ],
  authors: [{ name: "Gold Shine Cleaning" }],
  creator: "Gold Shine Cleaning",
  publisher: "Gold Shine Cleaning",
  robots: "index, follow",
  metadataBase: new URL("https://goldshineclean.ca"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gold Shine Cleaning | Professional Cleaning Services Halifax",
    description:
      "Top-rated cleaning services in Halifax, Nova Scotia. Book your professional cleaning today!",
    url: "https://goldshineclean.ca",
    siteName: "Gold Shine Cleaning",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/images/fb-banner.png",
        width: 1200,
        height: 630,
        alt: "Gold Shine Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gold Shine Cleaning | Professional Cleaning Services Halifax",
    description:
      "Top-rated cleaning services in Halifax, Nova Scotia. Book your professional cleaning today!",
    images: ["/images/fb-banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  antialiased`}>{children}</body>
    </html>
  );
}
