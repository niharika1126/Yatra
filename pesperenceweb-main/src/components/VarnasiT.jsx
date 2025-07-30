import React, { useState } from "react";
import { FaHotel, FaMapMarkerAlt, FaUtensils, FaCar, FaUserTie } from "react-icons/fa";

const VaranasiT = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabContent = {
    Overview: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-black">About the Activity</h2>
        <p className="text-gray-700 leading-relaxed">
          Discover the spiritual charm of Varanasi with this immersive single-day activity tour. From the sacred Ganga Aarti to exploring the historical ghats and temples, this journey brings you the essence of India’s holiest city — all in a day. Whether you're here for culture, spirituality, or just a soulful experience, Varanasi offers timeless magic.
        </p>

        <h2 className="text-2xl font-bold text-black">A Day in Varanasi</h2>
        <p className="text-gray-700 leading-relaxed">
          Begin your morning with a peaceful boat ride on the Ganges, followed by guided visits to iconic temples like Kashi Vishwanath and Sankat Mochan. Witness the spiritual rhythm of the city and end your day with the mesmerizing Ganga Aarti — an unforgettable spiritual ceremony by the riverside.
        </p>

        <h2 className="text-2xl font-bold text-black">Activity Highlights</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Morning boat ride on the Ganga River.</li>
          <li>Visit to Kashi Vishwanath Temple & Sankat Mochan Hanuman Temple.</li>
          <li>Explore traditional bazaars and local life.</li>
          <li>Evening Ganga Aarti experience at Dashashwamedh Ghat.</li>
        </ul>
      </div>
    ),
    Itinerary: (
      <div className="space-y-4 text-gray-700">
        <h3 className="text-xl font-bold">Day Schedule</h3>
        <p><strong>6:00 AM:</strong> Sunrise boat ride along the Ganges.</p>
        <p><strong>8:00 AM:</strong> Breakfast at a local eatery.</p>
        <p><strong>9:00 AM:</strong> Visit Kashi Vishwanath Temple.</p>
        <p><strong>11:00 AM:</strong> Explore local markets (Vishwanath Gali).</p>
        <p><strong>1:00 PM:</strong> Lunch at traditional veg restaurant.</p>
        <p><strong>3:00 PM:</strong> Visit Sankat Mochan and Durga Kund temples.</p>
        <p><strong>5:00 PM:</strong> Walk through ghats and relax by the river.</p>
        <p><strong>6:30 PM:</strong> Witness the Ganga Aarti at Dashashwamedh Ghat.</p>
        <p><strong>8:00 PM:</strong> Return to hotel / departure.</p>
      </div>
    ),
    Cost: (
      <div className="space-y-4 text-gray-700">
        <h3 className="text-xl font-bold">Inclusions:</h3>
        <ul className="list-disc list-inside">
          <li>Guided city tour.</li>
          <li>Boat ride on the Ganges.</li>
          <li>Breakfast and lunch included.</li>
          <li>All entry tickets and local transport.</li>
        </ul>

        <h3 className="text-xl font-bold">Exclusions:</h3>
        <ul className="list-disc list-inside">
          <li>Dinner and snacks.</li>
          <li>Personal expenses and shopping.</li>
          <li>Tips to guide/driver.</li>
        </ul>
      </div>
    ),
    FAQ: (
      <div className="space-y-4 text-gray-700">
        <p><strong>Q:</strong> Can I attend the Aarti ceremony?<br />Ans: Yes, it's a key part of this tour and not to be missed.</p>
        <p><strong>Q:</strong> Are meals provided?<br />Ans: Breakfast and lunch are included.</p>
        <p><strong>Q:</strong> Is the tour guided?<br />Ans: Yes, an experienced local guide will be with you.</p>
        <p><strong>Q:</strong> What should I wear?<br />Ans: Modest, comfortable clothing and walking shoes.</p>
        <p><strong>Q:</strong> Will I have time to shop?<br />Ans: Yes, we include time for exploring local markets.</p>
      </div>
    ),
    Download: (
      <form className="space-y-4">
        <div>
          <label className="block font-semibold">Full Name</label>
          <input type="text" className="w-full border rounded-lg px-3 py-2" placeholder="Enter your name" />
        </div>
        <div>
          <label className="block font-semibold">Email</label>
          <input type="email" className="w-full border rounded-lg px-3 py-2" placeholder="Enter your email" />
        </div>
        <div>
          <label className="block font-semibold">Mobile</label>
          <input type="tel" className="w-full border rounded-lg px-3 py-2" placeholder="Enter your mobile number" />
        </div>
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg">Submit</button>
      </form>
    ),
  };

  return (
    <div className="flex flex-col lg:flex-row px-6 py-12 gap-8 bg-white">
      {/* LEFT SECTION */}
      <div className="lg:w-[70%] space-y-6 pr-6">
        {/* Tabs */}
        <div className="flex gap-6 border-b border-gray-200 pb-2 text-red-600 font-semibold">
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${activeTab === tab ? "border-b-2 border-red-600" : ""} pb-2`}
            >
              {tab === "Download" ? "Download Brochure" : tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div>{tabContent[activeTab]}</div>
      </div>

      {/* RIGHT SECTION */}
      <div className="lg:w-[30%] border border-gray-200 rounded-xl p-6 shadow-sm bg-white text-[15px] space-y-6">
        <h2 className="text-xl font-bold text-red-600">Activity Info</h2>
        <div className="space-y-6 text-gray-800 text-lg">
          <div className="flex items-start gap-3"><FaHotel className="text-red-600 mt-1" /><div><p className="font-semibold">Stay (Optional)</p><p className="text-gray-600">Can be arranged on request.</p></div></div>
          <div className="flex items-start gap-3"><FaUserTie className="text-red-600 mt-1" /><div><p className="font-semibold">Guide</p><p className="text-gray-600">Local guide for the full day.</p></div></div>
          <div className="flex items-start gap-3"><FaMapMarkerAlt className="text-red-600 mt-1" /><div><p className="font-semibold">Start Location</p><p className="text-gray-600">Varanasi City Center</p></div></div>
          <div className="flex items-start gap-3"><FaUtensils className="text-red-600 mt-1" /><div><p className="font-semibold">Meals</p><p className="text-gray-600">Breakfast & Lunch included.</p></div></div>
          <div className="flex items-start gap-3"><FaCar className="text-red-600 mt-1" /><div><p className="font-semibold">Transport</p><p className="text-gray-600">Included for all site visits.</p></div></div>
        </div>
      </div>
    </div>
  );
};

export default VaranasiT;
