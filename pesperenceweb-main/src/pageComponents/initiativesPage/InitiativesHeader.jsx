import header from "../../assets/header.svg";
export default function InitiativesHeader() {
  return (
    <section className="w-mainwidth flex flex-col lg:flex-row items-center  md:justify-between gap-8 text-black">
      <img src={header} alt="homeHeader" />
      <div className="w-full lg:max-w-1/2 flex flex-col items-center lg:items-start gap-6">
        <p className="text-4xl font-bold text-center lg:text-left w-full">
          Driving change through bold initiatives
        </p>
        <p className="text-lg text-center lg:text-left w-full">
          Our initiatives aim to bridge gaps, foster collaboration, and spark
          innovation on a global scale. From integrating advanced research into
          educational curricula to launching groundbreaking programs for citizen
          scientists and independent researchers, we work tirelessly to empower
          minds and transform ideas into impactful realities. Our projects
          extend across diverse domains, addressing modern challenges with
          research-driven solutions. Guided by a commitment to progress, we
          collaborate with institutions, researchers, and innovators worldwide
          to pioneer initiatives that redefine what’s possible.
        </p>
      </div>
    </section>
  );
}
