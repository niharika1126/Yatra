import React, { useState } from "react";
import { motion } from "framer-motion";

// Reuse the same images or replace with cultural-specific ones
import Img1 from "../../assets/bestselling3K.jpg";
import Img2 from "../../assets/bestselling5R.jpg";
import Img3 from "../../assets/SP1.jpg";
import Img4 from "../../assets/SP2.jpg";
import Img5 from "../../assets/spriex3.jpg";
import Img6 from "../../assets/spriex4.jpg";
const culturalTitles = [
  "Rajasthan Culture and Forts Tour",
  "Navratri Festival Celebration",
  "Spiritual Dance & Art Tour",
  "Ayodhya Cultural Yatra",
  "Heritage Walks in Varanasi",
  "Temple Festivals of Tamil Nadu",
  "Folk Music & Devotion Journey",
  "Ujjain Kumbh Mela Expedition",
  "North India Cultural Trail",
  "Incredible India Cultural Immersion",
];

const tourImages = [Img1, Img2, Img3, Img4, Img5, Img6];

const allTours = Array.from({ length: 34 }, (_, i) => ({
  id: i + 1,
  name: culturalTitles[i % culturalTitles.length],
  image: tourImages[i % tourImages.length],
  popularity: Math.floor(Math.random() * 100),
  rating: (Math.random() * 5).toFixed(1),
  price: Math.floor(Math.random() * 5000) + 1500,
  latest: Date.now() - i * 500000,
}));

const ReligiousC = () => {
  const [sortOption, setSortOption] = useState("popularity");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const sortedTours = [...allTours].sort((a, b) => {
    if (sortOption === "popularity") return b.popularity - a.popularity;
    if (sortOption === "latest") return b.latest - a.latest;
    if (sortOption === "rating") return b.rating - a.rating;
    if (sortOption === "price-low") return a.price - b.price;
    if (sortOption === "price-high") return b.price - a.price;
    return 0;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTours = sortedTours.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedTours.length / itemsPerPage);

  return (
    <div className="w-full bg-white py-16 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-4xl sm:text-5xl font-bold text-red-800 mb-6"
      >
        ❖ Cultural Tours ❖
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-xl text-gray-600 italic max-w-2xl mx-auto mb-10"
      >
        “Experience India’s vibrant heritage and spiritual soul.”
      </motion.p>

      {/* Sort Dropdown */}
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-8 px-4 flex-wrap gap-4">
        <p className="text-gray-600 text-sm">
          Showing {indexOfFirstItem + 1}–{Math.min(indexOfLastItem, sortedTours.length)} of {sortedTours.length} results
        </p>
        <select
          value={sortOption}
          onChange={(e) => {
            setSortOption(e.target.value);
            setCurrentPage(1);
          }}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm"
        >
          <option value="popularity">Sort by popularity</option>
          <option value="latest">Sort by latest</option>
          <option value="rating">Sort by rating</option>
          <option value="price-low">Price: low to high</option>
          <option value="price-high">Price: high to low</option>
        </select>
      </div>

      {/* Tour Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {currentTours.map((tour, i) => (
          <motion.div
            key={tour.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md overflow-hidden border hover:border-red-600 transition duration-300"
          >
            <img src={tour.image} alt={tour.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{tour.name}</h3>
              <p className="text-gray-600 text-sm mb-3">₹{tour.price.toLocaleString()}</p>
              <a
                href="#"
                className="inline-block bg-red-700 text-white text-sm px-4 py-2 rounded-md hover:bg-red-800 transition"
              >
                View More
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-10 flex-wrap gap-2">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentPage(i + 1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`px-4 py-2 border rounded-lg ${
              currentPage === i + 1
                ? "bg-red-600 text-white"
                : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ReligiousC;
