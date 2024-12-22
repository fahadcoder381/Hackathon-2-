'use client'; // This tells Next.js that this component is a client-side component

import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
  };

  return (
    <footer className="bg-white text-black py-12">
      <div className="container mx-auto px-6 sm:px-8">
        {/* Footer Info Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Address Section */}
          <div className="w-full">
            <p className="text-sm text-[#9F9F9F] font-poppins">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div className="w-full">
            <h3 className="text-sm text-[#9F9F9F] font-semibold font-poppins mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-black hover:text-[#9F9F9F]">Home</a></li>
              <li><a href="/shop" className="text-black hover:text-[#9F9F9F]">Shop</a></li>
              <li><a href="#about" className="text-black hover:text-[#9F9F9F]">About</a></li>
              <li><a href="/Contact" className="text-black hover:text-[#9F9F9F]">Contact</a></li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="w-full">
            <h3 className="text-sm text-[#9F9F9F] font-semibold mb-4 font-poppins">Help</h3>
            <ul className="space-y-2">
              <li><a href="#payment" className="text-black hover:text-[#9F9F9F]">Payment Options</a></li>
              <li><a href="#returns" className="text-black hover:text-[#9F9F9F]">Returns</a></li>
              <li><a href="#privacy" className="text-black hover:text-[#9F9F9F]">Privacy Policies</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="w-full">
            <h3 className="text-sm text-[#9F9F9F] font-semibold mb-4 font-poppins">Newsletter</h3>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className="px-4 py-2 border border-[#D9D9D9] rounded-md w-full sm:w-auto"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Separation Line */}
        <div className="border-t border-[#D9D9D9] opacity-50 my-6"></div>

        {/* Bottom Section */}
        <div className="text-center mt-4">
          <p className="text-[#9F9F9F] font-poppins">
            2022 Meubel House. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
