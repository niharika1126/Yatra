import header from "../../assets/header.svg";
export default function AssociatesHeader() {
  return (
    <section className="w-mainwidth flex flex-col lg:flex-row items-center  md:justify-between gap-8 text-black">
      <img src={header} alt="homeHeader" />
      <div className="w-full lg:max-w-1/2 flex flex-col items-center lg:items-start gap-6">
        <p className="text-4xl font-bold text-center lg:text-left w-full">
          Global alliances driving innovation
        </p>
        <p className="text-lg text-center lg:text-left w-full">
          Our partnerships define our journey toward innovation and progress. We
          proudly collaborate with over 400 leading institutions, research
          organizations, and industry pioneers across 117 countries. These
          associations enable us to merge expertise, share knowledge, and
          undertake transformative projects addressing critical global
          challenges. From cutting-edge research initiatives to impactful
          education programs, our collaborations amplify the reach and impact of
          our mission. Together, we are shaping a future built on shared vision
          and collective efforts.
        </p>
      </div>
    </section>
  );
}
