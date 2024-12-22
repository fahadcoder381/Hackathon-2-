import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero2section = () => {
  const products = [
    { id: 1, name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', image: "/images/Trenton modular sofa 1.png" },
    { id: 2, name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', image: '/images/Granite dining table 2.png' },
    { id: 3, name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', image: '/images/Outdoor bar 3.png' },
    { id: 4, name: 'Plain console with teak mirror', price: 'Rs. 25,000.00', image: '/images/Plain console 4.png' },
    { id: 5, name: 'Grain coffee table', price: 'Rs. 15,000.00', image: '/images/Grain coffee table 5.png' },
    { id: 6, name: 'Kent coffee table', price: 'Rs. 225,000.00', image: '/images/Kent coffee table 6.png' },
    { id: 7, name: 'Round coffee table_color 2', price: 'Rs. 251,000.00', image: '/images/Round coffee table 7.png' },
    { id: 8, name: 'Reclaimed teak coffee table', price: 'Rs. 25,200.00', image: '/images/Reclaimed teak coffee table 8.png' },
    { id: 9, name: 'Plain console_', price: 'Rs. 258,200.00', image: '/images/Plain console 9.png' },
    { id: 10, name: 'Reclaimed teak Sideboard', price: 'Rs. 20,000.00', image: '/images/Reclaimed teak Sideboard 10.png' },
    { id: 11, name: 'SJP_0825 ', price: 'Rs. 200,000.00', image: '/images/SJP_0825  11.png' },
    { id: 12, name: 'Bella chair and table', price: 'Rs. 100,000.00', image: '/images/Bella chair and table 12.png' },
    { id: 13, name: 'Granite square side table', price: 'Rs. 258,800.00', image: '/images/Granite square side table 13.png' },
    { id: 14, name: 'Asgaard sofa', price: 'Rs. 250,000.00', image: '/images/Asgaard sofa 14.png' },
    { id: 15, name: 'Maya sofa three seater', price: 'Rs. 115,000.00', image: '/images/Maya sofa three seater 15.png' },
    { id: 16, name: 'Outdoor sofa set', price: 'Rs. 244,000.00', image: '/images/Outdoor sofa set 16.png' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
       

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white  hover:shadow-lg  overflow-hidden"
            >
              {/* Product Image */}
              <Link href="/productcard">
                <div className="relative w-full" style={{ aspectRatio: '1 / 1' }}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    
                    width={700}
                    height={200}
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              </Link>

              {/* Product Details */}
              <div className="p-4">
                <h3
                  className="text-black text-base font-normal mb-2"
                  style={{ fontFamily: 'Poppins' }}
                >
                  {product.name}
                </h3>
                <p
                  className="text-black font-medium text-lg"
                  style={{ fontFamily: 'Poppins' }}
                >
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center mt-8 space-x-4">
          <button className="w-14 h-14 bg-yellow-200 rounded-lg font-medium text-gray-700 hover:bg-yellow-300">
            1
          </button>
          <button className="w-14 h-14 bg-yellow-200 rounded-lg font-medium text-gray-700 hover:bg-yellow-300">
            2
          </button>
          <button className="w-14 h-14 bg-yellow-200 rounded-lg font-medium text-gray-700 hover:bg-yellow-300">
            3
          </button>
          <button className="w-24 h-14 bg-yellow-200 rounded-lg font-medium text-gray-700 hover:bg-yellow-300">
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero2section;
