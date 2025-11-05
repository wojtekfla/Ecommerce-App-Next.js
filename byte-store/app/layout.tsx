import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"

const inter = Inter({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Byte-Store",
	description:
		"A modern ecommerce platform built with Next.js and Tailwind CSS",
};

// <html lang="en" suppressHydrationWarning></html>

function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`flex flex-col items-center antialiased`}>
				{children}
			</body>
		</html>
	);
}

export default RootLayout;
