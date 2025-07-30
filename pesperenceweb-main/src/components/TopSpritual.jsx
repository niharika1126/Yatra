import React from "react";
import img1 from "../assets/bestselling1.jpg";
import img2 from "../assets/besttselling2J.jpg";
import img3 from "../assets/bestselling3K.jpg";
import img4 from "../assets/bestselling4G.jpg";
import img5 from "../assets/bestselling5R.jpg";

const images = [img1, img2, img3, img4, img5];

const TopSpiritual = () => {
  return (
    <div className="w-full py-16 bg-white overflow-x-hidden">
      <h2 className="text-3xl text-center font-bold mb-6 text-gray-800">
        Top Spiritual Tours
      </h2>

      <div className="flex gap-6 overflow-x-auto px-4 scroll-smooth no-scrollbar">
        {images.map((src, i) => (
          <div
            key={i}
            className="min-w-[220px] h-[340px] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <img
              src={src}
              alt={`spiritual-${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSpiritual;
