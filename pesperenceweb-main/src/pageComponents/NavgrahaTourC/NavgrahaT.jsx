import React, { useState } from "react";
import { FaHotel, FaMapMarkerAlt, FaUtensils, FaCar, FaUserTie } from "react-icons/fa";

const NavgrahaT = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabContent = {
    Overview: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-black">About the Tour Package</h2>
        <p className="text-gray-700 leading-relaxed">
          Experience the grandeur and devotion of Durga Puja in Kolkata, the cultural capital of India...
        </p>
        <h2 className="text-2xl font-bold text-black">About Kolkata Durga Puja</h2>
        <p className="text-gray-700 leading-relaxed">
          Kolkata, during Durga Puja, transforms into a divine spectacle, where goddess Durga is worshipped...
        </p>
        <h2 className="text-2xl font-bold text-black">Trip Highlights</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Witness grand Durga Puja celebrations at famous pandals.</li>
          <li>Participate in the Dhunuchi dance...</li>
          <li>Visit historic temples and landmarks in Kolkata.</li>
          <li>Savour authentic Bengali cuisine...</li>
          <li>Experience the final immersion of Durga idols...</li>
          <li>Enjoy cultural performances...</li>
          <li>Boat ride on the Hooghly River...</li>
        </ul>
      </div>
    ),
    Itinerary: (
      <div className="space-y-4 text-gray-700">
        <h3 className="text-xl font-bold">Day 1: Arrival in Kolkata</h3>
        <p>Morning: Arrive in Kolkata... Evening: Seek blessings at Kalighat Temple...</p>
        <h4 className="font-semibold">Kalighat Temple</h4>
        <p>Significance: Kalighat Temple is one of the 51 Shakti Peethas...</p>
        <h3 className="text-xl font-bold">Day 2: Durga Puja Celebrations...</h3>
        <p>Morning: Visit Belur Math...</p>
        {/* Add rest of the days as required */}
      </div>
    ),
    Cost: (
      <div className="space-y-4 text-gray-700">
        <h3 className="text-xl font-bold">Inclusions:</h3>
        <ul className="list-disc list-inside">
          <li>Accommodation in premium hotels</li>
          <li>Daily breakfast and select meals</li>
          {/* More inclusions */}
        </ul>
        <h3 className="text-xl font-bold">Exclusions:</h3>
        <ul className="list-disc list-inside">
          <li>Airfare/train tickets to Kolkata</li>
          <li>Personal expenses and shopping</li>
          {/* More exclusions */}
        </ul>
      </div>
    ),
    FAQ: (
      <div className="space-y-4 text-gray-700">
        <p>
          <strong>Q:</strong> What is the best time to visit Kolkata for Durga Puja?<br />
          <strong>Ans:</strong> September–October, during the festival season.
        </p>
        {/* More Q&A */}
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
          <div className="flex items-start gap-3">
            <FaHotel className="text-red-600 mt-1" />
            <div><p className="font-semibold">Accommodation</p><p className="text-gray-600">Hotel accommodation included.</p></div>
          </div>
          <div className="flex items-start gap-3">
            <FaUserTie className="text-red-600 mt-1" />
            <div><p className="font-semibold">Guide</p><p className="text-gray-600">Local guides included.</p></div>
          </div>
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-red-600 mt-1" />
            <div><p className="font-semibold">Departure City</p><p className="text-gray-600">Delhi</p></div>
          </div>
          <div className="flex items-start gap-3">
            <FaUtensils className="text-red-600 mt-1" />
            <div><p className="font-semibold">Meals</p><p className="text-gray-600">All meals included.</p></div>
          </div>
          <div className="flex items-start gap-3">
            <FaCar className="text-red-600 mt-1" />
            <div><p className="font-semibold">Transportation</p><p className="text-gray-600">Private Car, Flight or Train</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavgrahaT;
