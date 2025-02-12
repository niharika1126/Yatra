import initiativeImage from "../../assets/homeinitiative.svg";

export default function InitiativeCard({ initiative }) {
  return (
    <div className="w-full bg-white p-4 sm:p-6 rounded-lg shadow-xl flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-start gap-4 sm:gap-6">
        <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-Yellow rounded-lg text-sm sm:text-base">
          {initiative.progress}
        </span>

        <h3 className="text-xl sm:text-2xl font-bold">{initiative.title}</h3>

        <p className="text-sm sm:text-base">{initiative.summary}</p>

        <div className="w-full flex flex-col items-start gap-2">
          <p className="font-bold text-sm sm:text-base">Key Features</p>
          <div className="w-full flex flex-wrap items-center gap-2 sm:gap-4">
            {initiative.keyFeatures.map((feature) => (
              <span
                key={feature}
                className="p-1.5 sm:p-2 bg-highlight_background rounded-lg text-xs sm:text-sm"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-wrap items-center gap-3 sm:gap-6 mt-2 sm:mt-4">
          {[
            { label: "Timeline", value: initiative.timeline },
            { label: "Budget", value: initiative.budget },
            { label: "Team", value: initiative.team },
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
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-start gap-4 sm:gap-6">
        {/* Progress Bar Container */}
        <div className="w-full flex items-center gap-2 sm:gap-4">
          {/* Progress Bar */}
          <div className="w-full bg-gray-300 h-3 sm:h-4 rounded-full">
            <div
              className="bg-secondary h-full rounded-full"
              style={{ width: `${initiative.progressBar}%` }}
            ></div>
          </div>
          {/* Percentage Text */}
          <p className="text-base sm:text-lg font-semibold whitespace-nowrap">
            {initiative.progressBar}%
          </p>
        </div>

        <img
          src={initiativeImage}
          alt="Initiative visualization"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
