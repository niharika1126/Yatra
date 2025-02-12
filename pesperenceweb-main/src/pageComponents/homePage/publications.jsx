import Publication1 from "../../components/featuredPublications/publication1.jsx";
import Publication2 from "../../components/featuredPublications/publication2.jsx";

export default function Publications() {
  return (
    <section className="w-mainwidth flex flex-col items-center gap-8 text-black">
      <p className="text-4xl font-bold ">Featured Publications</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full ">
        {/* First Card */}
        <div className="lg:col-span-2 md:col-span-2">
          <Publication1 />
        </div>
        {/* Second and Third Cards */}
        <div className="w-full">
          <Publication2 />
        </div>
        <div className="w-full">
          <Publication2 />
        </div>
      </div>
      <div className="w-full flex items-start justify-end">
        <button className=" text-right px-4 py-2 rounded-lg bg-secondary text-white  font-semibold">
          Read More
        </button>
      </div>
    </section>
  );
}
