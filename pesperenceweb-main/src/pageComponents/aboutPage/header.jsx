import Microscope from "../../assets/Microscope.svg";
import Search from "../../components/searchbar/search";

export default function Header() {
  return (
    // Main section of the header 
    <section className="w-full bg-primary text-white py-16 px-4 md:px-16 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-4 xl:gap-44 relative ">
      {/* Description paragraph  */}
      <p className="text-lg text-center md:text-left leading-relaxed lg:max-w-md">
        Transforming curiosity into clarity by bridging minds with credible, research-driven information through precise and intuitive search results.
      </p>

      {/* Image of microscope, with responsive width settings */}
      <img
        src={Microscope}
        alt="Microscope"
        className="w-full max-w-xs md:max-w-sm bg-cover"
      />

      {/* Search component placed absolutely within the header, positioned towards the bottom */}
      <div className="absolute bottom-[-40px] md:bottom-[-60px] w-full left-1/2 transform -translate-x-1/2">
 
         {/* Search component to allow users to search */}
        <Search />
      </div>
    </section>
  );
}
