import React from "react";
import world from "../../assets/worldmap2.svg";
import location from "../../assets/location2.svg";

export default function WorldMap() {
  return (
    <section className=" items-center justify-center relative">
      <h1 className="text-center  text-2xl sm:text-4xl font-bold pb-10">
        Our Presence
      </h1>

      <img src={world} alt="worldmap" className="w-full h-auto object-cover" />

      {/* Canada */}
      <img
        src={location}
        alt="Canada"
        className="absolute top-canada-top left-canada-left sm:top-sm-canada-top sm:left-sm-canada-left w-3 md:w-8 md:h-16 w-12 h-12 transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* USA */}
      <img
        src={location}
        alt="USA"
        className="absolute top-usa-top left-usa-left sm:top-sm-usa-top sm:left-sm-usa-left w-3 md:w-8 md:h-16 w-12 h-12 transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* London */}
      <img
        src={location}
        alt="London"
        className="absolute top-london-top left-london-left sm:top-sm-london-top sm:left-sm-london-left w-3 md:w-8 md:h-16 w-12 h-12 transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Israel */}
      <img
        src={location}
        alt="Israel"
        className="absolute top-israel-top left-israel-left sm:top-sm-israel-top sm:left-sm-israel-left w-3 md:w-8 md:h-16 w-12 h-12 transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Saudi Arabia */}
      <img
        src={location}
        alt="Saudi Arabia"
        className="absolute top-saudi-arabia-top left-saudi-arabia-left sm:top-sm-saudi-arabia-top sm:left-sm-saudi-arabia-left w-3 md:w-8 md:h-16 w-10 h-12 transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Australia */}
      <img
        src={location}
        alt="Australia"
        className="absolute top-australia-top left-australia-left sm:top-sm-australia-top sm:left-sm-australia-left w-3 md:w-8 md:h-16 w-12 h-12 transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* South Africa */}
      <img
        src={location}
        alt="South Africa"
        className="absolute top-south-africa-top left-south-africa-left sm:top-sm-south-africa-top sm:left-sm-south-africa-left w-3 md:w-8 md:h-16 w-12 h-12 transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* India */}
      <img
        src={location}
        alt="India"
        className="absolute top-india-top left-india-left sm:top-sm-india-top sm:left-sm-india-left w-3 md:w-8 md:h-16 w-12 h-12 transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Japan */}
      <img
        src={location}
        alt="Japan"
        className="absolute top-japan-top left-japan-left sm:top-sm-japan-top sm:left-sm-japan-left w-3 md:w-8 md:h-16 w-12 h-12 transform -translate-x-1/2 -translate-y-1/2"
      />
    </section>
  );
}
