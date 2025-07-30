import React from "react";
import AboutImage from "../assets/about2.jpg";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div className="w-full bg-white py-16 px-4 overflow-hidden font-['Comic_Neue']">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center text-4xl sm:text-5xl font-bold text-red-700 tracking-widest mb-4"
      >
        ❖ How We Work ❖
      </motion.h2>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center text-xl sm:text-2xl text-gray-800 italic mb-10 px-6 max-w-3xl mx-auto"
      >
        “Crafting spiritual journeys with personal care & timeless devotion.”
      </motion.p>

      {/* Image Block */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "anticipate" }}
        viewport={{ once: true }}
        className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-3xl shadow-xl group"
      >
        <img
          src={AboutImage}
          alt="Work Banner"
          className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 group-hover:rotate-[1deg]"
        />

        {/* Yellow Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out rounded-3xl"></div>

        {/* Hover Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out">
          <p className="text-black text-2xl sm:text-3xl font-bold tracking-wide bg-yellow-300/70 px-6 py-3 rounded-xl backdrop-blur-sm shadow-md">
            Dedicated support from booking to blessings.
          </p>
        </div>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12 max-w-4xl mx-auto text-center text-lg sm:text-xl text-gray-700 leading-relaxed px-4"
      >
        We work with some of the best travel partners across the country to bring you to a carefully
        selected curation of religious and spiritual travel. Every guest on our platform is allotted a
        personal travel concierge from the time they make a booking till the time the tour package ends.
        <br /><br />
        Your travel concierge is your one-stop go-getter and support person for anything that you may
        require on your trip with us to make it an absolutely fulfilling experience.
      </motion.div>
    </div>
  );
};

export default Work;
