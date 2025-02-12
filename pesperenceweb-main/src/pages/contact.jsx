import Header from "../pageComponents/contactPage/header";
import Navbar from "../components/navbar/navbar";
import Collaboration from "../pageComponents/contactPage/collaboration";
import CompanyDescription from "../pageComponents/contactPage/company";
import ContactForm from "../pageComponents/contactPage/contactForm";
import WorldMap from "../pageComponents/contactPage/locations";
import Testimonials from "../components/testimonials/testimonialOne";

export default function Contact() {
  return (
    <section className="w-full h-full bg-highlight_background flex flex-col items-center sm:gap-8 overflow-x-hidden scrollbar-hide ">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className=" w-full  mt-16 flex flex-col items-center gap-6 sm:gap-16">
        <Header />
        <Collaboration />
        <CompanyDescription />
        <WorldMap />
        <ContactForm />
        <Testimonials />
      </main>
    </section>
  );
}
