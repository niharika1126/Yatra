import React from "react";
import navratriImage from "../../assets/navratri.jpg"; // ✅ Make sure this image exists at the specified path

const NavratriC = () => {
  return (
    <div className="flex flex-col lg:flex-row px-6 py-12 gap-8 bg-white">
      {/* LEFT SIDE - 70% */}
      <div className="lg:w-[70%] space-y-6 pr-6">
        {/* Image */}
        <img
          src={navratriImage}
          alt="Navratri Tour"
          className="w-full h-auto rounded-xl shadow-md"
        />

        {/* Heading 1 */}
        <h2 className="text-3xl font-bold text-red-600">
          Navratri Tour in Gujarat: Celebrate Divine Femininity
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          Experience the vibrant and spiritually charged festival of Navratri in the heart of Gujarat. Dance to the rhythm of Garba, explore elaborately decorated temples, and immerse in the divine celebration of the nine goddesses.
        </p>

        {/* Heading 2 */}
        <h2 className="text-3xl font-bold text-red-600">
          A Spiritual and Cultural Extravaganza
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          This tour offers a unique blend of devotion and festivity. Attend traditional Aartis, join community dances, and witness the energy that lights up every town and village during these nine sacred nights.
        </p>

        {/* Heading 3 */}
        <h2 className="text-3xl font-bold text-red-600">
          Why Choose Our Navratri Tour?
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          Enjoy a curated experience with guided cultural immersion, safe travel, festive meals, and access to popular Garba venues. Perfect for those seeking celebration with a spiritual essence.
        </p>
      </div>

      {/* RIGHT SIDE - 30% */}
      <div className="lg:w-[30%] space-y-6 border border-gray-200 rounded-xl p-6 shadow-sm bg-white text-[15px]">
        {/* Package Overview */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-red-600">Navratri Tour in Gujarat</h2>
          <p className="text-gray-900 font-semibold text-lg">₹9,999.00 – ₹19,999.00</p>
          <p className="text-gray-700 leading-relaxed">
            Join the divine celebration of Navratri in Gujarat. Includes accommodation, Garba passes, guided visits to temples, festive meals, and cultural workshops. A perfect journey for those who seek both joy and devotion.
          </p>
        </div>

        {/* Package Type */}
        <div className="space-y-2">
          <label className="block font-semibold text-base">Package Type</label>
          <div className="flex gap-2 flex-wrap">
            {"Festival", "Cultural", "Spiritual".split(", ").map((type) => (
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
            {"Solo", "Couple", "Group".split(", ").map((type) => (
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
              <input type="radio" name="payment" /> Pay deposit ₹1,000.00
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

export default NavratriC;

