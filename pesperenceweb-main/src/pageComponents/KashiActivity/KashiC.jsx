import React from "react";
import kashiImage from "../../assets/kashi.jpg"; // Make sure this path is correct

const KashiC = () => {
  return (
    <div className="flex flex-col lg:flex-row px-6 py-12 gap-8 bg-white">
      {/* LEFT SIDE - 70% */}
      <div className="lg:w-[70%] space-y-6 pr-6">
        {/* Image */}
        <img
          src={kashiImage}
          alt="Kashi Day Tour"
          className="w-full h-auto rounded-xl shadow-md"
        />

        {/* Heading 1 */}
        <h2 className="text-3xl font-bold text-red-600">
          Kashi Tour: A Day in the City of Light
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          Discover the spiritual soul of India with our Kashi Day Tour. Wander through the ancient alleys, witness the sacred rituals by the Ganges, and immerse yourself in the aura of temples that echo with centuries of devotion. This one-day journey captures the very essence of Varanasi’s sacred rhythm.
        </p>

        {/* Heading 2 */}
        <h2 className="text-3xl font-bold text-red-600">
          Seamless Experience with Yatra Veda
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          With Yatra Veda, your comfort is our priority. Our guided Kashi Day Experience includes smooth local transport, friendly guides, and planned visits to key sites like Kashi Vishwanath Temple, Assi Ghat, and Sarnath. Enjoy a peaceful and enriching journey without any hassle.
        </p>

        {/* Heading 3 */}
        <h2 className="text-3xl font-bold text-red-600">
          Why Book the Kashi Tour with Us?
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          Expert-led spiritual experiences curated for seekers of peace and purpose. Local cultural insights, flexible group sizes, and verified on-ground partners ensure a journey worth remembering. Explore ancient heritage with trusted guidance.
        </p>
      </div>

      {/* RIGHT SIDE - 30% */}
      <div className="lg:w-[30%] space-y-6 border border-gray-200 rounded-xl p-6 shadow-sm bg-white text-[15px]">
        {/* Package Overview */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-red-600">Kashi Day Tour</h2>
          <p className="text-gray-900 font-semibold text-lg">₹3,999.00 – ₹7,499.00</p>
          <p className="text-gray-700 leading-relaxed">
            Dive into the ancient city of Kashi with a full-day guided tour. From the sacred Ganga Aarti at Dashashwamedh Ghat to a spiritual visit at Kashi Vishwanath, this experience is perfect for those seeking a day of divine immersion. Comfortable transport, lunch, and expert guidance included.
          </p>
        </div>

        {/* Package Type */}
        <div className="space-y-2">
          <label className="block font-semibold text-base">Package Type</label>
          <div className="flex gap-2 flex-wrap">
            {["Spiritual", "Cultural", "Heritage"].map((type) => (
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

export default KashiC;
