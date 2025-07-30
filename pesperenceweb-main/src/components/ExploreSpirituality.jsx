import React from "react";
import SP1 from "../assets/SP1.jpg";
import SP2 from "../assets/SP2.jpg";
import SP3 from "../assets/SP3.jpg";
import SP4 from "../assets/SP4.jpg";

const blogData = [
  {
    date: "Mar 24, 2025",
    views: "9",
    title: "Experience the Timeless Spirit of Varanasi, where tradition meets",
    image: SP1,
  },
  {
    date: "Mar 24, 2025",
    views: "8",
    title: "A Guide to Planning Your Perfect Dwarka and Somnath",
    image: SP2,
  },
  {
    date: "Apr 01, 2025",
    views: "11",
    title: "Reliving the Ramayana: The Cultural and Religious Significance",
    image: SP3,
  },
  {
    date: "Apr 01, 2025",
    views: "12",
    title: "Experiencing the Ramayana Circuit: A Guide for Modern Travelers",
    image: SP4,
  },
];

const ExploreSpirituality = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 sm:px-12">
      {/* Heading */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-red-700">Explore Spirituality</h2>
          <p className="text-sm text-gray-700">Articles & Blogs that can help you plan your next tour</p>
        </div>
        <a
          href="/articles"
          className="border border-black rounded-full px-4 py-2 text-sm font-medium flex items-center gap-2 hover:bg-black hover:text-white transition"
        >
          See More Articles →
        </a>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {blogData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col group"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <p className="text-xs text-gray-500 mb-2">
                {item.date} | {item.views}
              </p>
              <h3 className="text-sm text-gray-900 font-medium mb-4">{item.title}</h3>
              <a
                href="/articles"
                className="mt-auto bg-black text-white text-sm rounded-full px-4 py-2 text-center w-fit"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreSpirituality;
