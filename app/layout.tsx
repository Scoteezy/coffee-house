import type { Metadata } from "next";

import React from "react";

import { Merienda } from "next/font/google";

import "./globals.css";
const merienda = Merienda({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coffee house",
  description:
    "We makes every day full of energy and taste. Best coffee shop in the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={merienda.className}>{children}</body>
    </html>
  );
}
