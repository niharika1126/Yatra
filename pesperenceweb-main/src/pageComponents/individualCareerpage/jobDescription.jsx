import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchIndividualCareer } from "../../store/redux/slices/individualCareersSlice";

export default function JobDescription() {
  const { id } = useParams(); // Get job ID from URL
  const dispatch = useDispatch();
  const { data: job, loading, error } = useSelector(
    (state) => state.individualCareer || {} // Ensure it doesn't throw an error if state is undefined
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchIndividualCareer(id));
    }
  }, [dispatch, id]);

  if (loading) return <p className="text-center">Loading job details...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (!job) return <p className="text-center">No job details found.</p>;

  return (
    <section className="w-mainwidth flex flex-col items-center text-center py-6 px-4">
      <h2 className="text-black font-bold text-4xl">Job Description</h2>
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8 mt-8 mx-auto">
        <ul className="text-black text-lg list-none space-y-3">
          <p><strong>Project Role:</strong> {job.role}</p>
          <p><strong>Project Role Description:</strong> {job.description}</p>
          <p><strong>Must have skills:</strong> {job.mustHaveSkills || "N/A"}</p>
          <p><strong>Good to have skills:</strong> {job.goodToHaveSkills || "N/A"}</p>
          <p><strong>Minimum Experience Required:</strong> {job.experience} years</p>
          <p><strong>Educational Qualification:</strong> {job.education}</p>
        </ul>
        <p className="text-black font-bold text-lg mt-6">
          {job.location} | Job No. {job.jobId} | {job.jobType}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-secondary text-white px-8 py-4 rounded-lg font-bold shadow-md hover:bg-opacity-80 transition-all">
            Apply Now
          </button>
          <button className="bg-highlight_background text-black px-8 py-4 rounded-lg font-bold shadow-md">
            Share
          </button>
        </div>
        <p className="text-black font-bold text-primary mt-6">
          Please be informed that at any given point in time, you can only have one "Active" application.
        </p>
      </div>
    </section>
  );
}
