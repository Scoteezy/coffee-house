import type { Metadata } from "next";

import React from "react";

import Header from "@/components/shared/Header";

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
    <div className="flex h-screen wrapper">
      <Header />
      <section>{children}</section>
    </div>
  );
}
