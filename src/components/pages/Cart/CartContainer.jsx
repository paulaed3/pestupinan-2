import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

function CartContainer() {
  const { cart, clearCart } = useContext(CartContext);
  return (
    <div className="max-w-4xl mx-auto ">
      <h2 className="text-2xl font-bold my-6">Carrito</h2>
      {cart.map((product) => (
        <div
          key={product.id}
          className="flex border rounded-md p-4 mb-4 w-10/12"
        >
          <img className="rounded-lg w-40 h-40 " src={product.img} alt="" />
          <div className="flex-gap ml-8">
            <h2 className="text-xl font-semibold mb-3">{product.title}</h2>
            <h2 className="text-xl font-semibold mb-3">{product.price}</h2>
            <h2 className="text-gray-600">Cantidad: {product.quantity}</h2>
          </div>
        </div>
      ))}

      <div>
        <h3 className="mb-10 font-extrabold	">El total del carrito es: {}</h3>
      </div>
      <div className="flex justify-center items-center space-x-11">
        {" "}
        <Link to="/checkout">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ">
            Finalizar compra
          </button>
        </Link>
        <button
          className="bg-rose-400 hover:bg-rose-600 text-white font-semibold py-2 px-4 rounded "
          onClick={clearCart}
        >
          Vaciar Carrito
        </button>
      </div>
    </div>
  );
}

export default CartContainer;
