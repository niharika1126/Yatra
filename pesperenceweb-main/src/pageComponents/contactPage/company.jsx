import React from "react";
import location from "../../assets/location.svg";
import phone from "../../assets/vector.svg";
import gmail from "../../assets/vector1.svg";

export default function CompanyDescription() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 px-4 py-10">
      <p className="text-2xl sm:text-4xl font-bold text-center">Persperence</p>

      {/* Description text for the section */}

      <p className="tracking-tight text-md sm:text-lg text-center  mx-6 leading-7 sm:max-w-6xl ">
        Persperence bridges the gap between groundbreaking research and global
        accessibility by delivering the latest insights from research papers,
        patents, and scientific advancements to educational institutions,
        individual researchers, and citizen scientists. Beyond this, Persperence
        conducts its own research and experimentation through state-of-the-art
        R&D labs established worldwide. These facilities, serving both private
        and government organizations, produce credible, high-quality results
        that drive innovation and advance scientific discovery.
      </p>

      {/* Contact Information Cards */}

      <div className="flex flex-wrap justify-center mx-4 gap-10 md:gap-8 sm:gap-36 mt-3">
        <div className="rounded-md flex flex-col bg-Yellow gap-4 items-center justify-center  px-10 py-6 w-72 sm:w-80 ">
          <img src={location} alt="Location Icon" className="w-12 sm:w-16" />
          <p className="text-sm text-center">
            RedBridge, London <br />
            United Kingdom
          </p>
        </div>

        <div className="rounded-md flex flex-col bg-Yellow gap-4 items-center justify-center px-10 py-6 w-72 sm:w-80 ">
          <img src={phone} alt="Phone Icon" className="w-16" />
          <p className="text-sm">+91 7800699503</p>
        </div>

        <div className="rounded-md flex flex-col bg-Yellow gap-4 sm:gap-6 items-center justify-center px-10 py-6 w-72 sm:w-80">
          <img src={gmail} alt="Gmail Icon" className="w-20 sm:w-16 md:w-20 " />
          <p className="text-sm">hello@persperence.com</p>
        </div>
      </div>
    </section>
  );
}
