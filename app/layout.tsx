import type { Metadata } from "next";
import { Passion_One } from "next/font/google";
import { RocknRoll_One } from "next/font/google";
import "./globals.css";

const passion = Passion_One({
	weight: ["400", "700"],
	style: ["normal"],
	subsets: ["latin"],
	display: "swap",
});

const rocknroll = RocknRoll_One({
	weight: ["400"],
	style: ["normal"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Quiet PePe",
	description: " Your Q",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={rocknroll.className}>
				<link rel="icon" href="/logo.jpg" sizes="any" />
				{children}
			</body>
		</html>
	);
}
