import Header from "../pageComponents/employee/header";
import Navbar from "../components/navbar/navbar";
import About from "../pageComponents/employee/about";
import Testimonial from "../components/testimonials/testimonial";

export default function Employee() {
  return (
    <section className="w-full h-full bg-highlight_background flex flex-col items-center gap-8 overflow-x-hidden scrollbar-hide ">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className=" w-full mt-16 flex flex-col items-center gap-16">
        <Header />
        <About />
        <Testimonial
          description="An organization is not defined by its infrastructure, products, or market presence alone—it is defined by its people. The true strength of any company lies in the collective mindset of its employees, in their ability to think, collaborate, and evolve together. No single individual can drive success in isolation; innovation thrives when diverse minds come together with a shared purpose."
          Name="Mr. John Doe."
          Role="Chief Technology Officer"
          Company="(Persperence Envision)"
        />
      </main>
    </section>
  );
}
