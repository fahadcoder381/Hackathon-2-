'use client';
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const PageLayout = () => {
  return (
    <div className="bg-white py-2 px-4 md:px-16 mb-4">
      {/* Breadcrumb Section */}
      <nav className="flex flex-wrap items-center gap-2 text-sm md:text-base">
        <a href="/" className="text-[#9F9F9F] transition-colors hover:text-black">
          Home
        </a>
        <span className="text-black">
          <IoIosArrowForward />
        </span>
        <a href="/shop" className="text-[#9F9F9F] transition-colors hover:text-black">
          Shop
        </a>
        <span className="text-black">
          <IoIosArrowForward />
        </span>
        <span className="text-black">Asgaard sofa</span>
      </nav>
    </div>
  );
};

export default PageLayout;
