import type { Metadata } from "next";
import { Oxygen } from "next/font/google";

const oxygen = Oxygen({
	weight: ["300", "400"],
	variable: "--font-oxygen",
	subsets: ["latin"]
})

export const metadata: Metadata = {
	title: "My Projects",
	description: "rclaytondev's programming projects.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${oxygen.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
