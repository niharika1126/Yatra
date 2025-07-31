import React from "react";
import navratriImage from "../../assets/navratri.jpg"; // ✅ Make sure this image exists at the specified path

const NavgrahaC = () => {
  return (
    <div className="flex flex-col lg:flex-row px-6 py-12 gap-8 bg-white">
      {/* LEFT SIDE - 70% */}
      <div className="lg:w-[70%] space-y-6 pr-6">
        {/* Image */}
        <img
          src={navratriImage}
          alt="Navgraha Temple Tour"
          className="w-full h-auto rounded-xl shadow-md"
        />

        {/* Heading 1 */}
        <h2 className="text-3xl font-bold text-red-600">
          Navgraha Temple Tour: Explore Cosmic Energy Circuits
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          Embark on a transformative journey across the Navgraha temples dedicated to the nine celestial deities. These spiritually potent sites are revered for influencing cosmic forces in one’s life. Experience the serenity and devotion across temples, each resonating with the energy of a specific planet.
        </p>

        {/* Heading 2 */}
        <h2 className="text-3xl font-bold text-red-600">
          A Seamless Spiritual Experience
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          This curated tour ensures smooth transfers, knowledgeable guides, and carefully selected temple visits. Immerse in rituals, mantras, and architecture that date back centuries while gaining insights into Vedic astrology and planetary influences.
        </p>

        {/* Heading 3 */}
        <h2 className="text-3xl font-bold text-red-600">
          Why Choose Our Navgraha Tour?
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          We offer a thoughtful blend of spiritual education and peaceful travel. With comfortable accommodations, authentic local meals, and spiritual mentors onboard, this is more than just a tour—it's a cosmic realignment journey.
        </p>
      </div>

      {/* RIGHT SIDE - 30% */}
      <div className="lg:w-[30%] space-y-6 border border-gray-200 rounded-xl p-6 shadow-sm bg-white text-[15px]">
        {/* Package Overview */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-red-600">Navgraha Temple Tour</h2>
          <p className="text-gray-900 font-semibold text-lg">₹12,999.00 – ₹24,999.00</p>
          <p className="text-gray-700 leading-relaxed">
            Visit all nine sacred Navgraha temples across India with experienced guides and astrological insights. Includes transport, puja arrangements, accommodation, and meals. Perfect for spiritual seekers and astrology enthusiasts.
          </p>
        </div>

        {/* Package Type */}
        <div className="space-y-2">
          <label className="block font-semibold text-base">Package Type</label>
          <div className="flex gap-2 flex-wrap">
            {["Spiritual", "Astrology", "Temple Tour"].map((type) => (
              <button
                key={type}
                className="border border-red-500 text-red-600 px-4 py-2 rounded-full hover:bg-red-50 text-sm font-medium"
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Travel Type */}
        <div className="space-y-2">
          <label className="block font-semibold text-base">Travel Type</label>
          <div className="flex gap-2 flex-wrap">
            {["Solo", "Couple", "Group"].map((type) => (
              <button
                key={type}
                className="border border-red-500 text-red-600 px-4 py-2 rounded-full hover:bg-red-50 text-sm font-medium"
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Booking Date */}
        <div className="space-y-1">
          <label className="block font-semibold text-base">Select a booking date:</label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>

        {/* Number of Packages */}
        <div className="space-y-1">
          <label className="block font-semibold text-base">Number of Packages</label>
          <input
            type="number"
            min="1"
            defaultValue="1"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>

        {/* Payment Options */}
        <div className="space-y-2">
          <label className="block font-semibold text-base">Payment Options</label>
          <div className="text-sm space-y-2">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" /> Pay deposit ₹2,000.00
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" /> Pay full amount
            </label>
          </div>
        </div>

        {/* CTA */}
         <button
            onClick={() => navigate("/cart")}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-base font-semibold"
          >
            Add to Cart
          </button>
      </div>
    </div>
  );
};

export default NavgrahaC;