import React from "react";
import quoteImage from "../../assets/quote.svg";

export default function Testimonial({
  description,
  Name,
  Role,
  University,
  Company,
}) {
  return (
    <>
      <div className="w-mainwidth shadow-xl md:w-10/12 lg:w-8/12 mb-4 bg-important_text text-white rounded-md relative p-6">
        <img
          src={quoteImage}
          alt="Quote Icon"
          className="absolute -top-6 lg:-top-10 left-1 w-16 lg:w-20 h-16 lg:h-24"
        />
        <p className="text-sm md:text-lg mt-16 leading-relaxed">
          {description}
        </p>
        <div className="mt-4 md:text-sm font-semibold text-right text-xs md:text-sm">
          <p>
            {Name}, {Role}
          </p>
          {University ? <p>{University}</p> : <p>{Company}</p>}
        </div>
      </div>
    </>
  );
}
