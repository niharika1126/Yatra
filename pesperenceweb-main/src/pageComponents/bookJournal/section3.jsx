import React from "react";
import medal from "../../assets/medal.svg";

export default function Section3() {
  return (
    <section className="w-mainwidth flex py-5 flex-col gap-16 items-center justify-center">
      <div className="flex flex-row gap-4 items-center justify-center">
        <img src={medal} alt="medal" className="object-cover w-8" />
        <div>
          <h2 className="font-bold">Global Insights </h2>
          <p>Access all major research from the past 90 days worldwide.</p>
        </div>
      </div>
      <div className="flex flex-row gap-4 text-right items-center justify-center">
        <div>
          <h2 className="font-bold">Simplified Knowledge</h2>
          <p>Complex studies presented in a clear, consumable format..</p>
        </div>
        <img src={medal} alt="medal" className="object-cover w-8" />
      </div>
      <div className="flex flex-row gap-4 items-center justify-center">
        <img src={medal} alt="medal" className="object-cover w-8" />
        <div>
          <h2 className="font-bold">Focused Analysis</h2>
          <p>Stay ahead with expert reviews on key breakthroughs in R&D.</p>
        </div>
      </div>{" "}
      <div className="flex flex-row gap-4 text-right items-center justify-center">
        <div>
          <h2 className="font-bold">Economic Lens</h2>
          <p>Explore R&D’s financial impact and emerging opportunities</p>
        </div>
        <img src={medal} alt="medal" className="object-cover w-8" />
      </div>
      <div className="flex flex-row gap-4 items-center justify-center">
        <img src={medal} alt="medal" className="object-cover w-8" />
        <div>
          <h2 className="font-bold">Intellectual Growth</h2>
          <p>
            Engage with insights that make you an active thinker in the economy
          </p>
        </div>
      </div>
    </section>
  );
}
