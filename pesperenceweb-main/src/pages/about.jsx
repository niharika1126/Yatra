import Navbar from "../components/navbar/navbar";

import Header from "../pageComponents/aboutPage/header";
import Future from "../pageComponents/aboutPage/future";
import Achievements from "../pageComponents/aboutPage/achievements"
import Team from "../pageComponents/aboutPage/team"
import Researchjournalist from "../pageComponents/aboutPage/researchjournalist"
import Grant from "../pageComponents/aboutPage/grant";
import Testimonial from "../pageComponents/careersPage/Testimonial";
import Initiative from "../pageComponents/aboutPage/initiative";
import Association from "../pageComponents/aboutPage/association";




export default function About() {
  return (
    <section className="w-full h-full bg-highlight_background flex flex-col items-center gap-8 overflow-x-hidden scrollbar-hide ">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className=" w-full mt-16 flex flex-col items-center gap-24">
        <Header/>
        <Future/>
        <Achievements/>
        <Team/>
        <Researchjournalist/>
        <Initiative/>
        <Grant/>
        
        <Association/>
        <Testimonial/>

      </main>
    </section>
  );
}
