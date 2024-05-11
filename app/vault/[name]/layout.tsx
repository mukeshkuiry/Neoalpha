import Navbar from "@/components/Dashboard/Navbar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-b from-[#f3e8ff] to-[#f4f6f9] px-10 text-black min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}
