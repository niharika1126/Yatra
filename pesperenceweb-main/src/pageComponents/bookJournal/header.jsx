import React from "react";
import journal from "../../assets/Background.svg";
import Search from "../../components/searchbar/search";

export default function Header() {
  return (
    <section className="w-full bg-primary text-white py-6 px-4 lg:px-64 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-32 lg:gap-56 relative">
      {/* Image of a journal, with responsive width settings */}
      <img
        src={journal}
        alt="journal pic"
        className="h-60 md:mx-12 lg:h-72 md:mb-16  max-w-xs md:max-w-sm"
      />
      {/* text */}
      <div className="mb-16">
        <h1 className="md:font-bold md:text-xl lg:text-3xl mb-5">
          Coherence Journal of Applied Science
        </h1>
        <p className="md:text-base md:pr-4 lg:text-lg text-center md:text-left leading-relaxed lg:max-w-md">
          Transforming curiosity into clarity by bridging minds with credible,
          research-driven information through precise and intuitive search
          results.
        </p>
        <div className="flex gap-20 px-4 mt-8">
          <p className="text-lg lg:text-2xl font-bold ">$ 19.95</p>
          <button className="rounded-md text-sm px-4  py-2 lg:px-10 lg:py-2 bg-secondary">
            <a href="#" className="">
              By on Amazon
            </a>
          </button>
        </div>
      </div>

      {/* Search component placed absolutely within the header, positioned towards the bottom */}
      <div className="absolute   bottom-[-40px] md:bottom-[-60px] w-full left-1/2 transform -translate-x-1/2">
        {/* Search component to allow users to search */}
        <Search />
      </div>
    </section>
  );
}
