import { ShoppingList } from "@/model";
import { useEffect, useState } from "react";

const ListsPage = () => {
  // const [data, setData] = useState<ShoppingList[]>([]);
  const data: any[] = [];

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/lists")
  //     .then((response) => response.json())
  //     .then(setData);
  // }, []);

  if (!data || !data.length) {
    return <div>There are no lists!!!!!</div>;
  }

  return (
    <div>
      I am the lists page!!
      {data.map((list, index) => (
        <li key={index}>
          <h3>{list.name}</h3>
        </li>
      ))}
    </div>
  );
};

export default ListsPage;
