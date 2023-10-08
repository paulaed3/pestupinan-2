import React, { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
    });

    tarea
      .then((res) => setItems(res))
      .catch((error) => console.log(error));
  }, [])

  
  return <ItemList items={items} />;
}

export default ItemListContainer;
