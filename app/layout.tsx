import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neoalpha",
  description: "Neoalpha- the perfect finance dapp",
  keywords: ["finance", "dapp", "blockchain"],
  authors: {
    name: "Mukesh",
    url: "github.com/mukeshkuiry",
  },
  category: "dapp",
  twitter: {
    card: "summary",
    site: "@neoalpha",
    creator: "@mukeshkuiry7",
  },
  // Add more metadata properties here
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-black">{children}</div>
      </body>
    </html>
  );
}
