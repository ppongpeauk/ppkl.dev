"use client"; // The entire project is client-sided...

// React
import React from "react";

// Chakra UI Integration
import Providers from "./providers";

// Font
import { Familjen_Grotesk } from "next/font/google";
const font = Familjen_Grotesk({ display: "swap", subsets: ['latin'] })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Pete Pongpeauk</title>
      </head>
      <body>
        <style jsx global>{`
          :root {
            --main-font: 'Familjen Grotesk', sans-serif;
          }
          @font-face {
            font-family: 'Familjen Grotesk';
            src: url(${font}) format('woff2');
          }
          body {
            font-family: var(--main-font);
          }
        `}</style>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
