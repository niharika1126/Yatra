import team from "../../assets/team.svg";

export default function Team2() {
  return (
    <div className="bg-Yellow rounded-lg shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-primary p-6 flex flex-col items-center justify-center h-featuredpublication">
      
      {/* Image */}
   <img
    src={team}
    alt="Kshama Mishra"
    className="w-full h-full object-cover"
  />

      {/* Text */}
      <p className="text-2xl font-bold mt-2">Kshama Mishra</p>
      <p className="text-lg font-semibold">Chief Editor</p>

    </div>
  );
}
