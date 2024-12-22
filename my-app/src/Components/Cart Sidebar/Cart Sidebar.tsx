import React from 'react';
import Image from 'next/image';
import img from "../../../public/section 4 pic/CartSidebar.png"


const CartSidebar: React.FC = () => {
  return (
    <div className="fixed right-0 top-0 w-[400px] h-[600px] border border-[#D9D9D9] bg-white shadow-md">
      {/* Shopping Cart Title */}
      <div className="text-xl font-semibold p-6">
        Shopping Cart
      </div>

      {/* Separation Line */}
      <div className="border-t border-gray-300 mx-auto w-[287px]"></div>

      {/* Product Section */}
      <div className="flex items-center mt-8 px-6">
        {/* Product Image */}
        <div className="w-[108px] h-[105px] bg-[#FFF9E5] rounded-lg">
          {/* Placeholder for Image */}
          <img
            src="/section 4 pic/CartSidebar.png"
            alt="Product"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="ml-4 flex-1">
          <div className="text-lg font-semibold mb-2">Asgaard sofa</div>
          <div className='flex'>
          <div className="text-sm text-gray-500 mb-1">1 X</div>
          <div className="text-sm font-medium text-[#B88E2F] ml-2">Rs. 250,000.00</div>
          </div>
        </div>
      </div>

      {/* Buttons at the Bottom */}
     
      <div className="absolute bottom-6 left-0 right-0  justify-center gap-4 px-6">
        <div className='flex'>
        <h1>Subtotal</h1> 
        <h1  className='ml-[100px] text-[#B88E2F]'>Rs. 250,000.00</h1>
        </div>
        <div className="border-t border-[#D9D9D9] opacity-50 my-6"></div>
        <a href='/cart'>
        <button
          className="w-[131px] h-[31px] border rounded-full bg-gray-200 hover:bg-gray-800 hover:text-white transition duration-300"
        >
          View Cart
        </button></a>
        <a href='checkout'>
        <button
          className="w-[131px] h-[31px] ml-[45px] border rounded-full bg-gray-200 text-black hover:bg-gray-800 hover:text-white transition duration-300"
        >
          Checkout
        </button></a>
      </div>
    </div>
  );
};

export default function CartSidebarPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-end">
      {/* Render Cart Sidebar */}
      <CartSidebar />
    </div>
  );
}
