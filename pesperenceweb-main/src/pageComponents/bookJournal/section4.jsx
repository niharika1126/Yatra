import React from "react";

export default function Section4() {
  return (
    <section className=" px-6 mb-6 text-base text-center text-justify w-11/12 lg:w-9/12">
      <div className="flex flex-col gap-4 ">
        <p>
          The creation of this journal is driven by a distinguished editorial
          board, featuring experts from top global universities, leading
          corporations, and cutting-edge AI systems. Our team ensures that every
          article is meticulously curated, fact-checked, and refined to uphold
          the highest standards of research communication.
        </p>
        <div>
          <h1 className="font-bold text-2xl">Editorial Team:</h1>
          <ul className="list-disc list-inside">
            <li>
              <span className="font-bold">Sarveh Mishra</span> - Senior Research
              , Harvard University
            </li>
            <li>
              <span className="font-bold">Sarthak Gandhi</span> - AI &
              Innovation Specialist, Google DeepMind
            </li>
            <li>
              {" "}
              <span className="font-bold">Vishal Gupta </span>- Cheif Science
              Editor Stanford University
            </li>
            <li>
              <span className="font-bold">Mohammed Abad </span>- Lead Policy
              Analyst,Oxford University
            </li>
            <li>
              <span className="font-bold">Emily Richardson </span>- Senior
              Editor, MIT Media Lab
            </li>
            <li>
              {" "}
              <span className="font-bold">Takashi Nakamura</span>- AI & Data
              Science Researcher, University of Tokyo
            </li>
            <li>
              {" "}
              <span className="font-bold">Elena Petrova</span> - Technology
              Ethics Expert,ETH Zurich
            </li>
            <li>
              {" "}
              <span className="font-bold">Daniel Carter</span> - R&D Strategist,
              Microsoft Research
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-2xl">
            AI & Computational Collaboration:
          </h1>
          <p>
            In addition to human expertise, our editorial process is augmented
            by state-of-the-art AI models, both internally developed and
            externally integrated. These models assist in data validation,
            language refinement, plagiarism detection, and predictive analytics,
            ensuring precision and quality in every publication. By blending
            human intellect and AI innovation, our journal serves as a trusted
            knowledge hub, delivering insightful, impactful, and rigorously
            vetted content to our readers.
          </p>
        </div>
      </div>
    </section>
  );
}
