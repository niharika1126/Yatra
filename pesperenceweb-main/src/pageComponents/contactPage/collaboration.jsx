import React from "react";
import picture from "../../assets/Group23.svg";

export default function Collaboration() {
  return (
    <section className="flex flex-col lg:flex-row mx-4 lg:px-32  items-center justify-center gap-4 md:gap-2 mt-10 sm:mt-20 px-6">
      {/* group image */}
      <div>
        <img src={picture} className="lg:w-mainwidth" />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-mainwidth text-center lg:text-left">
        <h1 className="text-2xl sm:text-4xl mt-6 font-bold leading-snug">
          Curiosity Meets <br /> Collaboration
        </h1>
        <p className="text-base lg:text-xl md:text-sm text-justify leading-relaxed text-gray-700 mt-6">
          We integrate research and education, collaborating with institutions,
          supporting researchers with grants, conducting projects, and
          delivering impactful results for innovation and scientific progress
          worldwide.
        </p>
      </div>
    </section>
  );
}
