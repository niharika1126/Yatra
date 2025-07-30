import React from "react";
import { motion } from "framer-motion";
import offerImg from "../assets/offer.webp";

const OfferPartner = () => {
  return (
    <div className="w-full bg-white py-16 px-4 md:px-16">
      {/* Heading Section */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center text-4xl sm:text-5xl font-bold text-red-800 tracking-widest mb-4"
      >
        ❖ What We Offer ❖
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-xl sm:text-2xl text-gray-700 italic mb-12 px-4 max-w-3xl mx-auto"
      >
        “Sacred partnerships built on trust, service, and soulful journeys.”
      </motion.p>

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-lg group relative"
        >
          <img
            src={offerImg}
            alt="What We Offer"
            className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 group-hover:rotate-[0.5deg]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out"></div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-red-800 mb-4">
            As Our Preferred Business Partner
          </h2>
          <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
            You will be our representative to provide the needed travel service
            for a particular place. All our bookings and customers will be
            directed to you.
          </p>

          <h3 className="text-2xl font-bold text-red-700 mb-3">What We Expect</h3>
          <ul className="list-decimal list-inside space-y-2 text-gray-700 text-sm md:text-base">
            <li>
              A high degree of customer service for our travel guests.
            </li>
            <li>
              Reasonable prices to suit our standard, premium, and luxury guests.
            </li>
            <li>
              An experience of your service that our travel guests will talk about.
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default OfferPartner;
