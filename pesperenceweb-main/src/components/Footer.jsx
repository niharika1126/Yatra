import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 px-6 md:px-20 py-10 font-['Comic_Neue']">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div className="space-y-4">
          <img src={logo} alt="Yatra Veda Logo" className="w-28" />
          <p className="text-sm leading-relaxed max-w-sm">
            YatraVeda is your spiritual travel partner—offering curated,
            personalized pilgrimages and soulful experiences for Indians worldwide.
          </p>
          <div className="flex gap-3 pt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 p-2 rounded-full text-black hover:scale-110 transition-transform"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 p-2 rounded-full text-black hover:scale-110 transition-transform"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 p-2 rounded-full text-black hover:scale-110 transition-transform"
            >
              <FaWhatsapp size={16} />
            </a>
          </div>
        </div>

        {/* Navigation - Quick Links */}
        <div>
          <h3 className="text-red-700 font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/religioustours">› Religious Tours</Link></li>
            <li><Link to="/religiouscircuits">› Religious Circuits</Link></li>
            <li><Link to="#">› Spiritual Experience</Link></li>
            <li><Link to="#">› Festival Experience</Link></li>
          </ul>
        </div>

        {/* Navigation - Company */}
        <div>
          <h3 className="text-red-700 font-bold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about">› About Us</Link></li>
            <li><Link to="/contact">› Contact</Link></li>
            <li><Link to="#">› Blog</Link></li>
            <li><Link to="/partner">› Become a Partner</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-red-700 font-bold text-lg mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: info@yatraveda.in</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: Indore, MP, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-10 border-t pt-6 text-xs text-gray-500">
        © {new Date().getFullYear()} YatraVeda. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
