import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/Router/AppRouter";
import CartContextComponent from "./context/CartContext";
import ReactGA from "react-ga4";

ReactGA.initialize("G-YEVPQS1MPE");
ReactGA.send("pageview");
function App() {
  return (
    <BrowserRouter>
      <CartContextComponent>
        <AppRouter />
      </CartContextComponent>
    </BrowserRouter>
  );
}

export default App;
