import research from "../../assets/research.svg";

export default function Researchjournalist() {
  return (
    <div className="flex flex-col w-mainwidth md:flex-row items-center justify-center gap-5 md:gap-4 xl:gap-34 w-mainwidth">
      {/* Text Section */}
      <section className="w-full text-white py-10 px-4 md:px-8 flex flex-col items-center md:items-start justify-center gap-6 md:w-1/2">
        <p className="text-black text-center md:text-left">
          <span className="font-bold text-5xl">The Research Journalist</span>
        </p>
        <p className="text-black text-center md:text-left">
          The Research Journalist podcast explores groundbreaking discoveries, 
          inventions, and modern challenges weekly on Spotify—delivering deep, 
          insightful episodes for free to inspire curious minds.
        </p>
        
        {/* Listen Button */}
        <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-bold">
          Listen
        </button>
      </section>

      {/* Image Section */}
      <img
        src={research}
        alt="Research"
        className="w-full max-w-md h-auto md:max-w-lg lg:max-w-xl xl:max-w-xl bg-cover"
      />
    </div>
  );
}
