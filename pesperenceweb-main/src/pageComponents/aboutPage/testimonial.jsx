import quote from "../../assets/quote.svg";

export default function Testimonial() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4 w-mainwidth">
      <div className="flex flex-col items-center gap-6 w-full max-w-7xl">
        {/* First Card - Full Width */}
        <div className="mx-auto rounded-lg bg-important_text text-white p-6 w-mainwidth h-featuredpublication shadow-lg text-center flex flex-col justify-center min-h-featuredpublication/2 relative">
          <img src={quote} alt="quote" className="absolute -top-topT left-0 w-17 h-17" />
          <p className="flex-1 flex items-center justify-center">
            Working here has been a transformative journey. The culture fosters creativity, collaboration, and a deep respect for knowledge. From the supportive leadership to the inspiring research opportunities, every day feels meaningful. Joining this organization wasn’t just a career move—it was a step toward fulfilling my purpose as a researcher.
          </p>
          <p className="text-sm text-right mt-4">
            Dr. Marcus Lin, Research Scientist <br />(Yale University)
          </p>
        </div>

        {/* Container for 2 square cards + 1 large card */}
        <div className="flex flex-col md:flex-row gap-6 w-mainwidth mr-1">
          {/* Column containing two square cards */}
          <div className="flex flex-col gap-6 w-full md:w-squarewidth">
            {/* Second Card 1 */}
            <div className="bg-important_text text-white p-6 flex flex-col justify-center shadow-xl w-full h-featuredpublication relative rounded-lg">
              <img src={quote} alt="quote" className="absolute -top-topT left-0 w-17 h-17" />
              <p className="flex-1 flex items-center justify-center">
                Working here has been a transformative journey. The culture fosters creativity, collaboration, and a deep respect for knowledge.
              </p>
              <p className="text-sm text-right mt-4">
                Dr. Marcus Lin, Research Scientist <br />(Yale University)
              </p>
            </div>

            {/* Square Card 2 */}
            <div className="bg-important_text text-white p-6 flex flex-col justify-center shadow-lg w-full h-featuredpublication relative rounded-lg">
              <img src={quote} alt="quote" className="absolute -top-topT left-0 w-17 h-17" />
              <p className="flex-1 flex items-center justify-center">
                Working here has been a transformative journey. The culture fosters creativity, collaboration, and a deep respect for knowledge.
              </p>
              <p className="text-sm text-right mt-4">
                Dr. Marcus Lin, Research Scientist <br />(Yale University)
              </p>
            </div>
          </div>

          {/* Fourth Card - Matches Height of Both Squares */}
          <div className="bg-important_text text-white p-6 shadow-lg w-full md:w-squarewidth min-h-minh flex flex-col justify-center relative rounded-lg">
            <img
              src={quote}
              alt="quote"
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
            />

            {/* Quote Text */}
            <p className="flex-1 flex items-center justify-center text-sm sm:text-base md:text-lg text-center px-4">
              Working here has been a transformative journey. The culture fosters creativity, collaboration, and a deep respect for knowledge. From the supportive leadership to the inspiring research opportunities, every day feels meaningful. Joining this organization wasn’t just a career move—it was a step toward fulfilling my purpose as a researcher.
            </p>

            {/* Author Info */}
            <p className="text-xs sm:text-sm md:text-base text-right mt-4">
              Dr. Marcus Lin, Research Scientist <br />(Yale University)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
