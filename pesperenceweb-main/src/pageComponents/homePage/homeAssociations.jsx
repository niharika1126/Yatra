import associate from "../../assets/homeAssociation.svg";
export default function HomeAssociations() {
  return (
    <section className="w-mainwidth mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6 sm:gap-8 text-black py-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
        Our Associations
      </h2>

      <div className="w-full bg-white rounded-lg shadow-xl flex flex-col lg:flex-row overflow-hidden">
        {/* Left Section - Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={associate}
            alt="Association visualization"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex flex-col p-4 sm:p-6 lg:p-8 items-start gap-4 sm:gap-6">
          <h3 className="text-xl sm:text-2xl font-bold">United Nations</h3>

          <p className="text-sm sm:text-base">
            Partnered for global development initiatives focusing on sustainable
            healthcare solutions and medical research advancement. Partnered for
            global development initiatives focusing on sustainable healthcare
            solutions and medical research advancement. Partnered for global
            development initiatives focusing on sustainable healthcare solutions
            and medical research advancement.
          </p>

          {/* Keywords Section */}
          <div className="w-full flex flex-col items-start gap-2">
            <div className="w-full flex flex-wrap items-center gap-2 sm:gap-4">
              {["Global Health", "Research", "Development"].map((keyword) => (
                <span
                  key={keyword}
                  className="p-1.5 sm:p-2 bg-terinary rounded-lg text-xs sm:text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics Section */}
          <div className="w-full flex flex-wrap items-center gap-3 sm:gap-6 mt-2 sm:mt-4">
            {[
              { label: "Timeline", value: "2023/2024" },
              { label: "Funding", value: "$500K" },
              { label: "Researchers", value: "20+" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-1.5 sm:p-2 flex flex-col items-center bg-highlight_background rounded-lg"
              >
                <p className="text-xs sm:text-sm">{item.label}</p>
                <p className="text-sm sm:text-base">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Achievement Section */}
          <div className="flex flex-col items-start gap-2">
            <p className="font-bold text-sm sm:text-base">Key Words</p>
            <p className="text-base sm:text-lg">
              Successfully Implemented 5 Major Healthcare Programs
            </p>
          </div>
        </div>
      </div>

      {/* Button Container */}
      <div className="w-full flex items-center justify-end mt-4">
        <button className="bg-primary px-4 py-2 text-sm sm:text-base font-semibold text-white rounded-lg hover:shadow-lg transition-shadow">
          More Associations
        </button>
      </div>
    </section>
  );
}
