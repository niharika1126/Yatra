import globe from "../../assets/globe.svg";
import microscope from "../../assets/microscope.svg";
export default function AssociationData({ paragraphs }) {
  console.log();
  return (
    <section className="w-mainwidth flex flex-col items-center gap-8">
      <div className="w-full flex flex-col-reverse items-center gap-4 lg:flex-row lg:justify-between lg:gap-0">
        <p className="w-full lg:w-1/2 text-pretty text-justify">
          At Perseverance Envision, innovation is not just about technology—it
          is about human impact. In partnership with the World Health
          Organization (WHO), we have launched a dedicated initiative to develop
          a cure for Autosomal Dominant Polycystic Kidney Disease (ADPKD), a
          genetic disorder that affects over 12.5 million people worldwide.
          ADPKD is the fourth leading cause of kidney failure, with nearly 50%
          of affected individuals progressing to end-stage renal disease (ESRD)
          by the age of 60. Without intervention, most patients require lifelong
          dialysis or a kidney transplant, yet only one in four patients
          receives a transplant due to global organ shortages. For those left
          untreated, the disease leads to a slow and painful decline, with
          complications including aneurysms, heart disease, and eventual
          multi-organ failure.
        </p>
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-4">
          <img src={globe} />
          <div className="flex flex-col items-center gap-2 ml-8">
            <p className="font-bold ">12.5+ Million</p>
            <p className="text-sm font-semibold italic">
              Million People Worldwide
            </p>
          </div>
        </div>
      </div>
      <p className="w-full text-pretty text-justify">
        For us, this fight is deeply personal. One of our directors lives with
        ADPKD, making the pursuit of a cure not just a scientific challenge but
        a mission with real urgency. Their story represents millions who face
        the progressive loss of kidney function, relentless pain, and a
        diminished quality of life. The unpredictability of the disease means
        that even those diagnosed early have limited options, with only one
        FDA-approved treatment available, which merely slows but does not stop
        disease progression.
      </p>
      <div className="w-full flex flex-col-reverse items-center gap-4 lg:flex-row lg:justify-between lg:gap-0">
        <p className="w-full lg:w-1/2 text-pretty text-justify">
          At Perseverance Envision, innovation is not just about technology—it
          is about human impact. In partnership with the World Health
          Organization (WHO), we have launched a dedicated initiative to develop
          a cure for Autosomal Dominant Polycystic Kidney Disease (ADPKD), a
          genetic disorder that affects over 12.5 million people worldwide.
          ADPKD is the fourth leading cause of kidney failure, with nearly 50%
          of affected individuals progressing to end-stage renal disease (ESRD)
          by the age of 60. Without intervention, most patients require lifelong
          dialysis or a kidney transplant, yet only one in four patients
          receives a transplant due to global organ shortages. For those left
          untreated, the disease leads to a slow and painful decline, with
          complications including aneurysms, heart disease, and eventual
          multi-organ failure.
        </p>
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-4">
          <img src={microscope} />
          <div className="flex flex-col items-center gap-2 ml-8">
            <p className="font-bold ">12.5+ Million</p>
            <p className="text-sm font-semibold italic">
              Million People Worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
