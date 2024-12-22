import React from 'react'
import Image from 'next/image';

const FeaturedProducts = () => {
  return (
    <section className="bg-[#FAF4F4] py-16  ">
      <div className="container mx-auto px-4 ">
        {/* Featured Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Card 1 */}
          <div 
            className="p-6 rounded-lg" 
            style={{ backgroundColor: '#FAF4F4' }} // Adding background color to the card
          >
            <Image
              src="/Granite.png" // Replace with your product image path
              alt="Product 1"
              width={400}
              height={400}
              className="rounded-md"
            />
            <h1 className="text-4xl font-semibold mt-4">Side Table</h1>
            <br />
            <button
            className="border-b border-black hover:text-gray-700 hover:border-gray-700 transition duration-200"
            aria-label="View More"
          >
            View More
          </button>
            
            
          </div>

          {/* Product Card 2 */}
          <div 
            className="p-6 rounded-lg" 
            style={{ backgroundColor: '#FAF4F4' }} // Adding background color to the card
          >
            <Image
              src="/Group.png" // Replace with your product image path
              alt="Product 2"
              width={400}
              height={400}
              className="rounded-md"
            />
            <h3 className="text-4xl font-semibold " >Side table</h3>
            <br />
            
            <button
            className="border-b border-black hover:text-gray-700 hover:border-gray-700 transition duration-200"
            aria-label="View More"
          >
            View More
          </button>
            
            <div className="mt-4 flex justify-between items-center">
              
             
            </div>
          </div>
        </div>

        {/* View All Products Button */}
        
      </div>
    </section>
  );
};

export default FeaturedProducts;
