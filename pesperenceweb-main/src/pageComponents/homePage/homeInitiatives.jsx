import initiative from "../../assets/homeinitiative.svg";
import InitiativeCard from "../../components/initiativeCard/initiativeCard";

export default function HomeInitiatives() {
  return (
    <section className="w-mainwidth mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6 sm:gap-8 text-black py-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
        Our Initiatives
      </h2>

      <InitiativeCard />
      <div className="w-full flex items-center justify-end">
        <button className="bg-primary px-4 py-2 font-semibold text-white rounded-lg hover:shadow-lg">
          More Initiatives
        </button>
      </div>
    </section>
  );
}
