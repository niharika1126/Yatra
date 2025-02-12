import Group23 from "../../assets/Group23.svg";

export default function Future() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-4 xl:gap-34 w-mainwidth">
      {/* Image Section */}
      <img
        src={Group23}
        alt="Future Collaboration"
        className="w-full max-w-md h-auto md:max-w-lg lg:max-w-xl xl:max-w-xl bg-cover"
      />

      {/* Text Section */}
      <section className="w-full text-white py-10 px-4 md:px-8 flex flex-col items-center justify-center gap-6 md:w-1/2">
        <p className="font-bold text-5xl text-black text-center md:text-left">
          Engineering the Future <br/>Through Innovation, Research, and Collaboration
        </p>
        <p className="text-black text-center md:text-left">
          We integrate research and education, collaborating with institutions, supporting researchers with grants, 
          conducting projects, and delivering impactful results for innovation and scientific progress worldwide.
        </p>
      </section>
    </div>
  );
}
