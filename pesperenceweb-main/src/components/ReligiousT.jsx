import React, { useState } from "react";
import { motion } from "framer-motion";

// Example image imports (Add all 34 images in assets folder)
import Kashi from "../assets/kashi.jpg";
import Varanasi from "../assets/varnasi.jpg";
import Kedarnath from "../assets/kedar.jpg";
import Mathura from "../assets/mathura.jpg";

// Sample Data for 34 items
const allTours = Array.from({ length: 34 }, (_, i) => ({
  id: i + 1,
  name: `Tour ${i + 1}`,
  image: [Kashi, Varanasi, Kedarnath, Mathura][i % 4], // Cycle images
  popularity: Math.floor(Math.random() * 100),
  rating: (Math.random() * 5).toFixed(1),
  price: Math.floor(Math.random() * 5000) + 1000, // Random price
  latest: Date.now() - i * 1000000,
}));

const ReligiousT = () => {
  const [sortOption, setSortOption] = useState("popularity");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Sorting Logic
  const sortedTours = [...allTours].sort((a, b) => {
    if (sortOption === "popularity") return b.popularity - a.popularity;
    if (sortOption === "latest") return b.latest - a.latest;
    if (sortOption === "rating") return b.rating - a.rating;
    if (sortOption === "price-low") return a.price - b.price;
    if (sortOption === "price-high") return b.price - a.price;
    return 0;
  });

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTours = sortedTours.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedTours.length / itemsPerPage);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-white py-16 px-4 overflow-hidden">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center text-4xl sm:text-5xl font-bold text-red-800 tracking-widest mb-4"
      >
        ❖ Religious Tours ❖
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-xl sm:text-2xl text-gray-700 italic mb-12 px-4 max-w-3xl mx-auto"
      >
        “Discover sacred destinations that echo eternal devotion.”
      </motion.p>

      {/* Sorting & Count */}
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-8 px-4">
        <p className="text-gray-600 text-sm">
          Showing {indexOfFirstItem + 1}–{Math.min(indexOfLastItem, sortedTours.length)} of {sortedTours.length} results
        </p>
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm"
        >
          <option value="popularity">Sort by popularity</option>
          <option value="latest">Sort by latest</option>
          <option value="rating">Sort by rating</option>
          <option value="price-low">Sort by price: low to high</option>
          <option value="price-high">Sort by price: high to low</option>
        </select>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {currentTours.map((tour, index) => (
          <motion.div
            key={tour.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
          >
            <img
              src={tour.image}
              alt={tour.name}
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-lg font-semibold">{tour.name}</p>
              <p className="text-sm">₹{tour.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-10 gap-2 flex-wrap">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 ${
              currentPage === i + 1 ? "bg-red-600 text-white" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ReligiousT;

