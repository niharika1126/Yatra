import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAssociations } from "../../store/redux/slices/associationsSlice";
import AssociatesCard from "../../components/associationsCard/associationsCard";

export default function AssociatesCards() {
  const dispatch = useDispatch();
  const { allData, loading, error } = useSelector(
    (state) => state.associationsById
  );

  useEffect(() => {
    dispatch(fetchAllAssociations());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <section className="w-mainwidth flex flex-col items-start gap-6">
      {allData?.length > 0 ? (
        allData?.map((association) => (
          <AssociatesCard key={association._id} association={association} />
        ))
      ) : (
        <p>No associations found.</p>
      )}
    </section>
  );
}
