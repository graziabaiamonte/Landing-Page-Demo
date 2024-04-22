import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* The line `const inter = Inter({ subsets: ["latin"] });` is creating a new instance of the `Inter`
font from the Google Fonts API with the subset specified as "latin". This font instance can then be
used in the project for styling text elements with the specified font subset. */
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coding",
  description: "Landing Page Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-colorBG-50">
        <Navbar/>
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
