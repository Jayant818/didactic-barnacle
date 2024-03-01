import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "UrbanDoor",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-[#000]`}>
				<Navbar />
				<main className="text-white w-full min-h-[73vh]">{children}</main>
				{/* <Toaster /> */}
				<Footer />
			</body>
		</html>
	);
}
