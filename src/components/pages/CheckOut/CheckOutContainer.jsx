import React, { useState, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { collection, addDoc , updateDoc , doc } from "firebase/firestore";
import { Link } from "react-router-dom";



function CheckOutContainer() {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    Telefono: "",
    email: "",
  });

  const { cart, getTotalPrice , clearCart} = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
 
  const total = getTotalPrice();

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let order = {
      buyer: userInfo,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    cart.forEach((elemento) => {
      updateDoc(doc(db, "products", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });

    clearCart();
  };

  return (
<div>
  {orderId ? (
    <div className="border w-6/12 mx-auto my-20 p-6 flex items-center justify-center">
      <h2 className="text-lg mb-4">
        Gracias por su compra, su N° de compra es {orderId}
      </h2>
      <Link
        to="/"
        className="bg-violet-400 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
      >
        Seguir comprando
      </Link>
    </div>

      ) : (
        <div className="flex justify-center items-center mt-10">
          <div className="bg-gray-100 p-6 rounded-md w-10/12">
            <h2 className="text-lg font-bold mb-4">
              Ingresa los datos de facturación
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="nombre"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Telefono"
                >
                  Teléfono
                </label>
                <input
                  type="number"
                  name="Telefono"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Comprar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckOutContainer;