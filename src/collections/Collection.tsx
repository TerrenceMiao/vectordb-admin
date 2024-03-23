import { useParams } from "react-router-dom";

export default function Collection() {
  const { collectionName } = useParams();

  return <h1>{collectionName}</h1>;
}
