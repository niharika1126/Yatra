// ...same imports
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import searchicon from "../assets/search icon.svg";
import menuicon from "../assets/menu_icon.svg";
import profileicon from "../assets/profile-icon.svg";
import carticon from "../assets/cart.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      name: "Religious Tours",
      path: "/religioustours",
      subMenu: [
        { label: "Diwali Tour Packages", path: "/diwali" },
        { label: "Durga Puja Tour Package in Kolkata​", path: "/durgatour" },
        { label: "Navagraha Temple Tour", path: "/navgrahatour" },
        { label: "Navratri Tour in Gujarat", path: "/navratritour" },
        { label: "View More Tours", path: "#" },
      ],
    },
    {
      name: "Religious Circuits",
      path:"/religiouscircuits",
      subMenu: [
        { label: "Ramayana Tour Package", path: "#" },
        { label: "Mahabharata Circuit Tour Package", path: "#" },
        { label: "Buddhist Circuit Tour Package", path: "#" },
        { label: "Varanasi Tour Package", path: "#" },
        { label: "Mathura Vrindavan Tour Package", path: "#" },
      ],
    },
    {
      name: "Spiritual Experience",
  
      subMenu: [
        { label: "Himalayan Retreats", path: "#" },
        { label: "Spiritual Retreats", path: "#" },
        { label: "Festival Experience", path: "#" },
      ],
    },
    {
      name: "Other Experience",
      subMenu: [
        { label: "Become a Partner", path: "/partner" },
        { label: "Blog", path: "#" },
      ],
    },
    {
      name: "Activities", // ✅ NEW SECTION
      subMenu: [
        { label: "Varanasi Activities", path: "/varnasiactivity" },
        { label: "Kashi Spiritual Activities", path: "/kashiactivity" },
        { label: "Mathura Pilgrimage", path: "#" },
        { label: "Ayodhya Events", path: "#" },
        { label: "Haridwar Rituals", path: "#" },
        { label: "Rishikesh Yoga Sessions", path: "#" },
        { label: "Ujjain Temple Visits", path: "#" },
      ],
    },
    { name: "About Us", subMenu: [], path: "/about" },
    { name: "Contact Us", subMenu: [], path: "/contact" },
  ];

  return (
    <div className="w-full bg-white shadow relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-6 font-medium">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-20" />
        </Link>

        <ul className="hidden sm:flex gap-6 text-sm text-gray-700">
          {menuItems.map((menu, index) => (
            <li key={index} className="relative group flex flex-col items-center cursor-pointer">
              {menu.path ? (
                <Link to={menu.path} className="flex flex-col items-center">
                  <p>{menu.name}</p>
                  <span className="block w-full h-[2px] bg-gray-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              ) : (
                <span className="flex flex-col items-center">
                  {menu.name}
                  <span className="block w-full h-[2px] bg-gray-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
              )}

              {menu.subMenu.length > 0 && (
                <div className="absolute top-full left-0 w-56 bg-white shadow-md rounded-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300 z-50">
                  <ul className="py-2">
                    {menu.subMenu.map((item, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={item.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-yellow-600 transition"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <img src={searchicon} alt="Search Icon" className="w-5 cursor-pointer" />
          <Link to="/cart">
            <img src={carticon} alt="Cart Icon" className="w-5 cursor-pointer" />
          </Link>
          <img
            src={menuicon}
            alt="Menu Icon"
            className="w-6 cursor-pointer sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <Link to="/loginregister">
            <img src={profileicon} alt="Profile Icon" className="w-5 cursor-pointer" />
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-gray-100 shadow-md z-50">
          <ul className="flex flex-col text-gray-700">
            {menuItems.map((menu, index) => (
              <li key={index} className="border-b border-white-200">
                <details className="group">
                  <summary className="px-4 py-3 cursor-pointer flex justify-between items-center text-white-700 hover:text-yellow-600">
                    {menu.path ? (
                      <Link to={menu.path}>{menu.name}</Link>
                    ) : (
                      menu.name
                    )}
                    {menu.subMenu.length > 0 && (
                      <span className="text-gray-500">+</span>
                    )}
                  </summary>
                  {menu.subMenu.length > 0 && (
                    <ul className="bg-white">
                      {menu.subMenu.map((item, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={item.path}
                            className="block px-6 py-2 text-gray-700 hover:bg-gray-100 hover:text-yellow-600"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </details>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
