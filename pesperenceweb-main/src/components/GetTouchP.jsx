import React from "react";
import { motion } from "framer-motion";

const GetTouchP = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-20 max-w-7xl mx-auto">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-800 text-center mb-4"
      >
        Get In Touch Today
      </motion.h2>
      <p className="text-center text-gray-600 mb-12">
        Please fill the form below and our Partner Executive will be in touch with you
      </p>

      {/* Form */}
      <form className="space-y-6 text-sm md:text-base">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="font-semibold text-gray-800 block mb-1">
              Name <span className="text-red-600">*</span>
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="First"
                className="w-1/2 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
              />
              <input
                type="text"
                placeholder="Last"
                className="w-1/2 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="font-semibold text-gray-800 block mb-1">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="font-semibold text-gray-800 block mb-1">
            Mobile Number <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="font-semibold text-gray-800 block mb-1">
            Company Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="font-semibold text-gray-800 block mb-1">
            City <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="font-semibold text-gray-800 block mb-1">Website URL</label>
          <input
            type="url"
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="font-semibold text-gray-800 block mb-1">
            I am Interested in being <span className="text-red-600">*</span>
          </label>
          <select className="w-full border border-gray-300 px-4 py-2 rounded-md">
            <option>Room Partner</option>
            <option>Hotel Partner</option>
            <option>Local Guide</option>
            <option>Transportation Partner</option>
            <option>Shopping Partner</option>
          </select>
        </div>

        <div>
          <label className="font-semibold text-gray-800 block mb-1">Message Box</label>
          <textarea
            rows="5"
            className="w-full border border-gray-300 px-4 py-2 rounded-md resize-none"
          ></textarea>
        </div>

        {/* Simple Captcha */}
        <div>
          <label className="block mb-2 text-gray-700 font-medium">
            Please prove you are human by selecting the <b>house</b>:
          </label>
          <div className="flex items-center gap-4 text-2xl">
            <span className="cursor-pointer">🎄</span>
            <span className="cursor-pointer">☕</span>
            <span className="cursor-pointer">🏠</span>
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 bg-yellow-400 text-black font-bold px-6 py-2 rounded-md hover:bg-yellow-500 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default GetTouchP;
