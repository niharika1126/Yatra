import React from "react";

const statsData = [
  { number: "12", label: "Years Experience" },
  { number: "97%", label: "Retention Rate" },
  { number: "8k", label: "Tour Completed" },
  { number: "19k", label: "Happy Travellers" },
];

const Stats = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 flex flex-wrap justify-center gap-12">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className={`relative w-60 h-60 flex flex-col items-center justify-center rounded-full border-4 border-black text-center transition-transform duration-500 ${
            index % 2 === 0 ? "-translate-y-4" : "translate-y-4"
          }`}
        >
          {/* Inner Circle */}
          <div className="w-48 h-48 bg-gray-100 rounded-full flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold">{stat.number}</h2>
            <p className="text-base">{stat.label}</p>
          </div>

          {/* Rotating small dot */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="w-5 h-5 bg-black rounded-full absolute -top-2 left-1/2 transform -translate-x-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
