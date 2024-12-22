'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import mainImage from '../../../public/section 3 pic/Asgaard sofa main big.png';
import thumb1 from '../../../public/section 3 pic/Outdoor sofa set 1.png';
import thumb2 from '../../../public/section 3 pic/Outdoor sofa set_2.png';
import thumb3 from '../../../public/section 3 pic/Stuart sofa 3.png';
import thumb4 from '../../../public/section 3 pic/Maya sofa three seater 5.png';
import thumb5 from '../../../public/section 3 pic/star pic.png';

import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import CartSidebarPage from '../Cart Sidebar/Cart Sidebar';

const SectionTwoPage = () => {
  const [isCartOpen, setIsCartOpen] = useState(false); // Manage sidebar state

  const handleAddToCart = () => {
    setIsCartOpen(true); // Open the cart sidebar
  };

  const handleCloseSidebar = () => {
    setIsCartOpen(false); // Close the cart sidebar
  };

  return (
    <div className="relative">
      <div className="container mx-auto p-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="flex flex-col md:flex-row">
            <div className="flex md:flex-col space-x-2 md:space-x-0 md:space-y-4 mr-2">
              {[thumb1, thumb2, thumb3, thumb4].map((thumb, index) => (
                <Image
                  key={index}
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  className="bg-[#FFF9E5] w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
            <Image
              src={mainImage}
              alt="Asgaard Sofa"
              className="bg-[#FFF9E5] w-full h-auto object-cover rounded-lg"
              placeholder="blur"
            />
          </div>

          {/* Product Details Section */}
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Asgaard Sofa</h1>
            <p className="text-gray-500 text-lg mb-4">Rs. 250,000.00</p>
            <div className="flex items-center mb-4">
              <Image src={thumb5} alt="Star Rating" className="w-20 md:w-24 h-6 object-cover" />
              <p className="text-gray-500 ml-2">| 5 Customer Reviews</p>
            </div>
            <p className="text-gray-500 mb-4">
              Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
              stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
              highs for a sound.
            </p>
            <div className="flex items-center flex-wrap mb-4">
              <label className="mr-4 font-medium">Size:</label>
              <div className="flex space-x-2">
                {['L', 'XL', 'XS'].map((size) => (
                  <button
                    key={size}
                    aria-label={`Size ${size}`}
                    className="bg-gray-200 border border-gray-300 px-3 py-1 rounded hover:bg-gray-300 transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center flex-wrap mb-4">
              <label className="mr-4 font-medium">Color:</label>
              <div className="flex space-x-2">
                <div
                  className="w-6 h-6 bg-blue-500 rounded-full cursor-pointer hover:scale-110 transition-transform"
                  aria-label="Color Blue"
                ></div>
                <div
                  className="w-6 h-6 bg-yellow-500 rounded-full cursor-pointer hover:scale-110 transition-transform"
                  aria-label="Color Yellow"
                ></div>
                <div
                  className="w-6 h-6 bg-gray-500 rounded-full cursor-pointer hover:scale-110 transition-transform"
                  aria-label="Color Gray"
                ></div>
              </div>
            </div>
            <div className="flex items-center flex-wrap mb-4">
              <div className="flex items-center space-x-2">
                <button
                  className="bg-gray-200 border border-gray-300 px-2 py-1 rounded hover:bg-gray-300 transition-colors"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <input
                  type="number"
                  className="border border-gray-300 px-2 py-1 rounded w-12 text-center"
                  defaultValue="1"
                  min="1"
                />
                <button
                  className="bg-gray-200 border border-gray-300 px-2 py-1 rounded hover:bg-gray-300 transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="text-black border border-black px-10 py-2 rounded-xl hover:bg-black hover:text-white transition-colors duration-300 ml-5"
              >
                Add to Cart
              </button>
            </div>
            <div className="border-t border-[#D9D9D9] opacity-50 my-6"></div>
            <div className="text-gray-500">
              <p>SKU: SS001</p>
              <p>Category: Sofas</p>
              <p>Tags: Sofa, Chair, Home, Shop</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-700" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-600" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Render Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="relative">
            <CartSidebarPage />
            <button
              onClick={handleCloseSidebar}
              className="absolute top-4 right-4 text-gray-700 hover:text-black text-lg"
              aria-label="Close"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionTwoPage;
