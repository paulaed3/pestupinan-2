import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import { getDocs, collection, query, where} from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let consulta = undefined;

    if (!categoryName) {
      consulta = productsCollection;
    } else {
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    setIsLoading(true);

    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      let arrayFiltrado = newArray.filter((elemento)=> elemento.stock > 0)
      setItems(arrayFiltrado);
      
      setIsLoading(false);
    });
  }, [categoryName]);

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <SyncLoader color="#c4b5fd" loading={isLoading} size={10} />
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
