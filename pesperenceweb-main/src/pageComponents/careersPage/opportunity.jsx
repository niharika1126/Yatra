import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCareers } from "../../store/redux/slices/careersSlice"; // Import the action
import arrow from "../../assets/arrow.svg";

export default function Opportunity() {
  const dispatch = useDispatch();
  const { allData, loading, error } = useSelector((state) => state.careersById);

  useEffect(() => {
    dispatch(fetchAllCareers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="relative flex flex-col items-center md:items-start w-mainwidth ml-6">
      {/* Title and Arrow Icon */}
      <div className="flex justify-between items-center w-full">
        <p className="text-important_text text-center md:text-left text-2xl font-bold mb-6">
          Available Opportunities
        </p>
        <img src={arrow} alt="Arrow Icon" className="w-12 h-12 md:w-16 md:h-16" />
      </div>

      {/* Career Listings */}
      <div className="flex flex-col md:flex-row gap-6">
        {allData?.length > 0 ? (
          allData.map((career) => (
            <div
              key={career._id}
              className="bg-white shadow-xl rounded-lg p-6 w-full md:w-1/2 flex flex-col justify-between"
            >
              <p className="text-primary font-bold text-lg mb-2">{career.title}</p>
              <p className="text-lightedtext mb-2">{career.description}</p>
              <p className="text-secondary font-bold mb-2">Salary: {career.salary}</p>
              <p className="font-bold mb-4">{career.jobType}</p>
              <div className="flex justify-end">
                <button className="bg-secondary text-white px-4 py-2 rounded-lg">
                  Apply Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No opportunities found.</p>
        )}
      </div>
    </div>
  );
}
