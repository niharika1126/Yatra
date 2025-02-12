import React from "react";
import picture from "../../assets/Group23.svg";

export default function Antibiotic() {
  return (
    <section className="flex flex-col lg:flex-row mx-4  lg:px-32  items-center justify-center gap-4 md:gap-2 mt-10 sm:mt-20 px-6 ">
      {/*group image */}
      <div>
        <img src={picture} className="lg:w-mainwidth" />
      </div>

      {/* Text Content */}
      <div className="w-full  lg:w-mainwidth text-center lg:text-left">
        <h1 className="text-2xl lg:text-4xl mt-6 font-bold  leading-snug">
          Antibiotic Resistance
        </h1>
        <p className="text-base text-justify md:text-sm lg:text-xl leading-relaxed text-gray-700 mt-6">
          At our core lies a commitment to advancing scientific discovery and
          innovation. Our grants program provides vital funding to researchers,
          universities, students, professors, and independent scientists
          worldwide. With recipients spanning over 117 countries, we ensure
          groundbreaking projects receive the resources they need to succeed.
          From early-stage concepts to transformative solutions, our grants
          foster a global ecosystem of progress. We believe in empowering minds
          with the means to innovate, creating a ripple effect that benefits
          society at large.
        </p>
      </div>
    </section>
  );
}
