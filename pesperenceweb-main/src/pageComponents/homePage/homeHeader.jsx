import homeHeader from "../../assets/homeHeader1.svg";
export default function HomeHeader() {
  return (
    <section className="w-mainwidth flex flex-col lg:flex-row items-center  md:justify-between gap-8 text-black">
      <div className="w-full lg:max-w-1/2 flex flex-col items-center lg:items-start gap-6">
        <p className="text-4xl font-bold text-center lg:text-left w-full">
          Preparing for progress by prioritizing potential
        </p>
        <p className="text-lg text-center lg:text-left w-full">
          We integrate research and education, collaborating with institutions,
          supporting researchers with grants, conducting projects, and
          delivering impactful results for innovation and scientific progress
          worldwide.
        </p>
        <button className="px-4 py-2 text-base font-semibold bg-secondary rounded-lg text-white hover:shadow-lg">
          Learn More
        </button>
      </div>
      <img src={homeHeader} alt="homeHeader" />
    </section>
  );
}
