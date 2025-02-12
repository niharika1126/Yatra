import React from "react";
import teampic from "../../assets/Team.svg";

export default function Administration() {
  return (
    <section className="lg:w-mainwidth flex flex-col text-primary items-center gap-8 px-4">
      <h1 className="text-center text-2xl font-bold">Administration</h1>
      <div className="flex flex-col md:flex-row lg:flex-nowrap w-/12 lg:w-full justify-center px-4 lg:px-12 gap-2">
        <div className="group flex flex-row lg:flex-row gap-2 lg:gap-20 items-center justify-center bg-Yellow rounded-lg p-4 shadow-xl w-full lg:w-full transition-all duration-300">
          <div>
            <h2 className="text-sm lg:text-xl font-bold mt-4">
              Sarvesh Mishra
            </h2>
            <p className="text-xs lg:text-sm font-semibold">Founder & CEO</p>
          </div>
          <img
            src={teampic}
            alt="Founder & CEO"
            className="w-40 md:w-60 h-40 md:h-50 object-cover"
          />
        </div>

        <div className="group flex flex-col items-center bg-Yellow rounded-lg p-4 shadow-xl w-full sm:w-1/2 lg:w-1/3 hover:w-full transition-all duration-300">
          <img
            src={teampic}
            alt="Co-Founder & CTO"
            className="w-32 md:w-60 h-32 md:h-40 object-cover rounded-full"
          />
          <h2 className="lg:text-xl font-bold mt-4">Sarthak Gandhi</h2>
          <p className="text-xs lg:text-sm font-semibold">Co-Founder & CTO</p>
        </div>

        <div className="group flex flex-col items-center bg-Yellow rounded-lg p-4 shadow-xl w-full sm:w-1/2 lg:w-1/3 hover:w-full transition-all duration-300">
          <img
            src={teampic}
            alt="Board President"
            className="w-32 md:w-60 h-32 md:h-40 object-cover rounded-full"
          />
          <h2 className="lg:text-xl font-bold mt-4">Sheikh Jasim</h2>
          <p className="text-xs lg:text-sm font-semibold">Board President</p>
        </div>
      </div>
    </section>
  );
}
