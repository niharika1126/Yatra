import ring from "../../assets/ring.svg";
import Search from "../../components/searchbar/search";

export default function Header() {
  return (
    // Main section of the header with background, text color, padding, and responsive flexbox layout
    <section className="w-full bg-primary text-white py-12 px-4 md:px-16 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-4 xl:gap-44 relative">
      {/* Description paragraph with bold numbers for research papers and patents */}
      <p className="text-lg text-center md:text-left leading-relaxed lg:max-w-md">
        Transforming curiosity into clarity by bridging minds with credible,
        research-driven information through precise and intuitive search
        results.
      </p>

      {/* Image of a world map, with responsive width settings */}
      <img src={ring} alt="World Map" className="w-full max-w-xs md:max-w-sm" />

      {/* Search component placed absolutely within the header, positioned towards the bottom */}
      <div className="absolute bottom-[-40px] md:bottom-[-60px] w-full left-1/2 transform -translate-x-1/2">
        {/* Search component to allow users to search */}
        <Search />
      </div>
    </section>
  );
}
