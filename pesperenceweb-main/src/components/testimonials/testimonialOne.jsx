import React from "react";
import quoteImage from "../../assets/quotes.svg";
function Testimonials() {
  return (
    <section className="w-full  lg:w-mainwidth grid grid-cols-1 md:grid-cols-6 md:grid-rows-3 gap-4 md:gap-8 py-10 px-3 md:px-16 mx-auto">
      {/* One */}
      <div className="shadow-xl col-start-1 row-start-1 col-span-1 md:col-span-6 bg-important_text text-white rounded-md relative p-6">
        <img
          src={quoteImage}
          alt="Quote Icon"
          className="absolute  -top-6 lg:-top-10 -left-1 w-18 lg:w-24 h-16 lg:h-24"
        />
        <p className="text-sm md:text-lg mt-16 leading-relaxed">
          Working here has been a transformative journey. The culture fosters
          creativity, collaboration, and a deep respect for knowledge. From the
          supportive leadership to the inspiring research opportunities, every
          day feels meaningful. Joining this organization wasn't just a career
          move—it was a step toward fulfilling my purpose as a researcher.
        </p>
        <div className="mt-4 font-semibold text-right text-xs md:text-sm">
          <p>Dr. Marcus Lin, Research Scientist</p>
          <p>Yale University</p>
        </div>
      </div>

      {/* Two */}
      <div className="shadow-xl row-start-2 col-span-1 md:col-span-3 bg-important_text text-white rounded-md relative p-6">
        <img
          src={quoteImage}
          alt="Quote Icon"
          className="absolute  -top-6 lg:-top-10 -left-1 w-18 lg:w-24 h-16 lg:h-24"
        />
        <p className="text-sm md:text-lg mt-10 leading-relaxed">
          Working here has been a transformative journey. The culture fosters
          creativity, collaboration, and a deep respect for knowledge. From the
          supportive leadership to the inspiring research opportunities, every
          day feels meaningful. Joining this organization wasn't just a career
          move—it was a step toward fulfilling my purpose as a researcher.
        </p>
        <div className="mt-4 font-semibold text-right text-xs md:text-sm">
          <p>Dr. Marcus Lin, Research Scientist</p>
          <p>Yale University</p>
        </div>
      </div>

      {/* Three */}
      <div className="shadow-xl row-span-1 md:row-span-2  col-start-1 md:col-start-4 col-span-1 md:col-span-3 bg-important_text text-white rounded-md relative p-6">
        <img
          src={quoteImage}
          alt="Quote Icon"
          className="absolute  -top-6 lg:-top-10 -left-1 w-18 lg:w-24 h-16 lg:h-24"
        />
        <p className="text-sm md:text-lg mt-10 md:mt-36 leading-relaxed">
          Working here has been a transformative journey. The culture fosters
          creativity, collaboration, and a deep respect for knowledge. From the
          supportive leadership to the inspiring research opportunities, every
          day feels meaningful. Joining this organization wasn't just a career
          move—it was a step toward fulfilling my purpose as a researcher.
        </p>
        <div className="mt-4 text-semibold text-right text-xs md:text-sm">
          <p>Dr. Marcus Lin, Research Scientist</p>
          <p>Yale University</p>
        </div>
      </div>

      {/* Four */}
      <div className="row-start-3 col-span-1 md:col-span-3 bg-important_text text-white rounded-md relative p-6">
        <img
          src={quoteImage}
          alt="Quote Icon"
          className="absolute  -top-6 lg:-top-10 -left-1 w-18 lg:w-24 h-16 lg:h-24"
        />
        <p className="text-sm md:text-lg mt-10 leading-relaxed">
          Working here has been a transformative journey. The culture fosters
          creativity, collaboration, and a deep respect for knowledge. From the
          supportive leadership to the inspiring research opportunities, every
          day feels meaningful. Joining this organization wasn't just a career
          move—it was a step toward fulfilling my purpose as a researcher.
        </p>
        <div className="mt-4 text-semibold text-right text-xs md:text-sm">
          <p>Dr. Marcus Lin, Research Scientist</p>
          <p>Yale University</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
