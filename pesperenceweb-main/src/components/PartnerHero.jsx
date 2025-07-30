import React from "react";
import { motion } from "framer-motion";
import partner1 from "../assets/partner1.jpeg";

const PartnerHero = () => {
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
        ❖ Become a Partner ❖
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-xl sm:text-2xl text-gray-700 italic mb-12 px-4 max-w-3xl mx-auto"
      >
        “Join us in curating sacred experiences through soulful travel.”
      </motion.p>

      {/* Main Section */}
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
            src={partner1}
            alt="Spiritual Partner"
            className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 group-hover:rotate-[0.5deg]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out"></div>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-red-800 mb-4">
            Spiritual & Religious Travel Partners
          </h2>
          <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
            We are on the lookout to expand our list of travel partners who can
            provide an experiential experience for our discerning travel
            customers. Our primary focus is to provide a high degree of
            comfort, personalization and a unique travel experience for our
            customers.
          </p>
          <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
            If you are a travel partner in any of the below categories and
            looking to expand into the religious and spiritual travel market,
            please do send us an enquiry:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
            <li>
              <strong>Hotel Partner –</strong> You own hotels located in a
              religious or spiritual place.
            </li>
            <li>
              <strong>Transportation Partner –</strong> You own private vehicles
              that are well maintained with experienced outstation drivers.
            </li>
            <li>
              <strong>Local Guides –</strong> You are a local travel agent or a
              local guide well experienced in the subtle nuances of your town.
            </li>
            <li>
              <strong>Shopping Partner –</strong> You own a local souvenir
              retail shop in a religious or spiritual place.
            </li>
            <li>
              <strong>Room Partner –</strong> You own a meditation, spiritual
              retreat, wellness retreat, or ashram and are open to taking in
              spiritually inclined guests to give them an experience.
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnerHero;
