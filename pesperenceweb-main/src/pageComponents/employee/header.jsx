import React from "react";
import team from "../../assets/employee.svg";
import Search from "../../components/searchbar/search";

export default function Header() {
  return (
    <section className="w-full bg-primary text-white py-6 px-8 lg:px-16 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-4 lg:gap-96 relative">
      {/* text */}
      <p className="text-3xl text-center md:text-left leading-relaxed lg:max-w-md">
        Sarthak Gandhi
        <br />
        <span className="text-lg text-white/80">
          Co-Founder & Chief Technology Officer
        </span>
      </p>

      {/* Image of a team, with responsive width settings */}
      <img src={team} alt="team" className="w-full max-w-xs md:max-w-sm" />

      {/* Search component placed absolutely within the header, positioned towards the bottom */}
      <div className="absolute bottom-[-40px] md:bottom-[-60px] w-full left-1/2 transform -translate-x-1/2">
        {/* Search component to allow users to search */}
        <Search />
      </div>
    </section>
  );
}
