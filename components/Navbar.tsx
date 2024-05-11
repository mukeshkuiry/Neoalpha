"use client";
import { useState } from "react";
import Link from "next/link";
import { MenuOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center py-4 px-6 text-white">
      <h1 className="text-3xl font-bold">Neoalpha</h1>
      <div className="flex items-center mt-4 lg:mt-0 lg:ml-4">
        <div className="hidden lg:flex flex-col lg:flex-row lg:items-center lg:space-x-4">
          <Link href="/" passHref>
            <p className="text-lg hover:text-gray-300">Home</p>
          </Link>
          <Link href="/space-race" passHref>
            <p className="text-lg hover:text-gray-300">Space Race</p>
          </Link>
          <Link href="/more" passHref>
            <p className="text-lg hover:text-gray-300">More</p>
          </Link>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-sm ml-6"
          onClick={() => router.push("/app")}
        >
          Launch App
        </button>
        {/* Mobile Menu */}
        <div className="lg:hidden ml-4">
          <MenuOutlined
            className="text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
          {isMenuOpen && (
            <div className="absolute right-0 top-16 bg-gray-800 p-4 rounded-lg">
              <Link href="/" passHref>
                <p className="text-lg text-white hover:text-gray-300 mb-2">
                  Home
                </p>
              </Link>
              <Link href="/space-race" passHref>
                <p className="text-lg text-white hover:text-gray-300 mb-2">
                  Space Race
                </p>
              </Link>
              <Link href="/more" passHref>
                <p className="text-lg text-white hover:text-gray-300">More</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
