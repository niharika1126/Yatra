import Navbar from "../components/navbar/navbar";
import Form from "../pageComponents/careersPage/Form";
import Jobtitle from "../pageComponents/individualcareerpage/Jobtitle";
import Jobdescription from "../pageComponents/individualcareerpage/Jobdescription";


export default function Individualcareer() {
  return (
    <section className="w-full h-full bg-highlight_background flex flex-col items-center gap-8 overflow-x-hidden scrollbar-hide">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="w-full mt-16 flex flex-col items-center gap-24">
       <Jobtitle />
       <Jobdescription />
        <Form />
      </main>
    </section>
  );
}
