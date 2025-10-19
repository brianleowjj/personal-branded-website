import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Brian's Backend Portfolio", // Use a better title than the default
  description: "Backend development portfolio showcasing API, Security, and Concurrency skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* 1. Navbar is placed first, making it sit above all page content */}
        <Navbar />

        {/* 2. The 'main' tag can be used to contain the page-specific content */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
