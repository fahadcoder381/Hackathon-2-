import Image from 'next/image';

const InstagramSection = () => {
  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Rectangle 17.png')" 
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        {/* First Title */}
        <h2 className="text-4xl font-semibold mb-4">Our Instagram</h2>

        {/* Second Title */}
        <h3 className=" text-2xl font-medium mb-8">
          Follow our store on Instagram
        </h3>

        {/* Follow Button */}
        <button className="bg-[#FAF4F4] text-black py-3 px-8 rounded-lg hover:bg-blue-600 transition duration-300">
          Follow Us
        </button>
      </div>
    </section>
  );
};

export default InstagramSection;
