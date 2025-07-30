import React from "react";
import diwaliImage from "../assets/diwali.jpg"; // Still using same image

const VaranasiC = () => {
  return (
    <div className="flex flex-col lg:flex-row px-6 py-12 gap-8 bg-white">
      {/* LEFT SIDE - 70% */}
      <div className="lg:w-[70%] space-y-6 pr-6">
        {/* Image */}
        <img
          src={diwaliImage}
          alt="Ganga Aarti Varanasi"
          className="w-full h-auto rounded-xl shadow-md"
        />

        {/* Heading 1 */}
        <h2 className="text-3xl font-bold text-red-600">
          Ganga Aarti at Dashashwamedh Ghat and Assi Ghat
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          Dive into the divine atmosphere of Varanasi with a single-day activity curated around the mesmerizing Ganga Aarti at Dashashwamedh and Assi Ghat. This spiritual journey brings together the sacred chants, flickering diyas, and cultural richness of India’s oldest city, creating an unforgettable evening experience.
        </p>

        {/* Heading 2 */}
        <h2 className="text-3xl font-bold text-red-600">
          All-Inclusive Comfort and Local Guidance
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          Your journey includes seamless pickup and drop from your location, a dedicated local tourist guide, and spiritual insights at every step. Enjoy stress-free navigation with pre-arranged transport, spiritual site access, and personal attention throughout the trip.
        </p>

        {/* Heading 3 */}
        <h2 className="text-3xl font-bold text-red-600">
          Why Choose Yatra Veda for a Varanasi Day Trip?
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          Trusted for providing authentic spiritual journeys, Yatra Veda offers local guides, reliable transportation, and curated experiences at key ghats. Enjoy the energy of Varanasi without planning stress — just arrive and immerse in the divine. Ideal for solo travelers, couples, and families.
        </p>
      </div>

      {/* RIGHT SIDE - 30% */}
      <div className="lg:w-[30%] space-y-6 border border-gray-200 rounded-xl p-6 shadow-sm bg-white text-[15px]">
        {/* Package Overview */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-red-600">Varanasi Activity Experience</h2>
          <p className="text-gray-900 font-semibold text-lg">₹1,999.00 – ₹5,999.00</p>
          <p className="text-gray-700 leading-relaxed">
            A spiritually immersive single-day activity exploring Ganga Aarti at both Dashashwamedh and Assi Ghat. Includes guided ghat walk, private transfers, boat ride (optional), spiritual rituals, and cultural interactions. Ideal for all age groups seeking serenity and insight into Varanasi's timeless soul.
          </p>
        </div>

        {/* Package Type */}
        <div className="space-y-2">
          <label className="block font-semibold text-base">Package Type</label>
          <div className="flex gap-2 flex-wrap">
            {["Luxury", "Premium", "Standard"].map((type) => (
              <button
                key={type}
                className="border border-red-500 text-red-600 px-4 py-2 rounded-full hover:bg-red-50 text-sm font-medium"
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Number of People */}
        <div className="space-y-2">
          <label className="block font-semibold text-base">Number of People</label>
          <div className="flex gap-2 flex-wrap">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                className="border border-red-500 text-red-600 px-4 py-2 rounded-full hover:bg-red-50 text-sm font-medium"
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Mode of Transportation */}
        <div className="space-y-2">
          <label className="block font-semibold text-base">Mode of Transportation</label>
          <div className="flex gap-2 flex-wrap">
            {["Train", "Flight", "Cab", "Bus"].map((mode) => (
              <button
                key={mode}
                className="border border-red-500 text-red-600 px-4 py-2 rounded-full hover:bg-red-50 text-sm font-medium"
              >
                {mode}
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
              <input type="radio" name="payment" /> Pay deposit ₹500.00
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" /> Pay full amount
            </label>
          </div>
        </div>

        {/* CTA */}
        <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-base font-semibold">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default VaranasiC;
