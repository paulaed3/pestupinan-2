import React, { useContext, useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

function ItemDetailContainer() {
  const [productSelected, setProductSelected] = useState({});
  let { id } = useParams();

  let { addToCart, getQuantityById } = useContext(CartContext);

  let totalQuantity = getQuantityById(+id);
  console.log(totalQuantity);

  useEffect(() => {
    let producto = products.find((product) => product.id === +id);
    const getproduct = new Promise((resolve, reject) => {
      resolve(producto);
    });

    getproduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id]);

  const onAdd = (cantidad) => {
    let item = {
      ...productSelected,
      quantity: cantidad,
    };

    addToCart(item);
  };

  return (
    <ItemDetail
      product={productSelected}
      onAdd={onAdd}
      initial={totalQuantity}
    />
  );
}

export default ItemDetailContainer;
