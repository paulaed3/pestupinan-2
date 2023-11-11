import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CounterContainer from "../../common/counter/CounterContainer";

function ItemDetail({ product, onAdd, initial, showCounter }) {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="border-inherit border-2 rounded-2xl p-6 w-auto">
        <img src={product.img} alt={product.title} className="w-2/3 mx-auto" />
        <div className="">
          {initial && (
            <h5 className="mt-4 text-indigo-500	font-bold	">
              Ya tienes {initial} unidad(es) en el carrito
            </h5>
          )}

          <h2 className="text-1xl my-6">{product.title}</h2>
          <h3 className="text-2xl mb-6">${product.price}</h3>
          <h4 className="text-1xl">{product.description}</h4>

          {showCounter ? (
            <div>
              <CounterContainer
                stock={product.stock}
                onAdd={onAdd}
                initial={initial}
              />
            </div>
          ) : (
            <Link to="/cart" className="flex items-center justify-center">
              <div className=" bg-violet-400 rounded-full mt-3 p-3">
                <AiOutlineShoppingCart className=" w-8 h-auto  " />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
