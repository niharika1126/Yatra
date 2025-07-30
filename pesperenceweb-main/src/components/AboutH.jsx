import React from "react";
import Maha from "../assets/maha.jpg";
import { motion } from "framer-motion";

const AboutH = () => {
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
        ❖ About Us ❖
      </motion.h2>

      {/* Spiritual Line */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-xl sm:text-2xl text-gray-700 italic mb-12 px-4 max-w-3xl mx-auto"
      >
        “A divine journey where every rhythm echoes ancient devotion.”
      </motion.p>

      {/* Image with hover text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-3xl shadow-xl group"
      >
        <img
          src={Maha}
          alt="Maha Gallery"
          className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 group-hover:rotate-[0.5deg]"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out rounded-3xl"></div>

        {/* Hover Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out">
          <p className="text-white text-2xl sm:text-3xl font-bold tracking-wide bg-black/40 px-4 py-2 rounded-xl backdrop-blur-sm">
            Feel the sacred silence beyond the steps.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutH;
