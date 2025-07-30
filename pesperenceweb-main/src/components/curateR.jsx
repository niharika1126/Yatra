import React from "react";
import Golden from "../assets/golden.jpg"; // Full-width image
import { PiFlowerLotusDuotone } from "react-icons/pi";
import { MdOutlineEmojiPeople, MdOutlineExplore, MdOutlineVerifiedUser } from "react-icons/md";

const CurateR = () => {
  return (
    <div className="w-full bg-gray-100 py-12 px-4 sm:px-10 font-[Comic Neue]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={Golden}
            alt="Golden Temple"
            className="w-full h-[480px] object-cover rounded-3xl"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-red-700 text-lg font-semibold ">
            Connect with your spiritual side
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black-800 mt-2 leading-snug">
            Plan Your Next Trip With Us
          </h2>
          <p className="text-gray-700 mt-4 text-sm sm:text-base max-w-lg mx-auto lg:mx-0">
            Get connected with your religious and spiritual soul with our carefully curated
            tours designed keeping your comfort and experience in mind.
          </p>

          {/* Feature Points */}
          <div className="mt-8 space-y-6 text-left">
            {/* 1 */}
            <div className="flex items-start gap-4">
              <div className="bg-yellow-400 rounded-full p-2 text-white">
                <MdOutlineExplore size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-base sm:text-lg">
                  Curated Tours
                </h4>
                <p className="text-sm text-gray-700">
                  Every tour of ours has been carefully curated to give you the best experience.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="flex items-start gap-4">
              <div className="bg-yellow-400 rounded-full p-2 text-white">
                <MdOutlineEmojiPeople size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-base sm:text-lg">
                  Spiritual Experience
                </h4>
                <p className="text-sm text-gray-700">
                  Each tour has been designed to give you a soulful experience that is long-lasting.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="flex items-start gap-4">
              <div className="bg-yellow-400 rounded-full p-2 text-white">
                <MdOutlineVerifiedUser size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-base sm:text-lg">
                  100% Peace of Mind
                </h4>
                <p className="text-sm text-gray-700">
                  Feel confident with our 100% Money Back Guarantee, if your experience falls short of our promise.
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp Button */}
          <div className="mt-8">
            <button className="bg-black text-white px-6 py-2 rounded-full text-sm sm:text-base hover:bg-gray-800 transition">
              WhatsApp Us →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurateR;
