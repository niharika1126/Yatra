import React from "react";
import settings from "../../assets/settings.svg";

function Categories({ label }) {
  return (
    <div className="bg-white text-xs  sm:w-categoryWidth text-center shadow-lg rounded sm:rounded-md px-1 sm:px-4 sm:py-1">
      <p>{label}</p>
    </div>
  );
}

export default function Filters() {
  const labels = ["Books", "Journals", "Articles", "Reports"];

  return (
    <section className="w-mainwidth flex gap-4 sm:gap-0 justify-between">
      {/* fliter section */}
      <div className="flex gap-4 sm:gap-4 items-center">
        <h3 className="text-important_text text-xs sm:py-1">
          2,783 Results Found
        </h3>
        {labels.map((label) => (
          <Categories key={label} label={label} />
        ))}
      </div>
      <div>
        <button className="btn w-9 ">
          <img src={settings} alt="Settings" />
        </button>
      </div>
    </section>
  );
}
