import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar/NavBar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Byte-Store",
  description:
    "A modern ecommerce platform built with Next.js and Tailwind CSS",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-[var(--color-black-one)] text-white-one antialiased overflow-x-hidden`}
      >
        <Navbar />
        <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
