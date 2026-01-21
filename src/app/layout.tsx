import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wasim Akram - Developer Portfolio",
  description: "Portfolio website of Wasim Akram, a passionate developer specializing in web development and software engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en">
			<body
				className={`bg-white transition-colors dark:bg-black dark:text-white ${geistSans.variable} ${geistMono.variable}`}
			>
				<ThemeProvider>
					<div className="flex flex-col space-y-16 ">
						<Navbar />
						<main className="min-h-screen pt-24">{children}</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
  );
}
