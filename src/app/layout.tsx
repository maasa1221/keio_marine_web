import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "慶應義塾体育会ヨット部 | KEIO UNIVERSITY MARINE YACHT CLUB",
  description:
    "慶應義塾体育会ヨット部の公式ウェブサイト。1951年の設立以来、ヨット、ウインドサーフィン、SUPの活動を通じて、マリンスポーツの発展に貢献しています。",
  keywords:
    "慶應義塾, ヨット部, マリンスポーツ, ヨット, ウインドサーフィン, SUP, 江ノ島",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
