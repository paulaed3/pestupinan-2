import { createContext, useState } from "react";

// Crea un contexto para el carrito de compras
export const CartContext = createContext();

// Componente que proporciona CartContext a sus hijos
function CartContextComponent({ children }) {
  // Estado para gestionar los elementos del carrito, inicializado con datos de localStorage o un array vacío
  let [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  // Función para agregar un producto al carrito
  let addToCart = (product) => {
    // Verifica si el producto ya está en el carrito
    let exist = isInCart(product.id);

    if (exist) {
      // Si el producto ya está en el carrito, actualiza su cantidad
      const newArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + product.quantity,
          };
        } else {
          return elemento;
        }
      });
      // Actualiza el estado del carrito y localStorage
      setCart(newArray);
      localStorage.setItem("cart", JSON.stringify(newArray));
    } else {
      // Si el producto no está en el carrito, agrégalo
      setCart([...cart, product]);
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
    }
  };

  // Función para verificar si un producto con un id dado está en el carrito
  let isInCart = (id) => {
    let exist = cart.some((elemento) => elemento.id === id);
    return exist;
  };

  // Función para obtener la cantidad de un producto por su id
  let getQuantityById = (id) => {
    let product = cart.find((elemento) => elemento.id === id);
    return product?.quantity;
  };

  

  // Función para limpiar todo el carrito
  let clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  // Función para eliminar un producto específico del carrito
  let deleteProduct = (id) => {
    let newArr = cart.filter((product) => product.id !== id);
    setCart(newArr);
    localStorage.setItem("cart", JSON.stringify(newArr));
  };

  // Función para calcular el precio total de todos los elementos en el carrito
  let getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);
    return total;
  };

  // Función para calcular la cantidad total de elementos en el carrito
  let totalQuantity = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);

    return total;
  };

  // Objeto de datos que contiene todas las funciones y datos del carrito
  let data = {
    cart,
    addToCart,
    getQuantityById,
    clearCart,
    deleteProduct,
    getTotalPrice,
    totalQuantity
  };

  // Retorna el proveedor de CartContext con los datos para los hijos
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}

export default CartContextComponent;
