import React from "react";
import location from "../../assets/location.svg";
import user from "../../assets/user.svg";

export default function Acheivements() {
  return (
    <section className="w-mainwidth flex flex-col items-center gap-4 text-black">
      {/* Description text for the section */}
      <p className="text-base text-center text-justify w-11/12 lg:w-9/12">
        Coherence: Journals of Applied Sciences, published by Persperence
        Envision under Project Omniscience, is a premium monthly journal focused
        on high-impact, recent advancements across applied sciences. With
        content selected from top scientific journals, patents, industry
        reports, and conference findings, Coherence emphasizes research with
        tangible impact, often within 90 days of discovery. Our expert editorial
        board cross-references and validates each paper, ensuring accuracy and
        relevance while maintaining an exceptionally low retraction rate.
        Coherence provides concise, interdisciplinary summaries, offering
        researchers, scientists, and independent professionals a credible,
        accessible platform to stay informed on transformative global
        innovations.
      </p>

      {/* Achievements section: List of key achievements with icons */}
      <div className="w-8/12 bg-white shadow-2xl flex flex-col md:flex-row items-center justify-between py-8 px-8 md:px-4 lg:px-22 xl:px-32 rounded-lg mt-8 gap-8">
        {/* First achievement: Global presence */}
        <div className="flex items-center flex-col gap-2 w-full md:w-auto">
          <img src={location} alt="Global presence icon" />
          <p className="text-2xl font-bold">15+ Countries</p>
          <p className="text-sm">with a global presence</p>
        </div>

        {/* Second achievement: Researchers */}
        <div className="flex items-center flex-col gap-2 w-full md:w-auto">
          <img src={user} alt="Researchers icon" />
          <p className="text-2xl font-bold">50K+ Researchers</p>
          <p className="text-sm">Globally empowering innovation</p>
        </div>
      </div>
    </section>
  );
}
