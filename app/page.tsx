/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Benifits from "@/components/Benifits";
import Protocols from "@/components/Protocols";
import Strategy from "@/components/Strategy";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulating 3 seconds delay before hiding the loader
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading)
    return (
      <div
        className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white z-50 ${
          isLoading ? "" : "hidden"
        }`}
      >
        {/* Replace 'logo.png' with the path to your logo image */}
        <img src="/logo.png" alt="Logo" className="w-32 h-32" />
      </div>
    );
  return (
    <div>
      <Navbar />
      <div className={`px-10 md:px-16 lg:px-32 ${isLoading ? "hidden" : ""}`}>
        {/* Hide content until loading is finished */}
        <Hero />
        <About />
        <Benifits />
        <Protocols />
        <Strategy />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
