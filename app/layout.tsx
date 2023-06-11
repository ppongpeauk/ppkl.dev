"use client"; // The entire project is client-sided...

// React
import React from "react";

// Chakra UI Integration
import Providers from "./providers";

// Main Layout
import MainLayout from "@/components/layouts/MainLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title key="1">Pete Pongpeauk</title>
      </head>
      <body>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
