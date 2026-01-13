import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar/NavBar";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/providers/Providers";
import { auth } from "@/lib/auth";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Byte-Store",
  description:
    "A modern ecommerce platform built with Next.js and Tailwind CSS",
};

async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-black-three text-white-one antialiased overflow-x-hidden border-4 border-green-800 gap-1`}
      >
        <Providers session={session}>
          <Navbar />
          <main className="grow w-full max-w-[1440px] mx-auto">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
