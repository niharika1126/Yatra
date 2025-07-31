import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigate
import durgaImage from "../../assets/durga.jpg"; // Ensure the image exists in assets

const DurgaC = () => {
  const navigate = useNavigate(); // Hook to navigate to /cart

  const handleAddToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="flex flex-col lg:flex-row px-6 py-12 gap-8 bg-white">
      {/* LEFT SIDE - 70% */}
      <div className="lg:w-[70%] space-y-6 pr-6">
        {/* Image */}
        <img
          src={durgaImage}
          alt="Durga Puja Tour"
          className="w-full h-auto rounded-xl shadow-md"
        />

        {/* Heading 1 */}
        <h2 className="text-3xl font-bold text-red-600">
          Durga Puja Tour: Experience the Unforgettable in Kolkata
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          When you take the Durga Puja tour to Kolkata, you're not just going to see one of India’s largest festivals. Durga Puja is a spectacle of devotion, artistry, and cultural vibrancy. Celebrated with unparalleled grandeur, this festival transforms the city into a colourful paradise of magnificent pandals, rhythmic beats of dhak, and mesmerizing cultural performances. The atmosphere is electrifying, as millions of devotees and visitors come together to witness the divine presence of Goddess Durga in her most splendid forms.
        </p>

        {/* Heading 2 */}
        <h2 className="text-3xl font-bold text-red-600">
          Comfort, Convenience and Experience with this Durga Puja Trip
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          At Yatra Veda, we ensure your spiritual journey is seamless and memorable. Our tour offers comfortable accommodations at centrally located hotels. Hassle-free transport arrangements by flights, trains, and private vehicles. Guided pandal visits with expert insights into the rituals and traditions. Delicious vegetarian and non-vegetarian meal options to experience authentic Bengali flavours. The 24/7 assistance and a 100% satisfaction guarantee.
        </p>

        {/* Heading 3 */}
        <h2 className="text-3xl font-bold text-red-600">Why Choose Yatra Veda</h2>
        <p className="text-gray-700 text-base leading-relaxed">
          Expertly curated religious and cultural tours with deep spiritual significance. Personalised experiences ensure a blend of devotion, history, and leisure. Local guides with in-depth knowledge of Kolkata’s culture and heritage. Unparalleled comfort and seamless travel logistics for a stress-free experience.
        </p>
      </div>

      {/* RIGHT SIDE - 30% */}
      <div className="lg:w-[30%] space-y-6 border border-gray-200 rounded-xl p-6 shadow-sm bg-white text-[15px]">
        {/* Package Overview */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-red-600">Durga Puja Tour Package in Kolkata</h2>
          <p className="text-gray-900 font-semibold text-lg">₹32,085.00 – ₹87,975.00</p>
          <p className="text-gray-700 leading-relaxed">
            Celebrate the Durga Puja Extravaganza in Kolkata, India’s grandest festival of devotion and culture. Witness stunning thematic pandals, intricate idols, and mesmerizing rituals as the city comes alive with vibrant celebrations. Explore heritage puja pandals, enjoy traditional Dhak beats, sindoor khela, and cultural performances, and indulge in authentic Bengali delicacies. With expert-guided tours, seamless travel, and premium accommodations, immerse yourself in the spirit of Durga Puja like never before. Book your unforgettable festive journey today!
          </p>
        </div>

        {/* Package Type */}
        <div className="space-y-2">
          <label className="block font-semibold text-base">Package Type</label>
          <div className="flex gap-2 flex-wrap">
            {["Festival", "Cultural", "Spiritual"].map((type) => (
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

        {/* Add to Cart Button with Route */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-base font-semibold"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DurgaC;
