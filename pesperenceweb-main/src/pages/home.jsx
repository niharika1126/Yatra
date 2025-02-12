import Navbar from "../components/navbar/navbar";
import Achievements from "../pageComponents/homePage/acheivements";
import Associations from "../pageComponents/homePage/homeAssociations";
import Header from "../pageComponents/homePage/header";
import HomeHeader from "../pageComponents/homePage/homeHeader";
import Initiatives from "../pageComponents/homePage/homeInitiatives";
import Publications from "../pageComponents/homePage/publications";
import ResearchJournalist from "../pageComponents/homePage/researchJournalist";
import Testimonial from "../pageComponents/homePage/homeTestimonials";

export default function Home() {
  return (
    <section className="w-full h-full bg-highlight_background flex flex-col items-center gap-8 overflow-x-hidden scrollbar-hide ">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="w-full mt-16 flex flex-col items-center gap-24">
        <Header />
        <HomeHeader />
        <Achievements />
        <Publications />
        <ResearchJournalist />
        <Initiatives />
        <Associations />
        <Testimonial />
      </main>
    </section>
  );
}
