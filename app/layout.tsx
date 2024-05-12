import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "./ModalProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "zkliquid.ai",
  description: "zkliquid.ai- the perfect finance dapp",
  keywords: ["finance", "dapp", "blockchain"],
  authors: {
    name: "Mukesh",
    url: "github.com/mukeshkuiry",
  },
  category: "dapp",
  twitter: {
    card: "summary",
    site: "@zkliquid.ai",
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
        <ModalProvider>
          <div className="bg-black overflow-x-hidden">{children}</div>
        </ModalProvider>
      </body>
    </html>
  );
}
