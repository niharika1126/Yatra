import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAllCareers } from "../../store/redux/slices/careersSlice";
import careerLogo from "../../assets/careerLogo.svg";

export default function JobTitle() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allCareers = [], loading, error } = useSelector((state) => state.careers || {}); // Ensuring careers exist

  useEffect(() => {
    dispatch(fetchAllCareers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="flex flex-col w-mainwidth items-center justify-center text-center py-6 px-4">
      <h2 className="text-black font-bold text-4xl">Career Openings</h2>
      {allCareers.length > 0 ? (
        allCareers.map((career) => (
          <div
            key={career.id}
            className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-6xl bg-white shadow-lg rounded-lg p-4 relative mt-6"
          >
            <section className="w-full text-black py-4 px-2 md:px-6 flex flex-col items-center md:items-start justify-center gap-4 md:w-1/2">
              <p className="text-black font-bold text-4xl">{career.role}</p>
              <p className="text-center md:text-left">{career.description}</p>
              <p className="text-black font-bold mt-2">
                {career.location} | Job No. {career.jobNo} | {career.type}
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-4 w-full justify-between">
                <button
                  className="bg-secondary text-white p-3 rounded-lg flex-1 font-bold"
                  onClick={() => navigate(`/job/${career.id}`)}
                >
                  View Details
                </button>
                <button className="bg-highlight_background text-black p-3 rounded-lg flex-1 font-bold">
                  Share
                </button>
              </div>
              <p className="text-black font-bold mt-2 text-left w-full">
                Please be informed that at any given point in time, you can only have one "Active" application.
              </p>
            </section>
            <div className="flex flex-col items-center w-full md:w-1/2">
              <img
                src={careerLogo}
                alt="career logo"
                className="w-full max-w-lg h-auto md:max-w-xl lg:max-w-2xl xl:max-w-5xl bg-cover"
              />
            </div>
          </div>
        ))
      ) : (
        <p className="text-red-500">No careers available.</p>
      )}
    </div>
  );
}
