import React from "react";

const Blogpage = () => {
  return (
    <div className="min-h-screen bg-white px-4">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:justify-center gap-8 max-w-[1200px] mx-auto mt-8">
        {/* Left: Blog Cards */}
        <div className="flex flex-col w-full lg:w-3/4 space-y-8">
          {/* Blog Card */}
          {[1, 2, 3].map((card) => (
            <div
              key={card}
              className="bg-white rounded-lg  overflow-hidden"
            >
              <img
                src={`/section 4 pic/Rectangle ${card}.png`}
                alt={`Blog ${card}`}
                className="w-full h-[250px] sm:h-[400px] md:h-[490px] object-cover"
              />
              <img
                src="/section 4 pic/Group 172.png"
                alt="Tag"
                className="mt-2 ml-2 w-8"
              />
               <img
              src="/section 4 pic/Group 172.png"
              alt="First Blog"
              className="mt-4 ml-2 "
             />
              <div className="p-4">
             
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  {card === 1
                    ? "Going all-in with millennial design"
                    : card === 2
                    ? "Exploring new ways of decorating"
                    : "Handmade pieces that took time to make"}
                </h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc...
                </p>
                <button className="text-blue-500 hover:underline">Read more</button>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="w-12 h-12 bg-yellow-500 text-white rounded-lg">
              1
            </button>
            <button className="w-12 h-12 bg-gray-200 text-gray-600 rounded-lg">
              2
            </button>
            <button className="w-12 h-12 bg-gray-200 text-gray-600 rounded-lg">
              3
            </button>
            <button className="w-16 h-12 bg-gray-200 text-gray-600 rounded-lg">
              Next
            </button>
          </div>
        </div>

        {/* Right: Sidebar */}
        <div className="w-full lg:w-1/4 flex flex-col space-y-8">
          {/* Search Bar */}
          <div className="bg-white   p-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2    focus:outline-none focus:ring focus:ring-black"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                🔍
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white   p-6">
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {[
                { name: "Crafts", count: 2 },
                { name: "Design", count: 8 },
                { name: "Handmade", count: 7 },
                { name: "Interior", count: 1 },
                { name: "Wood", count: 6 },
              ].map((category) => (
                <li key={category.name} className="flex justify-between text-gray-700">
                  <span>{category.name}</span>
                  <span className="text-gray-400">{category.count}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-white rounded-lg  p-6">
            <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              {[1, 2, 3, 4, 5].map((post) => (
                <li
                  key={post}
                  className="flex items-start gap-4 -b pb-2 last:border-0"
                >
                  <img
                    src={`/section 4 pic/Rectangle 69 ${post}.png`}
                    alt={`Post ${post}`}
                    className="w-12 h-12 rounded-md"
                  />
                  <div>
                    <p className="text-gray-700 hover:text-blue-500 cursor-pointer">
                      {post === 1
                        ? "Going all-in with millennial design"
                        : post === 2
                        ? "Exploring new ways of decorating"
                        : post === 3
                        ? "Handmade pieces that took time to make"
                        : post === 4
                        ? "Modern home in Milan"
                        : "Colorful office redesign"}
                    </p>
                    <span className="text-gray-400 text-sm">03 Aug 2022</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogpage;
