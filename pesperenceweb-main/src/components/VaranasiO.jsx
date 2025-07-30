import React from "react";
import { motion } from "framer-motion";
import kashu from "../assets/kashi.jpg";
import kedar from "../assets/kedar.jpg";
import maha from "../assets/maha.jpg";
import mathura from "../assets/mathura.jpg";

const activities = [
  {
    id: 1,
    title: "Morning Ganga Aarti & Boat Ride",
    price: "₹2,000.00 – ₹4,000.00",
    img: kashu,
  },
  {
    id: 2,
    title: "Kashi Vishwanath Temple Darshan",
    price: "₹1,500.00 – ₹3,500.00",
    img: kedar,
  },
  {
    id: 3,
    title: "Evening Sandhya Aarti Experience",
    price: "₹1,200.00 – ₹3,000.00",
    img: maha,
  },
  {
    id: 4,
    title: "Local Bazaar Walk & Street Food",
    price: "₹1,000.00 – ₹2,500.00",
    img: mathura,
  },
];

const VaranasiO = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-8">
        Different Single Day Activities of Varanasi
      </h2>

      {/* Activity Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {activities.map((activity) => (
          <motion.div
            key={activity.id}
            className="bg-white rounded-xl shadow-md overflow-hidden border hover:border-red-500 cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }}
            transition={{ duration: 0.3 }}
          >
            {/* Image */}
            <img
              src={activity.img}
              alt={activity.title}
              className="w-full h-48 object-cover"
            />

            {/* Details */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {activity.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{activity.price}</p>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md text-sm font-medium">
                Select Activity
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VaranasiO;
