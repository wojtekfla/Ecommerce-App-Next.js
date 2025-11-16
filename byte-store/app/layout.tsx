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
        className={`${inter.className} flex flex-col min-h-screen bg-[var(--color-black-three)] text-white-one antialiased overflow-x-hidden border-4 border-green-800 gap-1`}
      >
        <Navbar />
        {/* <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6"> */}
        <main className="flex-grow w-full max-w-[1440px] mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
