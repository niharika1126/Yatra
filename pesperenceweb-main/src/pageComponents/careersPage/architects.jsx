import Group23 from "../../assets/Group23.svg";


export default function Architects() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-4 xl:gap-34 w-mainwidth">
      {/* Image Section */}
      <img
        src={Group23}
        alt="Group23"
        className="w-full max-w-md h-auto md:max-w-lg lg:max-w-xl xl:max-w-xl bg-cover"
      />

      {/* Text Section */}
      <section className="w-full text-white py-10 px-4 md:px-8 flex flex-col items-center justify-center gap-6 md:w-1/2">
        <p className="text-black text-center md:text-left">
          <span className="font-bold text-5xl">
            Join the Architects of <br />Tomorrow
          </span>
          <br />
          <br />
          At Persperence, we believe in empowering individuals who are driven by curiosity, innovation, and a commitment to advancing knowledge. Careers here go beyond traditional roles, offering opportunities to work on groundbreaking research projects, collaborate with global thought leaders, and contribute to initiatives that make a measurable impact on the world. Whether you're a seasoned researcher, an ambitious graduate, or a visionary professional, we provide a platform to explore your potential and transform ideas into reality. Together, we build a future shaped by ingenuity and purpose.
        </p>
      </section>
    </div>
  );
}
