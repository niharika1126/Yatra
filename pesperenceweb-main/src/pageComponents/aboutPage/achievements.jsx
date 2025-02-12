import location from "../../assets/location.svg";
import user from "../../assets/user.svg";
import medal from "../../assets/medal.svg";

export default function Achievements() {
  return (
    <section className="w-mainwidth flex flex-col items-center gap-4 text-black">
      {/* Title for the section */}
      <p className="text-4xl font-bold">Perseverance</p>

      {/* Description text for the section */}
      <p className="text-base text-center w-11/12 lg:w-9/12">
        Perseverance bridges the gap between groundbreaking research and global
        accessibility by delivering the latest insights from research papers,
        patents, and scientific advancements to educational institutions,
        individual researchers, and citizen scientists. Beyond this, Perseverance
        conducts its own research and experimentation through state-of-the-art
        R&D labs established worldwide. These facilities, serving both private
        and government organizations, produce credible, high-quality results
        that drive innovation and advance scientific discovery.
      </p>

      {/* Achievements section: List of key achievements with icons */}
      <div className="w-full bg-white shadow-2xl flex flex-col md:flex-row items-center justify-between py-8 px-8 md:px-4 lg:px-22 xl:px-32 rounded-lg mt-8 gap-8">
        {/* First achievement: Global presence */}
        <div className="flex items-center flex-col gap-2 w-full md:w-auto">
          <img src={location} alt="Global presence icon" />
          <p className="text-2xl font-bold">15+ Countries</p>
          <p className="text-sm">with a global presence</p>
        </div>

        {/* Second achievement: Researchers */}
        <div className="flex items-center flex-col gap-2 w-full md:w-auto">
          <img src={user} alt="Researchers icon" />
          <p className="text-2xl font-bold">50K+ Researchers</p>
          <p className="text-sm">Globally empowering innovation</p>
        </div>

        {/* Third achievement: Associations */}
        <div className="flex items-center flex-col gap-2 w-full md:w-auto">
          <img src={medal} alt="Associations icon" />
          <p className="text-2xl font-bold">400+ Associations</p>
          <p className="text-sm">driving collaborative growth</p>
        </div>
      </div>
    </section>
  );
}
