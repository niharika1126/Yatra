import research from "../../assets/researchJournalist.svg";
export default function ResearchJournalist() {
  return (
    <section className="w-mainwidth flex  items-center gap-12  text-black">
      <div className="w-1/2 flex flex-col items-start gap-6">
        <p className="text-4xl font-bold">The Research Journalist</p>
        <p className="max-w-full text-lg text-primary">
          The Research Journalist podcast explores groundbreaking discoveries,
          inventions, and modern challenges weekly on Spotify - delivering deep,
          insightful episodes for free to inspire curious minds.
        </p>
        <button className="px-4 py-2 text-lg font-semibold rounded-lg bg-primary text-white">
          Listen
        </button>
      </div>
      <div className="max-w-1/2 flex flex-col items-start gap-6 bg-research">
        <img src={research} />
      </div>
    </section>
  );
}
