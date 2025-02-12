import React from "react";
import Header from "../pageComponents/teamsPage/header";
import Testimonials from "../components/testimonials/testimonialOne";
import Navbar from "../components/navbar/navbar";
import Inovations from "../pageComponents/teamsPage/inovations";
import Administration from "../pageComponents/teamsPage/administration";
import EditorialBoard from "../pageComponents/teamsPage/editorialBoard";
import ResearchDev from "../pageComponents/teamsPage/researchDev";

export default function Teams() {
  return (
    <section className="w-full h-full bg-highlight_background flex flex-col items-center sm:gap-8 overflow-x-hidden scrollbar-hide ">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className=" w-full  mt-16 flex flex-col items-center gap-6 sm:gap-16">
        <Header />
        <Inovations />
        <Administration />
        <EditorialBoard />
        <ResearchDev />
        <Testimonials />
      </main>
    </section>
  );
}
