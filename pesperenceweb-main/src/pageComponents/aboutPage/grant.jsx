import grant from "../../assets/grant.svg";

export default function Grant() {
  return (
    <div className="flex flex-col  w-mainwidth items-center justify-center text-center w-mainwidth py-10 px-4">
      {/* Heading */}
      <h2 className="text-black text-5xl font-bold mb-6">Grants</h2>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-6xl bg-white shadow-xl rounded-lg p-6">
        {/* Text Section */}
        <section className="w-full text-black py-6 px-4 md:px-8 flex flex-col items-center md:items-start justify-center gap-6 md:w-1/2">
          <p className="text-center md:text-left">
            Our grants program empowers scientific research worldwide, supporting researchers from universities, college students, professors, and independent innovators across more than 117 countries. By providing financial resources and collaborative opportunities, we aim to accelerate groundbreaking discoveries, foster innovation, and bridge knowledge gaps. Whether advancing academic pursuits or addressing critical global challenges, our grants are designed to support researchers at every level. Together, we drive progress and contribute to a thriving global research community dedicated to shaping a better future.
          </p>
        </section>

        {/* Image Section */}
        <div className="flex flex-col items-center w-full md:w-1/2">
          <img
            src={grant}
            alt="Grant"
            className="w-full max-w-lg h-auto md:max-w-xl lg:max-w-2xl xl:max-w-4xl bg-cover"
          />
        </div>
      </div>

      {/* Grant Application Button (Placed After Main Content) */}
      <div className="w-full max-w-6xl flex justify-end mt-4">
        <button className="bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-opacity-80 transition-all">
          Grant Application
        </button>
      </div>
    </div>
  );
}
