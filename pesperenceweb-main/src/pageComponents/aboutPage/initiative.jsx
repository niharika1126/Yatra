import init from "../../assets/init.svg";

export default function Initiative() {
  return (
    <div className="max-w-mainwidth mx-auto px-4 sm:px-6 lg:px-12">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 sm:mb-8 text-center">
        Our Initiatives
      </h1>

      {/* Main Initiative Card */}
      <div className="flex flex-col w-full items-center justify-center py-6 px-4 sm:px-6 bg-white shadow-xl rounded-lg">
        {/* Ongoing Button and Progress Bar */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Button on the left */}
          <button className="bg-Yellow text-black px-4 py-2 rounded-lg shadow-md text-sm sm:text-base font-semibold">
            Ongoing
          </button>

          {/* Progress bar on the right */}
          <div className="w-full sm:w-2/5 flex justify-end sm:mr-10 items-center">
            <div className="w-3/4 sm:w-full bg-gray-200 rounded-full h-2.5 flex">
              <div className="bg-red-500 h-2.5 rounded-full w-1/2 sm:w-3/5 md:w-3/4 lg:w-5/6"></div>
            </div>
            <span className="text-gray-700 font-semibold ml-2 text-sm sm:text-base">
              75%
            </span>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-6 mt-6">
          {/* Text Section */}
          <section className="w-full md:w-1/2 text-left">
            <h2 className="text-black text-lg sm:text-xl md:text-2xl font-bold mb-2">
              World Health Organization : Polycystic Kidney Disease
            </h2>
            <p className="text-gray-700 text-sm sm:text-base mb-4">
              A comprehensive health monitoring system that tracks patient progress across multiple healthcare facilities, enabling better coordination and care delivery.
            </p>

            {/* Key Features */}
            <p className="text-black font-bold text-sm sm:text-base mb-2">Key Features</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-200 text-black px-3 py-1 rounded-lg text-center text-sm">
                Real-time patient monitoring
              </span>
              <span className="bg-gray-200 text-black px-3 py-1 rounded-lg text-center text-sm">
                Cross-facility data sharing
              </span>
              <span className="bg-gray-200 text-black px-3 py-1 rounded-lg text-center text-sm">
                AI-powered health predictions
              </span>
            </div>

            {/* Budget, Team, Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="bg-gray-100 text-black p-3 rounded-lg text-center">
                <p className="font-bold text-sm sm:text-base">Timeline</p>
                <p>2023 - Present</p>
              </div>
              <div className="bg-gray-100 text-black p-3 rounded-lg text-center">
                <p className="font-bold text-sm sm:text-base">Budget</p>
                <p>$2.5M</p>
              </div>
              <div className="bg-gray-100 text-black p-3 rounded-lg text-center">
                <p className="font-bold text-sm sm:text-base">Team</p>
                <p>45+ Healthcare Professionals</p>
              </div>
            </div>
          </section>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={init}
              alt="Initiative"
              className="w-full max-w-md sm:max-w-lg h-auto rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* More Initiatives Button */}
      <div className="w-full flex justify-end mt-8">
        <button className="bg-primary text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg text-sm sm:text-base">
          More Initiatives
        </button>
      </div>
    </div>
  );
}
