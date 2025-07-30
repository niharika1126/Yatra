import React, { useState } from "react";
import { motion } from "framer-motion";

import mathura from "../../assets/mathura.jpg";
import kashi from "../../assets/kashi.jpg";
import kedar from "../../assets/kedar.jpg";
import maha from "../../assets/maha.jpg";
import durga from "../../assets/durga.jpg";
const products = [
  {
    id: 1,
    title: "Varnasi Tour Package",
    price: "₹25,000.00 – ₹75,000.00",
    img: kashi,
  },
  {
    id: 2,
    title: "Kedarnath Tour Package",
    price: "₹41,000.00 – ₹102,000.00",
    img: kedar,
  },
  {
    id: 3,
    title: "Mahakaleshwar Tour Package",
    price: "₹19,000.00 – ₹51,000.00",
    img: maha,
  },
  {
    id: 4,
    title: "Mathura Temple Tour",
    price: "₹41,000.00 – ₹102,000.00",
    img: mathura,
  },
];

const KashiO = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-8">
        Related Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden border hover:border-red-500 cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }}
            transition={{ duration: 0.3 }}
          >
            {/* Image */}
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-48 object-cover"
            />

            {/* Details */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{product.price}</p>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md text-sm font-medium">
                Select Options
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default KashiO;
