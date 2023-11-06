import { Link } from "react-router-dom";



function CartContainer() {
  return (
  <div>
  <h2>Carrito</h2>
    <Link to = "/checkout">
  <button>Finalizar compra</button>
  </Link>
  </div>
  )

}

export default CartContainer;
