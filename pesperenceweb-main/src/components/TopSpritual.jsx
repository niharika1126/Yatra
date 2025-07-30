import React from "react";
import bestselling1 from "../assets/bestselling1.jpg";
import bestselling2 from "../assets/besttselling2J.jpg";
import bestselling3 from "../assets/bestselling3K.jpg";
import bestselling4 from "../assets/bestselling4G.jpg";
import bestselling5 from "../assets/bestselling5R.jpg";

const images = [
  { img: bestselling1, title: "Kashi: Soulful Experience" },
  { img: bestselling2, title: "Varanasi Ganga Aarti" },
  { img: bestselling3, title: "Ramayana Spiritual Circuit" },
  { img: bestselling4, title: "Durga Puja Tour" },
  { img: bestselling5, title: "Rajasthan Spiritual Trail" },
];

const TopSpiritual = () => {
  const repeatedImages = [...images, ...images]; // Duplicate for seamless scroll

  return (
    <div className="w-full overflow-hidden py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Top Spirituals Tours</h2>
        <p className="text-xl text-red-700 mt-2 font-bold">Best Selling Religious Trips</p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex gap-6 w-max"
          style={{
            animation: "scrollLeft 40s linear infinite",
          }}
        >
          {repeatedImages.map((item, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[300px] h-[400px]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
              <div className="absolute bottom-2 left-2 right-2 text-white text-lg bg-black/50 px-2 py-1 rounded">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        {/* Keyframes inside style tag */}
        <style>{`
          @keyframes scrollLeft {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default TopSpiritual;
