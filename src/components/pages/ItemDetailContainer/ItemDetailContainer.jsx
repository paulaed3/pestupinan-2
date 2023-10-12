import React, { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


function ItemDetailContainer() {
  const [productSelected, setProductSelected] = useState({});
  let  {id}= useParams ();


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
    console.log("Se agrego al carrito" , productSelected)
    console.log(cantidad)

    let obj = { 
      ...productSelected,
      quantity: cantidad,

    }

    console.log("Este es el producto que se agrega" ,  obj)
  }

  return <ItemDetail product={productSelected} onAdd={onAdd} />;
}

export default ItemDetailContainer;
