import React from "react";
import Header from "../pageComponents/searchPage/header";
import Navbar from "../components/navbar/navbar";
import Filters from "../pageComponents/searchPage/filters";
import Results from "../pageComponents/searchPage/results";

export default function SearchResult() {
  return (
    <section className="w-full h-full bg-highlight_background flex flex-col items-center gap-8 overflow-x-hidden scrollbar-hide ">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className=" w-full mt-16 flex flex-col items-center gap-16">
        <Header />
        <Filters />
        <Results />
      </main>
    </section>
  );
}
