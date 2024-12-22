'use client';


import Link from "next/link";
import { FaUser, FaSearch, FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";
import { useState } from "react";

interface Props {
  className?: string;
}

export default function Navbar({ className }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Matches server render


  return (
    <header className={`shadow-md w-full ${className}`}>
      <nav className="container mx-auto px-4 py-4 flex justify-around items-center">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <FaBars size={20} />
          </button>
        </div>
       

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-[60px] left-0 w-full bg-white z-10 p-4 md:relative md:top-0 md:flex md:w-auto md:space-x-6 md:bg-transparent md:p-0 md:items-center md:flex-row text-gray-700 `}
        >
          <li className="py-2 md:py-0  md:ml-[210px] ">
            <Link href="/" className="hover:text-gray-900 block md:inline ">
              Home
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link href="/shop" className="hover:text-gray-900 block md:inline">
              Shop
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link href="/my-account" className="hover:text-gray-900 block md:inline">
              About
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link href="/Contact" className="hover:text-gray-900 block md:inline">
              Contact
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-9">
          <FaUser className="cursor-pointer text-gray-700 hover:text-gray-900" />
          <FaSearch className="cursor-pointer text-gray-700 hover:text-gray-900" />
          <FaHeart className="cursor-pointer text-gray-700 hover:text-gray-900" />
          <Link href="/productcard">
            <FaShoppingCart className="cursor-pointer text-gray-700 hover:text-gray-900" />
          </Link>
        </div>
      </nav>
    </header>
    
  );
}
