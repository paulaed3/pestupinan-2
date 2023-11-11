import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextComponent({ children }) {
  let [cart, setCart] = useState( JSON.parse(localStorage.getItem("cart")) || [] );
  let addToCart = (product) => {
    let exist = isInCart(product.id);
    if (exist) {
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
      setCart(newArray);
      localStorage.setItem("cart", JSON.stringify(newArray) )

    } else {
      setCart([...cart, product]);
      localStorage.setItem("cart", JSON.stringify([...cart, product]) )

    }
  };

  let isInCart = (id) => {
    let exist = cart.some((elemento) => elemento.id === id);
    return exist;
  };

  let getQuantityById = (id) => {
    let product = cart.find((elemento) => elemento.id === id);
    return product?.quantity;
  };

  let clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart")
  };

  let deleteProduct = (id) => {
    let newArr = cart.filter((product) => product.id !== id);
    setCart(newArr);
    localStorage.setItem("cart", JSON.stringify( newArr ) )
  };

  let getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);
    return total;
  };

  let totalQuantity = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);

    return total;
  };
  let data = {
    cart,
    addToCart,
    getQuantityById,
    clearCart,
    deleteProduct,
    getTotalPrice,
    totalQuantity
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}

export default CartContextComponent;
