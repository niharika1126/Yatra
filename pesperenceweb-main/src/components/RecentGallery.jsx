import React from "react";
import galleryImage from "../assets/recentgallery-removebg-preview.png";

const RecentGallery = () => {
  return (
    <div className="max-w-8xl mx-auto text-center py-10 px-4">
      {/* Heading */}
      <p className="text-red-700 text-lg font-semibold">
        Make your experience unforgettable
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8">
        Recent Gallery
      </h2>

      {/* Image */}
      <div className="flex justify-center">
        <img
          src={galleryImage}
          alt="Recent Gallery"
          className="rounded-xl w-full max-w-6xl object-cover"
        />
      </div>
    </div>
  );
};

export default RecentGallery;
