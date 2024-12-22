import React from 'react';
import Image from 'next/image';
import img from "../../../public/section 4 pic/Ellipse 1.png";
import im from "../../../public/section 4 pic/Ellipse 1 (1).png";

const Hero = () => {
  return (
    <div className="checkout-container flex flex-col md:flex-row justify-between gap-8 px-4 py-8 w-[90%] md:w-[80%] mx-auto">

      {/* Billing Details Section */}
      <div className="billing-details w-full md:w-1/2">
        <div
          className="billing-title text-[28px] md:text-[36px] font-semibold mb-6"
          style={{ fontFamily: 'Poppins', lineHeight: '1.5' }}
        >
          Billing Details
        </div>

        <div className="columns gap-4">
          {/* Name Fields */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="column flex flex-col w-full sm:w-1/2">
              <label className="column-label text-sm mb-1">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="column-input p-3 rounded-lg border border-gray-300 mb-4"
              />
            </div>
            <div className="column flex flex-col w-full sm:w-1/2">
              <label className="column-label text-sm mb-1">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="column-input p-3 rounded-lg border border-gray-300 mb-4"
              />
            </div>
          </div>

          {/* Additional Input Fields */}
          {[ 
            { label: 'Company Name (Optional)', placeholder: 'Enter company name' },
            { label: 'Country / Region', placeholder: 'Enter your country or region' },
            { label: 'Street Address', placeholder: 'Enter your street address' },
            { label: 'Town / City', placeholder: 'Enter your town or city' },
            { label: 'Province', placeholder: 'Enter your province' },
            { label: 'ZIP Code', placeholder: 'Enter your ZIP code' },
            { label: 'Phone', placeholder: 'Enter your phone number', type: 'tel' },
            { label: 'Email Address', placeholder: 'Enter your email address', type: 'email' },
          ].map((field, index) => (
            <div key={index} className="column flex flex-col mb-4">
              <label className="column-label text-sm mb-1">{field.label}</label>
              <input
                type={field.type || 'text'}
                placeholder={field.placeholder}
                className="column-input p-3 rounded-lg border border-gray-300"
              />
            </div>
          ))}

          {/* Additional Information */}
          <div className="column flex flex-col mb-4">
            <label className="column-label text-sm mb-1">Additional Information</label>
            <textarea
              placeholder="Enter additional information (optional)"
              className="column-input p-3 rounded-lg border border-gray-300"
            />
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="product-details w-full md:w-1/2">
        <div className="flex justify-between items-center product-title text-[20px] md:text-[24px] font-medium mb-6">
          <span>Product</span>
          <span>Subtotal</span>
        </div>

        <div className="bg-white">
          <div className="flex justify-between items-center mb-4">
            <span>Asgaard Sofa X 1</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span>Total</span>
          <span className="final-total text-[24px] text-[#B88E2F] font-semibold">Rs. 250,000.00</span>
        </div>

        <div className="section-line mt-4 border-t border-gray-300"></div>

        <div className="payment-options mt-4">
          <div className="payment-method-title text-[16px] font-normal mb-2">
            Direct Bank Transfer
          </div>

          <div className="payment-method-description text-[14px] md:text-[16px] font-light text-justify text-[#9F9F9F] mb-4">
            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
          </div>

          <div className='flex flex-col gap-2 mb-4'>
            <p className='text-[#9F9F9F]'>Direct Bank Transfer</p>
            <p className='text-[#9F9F9F]'>Cash On Delivery</p>
          </div>

          <div className="privacy-policy-description text-[14px] md:text-[16px] font-light text-justify mb-4">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
            <a href="/privacy-policy" className="text-blue-600 underline ml-2">Privacy Policy</a>.
          </div>

          <button className="place-order-btn text-black border border-black rounded-lg mt-4 py-3 px-6 w-full md:w-auto">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
