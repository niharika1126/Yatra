import React from "react";
import diwaliImage from "../assets/diwali.jpg"; // Make sure this path is correct

const DiwaliC = () => {
  return (
    <div className="flex flex-col lg:flex-row px-6 py-12 gap-8 bg-white">
      {/* LEFT SIDE - 70% */}
      <div className="lg:w-[70%] space-y-6 pr-6">
        {/* Image */}
        <img
          src={diwaliImage}
          alt="Diwali Celebration"
          className="w-full h-auto rounded-xl shadow-md"
        />

        {/* Heading 1 */}
        <h2 className="text-3xl font-bold text-red-600">
          Diwali Tour: A Divine Celebration of Lights
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          Experience the best that India has to offer with the festival of lights – Diwali Tour, in the spiritual heart of India with Yatra Veda. Witness the grandeur of Ganga Aarti, partake in sacred Lakshmi Puja, and explore the illuminated ghats of Varanasi. This 4-day curated spiritual tour blends tradition, devotion, and celebration, ensuring an unforgettable Diwali experience filled with divine blessings and cultural richness.
        </p>

        {/* Heading 2 */}
        <h2 className="text-3xl font-bold text-red-600">
          Comfort and Convenience at the Diwali Festival Trip
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          At Yatra Veda, we prioritize your comfort, convenience, and spiritual fulfilment. Our handpicked hotels, seamless transportation options (flight, train, cab), and local expert guides ensure a hassle-free travel experience. We guarantee 100% satisfaction, ensuring you return with cherished spiritual memories.
        </p>

        {/* Heading 3 */}
        <h2 className="text-3xl font-bold text-red-600">
          Why Choose Yatra Veda for the Diwali Holiday Tour
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          Expertly curated spiritual tours tailored for deep religious experiences. Comfortable stays at well-rated accommodations. Local insights from knowledgeable guides to enhance your journey. Hassle-free transportation options. A trusted brand dedicated to providing exceptional religious travel experiences. Range of spiritual, religious and wellness travel experiences for those looking for something different.
        </p>
      </div>

      {/* RIGHT SIDE - 30% */}
      <div className="lg:w-[30%] space-y-6 border border-gray-200 rounded-xl p-6 shadow-sm bg-white text-[15px]">
        {/* Package Overview */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-red-600">Diwali Tour Packages</h2>
          <p className="text-gray-900 font-semibold text-lg">₹25,588.00 – ₹69,345.00</p>
          <p className="text-gray-700 leading-relaxed">
            Experience the magic of Diwali in Varanasi, where the holy city transforms into a radiant spectacle of lights and devotion. Witness the breathtaking Ganga Aarti at Dashashwamedh Ghat, the ghats illuminated with thousands of diyas, and a sky lit up with fireworks. Take part in traditional Lakshmi Puja, cultural performances, and festive feasts. With guided tours, comfortable stays, and seamless travel, immerse yourself in this unforgettable celebration of light and spirituality. Book your Diwali experience today!
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

        {/* Travel Type */}
        <div className="space-y-2">
          <label className="block font-semibold text-base">Travel Type</label>
          <div className="flex gap-2 flex-wrap">
            {["Couple", "Family", "Solo"].map((type) => (
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
        <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-base font-semibold">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DiwaliC;
