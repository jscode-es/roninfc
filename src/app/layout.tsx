import type { Metadata } from "next";
import "./globals.css";

import { Lato, Oswald } from "next/font/google";

const oswald = Oswald({
	subsets: ["latin"],
	weight: ["400", "700"],
});

const lato = Lato({
	subsets: ["latin"],
	weight: ["400", "700"],
});

export const metadata: Metadata = {
	title: "Ronin FC - No official",
	description: "Equipo de fútbol amateur de la Primera Catalana",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${oswald.className} ${lato.className} antialiased bg-slate-950`}
			>
				{children}
			</body>
		</html>
	);
}
