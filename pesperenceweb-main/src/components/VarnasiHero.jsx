import React from "react";
import { motion } from "framer-motion";

const VaranasiHero = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-20 max-w-7xl mx-auto text-center">
      {/* Breadcrumb Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-gray-500 text-sm md:text-base mb-4"
      >
        Home <span className="mx-2">❖</span> Activities
        <span className="mx-2">❖</span>
        <span className="text-red-800 font-bold">Varanasi Day Experience</span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-800 mb-6"
      >
        Single Day Activity in Varanasi
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        viewport={{ once: true }}
        className="text-gray-700 text-base sm:text-lg italic"
      >
        “Uncover the spiritual soul of India in a single, unforgettable day.”
      </motion.p>
    </div>
  );
};

export default VaranasiHero;
