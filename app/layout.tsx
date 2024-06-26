import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import SectionBasic from "@/components/SectionBasic";

export const metadata: Metadata = {
  title: "Coding",
  description: "Landing Page Demo",
};

function App () {
  return (
    <html lang="en">
      <link rel="icon" type="image/x-icon" href="/Landing-page-demo/logo.png" />
      <body className="bg-colorBG-50">
        <Navbar/>
        <Hero/>
        <Slider/>
        <SectionBasic/>
        <Features/>
        <GetApp/>
        <Footer />
      </body>
    </html>
  );
}
export default App
