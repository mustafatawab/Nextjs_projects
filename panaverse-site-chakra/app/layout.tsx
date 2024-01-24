"use client"
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import ChevronRightIcon from '@chakra-ui/icon'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
