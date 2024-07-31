import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import img from "./favicon.ico"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayush Vekaria",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
