import Navbar from "../components/navbar/navbar";
import Architects from "../pageComponents/careersPage/architects";
import Header from "../pageComponents/careersPage/header";
import Publications from "../pageComponents/homePage/publications";
import Opportunity from "../pageComponents/careersPage/opportunity";
import Form from "../pageComponents/careersPage/Form";
import Testimonial from "../pageComponents/careersPage/Testimonial";


export default function Career() {
  return (
    <section className="w-full h-full bg-highlight_background flex flex-col items-center gap-8 overflow-x-hidden scrollbar-hide ">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className=" w-full mt-16 flex flex-col items-center gap-24">
        <Header/>
        <Architects/>
        <Opportunity />
        <Form />
        <Testimonial />

      </main>
    </section>
  );
}
