import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Nuevo estado para la carga

  const { categoryName } = useParams();

  useEffect(() => {
    setIsLoading(true); // Indicar que se está cargando

    const productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltrados : products);
      },800);
    });

    tarea
      .then((res) => {
        setItems(res);
        setIsLoading(false); // Indicar que la carga ha terminado
      })
      .catch((error) => console.log(error));
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
