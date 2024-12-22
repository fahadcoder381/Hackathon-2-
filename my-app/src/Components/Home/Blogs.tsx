import Image from 'next/image';
import React from "react";
import { FaClock } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

const IconsDisplay: React.FC = () => {
  return (
    <div className="flex items-center space-x-6 text-gray-700 text-sm">
      {/* Clock and "5 min" */}
      <div className="flex items-center space-x-2">
        <FaClock className="text-lg" /> {/* Clock Icon */}
        <span>5 min</span>
      </div>

      {/* Vertical Divider */}
      <div className="w-px bg-blue-300 h-6"></div>

      {/* Calendar and "12th Oct 2022" */}
      <div className="flex items-center space-x-2">
        <FaRegCalendarAlt className="text-lg" /> {/* Calendar Icon */}
        <span>12<sup>th</sup> Oct 2022</span>
      </div>
    </div>
  );
};




const BlogsPage = () => {
  return (
    <section className="py-16 bg-[#FFFFFF]">
      <div className="container mx-auto px-4 w-[80%]">
        <h2 className="text-3xl font-semibold text-center ">Our Blog</h2>
        <p className="text-lg text-center text-[#9F9F9F] mb-12">
        Find a bright ideal to suit your taste with our great selection
                </p>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Card 1 */}
          <div className=" p-6 rounded-lg">
            <Image
              src="/Rectangle 13.png" // Replace with your blog image
              alt="Blog Post 1"
              width={400}
              height={300}
              className="rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Top Interior Design Trends</h3>
            <p className="text-gray-600 text-sm mt-2">
              Discover the latest interior design trends to transform your living space.
            </p>
            <button className="text-black hover:underline  mt-4">Read More</button>
            <IconsDisplay  />
          </div>

          {/* Blog Card 2 */}
          <div className=" p-6 rounded-lg">
            <Image
              src="/Rectangle 14.png" // Replace with your blog image
              alt="Blog Post 2"
              width={400}
              height={300}
              className="rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Choosing the Perfect Sofa</h3>
            <p className="text-gray-600 text-sm mt-2">
              Learn how to choose the perfect sofa for your home, balancing comfort and style.
            </p>
            <button className="text-black hover:underline mt-4">Read More</button>
            <IconsDisplay />
          </div>

          {/* Blog Card 3 */}
          <div className=" p-6 rounded-lg">
            <Image
              src="/Rectangle 15.png" // Replace with your blog image
              alt="Blog Post 3"
              width={400}
              height={300}
              className="rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Sustainable Home Décor</h3>
            <p className="text-gray-600 text-sm mt-2">
              Tips for incorporating sustainable and eco-friendly decor in your home.
            </p>
            <button className="text-black hover:underline mt-4">Read More</button>
            <IconsDisplay />
          </div>
        </div>

        {/* View All Posts Button */}
        <div className="flex justify-center mt-4">
        <button className="text-black underline-offset-4 border-b border-black  decoration-2">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;
