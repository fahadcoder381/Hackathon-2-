import React from 'react';
import Image from 'next/image';
import img from "../../../public/section 4 pic/CartSidebar.png";

const Cartpage = () => {
  return (
    <div className="w-full h-auto py-8 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 w-[80%]">
        {/* Product Details Section */}
        <div className="w-full lg:w-[60%]">
          {/* Header Row */}
          <div className="bg-[#FFF9E5] flex justify-between lg:justify-around items-center px-4 lg:px-6 py-4 mb-6 ">
            <span className="font-poppins text-sm lg:text-[16px] font-medium text-gray-600">Product</span>
            <span className="font-poppins text-sm lg:text-[16px] font-medium text-gray-600">Price</span>
            <div className="flex flex-col lg:flex-row lg:gap-6">
              <span className="font-poppins text-sm lg:text-[16px] font-medium text-gray-600">Quantity</span>
              <span className="font-poppins text-sm lg:text-[16px] font-medium text-gray-600">Subtotal</span>
            </div>
          </div>

          {/* Product Row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 px-4 py-4  bg-white ">
            <Image
              src="/section 4 pic/CartSidebar.png" // Replace with your image path
              alt="Product Image"
              width={106}
              height={106}
              className="bg-[#FFF9E5] rounded-lg"
            />
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 items-center gap-2">
              <span className="font-poppins text-sm lg:text-[16px] text-black">Asgaard Sofa</span>
              <span className="font-poppins text-sm lg:text-[16px] text-black">Rs. 250,000.00</span>
              <div className="w-[40px] h-[40px] rounded border border-black flex items-center justify-center">
                <span className="font-poppins text-sm lg:text-[16px] text-black">1</span>
              </div>
              <span className="font-poppins text-sm lg:text-[16px] text-black">Rs. 250,000.00</span>
            </div>
          </div>
        </div>

        {/* Cart Total Section */}
        <div className="w-full lg:w-[35%] lg:h-[390px] bg-[#FFF9E5]  border-gray-300  p-6 flex flex-col">
          {/* Title */}
          <h2 className="font-poppins text-xl lg:text-[24px] font-bold mb-6 text-black">Cart Total</h2>

          {/* Subtotal and Total */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <span className="font-poppins text-sm lg:text-[16px] text-gray-500">Subtotal:</span>
              <span className="font-poppins text-sm lg:text-[16px] text-black">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-poppins text-sm lg:text-[16px] text-gray-500">Total:</span>
              <span className="font-poppins text-lg lg:text-[20px] text-[#B88E2F]">Rs. 250,000.00</span>
            </div>
          </div>

          {/* Checkout Button */}
          <button className="w-full py-3 mt-4 rounded-lg border border-black text-sm lg:text-base text-black font-semibold hover:bg-gray-800 hover:text-white transition">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
