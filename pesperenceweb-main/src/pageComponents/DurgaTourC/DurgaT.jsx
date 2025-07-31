import React, { useState } from "react";
import { FaHotel, FaMapMarkerAlt, FaUtensils, FaCar, FaUserTie } from "react-icons/fa";

const DurgaT = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabContent = {
    Overview: (
     <div className="space-y-6">
  <h2 className="text-2xl font-bold text-black">About the Tour Package</h2>
  <p className="text-gray-700 leading-relaxed">
    Experience the grandeur and devotion of Durga Puja in Kolkata, the cultural capital of India. This 5-day tour takes you on an immersive spiritual journey through iconic temples, stunning Durga Puja pandals, cultural performances, and Kolkata’s historical landmarks. Witness the vibrancy, artistic excellence, and deep-rooted traditions that make this festival the most awaited celebration in West Bengal. From soul-stirring aartis to immersive cultural experiences, this tour is designed to give you an unforgettable spiritual sojourn.
  </p>

  <h2 className="text-2xl font-bold text-black">About Kolkata Durga Puja</h2>
  <p className="text-gray-700 leading-relaxed">
    Kolkata, during Durga Puja, transforms into a divine spectacle, where goddess Durga is worshipped with immense faith and joy. Our tour includes visits to some of the most famous pandals, historic temples like Kalighat and Dakshineswar, and the serene Belur Math. Experience the Dhak beats, Dhunuchi dance, and the final immersion of Durga idols on the banks of the Hooghly River, a moment of both celebration and emotional farewell.
  </p>

  <h2 className="text-2xl font-bold text-black">Trip Highlights</h2>
  <ul className="list-disc list-inside text-gray-700">
    <li>Witness grand Durga Puja celebrations at famous pandals.</li>
    <li>Participate in the Dhunuchi dance, a unique offering to Goddess Durga.</li>
    <li>Visit historic temples and landmarks in Kolkata.</li>
    <li>Savour authentic Bengali cuisine at renowned restaurants.</li>
    <li>Experience the final immersion of Durga idols on the Hooghly River.</li>
    <li>Enjoy cultural performances, traditional music, and local artistry.</li>
    <li>Boat ride on the Hooghly River, capturing Kolkata’s scenic beauty.</li>
  </ul>
</div>

    ),
    Itinerary: (
     <div className="space-y-4 text-gray-700">
  <h3 className="text-xl font-bold">Day 1: Arrival in Kolkata</h3>
  <p>Morning: Arrive in Kolkata via flight or train and check into your hotel.  
  Afternoon: Visit Victoria Memorial, a symbol of British India, and explore the Indian Museum, the oldest and largest museum in India.  
  Evening: Seek blessings at Kalighat Temple, one of the 51 Shakti Peethas dedicated to Goddess Kali.  
  Stay: Overnight in Kolkata.</p>

  <h4 className="font-semibold">Kalighat Temple</h4>
  <p>Significance: Kalighat Temple is one of the 51 Shakti Peethas, where it is believed that a part of Sati’s body fell, making it a highly revered site for devotees of Goddess Kali.  
  Cultural Reference: Kalighat Temple is an integral part of Bengali religious traditions and plays a crucial role in Kolkata’s Durga Puja celebrations.</p>

  <h3 className="text-xl font-bold">Day 2: Durga Puja Celebrations – Visit Puja Pandals</h3>
  <p>Morning: Visit Belur Math and explore Dakshineswar Kali Temple.  
  Afternoon: Savor Bengali delicacies and visit famous Durga Puja pandals like Bengali Club, Sreebhumi Sporting Club, and Kumartuli.  
  Evening: Experience cultural performances and local street food.  
  Stay: Overnight in Kolkata.</p>

  <h4 className="font-semibold">Dakshineswar Kali Temple</h4>
  <p>Significance: A major pilgrimage site built in 1855, closely associated with Sri Ramakrishna Paramahamsa.  
  Cultural Reference: During Durga Puja, the temple hosts special prayers, bhajans, and spiritual discourses.</p>

  <h3 className="text-xl font-bold">Day 3: Durga Puja at Iconic Pandals and Cultural Exploration</h3>
  <p>Morning: Visit renowned puja pandals such as Shibpur, Ahmedpur, and Mohammad Ali Park.  
  Afternoon: Explore College Street and Marble Palace.  
  Evening: Witness Durga idol immersion processions along the Hooghly River.  
  Stay: Overnight in Kolkata.</p>

  <h4 className="font-semibold">Shibpur Durga Puja Temple</h4>
  <p>Significance: One of the oldest and most revered Durga Puja sites in Kolkata.  
  Cultural Reference: Known for traditional rituals and community-driven celebrations.</p>

  <h4 className="font-semibold">Ahmedpur Durga Puja Temple</h4>
  <p>Significance: Popular for elaborate rituals and grand festivities.  
  Cultural Reference: A hub of religious ceremonies and traditional Bengali performances.</p>

  <h4 className="font-semibold">Mohammad Ali Park Durga Puja</h4>
  <p>Significance: Famous for its artistic idols and thematic pandals.  
  Cultural Reference: Represents Kolkata’s creative and devotional spirit during Durga Puja.</p>

  <h3 className="text-xl font-bold">Day 4: Cultural Exploration and Puja Celebrations</h3>
  <p>Morning: Enjoy a boat ride on the Hooghly River.  
  Afternoon: Visit Jain Temple and explore New Market and Gariahat Market.  
  Evening: Witness spectacular Durga Puja processions.  
  Stay: Overnight in Kolkata.</p>

  <h4 className="font-semibold">Jain Temple</h4>
  <p>Significance: Known as Parasnath Temple, dedicated to Shitalnath Ji with stunning glasswork and marble carvings.  
  Cultural Reference: Celebrates Jain traditions and festivals like Mahavir Jayanti and Paryushan Parva.</p>

  <h3 className="text-xl font-bold">Day 5: Explore Kolkata’s Legacy and Departure</h3>
  <p>Morning: Visit Howrah Bridge and Marble Palace.  
  Afternoon: Lunch at Peter Cat and visit Eden Gardens.  
  Evening: Final shopping at New Market and Gariahat Market before departure.</p>

  <h4 className="font-semibold">Howrah Bridge</h4>
  <p>Iconic cantilever bridge offering breathtaking views over the Hooghly River — a landmark of Kolkata.</p>

  <h4 className="font-semibold">New Market</h4>
  <p>Historic market from 1874, offering everything from ethnic wear to souvenirs — a must-visit for shoppers.</p>

  <h4 className="font-semibold">Gariahat Market</h4>
  <p>Famous for Bengali sarees, jewelry, handicrafts, and authentic street food — a vibrant shopping paradise.</p>
</div>

    ),
    Cost: (
      <div className="space-y-4 text-gray-700">
  <h3 className="text-xl font-bold">Inclusions:</h3>
  <ul className="list-disc list-inside">
    <li>Accommodation in premium hotels</li>
    <li>Daily breakfast and select meals</li>
    <li>Guided tours to temples and landmarks</li>
    <li>Transport within Kolkata</li>
    <li>Entry tickets to attractions</li>
    <li>Cultural performances and local experiences</li>
    <li>24/7 travel assistance</li>
  </ul>

  <h3 className="text-xl font-bold">Exclusions:</h3>
  <ul className="list-disc list-inside">
    <li>Airfare/train tickets to Kolkata</li>
    <li>Personal expenses and shopping</li>
    <li>Additional meals and beverages</li>
    <li>Travel Insurance</li>
    <li>Special puja offerings (available on request)</li>
  </ul>
</div>

    ),
    FAQ: (
      <div className="space-y-4 text-gray-700">
  <p>
    <strong>Q:</strong> What is the best time to visit Kolkata for Durga Puja?<br />
    <strong>Ans:</strong> Durga Puja typically falls in September or October. This is the most festive and vibrant time to experience Kolkata.
  </p>
  <p>
    <strong>Q:</strong> What kind of accommodation is provided?<br />
    <strong>Ans:</strong> We offer comfortable and centrally located hotels, ensuring a luxurious and convenient stay.
  </p>
  <p>
    <strong>Q:</strong> Are temple visits guided in the Durga Puja Tour Package in Kolkata?<br />
    <strong>Ans:</strong> Yes, our expert guides provide detailed insights into the history, significance, and rituals at each temple.
  </p>
  <p>
    <strong>Q:</strong> Can I participate in Puja rituals?<br />
    <strong>Ans:</strong> Yes, depending on availability, you can take part in special aartis and puja ceremonies.
  </p>
  <p>
    <strong>Q:</strong> What type of food options are available?<br />
    <strong>Ans:</strong> We offer authentic Bengali meals at famous restaurants, with both vegetarian and non-vegetarian options.
  </p>
  <p>
    <strong>Q:</strong> Is transport included in the Durga Puja Tour Package?<br />
    <strong>Ans:</strong> Yes, all internal travel within Kolkata, including guided tours, is included.
  </p>
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

export default DurgaT;
