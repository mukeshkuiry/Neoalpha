"use client";
import { useState } from "react";
import Link from "next/link";
import { MenuOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center py-4 px-6 text-white">
      <Image
        onClick={() => router.push("/")}
        src={"/logo.png"}
        width={200}
        height={100}
        className="cursor-pointer invert"
        alt="Logo"
      />
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
          className="border border-blue-400 text-white py-2 px-4 rounded-md w-full lg:w-auto lg:ml-4"
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
