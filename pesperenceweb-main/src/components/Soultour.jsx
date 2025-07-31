import React from "react";
import spriex1 from "../assets/spriex1.jpg";
import spriex2 from "../assets/spriex2.jpg";
import spriex3 from "../assets/spriex3.jpg";
import spriex4 from "../assets/spriex4.jpg";
import spriex5 from "../assets/spriex5.jpg";

const arcCategories = [
  { img: spriex1, title: "Spiritual Experience" },
  { img: spriex2, title: "Festival Experience" },
  { img: spriex3, title: "Himalayan Retreat" },
  { img: spriex4, title: "Religious Circuits" },
  { img: spriex5, title: "Religious Tours" },
];

const SoulTour = () => {
  const repeatedCategories = [...arcCategories, ...arcCategories]; // Duplicate for smooth loop

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 bg-white overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Connect With Your Soul</h2>
        <p className="text-xl text-red-700 mt-2 font-bold">Tour Categories</p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex gap-6 w-max"
          style={{
            animation: "scrollLeft 40s linear infinite",
          }}
        >
          {repeatedCategories.map((category, index) => (
            <div
              key={index}
              className="w-[220px] shrink-0 hover:scale-105 transition-transform duration-500"
            >
              <div className="rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                <img
                  src={category.img}
                  alt={category.title}
                  className="w-full h-[160px] object-cover rounded-xl"
                />
              </div>
              <div className="text-center mt-3">
                <p className="font-semibold text-gray-800 text-base">{category.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inline keyframes using style tag */}
      <style>
        {`
          @keyframes scrollLeft {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default SoulTour;
