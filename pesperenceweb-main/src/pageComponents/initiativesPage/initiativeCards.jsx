import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllInitiatives } from "../../store/redux/slices/initiativesSlice.jsx";
import InitiativeCard from "../../components/initiativeCard/initiativeCard.jsx";
export default function InitiativeCards() {
  const dispatch = useDispatch();
  const { allData, loading, error } = useSelector(
    (state) => state.initiativesById
  );

  useEffect(() => {
    dispatch(fetchAllInitiatives());
  }, [dispatch]);

  if (loading) return <p>Loading initiatives...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="w-mainwidth flex flex-col items-start gap-6">
      {allData?.length > 0 ? (
        allData?.map((initiative) => (
          <InitiativeCard key={initiative._id} initiative={initiative} />
        ))
      ) : (
        <p>No initiatives found.</p>
      )}
    </section>
  );
}
