import React from "react";
import Kedar from "../assets/kedar.jpg";
import { motion } from "framer-motion";

const ContactH = () => {
  return (
    <div className="w-full bg-gray-100 py-16 px-4 overflow-hidden">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center text-4xl sm:text-5xl font-bold text-red-800 tracking-widest mb-4"
      >
        ❖ Contact Us ❖
      </motion.h2>

      {/* Subline */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-xl sm:text-2xl text-gray-700 italic mb-12 px-4 max-w-3xl mx-auto"
      >
        “Connect to the divine — we’re just a prayer away.”
      </motion.p>

      {/* Image Section with hover */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-3xl shadow-xl group"
      >
        <img
          src={Kedar}
          alt="Kedar Contact"
          className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 group-hover:rotate-[0.5deg]"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out rounded-3xl"></div>

        {/* Hover Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out">
          <p className="text-white text-2xl sm:text-3xl font-bold tracking-wide bg-black/40 px-4 py-2 rounded-xl backdrop-blur-sm text-center">
            Reach the spiritual essence through your message.
          </p>
        </div>
      </motion.div>

      {/* Contact Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-10 text-lg sm:text-xl text-gray-800"
      >
        <p>
          Have questions, feedback, or just want to connect?{" "}
          <span className="font-semibold text-red-700">We’d love to hear from you!</span>
        </p>
      </motion.div>
    </div>
  );
};

export default ContactH;
