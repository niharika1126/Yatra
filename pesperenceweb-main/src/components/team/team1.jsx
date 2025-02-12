import team from "../../assets/team.svg";

export default function Team1() {
  return (
    <div className="bg-Yellow/90 rounded-lg shadow-xl w-full text-primary h-featuredpublication p-8 flex flex-col md:flex-row items-center justify-between">
      
      {/* Left Side - Text Content */}
      <div className="flex flex-col space-y-2 text-left md:w-1/2">
        <p className="text-2xl font-bold">Kshama Mishra</p>
        <p className="text-xl font-bold">Editor In Chief</p>
        <p className="text-lg">Omniscience</p>
      </div>
       {/* Right Side - Image */}
<div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
  {/* Image */}
  <img
    src={team}
    alt="Kshama Mishra"
    className="w-full h-full object-cover"
  />
</div>

    </div>
  );
}