import { useParams } from "@remix-run/react";

export default function Category() {
  const { category } = useParams();
  return <div>What a Category this is {category}</div>;
}
