import type { Metadata } from "next";
import { Inter, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sago Capital | Texas Triangle CRE Investment",
  description:
    "Sago Capital acquires industrial and office assets below replacement cost across the Texas Triangle and beyond. $80M+ transaction volume. 30.9% realized net IRR.",
  keywords: [
    "commercial real estate investment",
    "Texas Triangle CRE",
    "industrial real estate",
    "office investment",
    "value-add real estate",
    "sale-leaseback",
    "Sago Capital",
    "Texas commercial real estate",
    "off-market acquisitions",
  ],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Sago Capital | Texas Triangle CRE Investment",
    description:
      "Acquiring industrial and office assets below replacement cost. $80M+ transaction volume. 30.9% realized net IRR across the Texas Triangle and beyond.",
    url: "https://www.sagocap.com",
    siteName: "Sago Capital",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${nunito.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
