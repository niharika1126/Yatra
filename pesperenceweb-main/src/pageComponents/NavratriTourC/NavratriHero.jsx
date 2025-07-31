import React from "react";
import { motion } from "framer-motion";

const NavratriHero = () => {
  return (
    <div className="bg-white-50 py-20 px-4 md:px-20 max-w-7xl mx-auto text-center text-gray-800">
      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-sm md:text-base mb-4 text-orange-600"
      >
        Home <span className="mx-2">❖</span> Tours
        <span className="mx-2">❖</span>
        <span className="text-red-700 font-bold">Navratri Gujarat Tour</span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-800 mb-6"
      >
        Navratri Tour in Gujarat: Nine Nights of Devotion
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        viewport={{ once: true }}
        className="text-base sm:text-lg italic text-orange-800"
      >
        “Celebrate Garba, devotion, and divine energy in the land where Navratri comes alive.”
      </motion.p>
    </div>
  );
};

export default NavratriHero;
