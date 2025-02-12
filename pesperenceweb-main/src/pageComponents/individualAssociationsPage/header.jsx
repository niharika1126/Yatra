import book from "../../assets/book.svg";
import Search from "../../components/searchbar/search";

export default function Header() {
  return (
    // Main section of the header with background, text color, padding, and responsive flexbox layout
    <section className="w-full bg-primary text-white py-16 px-4 md:px-16 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-4 xl:gap-44 relative">
      {/* Description paragraph with bold numbers for research papers and patents */}
      <p className="text-lg text-center md:text-left leading-relaxed lg:max-w-md">
        Over <span className="font-bold text-xl">15,000+</span> research papers
        and <span className="font-bold text-xl">11,000+</span> patents are
        published every single day. Yet, most of us remain unaware of the
        breakthroughs shaping our future.
      </p>

      {/* Image of a world map, with responsive width settings */}
      <img src={book} alt="World Map" className="w-full max-w-xs md:max-w-sm" />

      {/* Search component placed absolutely within the header, positioned towards the bottom */}
      <div className="absolute bottom-[-40px] md:bottom-[-60px] w-full left-1/2 transform -translate-x-1/2">
        {/* Search component to allow users to search */}
        <Search />
      </div>
    </section>
  );
}
