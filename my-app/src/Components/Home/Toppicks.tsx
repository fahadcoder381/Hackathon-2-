import React from 'react';
import Image from 'next/image';

const NextTopPicks = () => {
  return (
    <section className="py-16 bg-[#FFFFFF]">
      <div className="container mx-auto px-4">
        
        
        {/* Header Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-2">Top Picks for You</h2>
        <p className="text-lg sm:text-2xl text-center mb-12 text-[#9F9F9F]">
          Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-[#FFFFFF] p-4 sm:p-6 rounded-lg ">
            <Image
              src="/onepic.png"
              alt="Trenton modular sofa_3"
              width={200}
              height={200}
              className="rounded-md mx-auto"
            />
            <h3 className="text-sm sm:text-[16px] mt-4 text-center">Trenton modular sofa_3</h3>
            <div className="mt-4 flex justify-center items-center">
              <p className="text-base sm:text-lg font-semibold">Rs. 25,000.00</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FFFFFF] p-4 sm:p-6 rounded-lg ">
            <Image
              src="/towpic.png"
              alt="Granite dining table with dining chair"
              width={200}
              height={200}
              className="rounded-md mx-auto"
            />
            <h3 className="text-sm sm:text-[16px] mt-4 text-center">Granite dining table with dining chair</h3>
            <div className="mt-4 flex justify-center items-center">
              <p className="text-base sm:text-lg font-semibold">Rs. 25,000.00</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FFFFFF] p-4 sm:p-6 rounded-lg ">
            <Image
              src="/threepic.png"
              alt="Outdoor bar table and stool"
              width={200}
              height={200}
              className="rounded-md mx-auto"
            />
            <h3 className="text-sm sm:text-[16px] mt-4 text-center">Outdoor bar table and stool</h3>
            <div className="mt-4 flex justify-center items-center">
              <p className="text-base sm:text-lg font-semibold">Rs. 25,000.00</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#FFFFFF] p-4 sm:p-6 rounded-lg ">
            <Image
              src="/fourepic.png"
              alt="Plain console with teak mirror"
              width={200}
              height={200}
              className="rounded-md mx-auto"
            />
            <h3 className="text-sm sm:text-[16px] mt-4 text-center">Plain console with teak mirror</h3>
            <div className="mt-4 flex justify-center items-center">
              <p className="text-base sm:text-lg font-semibold">Rs. 25,000.00</p>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-10">
          <button
            className="text-base sm:text-lg border-b border-black hover:text-gray-700 hover:border-gray-700 transition duration-200"
            aria-label="View More"
          >
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default NextTopPicks;
