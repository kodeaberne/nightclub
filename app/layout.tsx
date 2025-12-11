import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navigation from "@/app/components/global/Navigation";
import Footer from "@/app/components/global/Footer";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Nightclub",
  description: "Eksamensprojekt 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${ubuntu.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}