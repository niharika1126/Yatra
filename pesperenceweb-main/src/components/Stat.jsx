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
          className="relative w-52 h-52 flex flex-col items-center justify-center rounded-full border-4 border-black text-center"
        >
          {/* Inner Circle */}
          <div className="w-40 h-40 bg-gray-100 rounded-full flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold">{stat.number}</h2>
            <p className="text-sm">{stat.label}</p>
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
