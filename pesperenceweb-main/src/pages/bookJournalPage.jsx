import React from "react";
import Navbar from "../components/navbar/navbar";
import Acheivements from "../pageComponents/bookJournal/acheivements";
import Header from "../pageComponents/bookJournal/header";
import Section3 from "../pageComponents/bookJournal/section3";
import Section4 from "../pageComponents/bookJournal/section4";
import Testimonial from "../components/testimonials/testimonial";

export default function BookJournal() {
  return (
    <section className="w-full h-full bg-highlight_background flex flex-col items-center gap-8 overflow-x-hidden scrollbar-hide ">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className=" w-full mt-16 flex flex-col items-center gap-24">
        <Header />
        <Acheivements />
        <Section3 />
        <Section4 />
        <Testimonial
          description="The leadership and collaborative spirit of this team are unmatched. Their ability to merge intellect with empathy and innovation with purpose is truly inspiring. Every interaction feels like a step toward excellence, and it’s evident they are building not just an organization, but a legacy of knowledge and progress."
          Name="Dr. Aisha Mehra"
          Role=" Partner Researcher"
          University="(Banaras Hindu University)"
        />
      </main>
    </section>
  );
}
