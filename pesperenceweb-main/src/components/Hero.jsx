import React from "react";
import kashi from "../assets/kashi.jpg";

const Hero = () => {
  return (
    <div className="relative w-full min-h-[400px] md:min-h-[650px] overflow-hidden group">
      {/* Background Image */}
      <img
        src={kashi}
        alt="Kashi Ghat"
        className="w-full h-full object-cover"
      />

      {/* Hover Text & Button */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start px-4 md:px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <p className="text-xs md:text-sm text-gray-300 mb-1 md:mb-2">
          OUR BEST EXPERIENCE
        </p>
        <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-white leading-snug mb-3 md:mb-4">
          Get Unforgettable Spiritual Experience of <br /> Kashi Ganga Ghat
        </h1>
        <a
          href="/tours"
          className="bg-black text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-semibold hover:bg-white hover:text-black transition duration-300"
        >
          Explore Now
        </a>
      </div>
    </div>
  );
};

export default Hero;
