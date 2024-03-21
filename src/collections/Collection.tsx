import { useLoaderData } from "react-router-dom";

interface LoaderData {
  collectionName: string;
 }

export default function Collection() {
  const { collectionName } = useLoaderData() as LoaderData;

  console.log(JSON.stringify(collectionName));

  return <h1>{collectionName}</h1>;
}
