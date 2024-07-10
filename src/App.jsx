import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/Router/AppRouter";
import CartContextComponent from "./context/CartContext";
import ReactGA from 'react-ga';



function App() {

    ReactGA.initialize('G-YEVPQS1MPE');
    ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <BrowserRouter>
      <CartContextComponent>
        <AppRouter />
      </CartContextComponent>
    </BrowserRouter>
  );
}

export default App; 
