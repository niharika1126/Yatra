import Navbar from "../components/navbar/navbar";
import Values from "../pageComponents/grantsPage/values";
import Header from "../pageComponents/grantsPage/header";
import GrantForm from "../pageComponents/grantsPage/grantForm";
import Testimonials from "../components/testimonials/testimonialOne";
import Antibiotic from "../pageComponents/grantsPage/antibiotic";

export default function Grants() {
  return (
    <section className="w-full h-full bg-highlight_background flex flex-col items-center gap-8 overflow-x-hidden scrollbar-hide ">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className=" w-full mt-16 flex flex-col items-center gap-16">
        <Header />
        <Antibiotic />
        <Values />
        <GrantForm />
        <Testimonials />
      </main>
    </section>
  );
}
