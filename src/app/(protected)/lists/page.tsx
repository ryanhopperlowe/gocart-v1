import { ShoppingList } from "@/model";

export default async function ListsPage() {
  const request = await fetch("http://localhost:3000/api/lists");
  const data: ShoppingList[] = await request.json();

  if (!data || !data.length) {
    return <div>There are no lists!</div>;
  }

  return (
    <div>
      I am the lists page!!
      {data.map((list) => (
        <li>
          <h3>{list.name}</h3>
        </li>
      ))}
    </div>
  );
}
