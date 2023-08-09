"use client"; // The entire project is client-sided...

// React
import React from "react";

// Chakra UI Integration
import Providers from "./providers";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Pete Pongpeauk</title>
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
