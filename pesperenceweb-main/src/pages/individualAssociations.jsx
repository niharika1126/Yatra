import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AssociatesCard from "../components/associationsCard/associationsCard";
import Navbar from "../components/navbar/navbar";
import AssociationData from "../pageComponents/individualAssociationsPage/associationData";
import Header from "../pageComponents/individualAssociationsPage/header";
import { fetchAssociationsById } from "../store/redux/slices/associationsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function IndividualAssociations() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.associationsById
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchAssociationsById(id));
    }
  }, [dispatch, id]);
  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  return (
    <section className="w-full h-full bg-highlight_background flex flex-col items-center gap-8 overflow-x-hidden scrollbar-hide ">
      {/* Navbar */}
      <Navbar />
      <main className="w-full mt-16 flex flex-col items-center gap-24">
        <Header />
        <div className="w-mainwidth">
          {data ? (
            <AssociatesCard key={data._id} association={data} />
          ) : (
            <p>No associations found.</p>
          )}
        </div>
        <AssociationData data={data?.paragraphs} />
      </main>
    </section>
  );
}
