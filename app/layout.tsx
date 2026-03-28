import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pinnacle Web Service | Professional Websites for Local Businesses",
  description:
    "Pinnacle Web Service builds professional, modern websites for local businesses — fast, affordable, and built to grow. Get a free quote today.",
  keywords: ["web design", "web development", "local business websites", "affordable web design"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
