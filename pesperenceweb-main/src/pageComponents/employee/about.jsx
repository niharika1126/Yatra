import React from "react";
import email from "../../assets/email.svg";
import profile from "../../assets/profile.svg";

export default function About() {
  return (
    <section className="w-mainwidth bg-gray-100 flex items-center mt-10 justify-center">
      <div className="w-mainwidth lg:px-8 rounded-lg  lg:gap-44 flex flex-col lg:flex-row">
        {/* Left Content */}

        <p className="text-gray-700 mb-10 items-center justify-center text-justify leading-relaxed">
          In the ever-evolving landscape of technology, leadership is not about
          authority—it’s about vision, execution, and the ability to inspire. As
          the Chief Technology Officer of Perseverance Envision, John Doe is the
          driving force behind our organization's strategic direction. With a
          keen eye for innovation and a deep understanding of industry trends,
          he ensures that every initiative aligns with both present needs and
          future possibilities. Under his leadership, Perseverance Envision has
          not only adapted to change but has also become a trailblazer in its
          domain. Whether it’s integrating emerging technologies, streamlining
          operational efficiencies, or fostering a research-driven culture,
          John’s influence is evident in every aspect of the organization. He
          believes that technology should be an enabler, not just an asset, and
          his decisions reflect a perfect balance between practicality and
          innovation.
          <br />
          <br />
          Great organizations are built on great teams, and John understands
          that talent flourishes in the right environment. Beyond being a
          technology leader, he is a mentor, educator, and advocate for
          continuous learning. His approach to leadership is rooted in
          empowering individuals—not by micromanaging, but by guiding,
          encouraging, and providing the right resources. Through structured
          mentorship programs, knowledge-sharing sessions, and an open-door
          leadership style, John ensures that every employee at Perseverance
          Envision feels valued, heard, and inspired. He believes that a strong
          team is not measured by individual brilliance, but by the collective
          ability to solve problems, innovate, and grow together. His emphasis
          on professional development has resulted in a workforce that is not
          just skilled but proactively engaged in shaping the organization’s
          future.
          <br /> <br />
          What truly sets John apart is his ability to see beyond the immediate
          horizon. While others focus on short-term goals, he envisions
          long-term sustainability, adaptability, and growth. His strategic
          foresight has enabled Perseverance Envision to stay ahead of the
          curve, anticipating industry shifts before they happen.
          <br />
          John is a firm believer in the power of ethical innovation—technology
          that doesn’t just generate profit but also creates value, impact, and
          meaningful progress. Whether it’s pioneering AI-driven solutions,
          optimizing workflow automation, or ensuring that the company remains
          at the forefront of research and development, his vision has
          consistently propelled the organization forward.
          <br /> <br />
          Through his wisdom, resilience, and ability to inspire, John Doe
          continues to redefine what it means to lead in the modern era. He is
          not just building an organization—he is cultivating a legacy of
          excellence, perseverance, and limitless possibilities.
        </p>

        {/* Right Content */}
        <div className="flex flex-row lg:flex-col gap-16 lg:gap-10 items-center justify-center ">
          <img
            src={profile}
            alt="Employee"
            className="w-22 h-22 lg:w-72 hover:scale-105"
          />
          <img
            src={email}
            alt="Email Icon"
            className="w-22 h-22 lg:w-72 hover:scale-105 "
          />
        </div>
      </div>
    </section>
  );
}
