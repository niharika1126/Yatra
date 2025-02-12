import Navbar from "../components/navbar/navbar";
import AssociatesHeader from "../pageComponents/associationsPage/AssociaesHeader";
import AssociatesCards from "../pageComponents/associationsPage/associatesCards";
import Header from "../pageComponents/associationsPage/header";

export default function Associations() {
  return (
    <section className="w-full h-full bg-highlight_background flex flex-col items-center gap-8 overflow-x-hidden scrollbar-hide ">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="w-full mt-16 flex flex-col items-center gap-24">
        <Header />
        <AssociatesHeader />
        <AssociatesCards />
      </main>
    </section>
  );
}
