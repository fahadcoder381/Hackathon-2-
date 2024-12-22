import Image from "next/image";
import Navbar from "../Navber/Nav";
import sofa from "../../../public/frsit.png";

import React from "react";

export default function HeroBanner() {
  return (
    <section className="bg-[#FBEBB5]  ">
      <div className="container mx-auto px-4 py-16 flex w-[80%] h-[80%] flex-col md:flex-row items-center">
        {/* Left Side: Content */}
        <div className=" md:w-1/2  md:text-left px-4">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6 text-black">
            Rocket Single <br />
            <span>Seater</span>
          </h1>
          <div className="justify-items-start">
          <button
            className="border-b border-black hover:text-gray-700 hover:border-gray-700 transition duration-200"
            aria-label="Shop Now"
          >
            Shop Now
          </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-end w-full md:w-1/2 mt-8 md:mt-0">
          <Image
            src={sofa}
            alt="Hero Banner"
            className="rounded-lg"
            width={1000} // Increased width
            height={500} // Increased height
            priority
          />
        </div>
      </div>
    </section>
  );
}
