import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from 'next/font/google';
import { Bebas_Neue } from 'next/font/google';
import { Chelsea_Market } from 'next/font/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Custom CSS variable
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  weight: '400', // Only one weight available
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const chelseaMarket = Chelsea_Market({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-chelsea',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mussaraf Portfolio",
  description: "Mussaraf Portfolio Website",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bebasNeue.variable} ${chelseaMarket.variable} antialiased`}
        
      >
        {children}
      </body>
    </html>
  );
}
