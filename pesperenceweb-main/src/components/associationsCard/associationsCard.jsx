import { useNavigate } from "react-router-dom";
import associateImage from "../../assets/homeAssociation.svg";

export default function AssociatesCard({ association }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/associations/${association._id}`);
  };

  return (
    <div
      className="w-full bg-white rounded-lg hover:shadow-xl hover:cursor-pointer flex flex-col lg:flex-row overflow-hidden"
      onClick={handleNavigation}
    >
      {/* Left Section - Image */}
      <div className="w-full lg:w-1/2">
        <img
          src={associateImage} // Replace with dynamic image URL if available
          alt={association.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex flex-col p-4 sm:p-6 lg:p-8 items-start gap-4 sm:gap-6">
        <h3 className="text-xl sm:text-2xl font-bold">{association.title}</h3>

        <p className="text-sm sm:text-base">{association.summary}</p>

        {/* Keywords Section */}
        <div className="w-full flex flex-col items-start gap-2">
          <div className="w-full flex flex-wrap items-center gap-2 sm:gap-4">
            {association.keyWords?.map((keyword) => (
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
            { label: "Year", value: association.partnershipYear },
            { label: "Funding", value: association.funding },
            { label: "Scale", value: association.scale },
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
          <p className="font-bold text-sm sm:text-base">Achievement</p>
          <p className="text-base sm:text-lg">{association.achievement}</p>
        </div>
      </div>
    </div>
  );
}
