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

  const [maxQuantity, setMaxQuantity] = useState(0);

  let { id } = useParams();

  let { addToCart, getQuantityById } = useContext(CartContext);
  let quantity = getQuantityById(id);

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

  // calculate max stock with cart
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const productInStoreCart =
      storedCart.find(
        (productStore) => productStore.id === productSelected.id
      ) || {};
    const { quantity = 0 } = productInStoreCart;
    const maxToAdd = Math.max(0, productSelected.stock - quantity);
    if (maxToAdd === 0) setShowCounter(false);
    else setMaxQuantity(maxToAdd);
  }, [productSelected]);

  return (
    <ItemDetail
      showCounter={showCounter}
      product={productSelected}
      onAdd={onAdd}
      initial={quantity}
      initialCounter={quantity}
      maxQuantity={maxQuantity}
    />
  );
}

export default ItemDetailContainer;
