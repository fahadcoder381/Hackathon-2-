import Image from 'next/image';

const LargeImageSection = () => {
  return (
    <section className="py-16 bg-[#FFF9E5] h-auto lg:h-[650px] flex justify-center">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
        {/* Large Image */}
        <div className="lg:w-7/10 w-full">
          <Image
            src="/Asgaard sofa 1.png" // Replace with your image path
            alt="Large Featured Product"
            width={1200}
            height={800}
            className="rounded-lg w-full mb-4"
          />
        </div>

        {/* Content Section */}
        <div className="lg:w-3/10 w-full text-center lg:text-left">
          <p className="text-gray-600 mb-4 text-lg">
            New Arrivals.
          </p>
          <h2 className="text-3xl font-semibold mb-4">Asgaard sofa</h2>
          <button className="text-xl text-black border-[2px] py-3 px-6 rounded-lg transition duration-300 hover:bg-gray-200">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default LargeImageSection;
