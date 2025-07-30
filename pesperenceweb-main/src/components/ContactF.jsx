import React from "react";
import Kashi from "../assets/kashi.jpg";
import { motion } from "framer-motion";

const ContactF = () => {
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
        ❖ Contact Us ❖
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-xl sm:text-2xl text-gray-700 italic mb-12 px-4 max-w-3xl mx-auto"
      >
        “We’re here to help you connect with devotion and joy.”
      </motion.p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative w-full overflow-hidden rounded-3xl shadow-xl group"
        >
          <img
            src={Kashi}
            alt="Contact"
            className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 group-hover:rotate-[0.5deg]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out rounded-3xl" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out">
            <p className="text-white text-xl sm:text-2xl font-semibold bg-black/40 px-4 py-2 rounded-xl backdrop-blur-sm">
              Let's connect your thoughts with our vision.
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <label className="block text-gray-800 font-medium mb-2">Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-2">Message</label>
            <textarea
              rows="4"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Type your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-800 transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactF;
