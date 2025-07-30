import React, { useState } from "react";
import { FaHotel, FaMapMarkerAlt, FaUtensils, FaCar, FaUserTie } from "react-icons/fa";

const DiwaliS = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabContent = {
    Overview: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-black">About the Tour Package</h2>
        <p className="text-gray-700 leading-relaxed">
          Celebrate Diwali 2025 in the spiritual heart of India with Yatra Veda. Varanasi, one of the world’s oldest living cities, comes alive with thousands of diyas (oil lamps), mesmerizing Ganga Aarti, and vibrant fireworks on the ghats of the sacred Ganges. Experience Lakshmi Puja, festive shopping in bustling markets, and the cultural richness of this holy city. This 4-day Diwali travel package is designed to give you a divine and immersive experience, ensuring you create happy spiritual memories.
        </p>

        <h2 className="text-2xl font-bold text-black">A Spiritual Sojourn</h2>
        <p className="text-gray-700 leading-relaxed">
          Varanasi, also known as Kashi, is the ultimate destination for those seeking a deeply spiritual and cultural experience. During Diwali, the city transforms into a realm of divine radiance, echoing with mantras, devotional music, and temple bells. Walk along the illuminated ghats, take a sacred dip in the Ganga, and participate in the age-old traditions of Lakshmi Puja and Kali Puja.
        </p>

        <h2 className="text-2xl font-bold text-black">Trip Highlights</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Witness the magnificent Diwali celebrations at the ghats.</li>
          <li>Participate in Lakshmi Puja and Kali Puja.</li>
          <li>Experience the divine Ganga Aarti with thousands of oil lamps.</li>
          <li>Shop for traditional goods and souvenirs in local markets.</li>
        </ul>
      </div>
    ),
    Itinerary: (
      <div className="space-y-4 text-gray-700">
        <h3 className="text-xl font-bold">Day 1: Arrival in Varanasi</h3>
        <p>Travel to Varanasi via flight, train, or cab. Check into your hotel and rest. Visit Kashi Vishwanath Temple and witness the grand Ganga Aarti. Enjoy dinner at a local restaurant.</p>

        <h4 className="font-semibold">Kashi Vishwanath Temple</h4>
        <p>The Kashi Vishwanath Temple is one of the most revered Jyotirlingas dedicated to Lord Shiva, attracting millions of devotees worldwide.</p>

        <h3 className="text-xl font-bold">Day 2: Immersive Spiritual Experience</h3>
        <p>Morning boat ride on the Ganges, visit Kaal Bhairav Temple and Sankat Mochan Hanuman Temple, explore local markets, participate in pre-Diwali rituals.</p>

        <h4 className="font-semibold">Kaal Bhairav Temple</h4>
        <p>Dedicated to Lord Kaal Bhairav, a fierce form of Shiva, protector of Kashi.</p>

        <h4 className="font-semibold">Sankat Mochan Hanuman Temple</h4>
        <p>One of the most famous Hanuman temples, believed to grant relief from troubles.</p>

        <h3 className="text-xl font-bold">Day 3: Grand Diwali Celebration</h3>
        <p>Visit Durga Temple, Tulsi Manas Temple, experience Diwali rituals, Lakshmi Puja, fireworks at the ghats.</p>

        <h3 className="text-xl font-bold">Day 4: Cultural Exploration</h3>
        <p>Visit Ramnagar Fort, witness Diwali immersion processions, explore Varanasi lanes.</p>

        <h3 className="text-xl font-bold">Day 5: Sarnath Visit and Departure</h3>
        <p>Travel to Sarnath, explore Buddhist sites like Dhamek Stupa and the Archaeological Museum, then depart.</p>
      </div>
    ),
    Cost: (
      <div className="space-y-4 text-gray-700">
        <h3 className="text-xl font-bold">Inclusions:</h3>
        <ul className="list-disc list-inside">
          <li>Accommodation in a comfortable hotel (twin sharing basis).</li>
          <li>Daily breakfast and dinner.</li>
          <li>Transportation (flight, train, or cab options available).</li>
          <li>Guided temple tours and sightseeing.</li>
          <li>Boat ride on the Ganges.</li>
          <li>All entry fees to temples and heritage sites.</li>
          <li>Assistance for Lakshmi Puja participation.</li>
        </ul>

        <h3 className="text-xl font-bold">Exclusions:</h3>
        <ul className="list-disc list-inside">
          <li>Personal expenses like shopping, special pujas, and temple donations.</li>
          <li>Lunch and snacks (except breakfast and dinner).</li>
          <li>Air/train fares (can be arranged at extra cost).</li>
          <li>Any extra expenses due to unforeseen circumstances.</li>
        </ul>
      </div>
    ),
    FAQ: (
      <div className="space-y-4 text-gray-700">
        <p><strong>Q:</strong> What makes the Varanasi Diwali Tour Package special?<br/>Ans: A unique blend of spirituality, cultural heritage, and festive joy.</p>
        <p><strong>Q:</strong> Do I need to carry anything specific?<br/>Ans: Comfortable shoes, power banks, festive attire, shawl, and a camera.</p>
        <p><strong>Q:</strong> Is the boat ride included?<br/>Ans: Yes, a morning boat ride on the Ganges is included.</p>
        <p><strong>Q:</strong> Are all temple visits guided?<br/>Ans: Yes, guides provide insights into the history and rituals.</p>
        <p><strong>Q:</strong> Can I participate in Lakshmi Puja?<br/>Ans: Yes, guests get the opportunity to participate in Lakshmi Puja.</p>
        <p><strong>Q:</strong> Is shopping possible?<br/>Ans: Absolutely! Time for shopping in Godowlia Market and Vishwanath Gali is included.</p>
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
        <h2 className="text-xl font-bold text-red-600">Trip Info</h2>
        <div className="space-y-6 text-gray-800 text-lg">
          <div className="flex items-start gap-3"><FaHotel className="text-red-600 mt-1" /><div><p className="font-semibold">Accommodation</p><p className="text-gray-600">Hotel accommodation included.</p></div></div>
          <div className="flex items-start gap-3"><FaUserTie className="text-red-600 mt-1" /><div><p className="font-semibold">Guide</p><p className="text-gray-600">Local guides included.</p></div></div>
          <div className="flex items-start gap-3"><FaMapMarkerAlt className="text-red-600 mt-1" /><div><p className="font-semibold">Departure City</p><p className="text-gray-600">Delhi</p></div></div>
          <div className="flex items-start gap-3"><FaUtensils className="text-red-600 mt-1" /><div><p className="font-semibold">Meals</p><p className="text-gray-600">All meals included.</p></div></div>
          <div className="flex items-start gap-3"><FaCar className="text-red-600 mt-1" /><div><p className="font-semibold">Transportation</p><p className="text-gray-600">Private Car, Flight or Train</p></div></div>
        </div>
      </div>
    </div>
  );
};

export default DiwaliS;
