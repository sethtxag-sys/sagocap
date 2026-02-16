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
  title: "Sago Capital | Commercial Real Estate & Investment",
  description:
    "Sago is a fully integrated commercial real estate and investment firm specializing in acquisitions, development, brokerage, and management. $80M+ in transactions. 30.9% avg net IRR.",
  keywords: [
    "commercial real estate",
    "real estate investment",
    "CRE",
    "industrial real estate",
    "sale-leaseback",
    "Sago Capital",
    "Texas real estate",
  ],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Sago Capital | Commercial Real Estate & Investment",
    description:
      "A fully integrated CRE firm delivering 30.9% avg net IRR for investors across industrial and office assets.",
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
