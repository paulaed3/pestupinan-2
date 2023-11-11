import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
function ItemDetailContainer() {
  const [productSelected, setProductSelected] = useState({});
  const [showCounter, setShowCounter] = useState(true);
  let { id } = useParams();

  let { addToCart, getQuantityById } = useContext(CartContext);

  let totalQuantity = getQuantityById(id);
  console.log(totalQuantity);

  useEffect(() => {
    let itemCollection = collection(db, "products");

    let refDoc = doc(itemCollection, id);

    getDoc(refDoc).then((res) => {
      setProductSelected({ id: res.id, ...res.data() });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let item = {
      ...productSelected,
      quantity: cantidad,
    };

    addToCart(item);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "El producto fue agregado al carrito",
      showConfirmButton: false,
      timer: 1000,
    });

    setShowCounter(false);
  };

  return (
    <ItemDetail
      showCounter={showCounter}
      product={productSelected}
      onAdd={onAdd}
      initial={totalQuantity}
    />
  );
}

export default ItemDetailContainer;
