import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/ui/Navbar";
import Footer from "@/ui/Footer";


export const metadata: Metadata = {
  title: "Mal Blogs",
  description: "Mal Blogs App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" space-y-5 ">
          <Navbar />
        {children}
          <Footer />
        </body>
    </html>
  );
}
