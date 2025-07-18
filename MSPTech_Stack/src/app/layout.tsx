import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/footer";
import logo from '@/assets/svgs/logo.svg'

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MSPTech Stack",
  description: "Microsoft service provider tech stack company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#F9F9F9] sm:w-auto md:w-fit lg:w-full">
        <div className="w-auto">
          {/* <Navbar /> */}
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
