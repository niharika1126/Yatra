import associate from "../../assets/associate.svg";

export default function Association() {
  return (
    <div className="flex flex-col items-center px-4 md:px-8 py-6">
      <h2 className="text-black text-4xl font-bold text-center mb-6">
        Our Associations
      </h2>

      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img src={associate} alt="associate" className="w-full h-full object-cover" />
        </div>

        {/* Text Section */}
        <section className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <h3 className="text-black font-bold text-2xl mb-2">United Nations</h3>
          <p className="text-black text-sm leading-relaxed mb-4">
            Partnered for global development initiatives focusing on sustainable healthcare solutions and medical research advancement. Partnered for global deveopment initiatives focusing on sustainable healthcare solutions and medical research advancement. Partnered for global development initiatives focusing on sustainable healthcare solutions and medical research advancement.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap gap-2 mb-4">
            {['Global Health', 'Research', 'Development'].map((tag) => (
              <span key={tag} className="bg-terinary/40 text-black px-3 py-1 rounded-lg text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>

           <div className="grid grid-cols-2 gap-4 mb-4">
  <div className="bg-gray-100 p-4 rounded-lg">
    <p className="font-semibold text-lg text-primary/60 text-left">Partnership Since</p>
    <p className="text-primary font-bold text-xl text-left">2020</p>
  </div>
  <div className="bg-gray-100 p-4 rounded-lg">
    <p className="font-semibold text-lg text-primary/60 text-left">Scale</p>
    <p className="text-primary font-bold text-xl text-left">15+ Projects</p>
  </div>
</div>


          <p className="text-black font-bold text-lg">Key Achievement</p>
          <p className="text-gray-700 text-base">Successfully Implemented 5 Major Healthcare Programs</p>
        </section>
      </div>

      {/* Button Section */}
      <div className="w-full max-w-6xl flex justify-end mt-6">
        <button className="bg-primary text-white px-6 py-2 rounded-lg shadow-md hover:bg-opacity-80 transition-all">
          Our Associations
        </button>
      </div>
    </div>
  );
}
