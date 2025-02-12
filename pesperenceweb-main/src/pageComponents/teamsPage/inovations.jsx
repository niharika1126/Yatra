import React from "react";
import picture from "../../assets/Group23.svg";

export default function Inovations() {
  return (
    <section className="flex flex-col lg:flex-row mx-4 lg:px-32  items-center justify-center gap-4 md:gap-2 mt-10 sm:mt-20 px-6">
      {/* group image */}
      <div>
        <img src={picture} className="lg:w-mainwidth" />
      </div>

      {/* Text Content */}
      <div className="w-full   lg:w-mainwidth text-center lg:text-left">
        <h1 className="text-2xl sm:text-4xl  mt-6  font-bold leading-snug ">
          Meet the minds driving <br /> innovation
        </h1>
        <p className="text-base md:text-sm lg:text-xl text-justify leading-relaxed text-gray-700 mt-6">
          Our team is a diverse group of leaders, researchers, and visionaries
          dedicated to advancing the frontiers of knowledge and innovation. With
          expertise spanning multiple disciplines and a shared commitment to
          solving humanity’s most pressing challenges, we collaborate to inspire
          progress and create transformative solutions. Each member brings a
          unique perspective, united by a passion for discovery and a mission to
          build a better tomorrow.
        </p>
      </div>
    </section>
  );
}
