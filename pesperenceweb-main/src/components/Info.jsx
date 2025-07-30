import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Info = () => {
  return (
    <div className="w-full bg-white py-16 px-4 md:px-12 font-['Comic_Neue']">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="text-red-700 italic text-lg md:text-xl">Get In Touch</p>
        <h2 className="text-3xl md:text-4xl font-bold text-red-800 tracking-wide">
          Our Contact Information
        </h2>
      </motion.div>

      {/* Info Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center"
      >
        {/* Address */}
        <div className="flex flex-col items-center space-y-4 px-4">
          <FaMapMarkerAlt size={36} className="text-yellow-400" />
          <h3 className="text-lg font-bold text-red-700">ADDRESS</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Yatra Veda <br />
            Impact Digital Services Pvt Ltd <br />
            Supreme Works, Sultanpur <br />
            MG Road, New Delhi - 110030
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center space-y-4 px-4 border-y md:border-y-0 md:border-x border-gray-300">
          <FaPhoneAlt size={30} className="text-yellow-400" />
          <h3 className="text-lg font-bold text-red-700">CONTACT</h3>
          <p className="text-gray-700 text-sm">+91 93134 06623</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center space-y-4 px-4">
          <FaEnvelope size={30} className="text-yellow-400" />
          <h3 className="text-lg font-bold text-red-700">EMAIL ID</h3>
          <p className="text-gray-700 text-sm">enquiries@yatraveda.life</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Info;
