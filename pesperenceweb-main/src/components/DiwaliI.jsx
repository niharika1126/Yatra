import React, { useState } from "react";
import { motion } from "framer-motion";
import mathura from "../assets/mathura.jpg";
import kashu from "../assets/kashi.jpg";
import cedar from "../assets/kedar.jpg";
import maha from "../assets/maha.jpg";
import durga from "../assets/durga.jpg";

const DiwaliI = () => {
  const [mainImage, setMainImage] = useState(mathura);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const { width, height, left, top } = e.target.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = ((y / height) - 0.5) * 25; // Increased tilt
    const rotateY = ((x / width) - 0.5) * 25;

    setStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: "transform 0.1s ease",
    });
  };

  const resetTilt = () => {
    setStyle({ transform: "rotateX(0deg) rotateY(0deg)", transition: "transform 0.5s ease" });
  };

  const smallImages = [kashu, cedar, maha, durga];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
      {/* Main Image */}
      <div className="relative w-full h-[450px] mb-8 perspective-1000">
        <div
          className="w-full h-full relative rounded-xl overflow-hidden shadow-2xl"
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTilt}
          style={{ perspective: "1000px" }}
        >
          <motion.img
            src={mainImage}
            alt="Main"
            className="w-full h-full object-cover rounded-xl"
            style={style}
          />
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {smallImages.map((img, index) => (
          <motion.div
            key={index}
            className="cursor-pointer rounded-lg overflow-hidden border-2 border-transparent hover:border-red-500"
            whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(255,0,0,0.5)" }}
            onClick={() => setMainImage(img)}
          >
            <img src={img} alt={`Thumb-${index}`} className="w-full h-40 object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DiwaliI;
