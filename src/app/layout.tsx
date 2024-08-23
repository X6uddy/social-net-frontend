import type { Metadata, Viewport } from "next"; //TODO исправить импорт
import { Inter } from "next/font/google";

import LayoutClient from "@/components/layout/Layout";

import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social-net Xbuddy",
  description: "My first social-net",
  icons: '/logo.svg',
  // для SEO нужно указать openGraph, twitter, robots, verification
};

export const viewport: Viewport = {
  themeColor: '#0E0B18',
  colorScheme: 'dark'
} // новая фишка некста, теперь viewport указываается отдельно

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}