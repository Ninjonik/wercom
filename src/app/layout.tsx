import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/shell/site-header";
import { SiteFooter } from "@/components/shell/site-footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Wercom — Roblox Marketplace Template",
    template: "%s — Wercom",
  },
  description:
    "A sleek, modern marketplace template for Roblox creators: trains, tracks, signals, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh bg-white text-zinc-950 antialiased dark:bg-black dark:text-zinc-50`}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
        <Toaster richColors />
      </body>
    </html>
  );
}
