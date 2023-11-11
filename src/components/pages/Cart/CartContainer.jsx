import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext"; 
import Swal from "sweetalert2";
import { AiOutlineDelete } from "react-icons/ai";

function CartContainer() {
  const { cart, clearCart, deleteProduct, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  let clearCartWithAlert = () => {
    Swal.fire({
      title: "¿Quieres vaciar tu carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sí, vaciar",
      denyButtonText: "No, quiero mis productos",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Tu carrito ahora está vacío", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Puedes seguir revisando tus productos", "", "warning");
      }
    });
  };

  let deleteProductWithAlert = (productId) => {
    Swal.fire({
      title: "¿Quieres eliminar el producto?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sí, eliminar",
      denyButtonText: "No, quiero mis productos",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(productId);
        Swal.fire("Producto Eliminado", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Puedes seguir revisando tus productos", "", "warning");
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold my-6">Carrito</h2>

      {cart.map((product) => (
        <div
          key={product.id}
          className="flex border rounded-md p-4 mb-4 w-10/12 mx-auto"
        >
          <img className="rounded-lg w-40 h-40" src={product.img} alt="" />
          <div className="ml-8">
            <h2 className="text-xl font-semibold mb-3">{product.title}</h2>
            <h2 className="text-xl font-semibold mb-3">${product.price}</h2>
            <h2 className="text-gray-600">Cantidad: {product.quantity}</h2>
            <button
              className="border rounded-sm mt-4"
              onClick={() => deleteProductWithAlert(product.id)}
            >
              <AiOutlineDelete className="w-6 h-auto text-rose-600	" />
            </button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <div>
          <h3 className="mb-10 font-black">
            El total de tu compra es: ${total}
          </h3>
          <div className="flex justify-center items-center space-x-11">
            <Link to="/checkout">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                Finalizar compra
              </button>
            </Link>
            <button
              className="bg-rose-400 hover-bg-rose-600 text-white font-semibold py-2 px-4 rounded"
              onClick={clearCartWithAlert}
            >
              Vaciar Carrito
            </button>
          </div>

          
        </div>
      )}
    </div>
  );
}

export default CartContainer;


