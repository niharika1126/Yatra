import Team1 from "../../components/team/team1.jsx";
import Team2 from "../../components/team/team2.jsx";

export default function Publications() {
  return (
    <section className="w-mainwidth flex flex-col items-center gap-8 text-black">
      <p className="text-4xl font-bold">Featured Publications</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full ">
        {/* First Card */}
        <div className="lg:col-span-2 md:col-span-2">
          <Team1 />
        </div>
        {/* Second and Third Cards */}
        <div className="w-full">
          <Team2 />
        </div>
        <div className="w-full">
          <Team2 />
        </div>
      </div>
    </section>
  );
}
