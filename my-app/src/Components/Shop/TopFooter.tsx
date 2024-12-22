"use client";

import React from "react";

const FeaturesSection: React.FC = () => {
    return (
        <section className="bg-[#FAF4F4]  py-7">
            <div className="container py-10 md:flex mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center justify-around">
                {/* Free Delivery */}
                <div>
                    <h3 className="text-lg font-bold text-gray-900">Free Delivery</h3>
                    <p className="text-[#9F9F9F] mt-2">
                        For all orders over $50, consectetur <br /> adipim scing elit..
                    </p>

                </div>

                {/* 90 Days Return */}
                <div>
                    <h3 className="text-lg font-bold text-gray-900">90 Days Return</h3>
                    <p className="text-[#9F9F9F] mt-2">
                        If goods have problems, consectetur <br /> adipim scing elit.
                    </p>
                </div>

                {/* Secure Payment */}
                <div>
                    <h3 className="text-lg font-bold text-gray-900">Secure Payment</h3>
                    <p className="text-[#9F9F9F] mt-2">
                        100% secure payment, consectetur  <br /> adipim scing elit.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;