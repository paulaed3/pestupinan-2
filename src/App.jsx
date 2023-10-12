import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./components/pages/Cart/CartContainer";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
            <Route path="/" element={<ItemListContainer />} />

            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            </Route>

        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
