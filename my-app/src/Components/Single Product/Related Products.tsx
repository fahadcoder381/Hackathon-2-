import Image from 'next/image';

const RelatedProducts = () => {
  return (
    <section className="h-full bg-[#FFFFFF] py-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 w-[90%]">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Related Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-[#FFFFFF] p-4 md:p-6 rounded-lg  hover:shadow-lg transition-shadow duration-300">
            <Image
              src="/onepic.png"
              alt="Trenton modular sofa_3"
              width={200}
              height={200}
              className="rounded-md max-w-full h-auto"
            />
            <h3 className="text-sm md:text-base mt-4 font-medium">
              Trenton modular sofa_3
            </h3>
            <div className="mt-4">
              <p className="text-sm md:text-lg font-semibold">Rs. 25,000.00</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FFFFFF] p-4 md:p-6 rounded-lg  hover:shadow-lg transition-shadow duration-300">
            <Image
              src="/towpic.png"
              alt="Granite dining table with dining chair"
              width={200}
              height={200}
              className="rounded-md max-w-full h-auto mb-[60px]"
            />
            <h3 className="text-sm md:text-base mt-4 font-medium">
              Granite dining table with dining chair
            </h3>
            <div className="mt-4">
              <p className="text-sm md:text-lg font-semibold">Rs. 25,000.00</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FFFFFF] p-4 md:p-6 rounded-lg  hover:shadow-lg transition-shadow duration-300">
            <Image
              src="/threepic.png"
              alt="Outdoor bar table and stool"
              width={200}
              height={200}
              className="rounded-md max-w-full h-auto"
            />
            <h3 className="text-sm md:text-base mt-4 font-medium">
              Outdoor bar table and stool
            </h3>
            <div className="mt-4">
              <p className="text-sm md:text-lg font-semibold">Rs. 25,000.00</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#FFFFFF] p-4 md:p-6 rounded-lg  hover:shadow-lg transition-shadow duration-300">
            <Image
              src="/fourepic.png"
              alt="Plain console with teak mirror"
              width={200}
              height={200}
              className="rounded-md max-w-full h-auto"
            />
            <h3 className="text-sm md:text-base mt-4 font-medium">
              Plain console with teak mirror
            </h3>
            <div className="mt-4">
              <p className="text-sm md:text-lg font-semibold">Rs. 25,000.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-10">
        <button
          className="border-b border-black hover:text-gray-700 hover:border-gray-700 transition duration-200 text-sm md:text-base"
          aria-label="View More"
        >
          View More
        </button>
      </div>
    </section>
  );
};

export default RelatedProducts;
