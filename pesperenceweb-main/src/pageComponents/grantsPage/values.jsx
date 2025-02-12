import React from "react";
import notebook from "../../assets/notebook.svg";
export default function Values() {
  return (
    <section className="flex py-2 w-mainwidth lg:w-6/12  gap-6 sm:gap-20 bg-white shadow-2xl rounded-md items-center justify-center">
      <img src={notebook} alt="notebook" className="w-28 sm:w-40" />
      <h1 className="font-bold">
        Upto
        <br />
        <span className="text-2xl sm:text-3xl font-bold">
          $ 50,0000
        </span> <br /> In Grants Every Year
      </h1>
    </section>
  );
}
