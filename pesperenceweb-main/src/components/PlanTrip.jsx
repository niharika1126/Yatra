import React from "react";
import spiritualImg from "../assets/spritual-removebg-preview.png"; // Use your actual image path
import { FaCheckCircle } from "react-icons/fa";

const PlanTrip = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-10">
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={spiritualImg}
          alt="Spiritual Tours"
          className="w-full max-w-md object-cover rounded-lg"
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-full lg:w-1/2 text-left">
        {/* Heading */}
        <p className="text-lg text-red-700 font-semibold mb-2">
          Connect with your spiritual side
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-snug">
          Plan Your Next Trip With Us
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          Get connected with your religious and spiritual soul with our carefully curated
          tours designed keeping your comfort and experience in mind.
        </p>

        {/* Features List */}
        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <div className="bg-yellow-400 text-white p-3 rounded-full">
              <FaCheckCircle className="text-black text-lg" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Curated Tours</h4>
              <p className="text-gray-600 text-sm">
                Every tour of ours has been carefully curated to give you the best experience.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-yellow-400 text-white p-3 rounded-full">
              <FaCheckCircle className="text-black text-lg" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Spiritual Experience</h4>
              <p className="text-gray-600 text-sm">
                Each tour has been designed to give you a soulful experience that is long-lasting.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-yellow-400 text-white p-3 rounded-full">
              <FaCheckCircle className="text-black text-lg" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">100% Peace of Mind</h4>
              <p className="text-gray-600 text-sm">
                Feel confident with our 100% Money Back Guarantee, if your experience falls short of our promise.
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
      <div className="mt-6">
  <a
    href="https://wa.me/yourwhatsapplink"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-red-700 text-white px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2"
  >
    WhatsApp Us →
  </a>
</div>

      </div>
    </div>
  );
};

export default PlanTrip;
