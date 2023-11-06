import CartContainer from "../pages/Cart/CartContainer";
import CheckOutContainer from "../pages/CheckOut/CheckOutContainer";
import ItemDetailContainer from "../pages/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../pages/ItemListContainer/ItemListContainer";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },

  {
    id: "category",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },

  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },

  {
    id: "detalle",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },

  {
    id: "checkout",
    path: "/checkout",
    Element: CheckOutContainer,
  },

];

