import Navbar from "../components/navbar/navbar";

import Header from "../pageComponents/initiativesPage/header";
import InitiativeCards from "../pageComponents/initiativesPage/initiativeCards";
import InitiativesHeader from "../pageComponents/initiativesPage/InitiativesHeader";

export default function Initiatives() {
  return (
    <section className="w-full h-full bg-highlight_background flex flex-col items-center gap-8 overflow-x-hidden scrollbar-hide ">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="w-full mt-16 flex flex-col items-center gap-24">
        <Header />
        <InitiativesHeader />
        <InitiativeCards />
      </main>
    </section>
  );
}
