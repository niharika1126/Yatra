import { useEffect, useState } from "react";
import search from "../../assets/search.svg";

export default function Search() {
  const [placeholderText, setPlaceholderText] = useState(""); // Placeholder text state
  const typingText = "Search for something..."; // The full text to type
  const typingSpeed = 50; // Typing speed in milliseconds

  useEffect(() => {
    let charIndex = 0; // Initialize character index
    const interval = setInterval(() => {
      if (charIndex < typingText.length) {
        // Set placeholder up to the current character index
        setPlaceholderText(typingText.slice(0, charIndex + 1));
        charIndex++;
      } else {
        // Reset after finishing typing
        setPlaceholderText(""); // Clear placeholder
        charIndex = 0; // Restart the typing effect
      }
    }, typingSpeed);

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <div className="w-full flex justify-center py-8">
      <div className="flex items-center w-full sm:w-11/12 md:w-1/2 bg-white rounded-lg shadow-lg px-4 py-2">
        {/* Search Icon (hidden on mobile) */}
        <div className=" items-center justify-center pr-2 hidden sm:flex">
          <img src={search} alt="Search Icon" className="w-6 h-6" />
        </div>

        {/* Input Field and Button Container */}
        <div className="flex items-center w-full">
          <input
            type="text"
            placeholder={placeholderText} // Dynamic placeholder
            className="flex-grow text-gray-700 placeholder-gray-500 outline-none py-2 px-4"
          />

          {/* Search Button */}
          <button className="px-4 py-2 bg-secondary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
