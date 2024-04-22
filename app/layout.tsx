import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";

export const metadata: Metadata = {
  title: "Coding",
  description: "Landing Page Demo",
};

function App () {


  return (
    <html lang="en">
      <body className="bg-colorBG-50">
        <Navbar/>
        <Hero/>
        <Camp/>
        <Guide/>
        <Features/>
        <GetApp/>
        <Footer />
      </body>
    </html>
  );
}

export default App
