import { useParams } from "react-router-dom";
import Distillery from "./";

const DistilleryFromQuery = ({  allDistilleries }) => {
  const { id } = useParams();
  const distillery = allDistilleries.find((h) => h.id === parseInt(id));

  if (!distillery) return <div>Distillery not found.</div>;
  return <Distillery distillery={distillery}></Distillery>;
};

export default DistilleryFromQuery;
