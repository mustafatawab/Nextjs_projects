import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: "Trustpilot ",
  description: "TrustPilot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body className="overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>

  );
}
